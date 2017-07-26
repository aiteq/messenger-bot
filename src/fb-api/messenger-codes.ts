import { logger } from "../utils/logger";
import { GraphApi } from "./graph-api";
import { Webview } from "./webview";


export namespace MessengerCodes {

  export class Api extends GraphApi<Request> {

    constructor(protected accessToken: string) {

      super(accessToken, GraphApi.Endpoint.MESSENGER_CODES);
    }

    public generateCode(size?: number, ref?: string): void {

      let req: Request = {
        type: Type.STANDARD,
        image_size: size || 1000        
      };

      if (ref) {
        req.data = { ref: ref }
      }

      this.sendRequest(req);
    }
  }

  export namespace Type {
  	export const STANDARD = "standard";
  }

  export type Type = typeof Type.STANDARD;

  export interface Request extends GraphApi.Request {
  	type: Type;
  	image_size?: number;
  	data?: { ref: string };
  }

  export interface Response {
    uri: string;
  }
}