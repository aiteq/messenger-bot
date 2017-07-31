import { Send } from "../fb-api/send";
import { UserProfile } from "../fb-api/user-profile";
import { AbstractMessageBuilder } from "../fb-api-helpers/abstract-message-builder";
import { logger } from "../logger";
import { Conversation } from "./conversation";


/**
 * Provides methods for one-way bot-to-user communication. An instance of [[Chat]] is always passed to
 * hear and event handlers to be used for interaction with the user.
 * <b>Note:</b> all methods are non-blocking and call underlaying API asynchronously.
 */
export class Chat {

  private conversation: Conversation;

  /**
   * Creates an instance of [[Chat]]. Instances are managed by the [[ResponderService]] so
   * don't create one directly.
   * 
   * @param {string} partnerId 
   * @param {Send.Api} sendApi 
   * @param {UserProfile.Api} userProfileApi 
   */
  constructor(protected partnerId: string, protected sendApi: Send.Api, protected userProfileApi: UserProfile.Api) {}

  /**
   * The primary way to send a plain TEXT message to the user.
   * 
   * @param {string} text - a text to be send
   * @returns {this} - for chaining
   */
  public say(text: string): this {
    this.sendApi.sendText(this.partnerId, text);
    return this;
  }

  /**
   * Turns typing indicator ON for 20 seconds or next message.
   * 
   * @returns {this} - for chaining
   */
  public typingOn(): this {
  	this.sendApi.typingOn(this.partnerId);
  	return this;
  }

  /**
   * Turns typing indicator OFF.
   * 
   * @returns {this} - for chaining
   */
  public typingOff(): this {
  	this.sendApi.typingOff(this.partnerId);
  	return this;
  }

  /**
   * Marks the last sent message as read.
   * 
   * @returns {this} - for chaining
   */
  public markSeen(): this {
  	this.sendApi.markSeen(this.partnerId);
  	return this;
  }

  /**
   * Sends an image.
   * 
   * @param {string} url - a URL of the image file
   * @param {boolean} [reusable=false] - if <code>true</code> the attachment will be marked as reusable
   * @returns {this} - for chaining
   */
  public sendImage(url: string, reusable: boolean = false): this {
  	this.sendApi.sendImage(this.partnerId, url, reusable);
  	return this;
  }

  /**
   * Sends an audio.
   * 
   * @param {string} url - a URL of the audio file
   * @param {boolean} [reusable=false] - if <code>true</code> the attachment will be marked as reusable
   * @returns {this} - for chaining
   */
  public sendAudio(url: string, reusable: boolean = false): this {
  	this.sendApi.sendAudio(this.partnerId, url, reusable);
  	return this;
  }

  /**
   * Sends a video.
   * 
   * @param {string} url - a URL of the video file
   * @param {boolean} [reusable=false] - if <code>true</code> the attachment will be marked as reusable
   * @returns {this} - for chaining
   */
  public sendVideo(url: string, reusable: boolean = false): this {
  	this.sendApi.sendVideo(this.partnerId, url, reusable);
  	return this;
  }

  /**
   * Sends a file.
   * 
   * @param {string} url - a URL of the file
   * @param {boolean} [reusable=false] - if <code>true</code> the attachment will be marked as reusable
   * @returns {this} - for chaining
   */
  public sendFile(url: string, reusable: boolean = false): this {
  	this.sendApi.sendFile(this.partnerId, url, reusable);
  	return this;
  }

  /**
   * Sends a message prepared manually or using message builder.
   * 
   * @param {(Send.Message | AbstractMessageBuilder<Send.Message>)} messageOrBuilder - a structured message or message builder
   * @returns {this} - for chaining
   */
  public sendMessage(messageOrBuilder: Send.Message | AbstractMessageBuilder<Send.Message>): this {
  	this.sendApi.send(this.partnerId, messageOrBuilder);
  	return this;
  }

  /**
   * Returns user's profile containing public information.
   * 
   * @returns {Promise<UserProfile.Response>} - user's public profile information
   */
  public getUserProfile(): Promise<UserProfile.Response> {
  	return this.userProfileApi.getUserProfile(this.partnerId);
  }

  /**
   * Starts a new conversation.
   * 
   * @returns {Conversation} 
   */
  public startConversation(): Conversation {
    this.conversation = new Conversation(this.partnerId, this, this.sendApi);
    return this.conversation;
  }

  /**
   * Ends the active conversation.
   * 
   * @returns {this} - for chaining
   */
  public endConversation(): this {
    this.conversation = undefined;
    return this;
  }

  /**
   * Indicates whether a conversation is active.
   * 
   * @returns {boolean} - <code>true</code> if a conversation is active
   */
  public isConversationActive(): boolean {
    return !!this.conversation;
  }

  /**
   * Returns the active conversation.
   * 
   * @returns {Conversation} 
   */
  public getConversation(): Conversation {
    return this.conversation;
  }

  /**
   * Returns an ID of the chat partner.
   * 
   * @returns {string} 
   */
  public getPartnerId(): string {
      return this.partnerId;
  }
}