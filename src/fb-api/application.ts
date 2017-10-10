import logger from "../logger";
import * as Graph from "./graph-api";

/**
 * API and types for Application API providing access to Facebook Application info.
 */
export class Api extends Graph.Api<Graph.Request> {

    /**
     * Creates an instance of Application.Api.
     * @param {string} accessToken - Page Access Token
     */
    constructor(protected accessToken: string) {
        super(accessToken, "app", Graph.Method.GET);
    }

    /**
     * Returns application information.
     *
     * @returns {Promise<Response>}
     */
    public getAppInfo(): Promise<Response> {
        return this.sendRequest({});
    }
}

export interface Response {
    link: string;
    id: string;
    name: string;
    namespace: string;
}
