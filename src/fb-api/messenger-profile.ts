import { MessengerProfile, Webhook, Webview } from ".";
import logger from "../logger";
import * as Graph from "./graph-api";

/**
 * API and types for Messenger Profile API.
 * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile)
 */
export class Api extends Graph.Api<Request> {

    /**
     * Creates an instance of MessengerProfile.Api.
     * @param {string} accessToken - a Page Access Token
     */
    constructor(protected accessToken: string) {
        super(accessToken, Graph.Endpoint.MESSENGER_PROFILE);
    }

    /**
     * Sets the Get Started button for the Page.
     * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/get-started-button)
     *
     * @param {*} [data] - a data to be received when the user clicks on the Get Started butoon
     * @returns {Promise<Response>}
     */
    public setGetStartedButton(data?: any): Promise<Response> {

        const payload: any = {
            src: Webhook.PostbackSource.GET_STARTED_BUTTON
        };

        payload.data = data;

        return this.setField(Field.GET_STARTED_BUTTON, {
            payload: JSON.stringify(payload)
        });
    }

    /**
     * Reads the current Get Started button setting.
     *
     * @returns {Promise<GetStartedButton>} - Get Started Button setting
     */
    public async getGetStartedButton(): Promise<GetStartedButton> {

        try {

            const response: any = await this.getField(Field.GET_STARTED_BUTTON);
            response && (response.payload = JSON.parse(response.payload));
            return response;

        } catch (error) {

            /* istanbul ignore next */
            return Promise.reject((error));
        }
    }

    /**
     * Removes Get Started button.
     *
     * @returns {Promise<Response>}
     */
    public deleteGetStartedButton(): Promise<Response> {
        return this.deleteField([Field.GET_STARTED_BUTTON]);
    }

    /**
     * Sets locale-aware Greeting for users coming into your bot for the first time.
     * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/greeting-text)
     *
     * @param {(string | Array<Greeting>)} greeting - a default or locale-aware Greeting (must be UTF-8 and has a 160 character limit)
     * @returns {Promise<Response>}
     */
    public async setGreeting(greeting: string | Greeting[]): Promise<Response> {

        return this.setField(Field.GREETING, typeof greeting === "string" ?
            [{
                locale: "default",
                text: greeting
            }] : greeting);
    }

    /**
     * Reads the current Greeting setting.
     *
     * @returns {Promise<Array<Greeting>>} - current Greeting
     */
    public getGreeting(): Promise<Greeting[]> {
        return this.getField(Field.GREETING);
    }

    /**
     * Removes all greetings.
     *
     * @returns {Promise<Response>}
     */
    public deleteGreeting(): Promise<Response> {
        return this.deleteField([Field.GREETING]);
    }

    /**
     * Sets locale-aware Persistent Menu to be available within Messenger UI.
     * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/persistent-menu)
     * <b>Note:</b> You must set up a Get Started button if you also wish to use Persistent Menu.
     *
     * @param {(Array<PersistentMenu>)} menu - a Persistent Menu or an array of locale-aware Persistent Menus or menu builder
     * @returns {Promise<Response>}
     */
    public setPersistentMenu(menu: PersistentMenu[]): Promise<Response> {

        return this.setField(Field.PERSISTENT_MENU, menu);
    }

    /**
     * Reads the current Persistent Menu setting.
     *
     * @returns {Promise<Array<PersistentMenu>>}
     */
    public getPersistentMenu(): Promise<PersistentMenu[]> {
        return this.getField(Field.PERSISTENT_MENU);
    }

    /**
     * Removes currently installed Persistent Menu.
     *
     * @returns {Promise<Response>}
     */
    public deletePersistentMenu(): Promise<Response> {
        return this.deleteField([Field.PERSISTENT_MENU]);
    }

    /**
     * Adds a domain or domains to the whitelist for using with Chat Extensions.
     * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/domain-whitelisting)
     *
     * @param {(string | Array<string>)} domains - a domain or array of domains to by whitelisted
     * @returns {Promise<Response>}
     */
    public whitelistDomains(domains: string[]): Promise<Response> {
        return this.setField(Field.DOMAIN_WHITELIST, domains);
    }

    /**
     * Reads the current whitelisted domains.
     *
     * @returns {Array<string>} - an array of domains
     */
    public getWhitelistedDomains(): Promise<string[]> {
        return this.getField(Field.DOMAIN_WHITELIST);
    }

    /**
     * Removes all whitelisted domains.
     *
     * @returns {Promise<Response>} - for chaining
     */
    public deleteDomainWhitelist(): Promise<Response> {
        return this.deleteField([Field.DOMAIN_WHITELIST]);
    }

