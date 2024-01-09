class LoginPage {
  get loginScreenDesc() {
    return $(`//android.widget.TextView[@text="Login / Sign up Form"]`);
  }
  get loginLink() {
    return $(
      `//android.view.ViewGroup[@content-desc="button-login-container"]`
    );
  }
  get signUpLink() {
    return $(
      `//android.view.ViewGroup[@content-desc="button-sign-up-container"]`
    );
  }

  get loginBtn() {
    return $(`//android.view.ViewGroup[@content-desc="button-LOGIN"]`);
  }

  get emailAlertMsg() {
    return $(
      '//android.widget.TextView[@text="Please enter a valid email address"]'
    );
  }

  get passwordAlertMsg() {
    return $(
      '//android.widget.TextView[@text="Please enter at least 8 characters"]'
    );
  }

  async tapTheLoginBtn() {
    await this.loginBtn.click();
  }

  async tapTheSignUpLink() {
    await this.signUpLink.click();
  }
}

module.exports = new LoginPage();
