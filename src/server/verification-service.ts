import { NextFunction, Request, Response } from "express";
import logger from "../logger";
import { RouterService } from "./router-service";

/**
 * A middleware handling webhook verification request.
 * (see https://developers.facebook.com/docs/messenger-platform/guides/setup#webhook_setup)
 */
export class VerificationService extends RouterService {

  /**
   * Creates an instance of VerificationService.
   * @param {string} verifyToken - a string to be given during setting up the webhook
   */
  constructor(private verifyToken: string) {

    super();

    // install handler
    this.get("/", (req: Request, res: Response, next: NextFunction) => {

      logger.info("webhook verification request received:", req.query);

      if (req.query["hub.mode"] === "subscribe") {

        if (req.query["hub.verify_token"] === verifyToken) {

          logger.info("webhook is verified with token:", verifyToken);
          res.status(200).send(req.query["hub.challenge"]);
          return;

        } else {

          logger.warn("not verified - wrong verification token");
          res.status(403).end();
          return;
        }
      } else {

        logger.error("unknown request (hub.mode != 'subscribe')");
      }

      logger.debug("returning 400 Bad Request");
      res.status(400).end();
    });
  }
}
