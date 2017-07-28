import { Request, Response, NextFunction } from "express";
import { logger } from "../logger";
import { RouterService } from "./router-service";
import { ChatExtension } from "./messenger-extension";


/**
 * Handles all request routed to Chat Extensions path (default "/ext").
 * Chat Extensions are rendered using Express Response.render method.
 */
export class ExtensionService extends RouterService {

  /**
   * Mounts a Chat Extension to path according its name. If the extensions path is set to "/ext" and
   * the name of the given extension is "orders", the extension's path will be "/ext/orders".
   * The name actually represents the name of a <i>view</i> to be rendered by Express using specified
   * view engine.
   * 
   * @param {ChatExtension} extension 
   * @returns {this} 
   */
  public addExtension(extension: ChatExtension): this {

    let view: string = extension.getView();

    logger.info("adding extension", view);

    this.get(`/${view}`, (req: Request, res: Response, next: NextFunction) => {

      logger.debug(`received request for EXTENSION '${view}':`, req.query);
      res.render(view, extension.getData());
    });

    return this;
  }
}
