import { AxiosInstance, AxiosResponse, AxiosError, AxiosPromise, AxiosRequestConfig } from 'axios';
import Axios from 'axios';
import { logger } from "../logger";


/**
 * An abstract class providing access to Facebook Graph API. Implementations must specify concrete endpoint.
 * 
 * Calling of the Graph API uses the Axios package providing fully <i>promisified</code> interface.
 */
export abstract class GraphApi<T extends GraphApi.Request> {

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
    constructor(protected accessToken: string, private endpoint: GraphApi.Endpoint | string = "", private method?: GraphApi.Method, protected version?: string) {

        // create instance of Axios with default configuration
        this.client = Axios.create({
            baseURL: `https://graph.facebook.com/v${version || GraphApi.DEFAULT_VERSION}/${endpoint}`,
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

        config.method = config.method || this.method || GraphApi.Method.POST;

        data.access_token = this.accessToken;

        if (config.method === GraphApi.Method.GET) {

            //config.url = config.url || "";      
            //config.url += "?" + Object.keys(data).map((key: string) => `${key}=${data[key]}`).join("&");
            config.params = data;

        } else if (config.method === GraphApi.Method.POST || config.method === GraphApi.Method.DELETE) {

            config.data = data;

        } else {

            Promise.reject("GraphApi.senRequest: method not supporetd: " + config.method);
        }

        try {

            // perform the call
            let response: AxiosResponse = await this.client.request(config);

            logger.debug("GraphApi:", response.status, response.statusText);
            logger.debug("GraphApi: response data:", response.data);

            if (response.data.result && response.data.result !== "success") {
                logger.error("GraphApi: result:", response.data.result);
                return Promise.reject(response.data.result);
            }

            return response.data;

        } catch (error) {

            logger.error("GraphApi:", error.message);
            logger.debug(error.response.data);

            let message: string = "uknown error";

            if (error.response.data.error && error.response.data.error.message) {
                logger.error(error.response.data.error.message);
                message = error.response.data.error.message;
            }

            return Promise.reject(message);
        }
    }
}

export namespace GraphApi {

    export namespace Method {
        export const GET = "get";
        export const POST = "post";
        export const DELETE = "delete";
    }

    export type Method = typeof Method.GET | typeof Method.POST | typeof Method.DELETE;

    export namespace Endpoint {
        export const MESSAGES = "me/messages";
        export const MESSENGER_PROFILE = "me/messenger_profile";
        export const MESSENGER_CODES = "me/messenger_codes";
        export const USER_PROFILE = "USER-PROFILE";
    }

    export type Endpoint =
        typeof Endpoint.MESSAGES |
        typeof Endpoint.MESSENGER_PROFILE |
        typeof Endpoint.MESSENGER_CODES;

    export interface Request {
        access_token?: string;
    }
}