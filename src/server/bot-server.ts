import * as bodyParser from "body-parser";
import * as express from "express";
import { Request, Response } from "express";
import * as crypto from "crypto";
import * as http from "http";
import { VerificationService } from "./verification-service";
import { ResponderService } from "./responder-service";
import { ExtensionService } from "./extension-service";
import { MessengerProfile } from "../fb-api/messenger-profile";
import { PersistentMenuBuilder } from "../fb-api-helpers/persistent-menu-builder";
import { logger } from "../utils/logger";
import { BotServerConfig } from "./bot-server-config";
import { MessengerExtension } from "./messenger-extension";
import { RegExpEscaped } from "../utils/reg-exp-escaped";
import { Webhook } from "../fb-api/webhook";


/**
 * Represents a bot server listening for webhook requests.
 */
export class BotServer {

    private app: express.Application;
    private server: http.Server;

    private responder: ResponderService;
    private extensions: ExtensionService;
    private profileApi: MessengerProfile.Api;


    /**
     * Creates an instance of BotServer.
     * 
     * @param {BotServerConfig} config - Bot server configuration object. {BotServerConfig} for config options.
     */
    constructor(private config: BotServerConfig) {

        config.webhookPath = config.webhookPath || "/webhook";
        config.extensionsPath = config.extensionsPath || "/ext";
        config.name = config.name || "noname";

        this.profileApi = new MessengerProfile.Api(this.config.accessToken);

        // create express.js application
        this.app = express();

        // prepare ejs template engine for use by Message Extensions
        this.app.set("view engine", "ejs");

        // use the 'public' folder for static assets
        this.app.use("/static", express.static("public"));

        // parse incoming POST request bodies and make them available under the req.body property
        // every incoming POST request will be verified according to https://developers.facebook.com/docs/messenger-platform/webhook-reference#security
        this.app.use(bodyParser.json({ verify: this.verifySignature.bind(this) }));

        // parse incoming GET request (used during webhook verification)
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // install service for handling verification request
        this.app.use(this.config.webhookPath, new VerificationService(this.config.verifyToken).getRouter());
        logger.info("VerificationServices has been attached to", this.config.webhookPath);

        // install service for handling webhook requests
        this.responder = new ResponderService(this.config.accessToken);
        this.app.use(this.config.webhookPath, this.responder.getRouter());
        logger.info("ResponderService has been attached to", this.config.webhookPath);

        // install service for handling Message Extensions requests
        this.extensions = new ExtensionService();
        this.app.use(this.config.extensionsPath, this.extensions.getRouter());
        logger.info("ExtensionService has been attached to", this.config.extensionsPath);
    }

    /**
     * Starts the bot server.
     */
    public start(): void {

        const port = BotServer.normalizePort(this.config.port || 8080);

        this.app.set("port", port);

        this.server = <http.Server>http.createServer(this.app)

        .on("error", (error: NodeJS.ErrnoException) => {

            if (error.syscall !== "listen") throw error;

            let bind = (typeof port === "string") ? "Pipe " + port : "Port " + port;

            switch (error.code) {
                case "EACCES":
                    logger.error(`BotServer[${this.config.name}] not started. ${bind} requires elevated privileges.`);
                    process.exit(1);
                    break;

                case "EADDRINUSE":
                    logger.error(`BotServer[${this.config.name}] not started. ${bind} is already in use.`);
                    process.exit(1);
                    break;

                default:
                    throw error;
            }
        })

        .on("listening", () => {
            let addr = this.server.address();
            let bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
            logger.info(`BotServer[${this.config.name}] is listening on ${bind}`);
        })

        .listen(port);
    }

    /**
     * Stops the bot server.
     */
    public stop(): void {
        this.server.close();
    }

    /**
     * A convenient method to subscribe to specific <i>hooks</i> that can be found within a received
     * <i>text message</i>. The hooks can be specified as a keyword or using a <i>regular expression</i>.
     * When the server receives a text message, it test the content for specified hooks. If a match is
     * found the server executes the subscribed callback. Keywords are considered as case-insensitive.
     * The callbacks installed using the <code>BotServer.hear</code> method are executed BEFORE
     * callbacks installed using the <code>on()</code> method.
     * Note that the <code>hear()</code> method listens only for text messages.
     * 
     * @param {(RegExp | string | Array<RegExp | string>)} hooks - a string, a regexp or an array of both strings and regexps
     * @param {ResponderService.HearHandler} hearHandler - a callback to be executed if a message matches one of the hooks
     * @returns {this} - for chaining
     */
    public hear(hooks: RegExp | string | Array<RegExp | string>, hearHandler: ResponderService.HearHandler): this {

        let reHooks: Array<RegExp>;

        if (typeof hooks === "string") {

            // create new case-insensitive regexp based on the given keyword
            reHooks = [new RegExp(`^${RegExpEscaped.escape(hooks)}$`, "i")];

        } else if (Array.isArray(hooks)) {

            reHooks = hooks.map((hook: RegExp | string) => {
                return typeof hook === "string" ? new RegExp(`^${RegExpEscaped.escape(hook)}$`, "i") : hook;
            });

        } else {

            reHooks = [hooks];
        }

        this.responder.hear(reHooks, hearHandler);

        return this;
    }

    /**
     * Subscribe to an <i>event</i> emitted when a webhook request is received. Available events:
     * 
     * @param {Webhook.Event} event - an event for which the callback will be executed
     * @param {Function} callback - a callback function
     * @returns {this} - for chaining
     */
    public on(event: Webhook.Event, callback: Function): this;

    /**
     * Subscribe to an <i>identified event</i>. The following events can be identifeid by ID:
     * 
     * @param {Webhook.Event} event - an event for which the callback will be executed
     * @param {string} id - an ID identifing the event
     * @param {Function} callback - a callback function
     * @returns {this} 
     */
    public on(event: Webhook.Event, id: string, callback: Function): this;

    public on(event: Webhook.Event, idOrCallback: string | Function, callback?: Function): this {

        if (typeof idOrCallback === "string") {
            event += ":" + idOrCallback;
        } else {
            callback = idOrCallback;
        }

        this.responder.on(event, callback);
        return this;
    }

    /**
     * 
     * 
     * @returns {MessengerProfile.Api} 
     */
    public getMessengerProfile(): MessengerProfile.Api {
        return this.profileApi;
    }

    /**
     * 
     * 
     * @param {MessengerExtension} extension 
     * @returns {this} 
     */
    public addExtension(extension: MessengerExtension): this {
        this.extensions.addExtension(extension);
        return this;
    }

    private verifySignature(req: Request, res: Response, data: string): void {

        let signature: string = req.headers["x-hub-signature"];

        if (!signature) {
            throw new Error("couldn't validate the request signature, the 'x-hub-signature' header not found");
        }

        let elements: Array<string> = signature.split("=");

        if (elements[1] !== crypto.createHmac(elements[0], this.config.appSecret).update(data).digest("hex")) {
            throw new Error("request's signature is not valid");
        }

        logger.debug("request signature verified");
    }

    private static normalizePort(val: number | string): number | string | boolean {
        let port: number = (typeof val === "string") ? parseInt(val, 10) : val;
        return isNaN(port) ? val : (port >= 0 ? port : false);
    }
}
