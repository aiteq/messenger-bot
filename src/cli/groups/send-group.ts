import { BotUtils } from "../../utils/bot-utils";
import { Group } from "../group";

/**
 * A <i>group plugin</i> of mbutil CLI for sending messages.
 */
export class SendGroup extends Group {

    constructor() {
        super("send");
    }

    public async execute(command: string, botUtils: BotUtils, options: any): Promise<any> {
        
        switch (command) {

            case "image":
                (options.recipient && options.url) || this.exitWithUsage();
                await botUtils.sendImage(options.recipient, options.url);
                break;

            case "audio":
                (options.recipient && options.url) || this.exitWithUsage();
                await botUtils.sendAudio(options.recipient, options.url);
                break;

            case "video":
                (options.recipient && options.url) || this.exitWithUsage();
                await botUtils.sendVideo(options.recipient, options.url);
                break;

            case "file":
                (options.recipient && options.url) || this.exitWithUsage();
                await botUtils.sendFile(options.recipient, options.url);
                break;

            default:
                let text: string = options._[1];
                (text && options.recipient) || this.exitWithUsage();
                await botUtils.sendText(options.recipient, text);
                break;
        }

        return `Message has been successfully sent to ${options.recipient}`;
    }

    protected getUsage(): string {
        return `Send messages.

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
`
    }
}
