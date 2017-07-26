import * as log4js from "log4js";

log4js.configure("bin/config/log4js.json");

export const logger = log4js.getLogger("@aiteq/messenger-bot");