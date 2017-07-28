import { PersistentMenuBuilder } from "../fb-api-helpers/persistent-menu-builder";
import { logger } from "../logger";
import { GraphApi } from "./graph-api";
import { Webview } from "./webview";
import { Webhook } from "./webhook";


/**
 * API and types for Messenger Profile.
 * (https://developers.facebook.com/docs/messenger-platform/messenger-profile)
 */
export namespace MessengerProfile {

    /**
     * Provides access to Messenger Profile API.
     */
    export class Api extends GraphApi<Request> {

        /**
         * Creates an instance of MessengerProfile.Api.
         * @param {string} accessToken - a Page Access Token
         */
        constructor(protected accessToken: string) {

            super(accessToken, GraphApi.Endpoint.MESSENGER_PROFILE);
        }

        /**
         * Sets the Get Started button for the Page.
         * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/get-started-button)
         * 
         * @param {*} [data] - a data to be received when the user clicks on the Get Started butoon
         * @returns {this} - for chaining
         */
        public setGetStartedButton(data?: any): this {

            let payload: any = {
                src: Webhook.PostbackSource.GET_STARTED_BUTTON
            };

            data && (payload.data = data);

            this.setField(Field.GET_STARTED_BUTTON, {
                payload: JSON.stringify(payload)
            });

            return this;
        }

        /**
         * Reads the current Get Started button setting.
         * 
         * @returns {Promise<GetStartedButton>} - Get Started Button setting
         */
        public getGetStartedButton(): Promise<GetStartedButton> {
            return this.getField(Field.GET_STARTED_BUTTON);
        }

        /**
         * Removes Get Started button.
         * 
         * @returns {this} - for chaining
         */
        public deleteGetStartedButton(): this {

            this.deleteField([Field.GET_STARTED_BUTTON]);
            return this;
        }

        /**
         * Sets locale-aware Greeting for users coming into your bot for the first time.
         * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/greeting-text)
         * 
         * @param {(string | Greeting | Array<Greeting>)} greeting - a default or locale-aware Greeting (must be UTF-8 and has a 160 character limit)
         * @returns {this} - for chaining
         */
        public setGreeting(greeting: string | Greeting | Array<Greeting>): this {

            this.setField(Field.GREETING, typeof greeting === "string" ? [{
                locale: "default",
                text: greeting
            }] : (Array.isArray(greeting) ? greeting : [greeting])
            );

            return this;
        }

        /**
         * Reads the current Greeting setting.
         * 
         * @returns {Promise<Array<MessengerProfile.Greeting>>} - Greeting setting
         */
        public getGreeting(): Promise<Array<MessengerProfile.Greeting>> {
            return this.getField(Field.GREETING);
        }

        /**
         * Removes all greetings.
         * 
         * @returns {this} - for chaining
         */
        public deleteGreeting(): this {

            this.deleteField([Field.GREETING]);
            return this;
        }

        /**
         * Sets locale-aware Persistent Menu to be available within Messenger UI.
         * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/persistent-menu)
         * <b>Note:</b> You must set up a Get Started button if you also wish to use Persistent Menu.
         * 
         * @param {(PersistentMenu | Array<PersistentMenu> | PersistentMenuBuilder)} menuDef - a Persistent Menu or an array of locale-aware Persistent Menus or menu builder
         * @returns {this} - for chaining
         */
        public setPersistentMenu(menuDef: PersistentMenu | Array<PersistentMenu> | PersistentMenuBuilder): this {

            menuDef instanceof PersistentMenuBuilder && (menuDef = menuDef.build());

            this.setField(Field.PERSISTENT_MENU, Array.isArray(menuDef) ? menuDef : [menuDef]);

            return this;
        }

        /**
         * Reads the current Persistent Menu setting.
         * 
         * @returns {Promise<Array<MessengerProfile.PersistentMenu>>} 
         */
        public getPersistentMenu(): Promise<Array<MessengerProfile.PersistentMenu>> {
            return this.getField(Field.PERSISTENT_MENU);
        }

        /**
         * Removes currently installed Persistent Menu.
         * 
         * @returns {this} - for chaining
         */
        public deletePersistentMenu(): this {

            this.deleteField([Field.PERSISTENT_MENU]);
            return this;
        }

        /**
         * Adds a domain or domains to the whitelist for using with Chat Extensions.
         * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/domain-whitelisting)
         * 
         * @param {(string | Array<string>)} domains - a domain or array of domains to by whitelisted
         * @returns {this} - for chaining
         */
        public whitelistDomains(domains: string | Array<string>): this {

            this.setField(Field.DOMAIN_WHITELIST, Array.isArray(domains) ? domains : [domains]);
            return this;
        }

