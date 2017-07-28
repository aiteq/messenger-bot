import { AxiosPromise, AxiosResponse } from 'axios';
import Axios from 'axios';
import * as fs from "async-file";
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
    public async setGetStartedButton(data?: any): Promise<void> {

        try {

            await this.getMessengerProfileApi().setGetStartedButton(data);
            logger.info("Get Started button successfully set");

        } catch (error) {

            logger.error("Get Started button not set: ", error);
            return Promise.reject(error);
        }
    }

    public async getGetStartedButton(): Promise<any> {
        return await this.getMessengerProfileApi().getGetStartedButton();
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