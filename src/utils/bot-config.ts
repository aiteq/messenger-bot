/**
 * Represents configuration object for BotServer.
 */
export interface BotConfig {
    /**
     * A Page Access Token for calling Messenger Platform API. Mandatory.
     * (https://developers.facebook.com/docs/messenger-platform/guides/setup#page_access_token)
     *
     * @type {string}
     */
    accessToken: string;

    /**
     * A Verify Token for webhook setup. Mandatory.
     * (https://developers.facebook.com/docs/messenger-platform/guides/setup#webhook_setup)
     *
     * @type {string}
     */
    verifyToken: string;

    /**
     * An App Secret of your FB application. It's used for verifying webhook request signatures. Mandatory.
     * (https://stackoverflow.com/questions/3203649/where-can-i-find-my-facebook-application-id-and-secret-key)
     *
     * @type {string}
     */
    appSecret: string;

    /**
     * A custom endpoint name for webhook. Optional, default: "/webhook".
     *
     * @type {string}
     */
    webhookPath?: string;

    /**
     * A custom endpoint name for Chat Extensions. Optional, default: "/ext".
     *
     * @type {string}
     */
    extensionsPath?: string;

    /**
     * A custom endpoint name for the ping service. Optional, default: "/ping".
     *
     * @type {string}
     */
    pingPath?: string;

            /**
     * A port number for bot server. Optional. If it is not specified the bot will try to use
     * the <code>process.env.PORT</code> property or set the port to 8080.
     *
     * @type {(number | string)}
     */
    port?: number | string;

    /**
     * A name of the bot. Optional. It's used only for logging in this time.
     *
     * @type {string}
     */
    name?: string;

    /**
     * Number of milliseconds to expire unanswered asking during conversation. Optional.
     *
     * @type {number}
     */
    askTimeout?: number;

    /**
     * Logging level (according to log4js spec) for the package. Optional.
     *
     * @type {string}
     */
    logLevel?: string;
}