        /**
         * Reads the current whitelisted domains.
         * 
         * @returns {Array<string>} - an array of domains
         */
        public getWhitelistedDomains(): Promise<Array<string>> {
            return this.getField(Field.DOMAIN_WHITELIST);
        }

        /**
         * Removes all whitelisted domains.
         * 
         * @returns {this} - for chaining
         */
        public deleteDomainWhitelist(): this {

            this.deleteField([Field.DOMAIN_WHITELIST]);
            return this;
        }

        /**
         * Sets an account linking URL.
         * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/account-linking-url)
         * 
         * @param {string} url 
         * @returns {this} 
         */
        public setAccountLinkingUrl(url: string): this {

            this.setField(Field.ACCOUNT_LINKING_URL, url);
            return this;
        }

        /**
         * Reads the current account linking URL.
         * 
         * @returns {string} - the current account linking URL
         */
        public getAccountLinkingUrl(): Promise<string> {
            return this.getField(Field.ACCOUNT_LINKING_URL);
        }

        /**
         * Removes currently set account linking URL.
         * 
         * @returns {this} - for chaining
         */
        public deleteAccountLinkingUrl(): this {

            this.deleteField([Field.ACCOUNT_LINKING_URL]);
            return this;
        }

        /**
         * Whilists audience countries.
         * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/target-audience)
         * 
         * @param {(string | Array<string>)} countries - a country or countries to be whitelisted for audience
         * @returns {this} - for chaining
         */
        public whitelistAudienceCountries(countries: string | Array<string>): this {

            this.setField(Field.TARGET_AUDIENCE, {
                audience_type: AudienceType.CUSTOM,
                countries: {
                    whitelist: Array.isArray(countries) ? countries : [countries]
                }
            });

            return this;
        }

        /**
         * Blacklist audience countries.
         * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/target-audience)
         * 
         * @param {(string | Array<string>)} countries - a country or countries to be blacklisted for audience
         * @returns {this} - for chaining
         */
        public blacklistAudienceCountries(countries: string | Array<string>): this {

            this.setField(Field.TARGET_AUDIENCE, {
                audience_type: AudienceType.CUSTOM,
                countries: {
                    blacklist: Array.isArray(countries) ? countries : [countries]
                }
            });

            return this;
        }

        /**
         * Opens audience for all.
         * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/target-audience)
         * 
         * @returns {this} - for chaining
         */
        public openAudienceToAll(): this {

            this.setField(Field.TARGET_AUDIENCE, {
                audience_type: AudienceType.ALL
            });

            return this;
        }

        /**
         * Closes audience for all.
         * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/target-audience)
         * 
         * @returns {this} - for chaining
         */
        public closeAudienceToAll(): this {

            this.setField(Field.TARGET_AUDIENCE, {
                audience_type: AudienceType.NONE
            });

            return this;
        }

        /**
         * Reads the current audience setting.
         * 
         * @returns {string} - the current account linking URL
         */
        public getAudience(): Promise<TargetAudience> {
            return this.getField(Field.TARGET_AUDIENCE);
        }

        /**
         * Removes all audience settings.
         * 
         * @returns {this} - for chaining
         */
        public deleteAudience(): this {

            this.deleteField([Field.TARGET_AUDIENCE]);
            return this;
        }

        /**
         * Sets a home URL for Chat Extensions.
         * <b>Note:</b> The domain of the URL should be whitelisted for it to work correctly.
         * 
         * @param {string} url - Chat Extensions home URL
         * @param {boolean} [inTest=true] - Controls whether public users (not assigned to the bot or its Facebook page) can see the Chat Extension. This should be set to true until the Chat Extension is ready to be used by others.
         * @param {Webview.ShareButton} [shareButton=Webview.ShareButton.HIDE] - Controls whether the share button in the webview is enabled.
         * @returns {this} - for chaining
         */
        public setChatExtensionHomeUrl(url: string, inTest: boolean = true, shareButton: Webview.ShareButton = Webview.ShareButton.HIDE): this {

            this.setField(Field.CHAT_EXTENSION_WEB_URL, {
                url: url,
                webview_height_ratio: Webview.HeightRatio.TALL,
                webview_share_button: shareButton,
                in_test: inTest
            });

            return this;
        }

        /**
         * Reads the current Chat Extension home URL.
         * 
         * @returns {string} - the current Chat Extension home URL
         */
        public getChatExtensionHomeUrl(): Promise<TargetAudience> {
            return this.getField(Field.TARGET_AUDIENCE);
        }

