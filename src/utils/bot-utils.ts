import * as fs from "async-file";
import Axios from "axios";
import { AxiosResponse } from "axios";

import { MessengerCodes, MessengerProfile, Send } from "../fb-api";
import { PersistentMenuBuilder } from "../fb-api-helpers/persistent-menu-builder";
import { PersistentMenuDef } from "../fb-api-helpers/persistent-menu-def";
import logger from "../logger";

/**
 * Provides an interface to non-interactive services of Messenger Platform API through a set of
 * convenient methods.
 */
export class BotUtils {

    private messengerCodesApi: MessengerCodes.Api;
    private messengerProfileApi: MessengerProfile.Api;
    private sendApi: Send.Api;

    /**
     * Creates an instance of BotUtils.
     *
     * @param {string} accessToken - page access token
     */
    constructor(private accessToken: string) {
        if (!accessToken) {
            throw new Error("accessToken must by provided");
        }
    }

    /**
     * Sends a plain text message.
     *
     * @param {string} recipientId - ID of the recipient
     * @param {string} text - a text to be send
     * @returns {Promise<Send.Response>}
     */
    public sendText(recipientId: string, text: string): Promise<Send.Response> {
        return this.getSendApi().sendText(recipientId, text);
    }

    /**
     * Sends a message with image attachment.
     *
     * @param {string} recipientId - ID of the recipient
     * @param {string} url - URL of the image
     * @param {boolean} [reusable] - controls whether the attachment is to be reused
     * @returns {Promise<Send.Response>}
     */
    public sendImage(recipientId: string, url: string, reusable?: boolean): Promise<Send.Response> {
        return this.getSendApi().sendImage(recipientId, url, reusable);
    }

    /**
     * Sends a message with audio attachment.
     *
     * @param {string} recipientId - ID of the recipient
     * @param {string} url - URL of the audio file
     * @param {boolean} [reusable] - controls whether the attachment is to be reused
     * @returns {Promise<Send.Response>}
     */
    public sendAudio(recipientId: string, url: string, reusable?: boolean): Promise<Send.Response> {
        return this.getSendApi().sendAudio(recipientId, url, reusable);
    }

    /**
     * Sends a message with video attachment.
     *
     * @param {string} recipientId - ID of the recipient
     * @param {string} url - URL of the video file
     * @param {boolean} [reusable] - controls whether the attachment is to be reused
     * @returns {Promise<Send.Response>}
     */
    public sendVideo(recipientId: string, url: string, reusable?: boolean): Promise<Send.Response> {
        return this.getSendApi().sendVideo(recipientId, url, reusable);
    }

    /**
     * Sends a message with file attachment.
     *
     * @param {string} recipientId - ID of the recipient
     * @param {string} url - URL of the file
     * @param {boolean} [reusable] - controls whether the attachment is to be reused
     * @returns {Promise<Send.Response>}
     */
    public sendFile(recipientId: string, url: string, reusable?: boolean): Promise<Send.Response> {
        return this.getSendApi().sendFile(recipientId, url, reusable);
    }

    /**
     * Sets the Get Started button for the Page.
     * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/get-started-button)
     *
     * @param {*} [data] - an optional data to be received when the user clicks on the Get Started butoon
     * @returns {Promise<MessengerProfile.Response>}
     */
    public setGetStartedButton(data?: any): Promise<MessengerProfile.Response> {
        return this.getMessengerProfileApi().setGetStartedButton(data);
    }

    /**
     * Reads the current Get Started button setting.
     *
     * @returns {Promise<MessengerProfile.GetStartedButton>} - an object with Get Started button setting
     */
    public getGetStartedButton(): Promise<MessengerProfile.GetStartedButton> {
        return this.getMessengerProfileApi().getGetStartedButton();
    }

    /**
     * Removes the current Get Started button setting.
     * <b>Note:</b> Get Started button can't be removed when a Persistent Menu is set while
     * Persistent Menu can't be used without Get Started button.
     *
     * @returns {Promise<MessengerProfile.Response>}
     */
    public deleteGetStartedButton(): Promise<MessengerProfile.Response> {
        return this.getMessengerProfileApi().deleteGetStartedButton();
    }

    /**
     * Sets the Greeting for the Page. If it is already set for the locale, it will be changed.
     * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/greeting-text)
     *
     * @param {string} text - a text of the greeting
     * @param {string} [locale="default"] - greeting's locale
     * @returns {Promise<MessengerProfile.Response>}
     */
    public async setGreeting(text: string, locale: string = "default"): Promise<MessengerProfile.Response> {

        const greeting: MessengerProfile.Greeting = { locale, text };

        return this.getMessengerProfileApi().setGreeting(
            (await this.getMessengerProfileApi().getGreeting() || [])
                .filter((grt) => grt.locale !== locale)
                .concat(greeting)
        );
    }