    /**
     * Sets an account linking URL.
     * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/account-linking-url)
     *
     * @param {string} url
     * @returns {Promise<Response>}
     */
    public setAccountLinkingUrl(url: string): Promise<Response> {
        return this.setField(Field.ACCOUNT_LINKING_URL, url);
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
     * @returns {Promise<Response>}
     */
    public deleteAccountLinkingUrl(): Promise<Response> {
        return this.deleteField([Field.ACCOUNT_LINKING_URL]);
    }

    /**
     * Set target audience countries.
     * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/target-audience)
     *
     * @param {TargetAudienceType} type
     * @param {string[]} [whitelist] - a list of ISO 3166 Alpha-2 codes of countries to be whitelisted for audience
     * @param {string[]} [blacklist] - a list of ISO 3166 Alpha-2 codes of countries to be blacklisted for audience
     * @returns {Promise<Response>}
     */
    public setTargetAudience(type: TargetAudienceType, whitelist: string[] = [], blacklist: string[] = []): Promise<Response> {

        const audience: TargetAudience = {
            audience_type: type
        };

        type === TargetAudienceType.CUSTOM && (audience.countries = { whitelist, blacklist });

        return this.setField(Field.TARGET_AUDIENCE, audience);
    }

    /**
     * Reads the current audience setting.
     *
     * @returns {string} - the current account linking URL
     */
    public getTargetAudience(): Promise<TargetAudience> {
        return this.getField(Field.TARGET_AUDIENCE);
    }

    /**
     * Removes all audience settings.
     *
     * @returns {Promise<Response>}
     */
    public deleteTargetAudience(): Promise<Response> {
        return this.deleteField([Field.TARGET_AUDIENCE]);
    }

    /**
     * Sets a home URL for Chat Extensions.
     * <b>Note:</b> The domain of the URL should be whitelisted for it to work correctly.
     *
     * @param {string} url - Chat Extensions home URL
     * @param {{ inTest: boolean, shareButton: boolean }} [options]
     * @returns {Promise<Response>}
     */
    public setChatExtensionHomeUrl(url: string, options?: { inTest: boolean, shareButton: boolean }, inTest: boolean = false, shareButton: boolean = true): Promise<Response> {

        return this.setField(Field.CHAT_EXTENSION_WEB_URL, {
            url,
            webview_height_ratio: Webview.HeightRatio.TALL,
            webview_share_button: !options || options.shareButton ? Webview.ShareButton.SHOW : Webview.ShareButton.HIDE,
            in_test: options && options.inTest
        });
    }

    /**
     * Reads the current Chat Extension home URL.
     *
     * @returns {string} - the current Chat Extension home URL
     */
    public getChatExtensionHomeUrl(): Promise<string> {
        return this.getField(Field.CHAT_EXTENSION_WEB_URL);
    }

    /**
     * Removes Chat Extension home URL.
     *
     * @returns {Promise<Response>}
     */
    public deleteChatExtensionHomeUrl(): Promise<Response> {
        return this.deleteField([Field.CHAT_EXTENSION_WEB_URL]);
    }

    private setField(field: Field, data: any): Promise<Response> {

        logger.debug(`setting the field '${field}' to`, JSON.stringify(data, null, 2));

        const payload: any = {};
        payload[field] = data;

        return this.sendRequest(payload);
    }

    private async getField(field: Field): Promise<any> {

        logger.debug("reading the field", field);

        try {
            const data: any[] = (await this.sendRequest({
                fields: field
            }, { method: Graph.Method.GET })).data;

            return data.length > 0 ? data[0][field] : undefined;

        } catch (error) {

            /* istanbul ignore next */
            return Promise.reject(error);
        }
    }

    private deleteField(fields: Field[]): Promise<Response> {

        logger.debug("deleting fields", fields);

        return this.sendRequest({
            fields
        }, { method: Graph.Method.DELETE });
    }
}

export interface GetStartedButton {
    payload: {
        src: Webhook.PostbackSource,
        data?: any
    };
}

export enum MenuItemType {
    WEB_URL = "web_url",
    POSTBACK = "postback",
    NESTED = "nested"
}

export interface Menu {
    call_to_actions?: MenuItem[];
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
}

export interface Greeting {
    locale: string;
    text: string;
}

export const GreetingName = {
    FIRST_NAME: "user_first_name",
    LAST_NAME: "user_last_name",
    FULL_NAME: "user_full_name",
};

export enum TargetAudienceType {
    ALL = "all",
    CUSTOM = "custom",
    NONE = "none"
}

export interface TargetAudience {
    audience_type: TargetAudienceType;
    countries?: {
        whitelist?: string[],
        blacklist?: string[]
    };
}

export interface ChatExtensionHomeUrl {
    url: string;
    webview_height_ratio: Webview.HeightRatio;
    webview_share_button: Webview.ShareButton;
    in_test: boolean;
}

export interface Request extends Graph.Request {
    persistent_menu?: PersistentMenu[];
    get_started?: GetStartedButton;
    greeting?: Greeting[];
    whitelisted_domains?: string[];
    account_linking_url?: string;
    target_audience?: TargetAudience;
    home_url?: ChatExtensionHomeUrl;
    fields?: Field | Field[];
}

export enum Field {
    PERSISTENT_MENU = "persistent_menu",
    GET_STARTED_BUTTON = "get_started",
    GREETING = "greeting",
    DOMAIN_WHITELIST = "whitelisted_domains",
    ACCOUNT_LINKING_URL = "account_linking_url",
    TARGET_AUDIENCE = "target_audience",
    CHAT_EXTENSION_WEB_URL = "home_url"
}

export interface Response {
    result: string;
}
