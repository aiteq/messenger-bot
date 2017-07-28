import * as minimist from "minimist";
import { BotUtils } from "../../utils/bot-utils";
import { Group } from "../group";

/**
 * A <i>group plugin</i> of mbutil CLI for accessing Messenger Codes API.
 */
export class Code extends Group {

    constructor() {
        super("code");
    }

    public execute(command: string, botUtils: BotUtils, options: any): void {
        
        command === "create" || this.printUsage();
        botUtils.generateMessengerCode(options.out || "code.png", options.size, options.ref);
    }

    public getUsage(): string {
        return `create [options]

Generates a new Messenger Code and saves it to disk as .PNG file.
See more about Messenger Codes at https://developers.facebook.com/docs/messenger-platform/messenger-code

Options:
-out <filename> - output file name (default: code.png)
-size <number> - size of generated image, in pixels (range: 100-2000, default: 1000)
-ref <text> - data to be received when user scans the code`;
    }
}
