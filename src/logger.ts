import * as log4js from "log4js";

try {
    log4js.configure("bin/config/log4js.json");
} catch (error) {
    log4js.configure({
        appenders: {
            console: {
                type: "console",
                layout: {
                    type: "pattern",
                    pattern: "[%[%5.5p%]] [%c] %m"
                }
            }
        },
        categories: {
            "@aiteq/messenger-bot": { "appenders": ["console"], "level": "ALL" },
            "default": { "appenders": ["console"], "level": "ALL" }
        }
    });
}

export const logger = log4js.getLogger("@aiteq/messenger-bot");