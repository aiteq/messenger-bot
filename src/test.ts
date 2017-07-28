import { BotUtils } from "./utils/bot-utils";

let utils: BotUtils = new BotUtils({
    verifyToken: "rubi-1354-coin",
    accessToken: "EAAVOaCaOkcsBAJtWPI61phtGAZCZAzFzdfzDerYnmMexdQ1udgi4tP7vhYesJ4OESbPMba74mEREj79cHbuI163jDs3DOXjWwYK1ZAZBuXNcbQ7UhHPB7OC1ImFr5ZBeMQI1lR9sBtbr2Etd6TUFbYFyAkW6hj57Dj7FxHkf4RRWsksXKV1Ez",
    appSecret: "2d5f081197d81b8929eb5269c7245843"
});

(async () => {
    await utils.generateMessengerCode("code.png", 10000);
})();