    /**
     * Reads the current Greeting.
     *
     * @returns {Promise<MessengerProfile.Greeting[]>} - an object with greeting
     */
    public getGreeting(): Promise<MessengerProfile.Greeting[]> {
        return this.getMessengerProfileApi().getGreeting();
    }

    /**
     * Removes the current Greeting.
     *
     * @returns {Promise<MessengerProfile.Response>}
     */
    public deleteGreeting(): Promise<MessengerProfile.Response> {
        return this.getMessengerProfileApi().deleteGreeting();
    }

    /**
     * Sets Persistent Menu for the Page.
     *
     * @param {(PersistentMenuDef | PersistentMenuDef[] | PersistentMenuBuilder)} menuDef
     * @returns {Promise<MessengerProfile.Response>}
     */
    public setPersistentMenu(menuDef: PersistentMenuDef | PersistentMenuDef[] | PersistentMenuBuilder): Promise<MessengerProfile.Response> {

        menuDef instanceof PersistentMenuBuilder || (menuDef = new PersistentMenuBuilder(menuDef));

        return this.getMessengerProfileApi().setPersistentMenu(menuDef.build());
    }

    /**
     * Returns the current Persistent Menu.
     *
     * @returns {Promise<any>} - an object with Persistent Menu definition
     */
    public getPersistentMenu(): Promise<any> {
        return this.getMessengerProfileApi().getPersistentMenu();
    }

    /**
     * Removes the current Persistent Menu.
     *
     * @returns {Promise<MessengerProfile.Response>}
     */
    public deletePersistentMenu(): Promise<MessengerProfile.Response> {
        return this.getMessengerProfileApi().deletePersistentMenu();
    }

    /**
     * Returns current list of whitelisted domains.
     *
     * @returns {Promise<any>} - a list of whitelisted domains
     */
    public getDomainWhitelist(): Promise<any> {
        return this.getMessengerProfileApi().getWhitelistedDomains();
    }

    /**
     * Adds domains to the whitelist.
     *
     * @param {string | Array<string>} domains - single domain or array of domains
     * @returns {Promise<MessengerProfile.Response>}
     */
    public async whitelistDomains(domains: string | string[]): Promise<MessengerProfile.Response> {

        domains = Array.isArray(domains) ? domains : [domains];

        return this.getMessengerProfileApi().whitelistDomains(
            (await this.getMessengerProfileApi().getWhitelistedDomains() || [])
                .filter((domain) => domains.indexOf(domain) < 0)
                .concat(domains)
        );
    }

    /**
     * Removes all domains from whitelist.
     *
     * @returns {Promise<MessengerProfile.Response>}
     */
    public deleteDomainWhitelist(): Promise<MessengerProfile.Response> {
        return this.getMessengerProfileApi().deleteDomainWhitelist();
    }

    /**
     * Returns current Account Linking URL.
     *
     * @returns {Promise<string>}
     */
    public getAccountLinkingUrl(): Promise<string> {
        return this.getMessengerProfileApi().getAccountLinkingUrl();
    }

    /**
     * Sets a new Account Linking URL.
     *
     * @param {string} url - a URL
     * @returns {Promise<MessengerProfile.Response>}
     */
    public setAccountLinkingUrl(url: string): Promise<MessengerProfile.Response> {
        return this.getMessengerProfileApi().setAccountLinkingUrl(url);
    }

    /**
     * Removes current setting of Account Linking URL.
     *
     * @returns {Promise<MessengerProfile.Response>}
     */
    public deleteAccountLinkingUrl(): Promise<MessengerProfile.Response> {
        return this.getMessengerProfileApi().deleteAccountLinkingUrl();
    }

    /**
     * Returns current Target Audience setting.
     *
     * @returns {Promise<any>}
     */
    public getTargetAudience(): Promise<any> {
        return this.getMessengerProfileApi().getTargetAudience();
    }

    /**
     * Open Target Audience to all.
     *
     * @returns {Promise<MessengerProfile.Response>}
     */
    public openTargetAudience(): Promise<MessengerProfile.Response> {
        return this.getMessengerProfileApi().setTargetAudience(MessengerProfile.TargetAudienceType.ALL);
    }

    /**
     * Close Target Audience to all.
     *
     * @returns {Promise<MessengerProfile.Response>}
     */
    public closeTargetAudience(): Promise<MessengerProfile.Response> {
        return this.getMessengerProfileApi().setTargetAudience(MessengerProfile.TargetAudienceType.NONE);
    }

