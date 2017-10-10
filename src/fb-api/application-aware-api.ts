import { AxiosRequestConfig } from "axios";
import logger from "../logger";
import * as Application from "./application";
import * as Graph from "./graph-api";

/**
 * A super class for APIs associated with a Facebook Application.
 * It automatically adds App ID to the endpoint URL.
 */
export class Api<T extends Graph.Request> extends Graph.Api<T> {

    private appEndpoint: Promise<string>;

    /**
     * Creates an instance of Subscriptions.Api.
     * @param {string} pageAccessToken - Page Access Token
     * @param {string} appSecret - App Secret
     */
    constructor(protected pageAccessToken: string, protected appSecret: string, protected endpoint: string) {

        super(undefined, "", Graph.Method.GET);

        this.accessToken = new Promise(async (resolve) => {

            try {

                // an alternative way to create app access token (https://developers.facebook.com/docs/facebook-login/access-tokens/#apptokens)
                resolve((await new Application.Api(pageAccessToken).getAppInfo()).id + "|" + appSecret);

            } catch (error) {

                logger.error("couldn't get app info:", error);
                throw new Error(error);
            }
        });

        this.appEndpoint = new Promise(async (resolve) => {

            try {

                // get Facebook App Id and add it to the endpoint URL
                resolve((await new Application.Api(pageAccessToken).getAppInfo()).id + "/" + endpoint);

            } catch (error) {

                logger.error("couldn't get app info:", error);
                throw new Error(error);
            }
        });
    }

    /**
     * Sends request asynchronously. Re-implements the Graph.Api.sendRequest() with adding an endpoint.
     *
     * @param {T} data - a data to be send
     * @param {AxiosRequestConfig} [config={}] - request options
     * @returns {Promise<any>}
     */
    protected async sendRequest(data: T, config: AxiosRequestConfig = {}): Promise<any> {
        config.url = await this.appEndpoint;
        return super.sendRequest(data, config);
    }
}
