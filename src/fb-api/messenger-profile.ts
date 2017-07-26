import { logger } from "../utils/logger";
import { GraphApi } from "./graph-api";
import { Webview } from "./webview";
import { Webhook } from "./webhook";
import { PersistentMenuBuilder } from "../fb-api-helpers/persistent-menu-builder";


export namespace MessengerProfile {

  export class Api extends GraphApi<Request> {

    constructor(protected accessToken: string) {

      super(accessToken, GraphApi.Endpoint.MESSENGER_PROFILE);
    }

    public setGetStartedButton(data?: any): this {

      let payload: any = {
        src: Webhook.PostbackSource.GET_STARTED_BUTTON
      };

      data && (payload.data = data);

      this.setField(Field.GET_STARTED_BUTTON, {
        payload: JSON.stringify(payload)
      });

      return this;
    }

    public getGetStartedButton(): Promise<GetStartedButton> {
      return this.getField(Field.GET_STARTED_BUTTON);
    }

    public deleteGetStartedButton(): this {

      this.deleteField([Field.GET_STARTED_BUTTON]);

      return this;
    }

    public setGreeting(greeting: string | Greeting | Array<Greeting>): this {

      this.setField(Field.GREETING, typeof greeting === "string" ? [{
          locale: "default",
          text: greeting
        }] : (Array.isArray(greeting) ? greeting : [greeting])
      );

      return this;
    }

    public getGreeting(): Promise<Array<MessengerProfile.Greeting>> {
      return this.getField(Field.GREETING);
    }

    public deleteGreeting(): this {

      this.deleteField([Field.GREETING]);

      return this;
    }

    public setPersistentMenu(menuDef: PersistentMenu | Array<PersistentMenu> | PersistentMenuBuilder): this {

      if (menuDef instanceof PersistentMenuBuilder) {
        menuDef = menuDef.build();
      }

      this.setField(Field.PERSISTENT_MENU, Array.isArray(menuDef) ? menuDef : [menuDef]);

      return this;
    }

    public deletePersistentMenu(): this {

      this.deleteField([Field.PERSISTENT_MENU]);

      return this;
    }

    public whitelistDomains(domains: string | Array<string>): this {

      domains = Array.isArray(domains) ? domains : [domains];

      this.sendRequest({
        whitelisted_domains: domains
      });

      return this;
    }

    public getWhitelistedDomains(): Array<string> {
      throw new Error("MessengerProfile.Api.getWhitelistedDomains: not implemented yet");
    }

    public deleteDomainWhitelist(): this {

      this.deleteField([Field.DOMAIN_WHITELIST]);

      return this;
    }

    public setAccountLinkingUrl(url: string): this {

      this.sendRequest({
        account_linking_url: url
      });

      return this;
    }

    public deleteAccountLinkingUrl(): this {

      this.deleteField([Field.ACCOUNT_LINKING_URL]);

      return this;
    }

    public whitelistAudienceCountries(countries: string | Array<string>): this {

      countries = Array.isArray(countries) ? countries : [countries];

      this.sendRequest({
        target_audience: {
          audience_type: AudienceType.CUSTOM,
          countries: {
            whitelist: countries
          }
        }
      });

      return this;
    }

    public blacklistAudienceCountries(countries: string | Array<string>): this {

      countries = Array.isArray(countries) ? countries : [countries];

      this.sendRequest({
        target_audience: {
          audience_type: AudienceType.CUSTOM,
          countries: {
            blacklist: countries
          }
        }
      });

      return this;
    }

    public openAudienceToAll(): this {

      this.sendRequest({
        target_audience: {
          audience_type: AudienceType.ALL
        }
      });

      return this;
    }

    public closeAudienceToAll(): this {

      this.sendRequest({
        target_audience: {
          audience_type: AudienceType.NONE
        }
      });

      return this;
    }

    public deleteAudience(): this {

      this.deleteField([Field.TARGET_AUDIENCE]);

      return this;
    }

    public setChatExtensionHomeUrl(url: string, inTest: boolean = true, shareButton: Webview.ShareButton = Webview.ShareButton.HIDE): this {

      logger.info("setting chat extension home URL", url);

      (async () => {

        try {
          await this.sendRequest({
            home_url: {
              url: url,
              webview_height_ratio: Webview.HeightRatio.TALL,
              webview_share_button: shareButton,
              in_test: inTest
            }
          });

          logger.info("..chat extension home URL successfully set");

        } catch (error) {

          logger.error("..unable to set chat extension home URL", error);
        }
      })();

      return this;
    }

