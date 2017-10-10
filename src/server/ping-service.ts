import { NextFunction, Request, Response } from "express";
import logger from "../logger";
import { RouterService } from "./router-service";

/**
 * A middleware handling ping requests.
 * It's useful for status monitoring tools like UptimeRobot.
 *
 * If the bot server is up and ok, the message passed to constructor is returned.
 */
export class PingService extends RouterService {

  /**
   * Creates an instance of PingService.
   * @param {string} [message="OK"] - a string to be returned when the bot server is healthy
   */
  constructor(private message: string = "OK") {

    super();

    // install handler
    this.get("/", (req: Request, res: Response, next: NextFunction) => {

      logger.info("ping request received:", req.query);

      res.status(200).send(message);
    });
  }
}
