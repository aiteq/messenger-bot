import { Webview } from "../fb-api/webview";
import { Webhook } from "../fb-api/webhook";
import { AbstractMessageBuilder } from "./abstract-message-builder";
import { Send } from "../fb-api/send";


export abstract class TemplateMessageBuilder<T> extends AbstractMessageBuilder<Send.AttachmentMessage> {

	protected template: T;

	public abstract createMessage(...args: any[]): this;

	constructor() {
		super();
		this.message = {
			attachment: {
				type: Send.AttachmentType.TEMPLATE,
				payload: null
			}
		};
	}

	public static createElement(title: string): TemplateMessageBuilder.Element {
		return new TemplateMessageBuilder.Element(title);
	}

	public static createDefaultAction(url: string): TemplateMessageBuilder.DefaultAction {
		return new TemplateMessageBuilder.DefaultAction(url);
	}

	public static createUrlButton(title: string, url: string): TemplateMessageBuilder.UrlButton {
		return new TemplateMessageBuilder.UrlButton(title, url);
	}

	public static createPostbackButton(title: string, data: string, id: string): TemplateMessageBuilder.PostbackButton {
		return new TemplateMessageBuilder.PostbackButton(title, data, id);
	}

	public static createCallButton(title: string, payload: string): TemplateMessageBuilder.CallButton {
		return new TemplateMessageBuilder.CallButton(title, payload);
	}

	public static createShareButton(): TemplateMessageBuilder.ShareButton {
		return new TemplateMessageBuilder.ShareButton();
	}

	public static createLoginButton(url: string): TemplateMessageBuilder.LoginButton {
		return new TemplateMessageBuilder.LoginButton(url);
	}

	public static createLogoutButton(): TemplateMessageBuilder.LogoutButton {
		return new TemplateMessageBuilder.LogoutButton();
	}

	public build(): Send.AttachmentMessage {

		if (this.template) {

			this.message.attachment.payload = this.template;

			return super.build();
		}

		throw new Error("TemplateMessageBuilder.build: no message data");
	}
}

export namespace TemplateMessageBuilder {

	export abstract class Template<T extends Send.Template> {
		public abstract getTemplateObject(): T;
	}

	export class Element {

		private elementObject: Send.Element;

		constructor(title: string) {
			this.elementObject = { title: title };
		}

		public getObject(): Send.Element {
			return this.elementObject;
		}

		public setSubtitle(subtitle: string): this {
			this.elementObject.subtitle = subtitle;
			return this;
		}

		public setImageUrl(imageUrl: string): this {
			this.elementObject.image_url = imageUrl;
			return this;
		}

		public setDefaultAction(defaultAction: DefaultAction): this {
			this.elementObject.default_action = defaultAction.getOject();
			return this;
		}

		public addButton(button: Button<Send.Button>): this {
			this.elementObject.buttons = this.elementObject.buttons || new Array<Send.Button>();
			this.elementObject.buttons.push(button.getOject());
			return this;
		}
	}

	export class OgElement {

		private elementObject: Send.OpenGraphElement;

		constructor(url: string) {
			this.elementObject = { url: url };
		}

		public getObject(): Send.OpenGraphElement {
			return this.elementObject;
		}

		public addButton(button: Button<Send.Button>): this {
			this.elementObject.buttons = this.elementObject.buttons || new Array<Send.Button>();
			this.elementObject.buttons.push(button.getOject());
			return this;
		}
	}

	export class ReceiptElement {

		private elementObject: Send.ReceiptElement;

		constructor(title: string, price: number) {
			this.elementObject = {
				title: title,
				price: price
			};
		}

		public getObject(): Send.ReceiptElement {
			return this.elementObject;
		}

		public setSubtitle(subtitle: string): this {
			this.elementObject.subtitle = subtitle;
			return this;
		}

		public setQuantity(quantity: number): this {
			this.elementObject.quantity = quantity;
			return this;
		}

		public setCurrency(currency: string): this {
			this.elementObject.currency = currency;
			return this;
		}

		public setImageUrl(imageUrl: string): this {
			this.elementObject.image_url = imageUrl;
			return this;
		}
	}

	export class DefaultAction {

		private defaultActionObject: Send.DefaultAction;

		constructor(url: string) {
			this.defaultActionObject = {
				type: Send.ButtonType.WEB_URL,
				url: url
			};
		}

		public getOject(): Send.DefaultAction {
			return this.defaultActionObject;
		}

		public setWebviewHeightRatio(webviewHeightRatio: Webview.HeightRatio): this {
			this.defaultActionObject.webview_height_ratio = webviewHeightRatio;
			return this;
		}

		public setMessengerEtensions(messengerExtensions: boolean): this {
			this.defaultActionObject.messenger_extensions = messengerExtensions;
			return this;
		}

		public setFallbackUrl(fallbackUrl: string): this {
			this.defaultActionObject.fallback_url = fallbackUrl;
			return this;
		}

		public setWebviewShareButton(webviewShareButton: Webview.ShareButton): this {
			this.defaultActionObject.webview_share_button = webviewShareButton;
			return this;
		}
	}

	export abstract class Button<T extends Send.Button> {

		protected buttonObject: T;

		public getOject(): T {
			return this.buttonObject;
		}
	}

	export class UrlButton extends Button<Send.UrlButton> {

		constructor(title: string, url: string) {
			super();
			this.buttonObject = {
				type: Send.ButtonType.WEB_URL,
				title: title,
				url: url
			}
		}

		public setWebviewHeightRatio(webviewHeightRatio: Webview.HeightRatio): this {
			this.buttonObject.webview_height_ratio = webviewHeightRatio;
			return this;
		}

		public setMessengerEtensions(messengerExtensions: boolean): this {
			this.buttonObject.messenger_extensions = messengerExtensions;
			return this;
		}

		public setFallbackUrl(fallbackUrl: string): this {
			this.buttonObject.fallback_url = fallbackUrl;
			return this;
		}

		public setWebviewShareButton(webviewShareButton: Webview.ShareButton): this {
			this.buttonObject.webview_share_button = webviewShareButton;
			return this;
		}
	}

	export class PostbackButton extends Button<Send.PostbackButton> {

		constructor(title: string, id: string, data: string) {
			super();
			this.buttonObject = {
				type: Send.ButtonType.POSTBACK,
				title: title,
				payload: JSON.stringify({
					src: Webhook.PostbackSource.POSTBACK_BUTTON,
					id: id,
					data: data
				})
			}
		}
	}

	export class CallButton extends Button<Send.CallButton> {

		constructor(title: string, payload: string) {
			super();
			this.buttonObject = {
				type: Send.ButtonType.CALL,
				title: title,
				payload: payload
			}
		}
	}

	export class ShareButton extends Button<Send.ShareButton> {

		constructor() {
			super();
			this.buttonObject = {
				type: Send.ButtonType.SHARE
			}
		}

		public setShareContents(shareContents: any): this {
			this.buttonObject.share_contents = shareContents;
			return this;
		}
	}

	export class LoginButton extends Button<Send.LoginButton> {

		constructor(url: string) {
			super();
			this.buttonObject = {
				type: Send.ButtonType.LOGIN,
				url: url
			}
		}
	}

	export class LogoutButton extends Button<Send.LogoutButton> {

		constructor() {
			super();
			this.buttonObject = {
				type: Send.ButtonType.LOGOUT
			}
		}
	}
}