    public deleteChatExtensionHomeUrl(): this {

      this.deleteField([Field.CHAT_EXTENSION_WEB_URL]);

      return this;
    }

    private setField(field: Field, data: any): void {

      logger.info(`setting the field '${field}' to`, data);

      let payload: any = {};
      payload[field] = data;

      (async () => {
        
        try {
          await this.sendRequest(payload);

          logger.info(`..the field '${field}' succesfully set`);

        } catch (error) {

          logger.error(`..unable to set the field '${field}'`, error);
        }
      })();
    }

    private async getField(field: Field): Promise<any> {

      logger.info("MessengerProfile.getField:", field);

      return (await this.sendRequest({
        fields: field
      }, { method: GraphApi.Method.GET })).data;
    }

    private deleteField(fields: Array<Field>): void {

      this.sendRequest({
        fields: fields
      }, GraphApi.Method.DELETE)
    }
  }

  export interface GetStartedButton {
    payload: string;
  }

  export namespace MenuItemType {
    export const WEB_URL = "web_url";
    export const POSTBACK = "postback";
    export const NESTED = "nested";
  }

  export type MenuItemType = typeof MenuItemType.WEB_URL | typeof MenuItemType.POSTBACK | typeof MenuItemType.NESTED;

  export interface Menu {
    call_to_actions?: Array<MenuItem>;
  }

  export interface MenuItem extends Menu {
    type: MenuItemType;
    title: string;
    url?: string;
    payload?: string;
    webview_height_ratio?: Webview.HeightRatio;
    messenger_extensions?: boolean;
    fallback_url?: string;
    webview_share_button?: Webview.ShareButton;
  }

  export interface PersistentMenu extends Menu {
    locale: string;
    composer_input_disabled: boolean;
    call_to_actions: Array<MenuItem>;
  }

  export interface Greeting {
    locale: string;
    text: string;
  }

  export namespace Greeting {
    export namespace Personalize {
      export const FIRST_NAME = "user_first_name";
      export const LAST_NAME = "user_last_name";
      export const FULL_NAME = "user_full_name";
    }
  }

  export namespace AudienceType {
    export const ALL = "all";
    export const CUSTOM = "custom";
    export const NONE = "none";
  }

  export type AudienceType = typeof AudienceType.ALL | typeof AudienceType.CUSTOM | typeof AudienceType.NONE;

  export interface Country {
    blacklist?: Array<string>;    // ISO 3166 Alpha-2 codes
    whitelist?: Array<string>;    // ISO 3166 Alpha-2 codes
  }

  export interface TargetAudience {
    audience_type: AudienceType;
    countries?: {
      whitelist?: Array<Country>,
      blacklist?: Array<Country>
    }
  }

  export interface ChatExtensionHomeUrl {
    url: string;
    webview_height_ratio: Webview.HeightRatio;
    webview_share_button: Webview.ShareButton;
    in_test: boolean;
  }

  export interface Request extends GraphApi.Request {
    persistent_menu?: Array<PersistentMenu>;
    get_started?: GetStartedButton;
    greeting?: Array<Greeting>;
    whitelisted_domains?: Array<string>;
    account_linking_url?: string;
    target_audience?: TargetAudience;
    home_url?: ChatExtensionHomeUrl;
    fields?: Field | Array<Field>;
  }

  export namespace Field {
    export const PERSISTENT_MENU = "persistent_menu";
    export const GET_STARTED_BUTTON = "get_started";
    export const GREETING = "greeting";
    export const DOMAIN_WHITELIST = "whitelisted_domains";
    export const ACCOUNT_LINKING_URL = "account_linking_url";
    export const TARGET_AUDIENCE = "target_audience";
    export const CHAT_EXTENSION_WEB_URL = "home_url";
  }

  export type Field =
    typeof Field.PERSISTENT_MENU |
    typeof Field.GET_STARTED_BUTTON |
    typeof Field.GREETING |
    typeof Field.DOMAIN_WHITELIST |
    typeof Field.ACCOUNT_LINKING_URL |
    typeof Field.TARGET_AUDIENCE |
    typeof Field.CHAT_EXTENSION_WEB_URL;

  export interface Response {
    result: string;
  }
}