import { BotUtils } from "../../utils/bot-utils";
import { Group } from "../group";

/**
 * A <i>group plugin</i> of mbutil CLI for sending messages.
 */
export class SendGroup extends Group {

    constructor() {
        super("send");
    }

    public async execute(command: string, botUtils: BotUtils, options: any): Promise<string> {

        switch (command) {

            case "image":
                if (!options.recipient || !options.url) {
                    return this.usage();
                }

                await botUtils.sendImage(options.recipient, options.url);
                break;

            case "audio":
                if (!options.recipient || !options.url) {
                    return this.usage();
                }

                await botUtils.sendAudio(options.recipient, options.url);
                break;

            case "video":
                if (!options.recipient || !options.url) {
                    return this.usage();
                }

                await botUtils.sendVideo(options.recipient, options.url);
                break;

            case "file":
                if (!options.recipient || !options.url) {
                    return this.usage();
                }

                await botUtils.sendFile(options.recipient, options.url);
                break;

            default:
                if (!options.recipient || !options._[1]) {
                    return this.usage();
                }

                await botUtils.sendText(options.recipient, options._[1]);
                break;
        }

        return `Message has been successfully sent to ${options.recipient}`;
    }

    protected getUsage(): string {
        return `Send messages directly to users.

Usage:

    mbutil ${this.getName()} "<text>" --recipient <id> [options]
        - send a plain text message

    mbutil ${this.getName()} image --url <url> --recipient <id> [options]
        - send a message with attached image

    mbutil ${this.getName()} audio --url <url> --recipient <id> [options]
        - send a message with attached audio file

    mbutil ${this.getName()} video --url <url> --recipient <id> [options]
        - send a message with attached video file

    mbutil ${this.getName()} file --url <url> --recipient <id> [options]
        - send a message with attached file

Options:
    --recipient <id> - ID of the recepient
    --url <url> - URL of the attachment
`;
    }
}
