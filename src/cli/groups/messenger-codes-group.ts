import { BotUtils } from "../../utils/bot-utils";
import { Group } from "../group";

/**
 * A <i>group plugin</i> of mbutil CLI for accessing Messenger Codes API.
 */
export class MessengerCodeGroup extends Group {

    constructor() {
        super("code");
    }

    public async execute(command: string, botUtils: BotUtils, options: any): Promise<string> {

        if (command !== "create" && command !== "generate") {
            return this.usage();
        }

        await botUtils.generateMessengerCode(options.out || "code.png", options.size, options.ref);
        return "Messenger Code has been succesfully saved";
    }

    public getUsage(): string {
        return `Generates a new Messenger Code and saves it to disk as .PNG file.
See more about Messenger Codes at https://developers.facebook.com/docs/messenger-platform/messenger-code.

Usage:
    mbutil ${this.getName()} create [options]
        - generate a new Messenger Code for the Page

Options:
    --out <filename> - output file name (default: code.png)
    --size <number> - size of generated image, in pixels (range: 100-2000, default: 1000)
    --ref <text> - data to be received when user scans the code
`;
    }
}
