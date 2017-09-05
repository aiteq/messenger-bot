import { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from "axios";
import Axios from "axios";
import { logger } from "../logger";

/**
 * An abstract class providing access to Facebook Graph API. Implementations must specify concrete endpoint.
 *
 * Calling of the Graph API uses the Axios package providing fully <i>promisified</code> interface.
 */
export abstract class Api<T extends Request> {

    private static readonly DEFAULT_VERSION = "2.9";

    private client: AxiosInstance;

    /**
     * The constructor to be called by subclasses.
     *
     * @param {string} accessToken - a Page Access Token
     * @param {(GraphApi.Endpoint | string)} [endpoint=""] - a concrete endpoint
     * @param {GraphApi.Method} [method] - default HTTP method
     * @param {string} [version] - specific version of the Graph API
     */
    constructor(protected accessToken: string, private endpoint: Endpoint | string = "", private method?: Method, protected version?: string) {

        if (!accessToken) {
            throw new Error("accessToken must by provided");
        }

        // create instance of Axios with default configuration
        this.client = Axios.create({
            baseURL: `https://graph.facebook.com/v${version || Api.DEFAULT_VERSION}/${endpoint}`,
            headers: { "Content-Type": "application/json" },
            responseType: "json"
        });
    }

    /**
     * Sends request asynchronously.
     *
     * @param {T} data - a data to be send
     * @param {AxiosRequestConfig} [config={}] - request options
     * @returns {Promise<any>}
     */
    protected async sendRequest(data: T, config: AxiosRequestConfig = {}): Promise<any> {

        config.method = config.method || this.method || Method.POST;

        data.access_token = this.accessToken;

        if (config.method === Method.GET) {

            config.params = data;

        } else if (config.method === Method.POST || config.method === Method.DELETE) {

            config.data = data;

        } else {

            Promise.reject("method not supporetd: " + config.method);
        }

        try {

            logger.debug("sending:", config.method, this.client.defaults.baseURL);
            logger.debug("data:", JSON.stringify(data));

            // perform the call
            const response: AxiosResponse = await this.client.request(config);

            logger.debug("response:", response.status, response.statusText);
            logger.debug("data:", response.data);

            if (response.data.result && response.data.result !== "success") {
                logger.error("result:", response.data.result);
                return Promise.reject(response.data.result);
            }

            return response.data;

        } catch (error) {

            logger.error(error.message);
            error.response && logger.debug(error.response.data);

            let message: string = error.message;

            if (error.response && error.response.data && error.response.data.error && error.response.data.error.message) {
                logger.error(error.response.data.error.message);
                message = error.response.data.error.message;
            }

            return Promise.reject(message);
        }
    }
}

export enum Method {
    GET = "get",
    POST = "post",
    DELETE = "delete"
}

export enum Endpoint {
    MESSAGES = "me/messages",
    MESSENGER_PROFILE = "me/messenger_profile",
    MESSENGER_CODES = "me/messenger_codes",
    USER_PROFILE = "USER-PROFILE"
}

export interface Request {
    access_token?: string;
}
