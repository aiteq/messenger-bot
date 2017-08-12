import { BotServer, WebhookEvent, Chat, Conversation } from "./index";

let bot: BotServer = new BotServer({
  name: "RUBICOIN",
  port: process.env.PORT || 8088,
  verifyToken: "rubi-1354-coin",
  accessToken: "x",
  appSecret: "x"
});

bot.on(WebhookEvent.PERSISTENT_MENU, "menu-item-song", async (chat: Chat) => {
    let conv: Conversation = chat.startConversation();
    let favSong: string = await conv.ask("What's your favourite song?");
});
