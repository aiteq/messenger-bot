import { LoginButtonBuilder } from "../../src/fb-api-helpers/login-button-builder";

describe("LoginButtonBuilder", () => {

    let b: LoginButtonBuilder;

    test("constructor(valid-url)", () => {
        expect(b = new LoginButtonBuilder("http://www.aiteq.com")).toBeInstanceOf(LoginButtonBuilder);
    });
});
