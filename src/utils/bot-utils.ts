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
     */
    public async setGetStartedButton(data?: any): Promise<void> {
        await this.getMessengerProfileApi().setGetStartedButton(data);
    }

    /**
     * Reads the current Get Started button setting.
     * 
     * @returns {Promise<any>} - an object with Get Started button setting
     */
    public async getGetStartedButton(): Promise<any> {
        return await this.getMessengerProfileApi().getGetStartedButton();
    }

    /**
     * Removes the current Get Started button setting.
     * <b>Note:</b> Get Started button can't be removed when a Persistent Menu is set while
     * Persistent Menu can't be used without Get Started button.
     */
    public async deleteGetStartedButton(): Promise<void> {
        return await this.getMessengerProfileApi().deleteGetStartedButton();
    }

    /**
     * Sets the Greeting for the Page.
     * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/greeting-text)
     * 
     * @param {string} text - a text of the greeting
     * @param {string} [locale="default"] - greeting's locale
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
     */
    public deleteGreeting(): Promise<void> {
        return this.getMessengerProfileApi().deleteGreeting();
    }

    /**
     * Sets Persistent Menu for the Page.
     * 
     * @param {(MessengerProfile.PersistentMenu | Array<MessengerProfile.PersistentMenu> | PersistentMenuBuilder)} menuDef 
     */
    public async setPersistentMenu(menuDef: MessengerProfile.PersistentMenu | Array<MessengerProfile.PersistentMenu> | PersistentMenuBuilder): Promise<void> {
        await this.getMessengerProfileApi().setPersistentMenu(menuDef);
    }

    /**
     * Reads the current Persistent Menu.
     * 
     * @returns {Promise<any>} - an object with Persistent Menu definition
     */
    public async getPersistentMenu(): Promise<any> {
        return await this.getMessengerProfileApi().getPersistentMenu();
    }

    /**
     * Removes the current Persistent Menu.
     */
    public async deletePersistentMenu(): Promise<void> {
        return await this.getMessengerProfileApi().deletePersistentMenu();
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