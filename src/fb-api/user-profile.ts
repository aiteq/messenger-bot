import { logger } from "../logger";
import { GraphApi } from "./graph-api";


/**
 * API and types for User Profile API.
 * (see https://developers.facebook.com/docs/messenger-platform/user-profile)
 */
export namespace UserProfile {

    /**
     * Provides access to User Profile API.
     * (see https://developers.facebook.com/docs/messenger-platform/user-profile)
     */
    export class Api extends GraphApi<Request> {

        /**
         * Creates an instance of UserProfile.Api.
         * @param {string} accessToken - a Page Access Token
         */
        constructor(protected accessToken: string) {
            super(accessToken, "", GraphApi.Method.GET);
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
        public getFields(userId: string, fields: Field | Array<Field>): Promise<Response> {

            Array.isArray(fields) || (fields = [fields]);
            return this.sendRequest({ fields: fields.join(",") }, { url: userId });
        }
    }

    export interface Request extends GraphApi.Request {
        fields: string
    }

    export namespace Field {
        export const FIRST_NAME = "first_name";
        export const LAST_NAME = "last_name";
        export const PROFILE_PIC = "profile_pic";
        export const LOCALE = "locale";
        export const TIMEZONE = "timezone";
        export const GENDER = "gender";
        export const IS_PAYMENT_ENABLED = "is_payment_enabled";
        export const LAST_AD_REFERRAL = "last_ad_referral";
    }

    export type Field = typeof Field.FIRST_NAME | typeof Field.LAST_NAME | typeof Field.PROFILE_PIC | typeof Field.LOCALE | typeof Field.TIMEZONE | typeof Field.GENDER | typeof Field.IS_PAYMENT_ENABLED | typeof Field.LAST_AD_REFERRAL;

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
}