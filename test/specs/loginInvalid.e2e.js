const homePage = require("../pages/home.page");
const loginPage = require("../pages/login.page");

describe("Login invalid", () => {
  it("should not login with invalid credentials", async () => {
    await homePage.tapTheLoginIcon();
    await expect(loginPage.loginScreenDesc).toHaveText("Login / Sign up Form");
    await loginPage.tapTheLoginBtn();
    await expect(loginPage.emailAlertMsg).toBeDisplayed();
    await expect(loginPage.emailAlertMsg).toHaveText(
      "Please enter a valid email address"
    );
    await expect(loginPage.passwordAlertMsg).toBeDisplayed();
    await expect(loginPage.passwordAlertMsg).toHaveText(
      "Please enter at least 8 characters"
    );
  });
});
