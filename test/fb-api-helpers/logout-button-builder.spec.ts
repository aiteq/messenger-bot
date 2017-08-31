import { LogoutButtonBuilder } from "../../src/fb-api-helpers/logout-button-builder";

describe("LogoutButtonBuilder", () => {

    let b: LogoutButtonBuilder;

    test("constructor()", () => {
        expect(b = new LogoutButtonBuilder()).toBeInstanceOf(LogoutButtonBuilder);
    });
});
