import * as bodyParser from "body-parser";
import * as crypto from "crypto";
import * as express from "express";
import * as http from "http";
import { MessengerProfile, Webhook } from "../fb-api";
import { logger } from "../logger";
import { BotConfig } from "../utils/bot-config";
import { Chat } from "./chat";
import { ChatExtension } from "./chat-extension";
import { ExtensionService } from "./extension-service";
import { ChatService } from "./chat-service";
import { PingService } from "./ping-service";
import { VerificationService } from "./verification-service";

/**
 * Represents a bot server listening for webhook requests.
 */
export class BotServer {

    private static readonly RE_ESCAPE = RegExp("[" + "-[]/{}()*+?.\\^$|".split("").join("\\") + "]", "g");

    /**
     * Normalize a port into a number, string, or false. In some environments the port can be named pipe.
     */
    private static normalizePort(value: number | string): number | string | boolean {
        const port: number = (typeof value === "string") ? parseInt(value, 10) : value;
        return isNaN(port) ? value : (port >= 0 ? port : false);
    }

    /**
     * Escapes regexp special characters.
     */
    private static regExpEscape(text: string): string {
        return text.replace(BotServer.RE_ESCAPE, "\\$&");
    }

    private app: express.Application;
    private server: http.Server;

    private chatService: ChatService;
    private extensions: ExtensionService;
    private profileApi: MessengerProfile.Api;

    /**
     * Creates an instance of BotServer.
     *
     * @param {BotConfig} config - bot configuration object
     */
    constructor(private config: BotConfig) {

        config.webhookPath = config.webhookPath || "/webhook";
        config.extensionsPath = config.extensionsPath || "/ext";
        config.name = config.name || "noname";

        logger.level = config.logLevel || logger.level;

        this.profileApi = new MessengerProfile.Api(this.config.accessToken);

        // create express.js application
        this.app = express();

        // prepare ejs template engine for use by Message Extensions
        this.app.set("view engine", "ejs");

        // use the 'public' folder for static assets
        this.app.use("/static", express.static("public"));

        // parse incoming POST request bodies and make them available under the req.body property
        // every incoming POST request will be verified according to https://developers.facebook.com/docs/messenger-platform/webhook-reference#security
        this.app.use(bodyParser.json({ verify: this.verifyRequest }));

        // parse incoming GET request (used during webhook verification)
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // install service for handling verification request
        this.app.use(this.config.webhookPath, new VerificationService(this.config.verifyToken).getRouter());
        logger.info("VerificationServices has been attached to", this.config.webhookPath);

        // install service for handling webhook requests
        this.chatService = new ChatService(this.config.accessToken);
        this.app.use(this.config.webhookPath, this.chatService.getRouter());
        logger.info("ResponderService has been attached to", this.config.webhookPath);

        // install service for handling Message Extensions requests
        this.extensions = new ExtensionService();
        this.app.use(this.config.extensionsPath, this.extensions.getRouter());
        logger.info("ExtensionService has been attached to", this.config.extensionsPath);

        // install service for handling ping requests
        this.app.use(this.config.pingPath, new PingService().getRouter());
        logger.info("PingService has been attached to", this.config.pingPath);
    }

    /**
     * Starts the bot server.
     */
    public start(): void {

        const port = BotServer.normalizePort(this.config.port || process.env.PORT || 8080);

        this.app.set("port", port);

        this.server = http.createServer(this.app)

        .on("error", (error: NodeJS.ErrnoException) => {

            const bind = (typeof port === "string") ? "pipe " + port : "port " + port;

            switch (error.code) {
                case "EACCES":
                    throw new Error(`BotServer[${this.config.name}] not started. ${bind} requires elevated privileges.`);

                case "EADDRINUSE":
                    throw new Error(`BotServer[${this.config.name}] not started. ${bind} is already in use.`);

                default:
                    throw error;
            }
        })

        .on("listening", () => {
            // only for showing the "listening" message
            const addr = this.server.address();
            const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
            logger.info(`BotServer[${this.config.name}] is listening on ${bind}`);
        })

        .listen(port) as http.Server;
    }

    /**
     * Stops the bot server.
     */
    public stop(): void {
        this.server.close();
    }