    /**
     * Adds countries to Target Audience whitelist.
     *
     * @param {string | Array<string>} countries - a list of ISO 3166 Alpha-2 codes of countries to be whitelisted
     * @returns {Promise<MessengerProfile.Response>}
     */
    public async whitelistAudienceCountries(countries: string | string[]): Promise<MessengerProfile.Response> {

        let whitelist: string[] = Array.isArray(countries) ? countries : [countries];

        const current: MessengerProfile.TargetAudience = await this.getMessengerProfileApi().getTargetAudience();

        current && current.countries && current.countries.whitelist && (whitelist = whitelist.concat(current.countries.whitelist));

        return this.getMessengerProfileApi().setTargetAudience(MessengerProfile.TargetAudienceType.CUSTOM, whitelist);
    }

    /**
     * Adds countries to Target Audience blacklist.
     *
     * @param {string | Array<string>} countries - a list of ISO 3166 Alpha-2 codes of countries to be blacklisted
     * @returns {Promise<MessengerProfile.Response>}
     */
    public async blacklistAudienceCountries(countries: string | string[]): Promise<MessengerProfile.Response> {

        let blacklist: string[] = Array.isArray(countries) ? countries : [countries];

        const current: MessengerProfile.TargetAudience = await this.getMessengerProfileApi().getTargetAudience();

        current && current.countries && current.countries.blacklist && (blacklist = blacklist.concat(current.countries.blacklist));

        return this.getMessengerProfileApi().setTargetAudience(MessengerProfile.TargetAudienceType.CUSTOM, undefined, blacklist);
    }

    /**
     * Removes all countries from both whitelist and blacklist.
     *
     * @returns {Promise<MessengerProfile.Response>}
     */
    public deleteTargetAudience(): Promise<MessengerProfile.Response> {
        return this.getMessengerProfileApi().deleteTargetAudience();
    }

    /**
     * Returns Chat Extension home URL.
     *
     * @returns {Promise<string>}
     */
    public getChatExtensionHomeUrl(): Promise<string> {
        return this.getMessengerProfileApi().getChatExtensionHomeUrl();
    }

    /**
     * Sets a new Chat Extension home URL. If the URL is not whitelisted it will be done first.
     *
     * @param {string} url - a home URL
     * @param {boolean} [inTest=false] - controls whether the Chat Extension is in test mode
     * @param {boolean} [shareButton=true] - controls whether the share button in the webview is enabled
     * @param {*} [cliLogger] - logger for CLI
     * @returns {Promise<MessengerProfile.Response>}
     */
    public async setChatExtensionHomeUrl(
        url: string, inTest: boolean = false, shareButton: boolean = true, cliLogger?: any): Promise<MessengerProfile.Response> {

        url.charAt(url.length - 1) === "/" || (url = url.concat("/"));

        const whitelist: string[] = await this.getMessengerProfileApi().getWhitelistedDomains() || [];

        if (whitelist.indexOf(url) < 0) {
            // domain has to be whitelisted first
            await this.getMessengerProfileApi().whitelistDomains([url]);
            cliLogger && cliLogger.info(`Domain '${url}' has been successfully whitelisted`);
        }

        return this.getMessengerProfileApi().setChatExtensionHomeUrl(url, { inTest, shareButton });
    }

    /**
     * Removes current setting of Chat Extension home URL.
     *
     * @returns {Promise<MessengerProfile.Response>}
     */
    public deleteChatExtensionHomeUrl(): Promise<MessengerProfile.Response> {
        return this.getMessengerProfileApi().deleteChatExtensionHomeUrl();
    }

    /**
     * Generates and saves a new Messenger Code as PNG image.
     *
     * @param {string} fileName - a name of the file to be saved (including relative or absolute path)
     * @param {number} [size] - a size of the generated image in pixels (range: 100-2000, default: 1000)
     * @param {string} [ref] - optional data to be received when the user scans the code
     * @returns {Promise<void>}
     */
    public async generateMessengerCode(fileName: string, size?: number, ref?: string): Promise<void> {

        try {

            // generate
            const uri: string = await this.getMessengerCodesApi().generateCode(size, ref);
            logger.info("Messenger Code successfully generated:", uri);

            // download
            const response: AxiosResponse = await Axios.get(uri, { responseType: "stream" });
            logger.info("Messenger Code successfully downloaded:", uri);

            // save
            response.data.pipe(await fs.createWriteStream(fileName));
            logger.info("Messenger Code successfully saved:", fileName);

        } catch (error) {

            return Promise.reject(error);
        }
    }

    private getMessengerCodesApi(): MessengerCodes.Api {
        return this.messengerCodesApi ||
            (this.messengerCodesApi = new MessengerCodes.Api(this.accessToken));
    }

    private getMessengerProfileApi(): MessengerProfile.Api {
        return this.messengerProfileApi ||
            (this.messengerProfileApi = new MessengerProfile.Api(this.accessToken));
    }

    private getSendApi(): Send.Api {
        return this.sendApi ||
            (this.sendApi = new Send.Api(this.accessToken));
    }
}
