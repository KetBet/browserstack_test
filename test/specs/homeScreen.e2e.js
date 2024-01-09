const homePage = require("../pages/home.page");

describe("Home screen verification", () => {
  it("should check the content of the home screen", async () => {
    await expect(homePage.wdioLogo).toBeDisplayed();
    await expect(homePage.appDescription).toHaveText(
      "Demo app for the appium-boilerplate"
    );
  });
});
