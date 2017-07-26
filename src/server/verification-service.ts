import { Request, Response, NextFunction } from "express";
import { RouterService } from "./router-service";
import { logger } from "../utils/logger";

export class VerificationService extends RouterService {

  constructor(private verifyToken?: string) {
    super();

    verifyToken = verifyToken || process.env.GAE_VERSION;

    if (!verifyToken) {
      throw new Error("Verify token not set");
    }

    this.get("/", (req: Request, res: Response, next: NextFunction) => {

      logger.info("webhook verification request received:", req.query);

      if (req.query["hub.mode"] === "subscribe") {

        if (req.query["hub.verify_token"] === verifyToken) {

          logger.info("verified with token:", verifyToken);
          logger.debug("returning 200 OK and challenge:", req.query["hub.challenge"])
          res.status(200).send(req.query["hub.challenge"]);
          return;

        } else {

          logger.warn("not verified - wrong verification token");
          logger.debug("returning 403 Forbidden");
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