const homePage = require("../pages/home.page");
const loginPage = require("../pages/login.page");
const registrationPage = require("../pages/registration.page");

describe("Sign up invalid", () => {
    beforeEach(async () => {
      await homePage.tapTheLoginIcon();
    });
  it("should not sign up with invalid credentials", async () => {
    await loginPage.tapTheSignUpLink();
    await expect(registrationPage.signUpBtn).toBeDisplayed();
    await registrationPage.tapTheSignUpBtn();
    await expect(registrationPage.emailErrorMsg).toBeDisplayed();
    await expect(registrationPage.emailErrorMsg).toHaveText(
      "Please enter a valid email address"
    );
    await expect(registrationPage.passwordErrorMsg).toBeDisplayed();
    await expect(registrationPage.passwordErrorMsg).toHaveText(
      "Please enter at least 8 characters"
    );
    await expect(registrationPage.confirmPasswordErrorMsg).toBeDisplayed();
    await expect(registrationPage.confirmPasswordErrorMsg).toHaveText(
      "Please enter the same password"
    );
  });
});
