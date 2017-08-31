import * as Send from "../../src/fb-api/send";
import * as UserProfile from "../../src/fb-api/user-profile";
import { Chat } from "../../src/server/chat";

const config = require("../../work/test-config.json");
const ACCESS_TOKEN: string = config.accessToken;

describe("Chat", () => {

    let bot: Chat;

    test("constructor(partnerId, sendApi, userProfileApi)", () => {
        expect(bot = new Chat("pid", new Send.Api(ACCESS_TOKEN), new UserProfile.Api(ACCESS_TOKEN))).toBeInstanceOf(Chat);
    });
});
