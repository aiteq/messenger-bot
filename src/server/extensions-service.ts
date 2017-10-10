import { NextFunction, Request, Response } from "express";
import logger from "../logger";
import { ChatExtension } from "./chat-extension";
import { RouterService } from "./router-service";

/**
 * Handles all request routed to Chat Extensions path (default "/ext").
 * Chat Extensions are rendered using Express Response.render method.
 */
export class ExtensionsService extends RouterService {

    private static readonly RE_DOMAIN = /\.(messenger|facebook)\.com\/?/;

  /**
   * Mounts a Chat Extensions to path according its name. If the extensions path is set to "/ext" and
   * the name of the given extension is "orders", the extension's path will be "/ext/orders".
   * The name actually represents the name of a <i>view</i> to be rendered by Express using specified
   * view engine.
   *
   * @param {ChatExtension} extension
   * @returns {this}
   */
  public addExtension(extension: ChatExtension): this {

    const view: string = extension.getView();

    logger.info("adding extension", view);

    this.get(`/${view}`, (req: Request, res: Response, next: NextFunction) => {

      logger.debug(`received request for EXTENSION '${view}':`, req.query);

      // allow to run correctly in desktop messenger (https://developers.facebook.com/docs/messenger-platform/webview/extensions#webview_on_web)
      const ref = ExtensionsService.RE_DOMAIN.exec(req.headers.referer as string);
      ref && res.header("X-Frame-Options", `ALLOW-FROM https://www${ref[0]}`);
      res.header("Content-Security-Policy", "frame-ancestors 'self' https://*.messenger.com/ https://*.facebook.com/");

      // render the view
      res.render(view, extension.getModel());
    });

    return this;
  }
}
