import { AxiosPromise, AxiosResponse } from 'axios';
import Axios from 'axios';
import * as fs from "async-file";
import { PersistentMenuBuilder } from "../fb-api-helpers/persistent-menu-builder";
import { MessengerCodes } from "../fb-api/messenger-codes";
import { MessengerProfile } from "../fb-api/messenger-profile";
import { logger } from "../logger";
import { BotConfig } from "./bot-config";


/**
 * Provides an interface to non-interactive services of Messenger Platform API.
 */
export class BotUtils {

    private messengerCodesApi: MessengerCodes.Api;
    private messengerProfileApi: MessengerProfile.Api;


    /**
     * Creates an instance of BotUtils.
     * 
     * @param {BotConfig} config - bot configuration object
     */
    constructor(private config: BotConfig) {}

    /**
     * Sets the Get Started button for the Page.
     * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/get-started-button)
     * 
     * @param {*} [data] - an optional data to be received when the user clicks on the Get Started butoon
     * @returns {Promise<void>} 
     */
    public setGetStartedButton(data?: any): Promise<void> {
        return this.getMessengerProfileApi().setGetStartedButton(data);
    }

    /**
     * Reads the current Get Started button setting.
     * 
     * @returns {Promise<any>} - an object with Get Started button setting
     */
    public getGetStartedButton(): Promise<any> {
        return this.getMessengerProfileApi().getGetStartedButton();
    }

    /**
     * Removes the current Get Started button setting.
     * <b>Note:</b> Get Started button can't be removed when a Persistent Menu is set while
     * Persistent Menu can't be used without Get Started button.
     * 
     * @returns {Promise<void>} 
     */
    public deleteGetStartedButton(): Promise<void> {
        return this.getMessengerProfileApi().deleteGetStartedButton();
    }

    /**
     * Sets the Greeting for the Page.
     * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/greeting-text)
     * 
     * @param {string} text - a text of the greeting
     * @param {string} [locale="default"] - greeting's locale
     * @returns {Promise<void>} 
     */
    public setGreeting(text: string, locale: string = "default"): Promise<void> {
        return this.getMessengerProfileApi().setGreeting({ locale, text });
    }

    /**
     * Reads the current Greeting.
     * 
     * @returns {Promise<any>} - an object with greeting
     */
    public getGreeting(): Promise<any> {
        return this.getMessengerProfileApi().getGreeting();
    }

    /**
     * Removes the current Greeting.
     * 
     * @returns {Promise<void>} 
     */
    public deleteGreeting(): Promise<void> {
        return this.getMessengerProfileApi().deleteGreeting();
    }

    /**
     * Sets Persistent Menu for the Page.
     * 
     * @param {(MessengerProfile.PersistentMenu | Array<MessengerProfile.PersistentMenu> | PersistentMenuBuilder)} menuDef 
     * @returns {Promise<void>} 
     */
    public setPersistentMenu(menuDef: MessengerProfile.PersistentMenu | Array<MessengerProfile.PersistentMenu> | PersistentMenuBuilder): Promise<void> {
        return this.getMessengerProfileApi().setPersistentMenu(menuDef);
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
     * @returns {Promise<void>} 
     */
    public deletePersistentMenu(): Promise<void> {
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
     * @param {Array<string>} domains - an array of domains
     * @returns {Promise<void>} 
     */
    public whitelistDomains(domains: Array<string>): Promise<void> {
        return this.getMessengerProfileApi().whitelistDomains(domains);
    }

    /**
     * Removes all domains from whitelist.
     * 
     * @returns {Promise<void>} 
     */
    public deleteDomainWhitelist(): Promise<void> {
        return this.getMessengerProfileApi().deleteDomainWhitelist();
    }

    /**
     * Returns current Account Linking URL.
     * 
     * @param {string} url 
     * @returns {Promise<string>} 
     */
    public getAccountLinkingUrl(): Promise<string> {
        return this.getMessengerProfileApi().getAccountLinkingUrl();
    }

    /**
     * Sets a new Account Linking URL.
     * 
     * @param {string} url - a URL
     * @returns {Promise<void>} 
     */
    public setAccountLinkingUrl(url: string): Promise<void> {
        return this.getMessengerProfileApi().setAccountLinkingUrl(url);
    }

    /**
     * Removes current setting of Account Linking URL.
     * 
     * @returns {Promise<void>} 
     */
    public deleteAccountLinkingUrl(): Promise<void> {
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
     * @returns {Promise<any>} 
     */
    public openTargetAudience(): Promise<any> {
        return this.getMessengerProfileApi().openAudienceToAll();
    }

    /**
     * Close Target Audience to all.
     * 
     * @returns {Promise<any>} 
     */
    public closeTargetAudience(): Promise<any> {
        return this.getMessengerProfileApi().closeAudienceToAll();
    }

    /**
     * Adds countries to Target Audience whitelist.
     * 
     * @param {Array<string>} countries - a list of ISO 3166 Alpha-2 codes of countries to be whitelisted
     * @returns {Promise<void>} 
     */
    public whitelistAudienceCountries(countries: Array<string>): Promise<void> {
        return this.getMessengerProfileApi().whitelistAudienceCountries(countries);
    }

    /**
     * Adds countries to Target Audience blacklist.
     * 
     * @param {Array<string>} countries - a list of ISO 3166 Alpha-2 codes of countries to be blacklisted
     * @returns {Promise<void>} 
     */
    public blacklistAudienceCountries(countries: Array<string>): Promise<void> {
        return this.getMessengerProfileApi().blacklistAudienceCountries(countries);
    }

    /**
     * Removes all countris from both whitelist and blacklist.
     * 
     * @returns {Promise<void>} 
     */
    public deleteTargetAudience(): Promise<void> {
        return this.getMessengerProfileApi().deleteAudience();
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
            let uri: string = await this.getMessengerCodesApi().generateCode(size, ref);

            logger.info("Messenger Code successfully generated:", uri);

            // donwload
            let response: AxiosResponse = await Axios.get(uri, { responseType:"stream" });

            // save
            response.data.pipe(await fs.createWriteStream(fileName));

            logger.info("Messenger Code successfully saved:", fileName);

        } catch (error) {

            logger.error("Messenger Code not saved: ", error);
        }
    }

    private getMessengerCodesApi(): MessengerCodes.Api {
        return this.messengerCodesApi ||
            (this.messengerCodesApi = new MessengerCodes.Api(this.config.accessToken));
    }

    private getMessengerProfileApi(): MessengerProfile.Api {
        return this.messengerProfileApi ||
            (this.messengerProfileApi = new MessengerProfile.Api(this.config.accessToken));
    }
}