        /**
         * Removes Chat Extension home URL.
         * 
         * @returns {this} - for chaining
         */
        public deleteChatExtensionHomeUrl(): this {

            this.deleteField([Field.CHAT_EXTENSION_WEB_URL]);
            return this;
        }

        private async setField(field: Field, data: any): Promise<void> {

            logger.debug(`setting the field '${field}' to`, data);

            let payload: any = { field: data };

            try {

                await this.sendRequest(payload);
                logger.debug(`..the field '${field}' has been succesfully set`);

            } catch (error) {

                logger.debug(`..unable to set the field '${field}'`, error);
                throw Promise.reject(error);
            }
        }

        private async getField(field: Field): Promise<any> {

            logger.debug("reading the field", field);

            return (await this.sendRequest({
                fields: field
            }, { method: GraphApi.Method.GET })).data;
        }

        private async deleteField(fields: Array<Field>): Promise<void> {

            logger.debug("deleting fields", fields);

            try {

                await this.sendRequest({
                    fields: fields
                }, {method: GraphApi.Method.DELETE });
                logger.debug("..the fields have been succesfully deleted");

            } catch (error) {

                logger.debug("..the fields not deleted", error);
                throw Promise.reject(error);
            }
        }
    }

    export interface GetStartedButton {
        payload: string;
    }

    export namespace MenuItemType {
        export const WEB_URL = "web_url";
        export const POSTBACK = "postback";
        export const NESTED = "nested";
    }

    export type MenuItemType = typeof MenuItemType.WEB_URL | typeof MenuItemType.POSTBACK | typeof MenuItemType.NESTED;

    export interface Menu {
        call_to_actions?: Array<MenuItem>;
    }

    export interface MenuItem extends Menu {
        type: MenuItemType;
        title: string;
        url?: string;
        payload?: string;
        webview_height_ratio?: Webview.HeightRatio;
        messenger_extensions?: boolean;
        fallback_url?: string;
        webview_share_button?: Webview.ShareButton;
    }

    export interface PersistentMenu extends Menu {
        locale: string;
        composer_input_disabled: boolean;
        call_to_actions: Array<MenuItem>;
    }

    export interface Greeting {
        locale: string;
        text: string;
    }

    export namespace Greeting {
        export namespace Personalize {
            export const FIRST_NAME = "user_first_name";
            export const LAST_NAME = "user_last_name";
            export const FULL_NAME = "user_full_name";
        }
    }

    export namespace AudienceType {
        export const ALL = "all";
        export const CUSTOM = "custom";
        export const NONE = "none";
    }

    export type AudienceType = typeof AudienceType.ALL | typeof AudienceType.CUSTOM | typeof AudienceType.NONE;

    export interface Country {
        blacklist?: Array<string>;    // ISO 3166 Alpha-2 codes
        whitelist?: Array<string>;    // ISO 3166 Alpha-2 codes
    }

    export interface TargetAudience {
        audience_type: AudienceType;
        countries?: {
            whitelist?: Array<Country>,
            blacklist?: Array<Country>
        }
    }

    export interface ChatExtensionHomeUrl {
        url: string;
        webview_height_ratio: Webview.HeightRatio;
        webview_share_button: Webview.ShareButton;
        in_test: boolean;
    }

    export interface Request extends GraphApi.Request {
        persistent_menu?: Array<PersistentMenu>;
        get_started?: GetStartedButton;
        greeting?: Array<Greeting>;
        whitelisted_domains?: Array<string>;
        account_linking_url?: string;
        target_audience?: TargetAudience;
        home_url?: ChatExtensionHomeUrl;
        fields?: Field | Array<Field>;
    }

    export namespace Field {
        export const PERSISTENT_MENU = "persistent_menu";
        export const GET_STARTED_BUTTON = "get_started";
        export const GREETING = "greeting";
        export const DOMAIN_WHITELIST = "whitelisted_domains";
        export const ACCOUNT_LINKING_URL = "account_linking_url";
        export const TARGET_AUDIENCE = "target_audience";
        export const CHAT_EXTENSION_WEB_URL = "home_url";
    }

    export type Field =
        typeof Field.PERSISTENT_MENU |
        typeof Field.GET_STARTED_BUTTON |
        typeof Field.GREETING |
        typeof Field.DOMAIN_WHITELIST |
        typeof Field.ACCOUNT_LINKING_URL |
        typeof Field.TARGET_AUDIENCE |
        typeof Field.CHAT_EXTENSION_WEB_URL;

    export interface Response {
        result: string;
    }
}