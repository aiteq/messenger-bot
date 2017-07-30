import { logger } from "../logger";
import { GraphApi } from "./graph-api";
import { Webview } from "./webview";


/**
 * API and types for Messenger Codes API.
 * (see https://developers.facebook.com/docs/messenger-platform/messenger-code)
 */
export namespace MessengerCodes {

    /**
     * Provides access to Messenger Code API.
     * (see https://developers.facebook.com/docs/messenger-platform/messenger-code)
     */
    export class Api extends GraphApi<Request> {

        constructor(protected accessToken: string) {

            super(accessToken, GraphApi.Endpoint.MESSENGER_CODES);
        }

        /**
         * Generates a new Messenger Code with given parameters.
         * 
         * @param {number} [size] - the size, in pixels, for the code (supported 100-2000, defaults to 1000)
         * @param {string} [ref] - reference data to be send as POSTBACK when the user scans the code
         * @returns {Promise<string>} - a URL of the generated code
         */
        public async generateCode(size?: number, ref?: string): Promise<string> {

            let req: Request = {
                type: Type.STANDARD,
                image_size: size || 1000
            };

            ref && (req.data = { ref: ref });

            try {

                let response: Response = await this.sendRequest(req);
                return response.uri || Promise.reject("no uri");

            } catch (error) {

                return Promise.reject(error);
            }
        }
    }

    export namespace Type {
        export const STANDARD = "standard";
    }

    export type Type = typeof Type.STANDARD;

    export interface Request extends GraphApi.Request {
        type: Type;
        image_size?: number;
        data?: { ref: string };
    }

    export interface Response {
        uri: string;
    }
}