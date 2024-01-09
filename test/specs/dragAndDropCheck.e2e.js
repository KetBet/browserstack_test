const homePage = require("../pages/home.page.js");
const dragPage = require("../pages/drag.page.js");

describe("Drag and drop elements", () => {
  it("should drag and drop elements", async () => {
    await homePage.tapTheDragIcon();
    await expect(dragPage.dragScreenDesc).toBeDisplayed();
    await expect(dragPage.dragScreenDesc).toHaveText("Drag and Drop");
    await dragPage.drag(200, 1600, 300, 800);
    await dragPage.drag(350, 1600, 750, 1050);
    await dragPage.drag(550, 1600, 750, 600);
    await dragPage.drag(750, 1600, 550, 600);
    await dragPage.drag(900, 1600, 550, 1050);
    await dragPage.drag(250, 1750, 750, 800);
    await dragPage.drag(450, 1750, 550, 800);
    await dragPage.drag(650, 1750, 300, 600);
    await dragPage.drag(800, 1750, 300, 1050);
    await expect(dragPage.congratsMsg).toBeDisplayed();
    await expect(dragPage.congratsMsg).toHaveText("Congratulations");
  });
});

