import logger from "../logger";
import * as Application from "./application";
import * as ApplicationAware from "./application-aware-api";
import * as Graph from "./graph-api";

/**
 * API and types for Subscriptions API.
 * (see https://developers.facebook.com/docs/graph-api/reference/app/subscriptions)
 */
export class Api extends ApplicationAware.Api<Graph.Request> {

    /**
     * Creates an instance of Subscriptions.Api.
     * @param {string} pageAccessToken - Page Access Token
     * @param {string} appSecret - App Secret
     */
    constructor(protected pageAccessToken: string, protected appSecret: string) {

        super(pageAccessToken, appSecret, "subscriptions");
    }

    /**
     * Returns webhook subscriptions.
     *
     * @returns {Promise<Subscription[]>}
     */
    public async getWebhookSubscriptions(): Promise<Subscription[]> {
        return (await this.sendRequest({})).data;
    }

    /**
     * Returns subscription for given topic.
     *
     * @param {SubscriptionTopic} topic
     * @returns {Promise<Subscription>}
     */
    public async getSubscription(topic: SubscriptionTopic): Promise<Subscription> {
        const subscriptions: Subscription[] = await this.getWebhookSubscriptions();
        for (const subscr of subscriptions) {
            if (subscr.object === topic) {
                return subscr;
            }
        }

        return Promise.reject(`no subscription for topic '${topic}'`);
    }

    /**
     * Returns callback URL for given topic.
     *
     * @param {SubscriptionTopic} topic
     * @returns {Promise<string>} - callback URL
     */
    public async getCallbackUrl(topic: SubscriptionTopic): Promise<string> {
        try {
            return (await this.getSubscription(topic)).callback_url;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export interface Response {
    data: Subscription[];
}

export interface Subscription {
    object: SubscriptionTopic;
    callback_url: string;
    fields: Field[];
    active: boolean;
}

export interface Field {
    name: string;
    version: string;
}

export enum SubscriptionTopic {
    PAGE = "page",
    USER = "user",
    PERMISSIONS = "permissions",
    PAYMENTS = "payments"
}
