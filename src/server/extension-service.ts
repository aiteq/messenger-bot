import { Request, Response, NextFunction } from "express";
import { RouterService } from "./router-service";
import { logger } from "../utils/logger";
import { MessengerExtension } from "./messenger-extension";


export class ExtensionService extends RouterService {

  public addExtension(extension: MessengerExtension): this {

    let name: string = extension.getName();

    logger.info("adding extension", name);

    this.get(`/${name}`, (req: Request, res: Response, next: NextFunction) => {

      logger.info(`received request for EXTENSION '${name}':`, req.query);

      res.render(name, extension.getData());
    });

    return this;
  }
}
