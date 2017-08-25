import { logger } from "../logger";
import * as ga from "./graph-api";

/**
 * API and types for User Profile API.
 * (see https://developers.facebook.com/docs/messenger-platform/user-profile)
 */
export class Api extends ga.GraphApi<Request> {

    /**
     * Creates an instance of UserProfile.Api.
     * @param {string} accessToken - a Page Access Token
     */
    constructor(protected accessToken: string) {
        super(accessToken, "", ga.Method.GET);
    }

    /**
     * Returns public user's information.
     *
     * @param {string} userId - user's ID
     * @returns {Promise<Response>} - users's public profile
     */
    public getUserProfile(userId: string): Promise<Response> {
        return this.getFields(userId, [Field.FIRST_NAME, Field.LAST_NAME, Field.PROFILE_PIC, Field.LOCALE, Field.TIMEZONE, Field.GENDER, Field.IS_PAYMENT_ENABLED, Field.LAST_AD_REFERRAL]);
    }

    /**
     * Returns selected fields of user's public profile.
     *
     * @param {string} userId - user's ID
     * @param {(Field | Array<Field>)} fields - a field or array of fields
     * @returns {Promise<Response>} - users's public profile
     */
    public getFields(userId: string, fields: Field | Field[]): Promise<Response> {

        Array.isArray(fields) || (fields = [fields]);
        return this.sendRequest({ fields: fields.join(",") }, { url: userId });
    }
}

export interface Request extends ga.Request {
    fields: string;
}

export enum Field {
    FIRST_NAME = "first_name",
    LAST_NAME = "last_name",
    PROFILE_PIC = "profile_pic",
    LOCALE = "locale",
    TIMEZONE = "timezone",
    GENDER = "gender",
    IS_PAYMENT_ENABLED = "is_payment_enabled",
    LAST_AD_REFERRAL = "last_ad_referral"
}

export interface LastAdReferral {
    source: string;
    type: string;
    ad_id: string;
}

export interface Response {
    first_name?: string;
    last_name?: string;
    profile_pic?: string;
    locale?: string;
    timezone?: string;
    gender?: string;
    is_payment_enabled?: boolean;
    last_ad_referral?: LastAdReferral;
}
