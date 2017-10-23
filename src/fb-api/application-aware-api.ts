import { AxiosRequestConfig } from "axios";
import logger from "../logger";
import * as Application from "./application";
import * as Graph from "./graph-api";

/**
 * A super class for APIs associated with a Facebook Application.
 * It automatically adds App ID to the endpoint URL.
 */
export class Api<T extends Graph.Request> extends Graph.Api<T> {

    private appInfo: Promise<Application.Response>;
    private appId: string;

    /**
     * Creates an instance of Subscriptions.Api.
     * @param {string} pageAccessToken - Page Access Token
     * @param {string} appSecret - App Secret
     */
    constructor(protected pageAccessToken: string, protected appSecret: string, protected endpoint: string) {

        super(undefined, "", Graph.Method.GET);

        this.appInfo = new Application.Api(pageAccessToken).getAppInfo()
            .catch((reason) => logger.error("couldn't get fb app info:", reason));
    }

    /**
     * Sends request asynchronously. Re-implements the Graph.Api.sendRequest() with adding an endpoint.
     *
     * @param {T} data - a data to be send
     * @param {AxiosRequestConfig} [config={}] - request options
     * @returns {Promise<any>}
     */
    protected async sendRequest(data: T, config: AxiosRequestConfig = {}): Promise<any> {

        this.appId = this.appId || (await this.appInfo).id;
        config.url = this.appId + "/" + this.endpoint;
        this.accessToken = this.accessToken || this.appId + "|" + this.appSecret;

        return super.sendRequest(data, config);
    }
}
