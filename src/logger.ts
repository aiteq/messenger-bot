import * as log4js from "log4js";

log4js.configure({
    appenders: {
        console: {
            type: "console",
            layout: {
                type: "pattern",
                pattern: "[%[%5.5p%]] [%c] %m"
            }
        },
        cli: {
            type: "console",
            layout: {
                type: "pattern",
                pattern: "[%[%p%]] %m"
            }
        }
    },
    categories: {
        "@aiteq/messenger-bot": { "appenders": ["console"], "level": "ALL" },
        cli: { "appenders": ["cli"], "level": "INFO" },
        default: { "appenders": ["console"], "level": "ALL" }
    }
});

export default log4js.getLogger("@aiteq/messenger-bot");
