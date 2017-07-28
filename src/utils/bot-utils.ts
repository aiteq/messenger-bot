import { AxiosPromise, AxiosResponse } from 'axios';
import Axios from 'axios';
import * as fs from "async-file";
import { MessengerCodes } from "../fb-api/messenger-codes";
import { logger } from "../logger";
import { BotConfig } from "./bot-config";


export class BotUtils {

    private messengerCodesApi: MessengerCodes.Api;

    constructor(private config: BotConfig) {}

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
}