import { Send } from "../fb-api/send";
import { AbstractMessageBuilder } from "../fb-api-helpers/abstract-message-builder";
import { UserProfile } from "../fb-api/user-profile";
import { logger } from "../utils/logger";
import { Conversation } from "./conversation";


export class Chat {

  private conversation: Conversation;


  constructor(protected partnerId: string, protected sendApi: Send.Api, protected userProfileApi: UserProfile.Api) {}

  public say(text: string): this {
    this.sendApi.sendText(this.partnerId, text);
    return this;
  }

  public typingOn(): this {
  	this.sendApi.typingOn(this.partnerId);
  	return this;
  }

  public typingOff(): this {
  	this.sendApi.typingOff(this.partnerId);
  	return this;
  }

  public markSeen(): this {
  	this.sendApi.markSeen(this.partnerId);
  	return this;
  }

  public sendImage(url: string, reusable: boolean = false): this {
  	this.sendApi.sendImage(this.partnerId, url, reusable);
  	return this;
  }

  public sendAudio(url: string, reusable: boolean = false): this {
  	this.sendApi.sendAudio(this.partnerId, url, reusable);
  	return this;
  }

  public sendVideo(url: string, reusable: boolean = false): this {
  	this.sendApi.sendVideo(this.partnerId, url, reusable);
  	return this;
  }

  public sendFile(url: string, reusable: boolean = false): this {
  	this.sendApi.sendFile(this.partnerId, url, reusable);
  	return this;
  }

  public sendMessage(messageOrBuilder: Send.Message | AbstractMessageBuilder<Send.Message>): this {
  	this.sendApi.send(this.partnerId, messageOrBuilder);
  	return this;
  }

  public getUserProfile(): Promise<UserProfile.Response> {
  	return this.userProfileApi.getUserProfile(this.partnerId);
  }

  public startConversation(): Conversation {
    this.conversation = new Conversation(this.partnerId, this, this.sendApi);
    return this.conversation;
  }

  public endConversation(): this {
    this.conversation = undefined;
    return this;
  }

  public isConversationActive(): boolean {
    return !!this.conversation;
  }

  public getConversation(): Conversation {
    return this.conversation;
  }
}