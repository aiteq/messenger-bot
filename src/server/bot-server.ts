import * as bodyParser from "body-parser";
import * as express from "express";
import { Request, Response } from "express";
import * as crypto from "crypto";
import * as http from "http";
import { Trace } from "@aiteq/trace";
import { VerificationService } from "./verification-service";
import { ResponderService } from "./responder-service";
import { ExtensionService } from "./extension-service";
import { MessengerProfile } from "../fb-api/messenger-profile";
import { PersistentMenuBuilder } from "../fb-api-helpers/persistent-menu-builder";
import { logger } from "../utils/logger";
import { BotServerConfig } from "./bot-server-config";
import { MessengerExtension } from "./messenger-extension";
import { RegExpEscaped } from "../utils/reg-exp-escaped";


/**
 * Represents a bot server listening for webhook requests.
 */
@Trace()
export class BotServer {

    private app: express.Application;
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

        //create express.js application
        this.app = express();

        this.app.set("view engine", "ejs");

        this.app.use("/static", express.static("public"));

        this.app.use(bodyParser.json({ verify: this.verifyRequestSignature.bind(this) }));
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(this.config.webhookPath, new VerificationService(this.config.verifyToken).getRouter());
        logger.info("VerificationServices has been attached to", this.config.webhookPath);

        this.responder = new ResponderService(this.config.accessToken);
        this.app.use(this.config.webhookPath, this.responder.getRouter());
        logger.info("ResponderService has been attached to", this.config.webhookPath);

        this.extensions = new ExtensionService();
        this.app.use(this.config.extensionsPath, this.extensions.getRouter());
        logger.info("ExtensionService has been attached to", this.config.extensionsPath);
    }

    /**
     * Starts the bot server.
     * 
     * @returns {this} 
     */
    public start(): this {

        const port = BotServer.normalizePort(this.config.port || 8080);

        this.app.set("port", port);

        const httpServer = http.createServer(this.app);

        httpServer.on("error", (error: NodeJS.ErrnoException) => {

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
        });

        httpServer.on("listening", () => {
            let addr = httpServer.address();
            let bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
            logger.info(`BotServer[${this.config.name}] is listening on ${bind}`);
        });

        httpServer.listen(port);

        return this;
    }

    /**
     * A convenient method to subscribe to specific <i>hooks</i> that can be found within a received
     * <i>text message</i>. The hooks can be specified as a keyword or using a <i>regular expression</i>.
     * When the server receives a text message, it test the content for specified hooks. If a match is
     * found the server executes the subscribed callback. Keywords are considered as case-insensitive.
     * The callbacks installed using the {BotServer.hear} method are executed BEFORE callbacks installed using
     * the {onMessage()} method.
     * Note that the {hear()} method can be used only for text messages.
     * 
     * @param {(RegExp | string | Array<RegExp | string>)} hooks - a string, a regexp or an array of both strings and regexps
     * @param {ResponderService.HearHandler} hearHandler - a callback to be executed if a message matches one of the hooks
     * @returns {this} - for chaining
     */
    public hear(hooks: RegExp | string | Array<RegExp | string>, hearHandler: ResponderService.HearHandler): this {

        let reHooks: Array<RegExp>;

        if (typeof hooks === "string") {

            reHooks = [new RegExp(`^${RegExpEscaped.escape(hooks)}$`, "i")];

        } else if (Array.isArray(hooks)) {

            if (hooks.length == 0) {
                throw new Error("BotServer[${this.config.name}].hear: at least one hook must be specified");
            }

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
     * Subscribes to an event when a text message is received.
     * The callback will be executed for all received text messages, even if the content matches a hook
     * specified using the {hear} method. The callbacks installed using the {onMessage()} method are
     * executed AFTER callbacks installed using the {hear()} method.
     * 
     * @param {ResponderService.EventHandler} eventHandler - a callback to be executed when a text message will be received
     * @returns {this} - for chaining
     */
    public onMessage(eventHandler: ResponderService.EventHandler): this {

        this.responder.on(ResponderService.Event.TEXT_MESSAGE, eventHandler);

        return this;
    }

    public onPostback(eventHandler: ResponderService.EventHandler): this {

        this.responder.on(ResponderService.Event.POSTBACK, eventHandler);

        return this;
    }

    public onGetStarted(eventHandler: ResponderService.EventHandler): this {

        this.responder.on(ResponderService.Event.GET_STARTED_BUTTON, eventHandler);

        return this;
    }

    public onPostbackButton(id: string, eventHandler: ResponderService.EventHandler): this {

        this.responder.on(ResponderService.Event.POSTBACK_BUTTON, id, eventHandler);

        return this;
    }

    public onPersistentMenu(id: string, eventHandler: ResponderService.EventHandler): this {

        this.responder.on(ResponderService.Event.PERSISTENT_MENU, id, eventHandler);

        return this;
    }

    public onQuickReply(id: string, eventHandler: ResponderService.EventHandler): this {

        this.responder.on(ResponderService.Event.TEXT_QUICK_REPLY, id, eventHandler);

        return this;
    }

    public onConversation(handler: ResponderService.EventHandler): this {

        this.responder.on(ResponderService.Event.CONVERSATION, handler);

        return this;
    }

    public getMessengerProfile(): MessengerProfile.Api {
        return this.profileApi;
    }

    public addExtension(extension: MessengerExtension): this {
        this.extensions.addExtension(extension);
        return this;
    }

    private verifyRequestSignature(req: Request, res: Response, data: string): void {

        let signature: string = req.headers["x-hub-signature"];

        if (!signature) {
            throw new Error("couldn't validate the request signature, 'x-hub-signature' not found");
        }

        let elements: Array<string> = signature.split('=');

        if (elements[1] !== crypto.createHmac(elements[0], this.config.appSecret).update(data).digest("hex")) {
            throw new Error("wrong request signature");
        }

        logger.info("request signature verified");
    }

    private static normalizePort(val: number | string): number | string | boolean {
        let port: number = (typeof val === "string") ? parseInt(val, 10) : val;
        return isNaN(port) ? val : (port >= 0 ? port : false);
    }
}
