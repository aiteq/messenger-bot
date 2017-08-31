import * as Graph from "./graph-api";

/**
 * API and types for Messenger Codes API.
 * (see https://developers.facebook.com/docs/messenger-platform/messenger-code)
 */
export class Api extends Graph.Api<Request> {

    constructor(protected accessToken: string) {

        super(accessToken, Graph.Endpoint.MESSENGER_CODES);
    }

    /**
     * Generates a new Messenger Code with given parameters.
     *
     * @param {number} [size] - the size, in pixels, for the code (supported 100-2000, defaults to 1000)
     * @param {string} [ref] - reference data to be send as POSTBACK when the user scans the code
     * @returns {Promise<string>} - a URL of the generated code
     */
    public async generateCode(size?: number, ref?: string): Promise<string> {

        const req: Request = {
            type: Type.STANDARD,
            image_size: size || 1000
        };

        ref && (req.data = { ref });

        try {

            return (await this.sendRequest(req)).uri;

        } catch (error) {

            return Promise.reject(error);
        }
    }
}

export enum Type {
    STANDARD = "standard"
}

export interface Request extends Graph.Request {
    type: Type;
    image_size?: number;
    data?: { ref: string };
}

export interface Response {
    uri: string;
}
