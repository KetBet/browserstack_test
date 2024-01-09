const homePage = require("../pages/home.page");
const webviewPage = require("../pages/webview.page");

describe("Webview screen verification", () => {
  it("should check the content of the webview screen", async () => {
    await homePage.tapTheWebviewIcon();
    await expect(webviewPage.widgetText).toHaveText(
      "Next-gen browser and mobile automation test framework for Node.js"
    );
    await expect(webviewPage.navBarBtn).toBeDisplayed();
    await expect(webviewPage.searchIcon).toBeDisplayed();
  });
});