    /**
     * A convenient method to subscribe to specific <i>hooks</i> that can be found within a received
     * <i>text message</i>. The hooks can be specified as a command or using a <i>regular expression</i>.
     * When the server receives a text message, it test the content for specified hooks. If a match is
     * found the server executes the subscribed callback. Commands are considered as case-insensitive.
     * The callbacks installed using the <code>BotServer.hear</code> method are executed BEFORE
     * callbacks installed using the <code>on()</code> method.
     * The callback is executed with the parameters: chat: Chat, text: string, matches: string[].
     * <b>Note</b>: the <code>hear()</code> method listens only for text messages.
     * <b>Note</b>: the callback is not executed when a received text message matches the hook but
     * the message is part of an active conversation.
     *
     * @param {(RegExp | string | Array<RegExp | string>)} hooks - a string, a regexp or an array of both strings and regexps
     * @param {(chat: Chat, text: string, matches: string[]) => void} callback - a callback to be executed if a message matches one of the hooks
     * @returns {this} - for chaining
     */
    public hear(hooks: RegExp | string | Array<RegExp | string>, callback: (chat: Chat, text: string, matches: string[]) => void): this {

        let regexps: RegExp[];

        if (typeof hooks === "string") {

            // create new case-insensitive regexp based on the given keyword
            regexps = [new RegExp(`^${BotServer.regExpEscape(hooks)}$`, "i")];

        } else if (Array.isArray(hooks)) {

            regexps = hooks.map((hook: RegExp | string) => {
                return typeof hook === "string" ? new RegExp(`^${BotServer.regExpEscape(hook)}$`, "i") : hook;
            });

        } else {

            regexps = [hooks];
        }

        this.chatService.hear(regexps, callback);

        return this;
    }

    /**
     * Subscribe to an <i>event</i> emitted when a webhook request is received.
     * The callback is executed with the parameters: chat: Chat, data: any.
     *
     * @param {Webhook.Event} event - an event for which the callback will be executed
     * @param {(...args: any[]) => void} callback - a callback function
     * @returns {this} - for chaining
     */
    public on(event: Webhook.Event, callback: (...args: any[]) => void): this;

    /**
     * Subscribe to an <i>identified event</i>. An identified event is specified, in addition to its
     * type, with an ID. This feature is available for events capable of carrying data such as
     * POSTBACK or PERSISTENT_MENU_ITEM.
     * The callback is executed with the parameters: chat: Chat, data: any.
     *
     * @param {Webhook.Event} event - an event for which the callback will be executed
     * @param {string} id - an identification of the event
     * @param {(...args: any[]) => void} callback - a callback function
     * @returns {this}
     */
    public on(event: Webhook.Event, id: string, callback: (...args: any[]) => void): this;

    /* implementation of the overloaded method on() - see 2 overloads above */
    public on(event: Webhook.Event, idOrCallback: string | ((...args: any[]) => void), callback?: (...args: any[]) => void): this {

        let extEvent: string = event;

        if (typeof idOrCallback === "string") {
            extEvent += ":" + idOrCallback;
        } else {
            callback = idOrCallback;
        }

        logger.info("subscribing to event", extEvent);

        this.chatService.on(extEvent, callback);
        return this;
    }

    /**
     * Install a Chat Extension.
     * (https://developers.facebook.com/docs/messenger-platform/guides/chat-extensions)
     *
     * @param {ChatExtension} extension
     * @returns {this}
     */
    public addChatExtension(extension: ChatExtension): this {
        this.extensions.addExtension(extension);
        return this;
    }

    /**
     * Verify incoming webhook request.
     * (https://developers.facebook.com/docs/messenger-platform/webhook-reference#security)
     *
     * Must be an arrow function because it is called as calback and needs to acceess this.config
     */
    private verifyRequest: (req: express.Request, res: express.Response, buf: Buffer, encoding: string) => void = (req: express.Request, res: express.Response, buf: Buffer, encoding: string) => {

        const [algorithm, signature] = ((req.headers["x-hub-signature"] as string) || "").split("=");

        if (!signature) {
            throw new Error("couldn't validate the request signature, the 'x-hub-signature' header not found");
        }

        if (signature !== crypto.createHmac(algorithm, this.config.appSecret).update(buf).digest("hex")) {
            throw new Error("request's signature is not valid");
        }

        logger.debug("request signature verified");
    }
}
