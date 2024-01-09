class RegistrationPage {
  get emailErrorMsg() {
    return $(
      '//android.widget.TextView[@text="Please enter a valid email address"]'
    );
  }

  get passwordErrorMsg() {
    return $(
      '//android.widget.TextView[@text="Please enter at least 8 characters"]'
    );
  }

  get confirmPasswordErrorMsg() {
    return $(
      '//android.widget.TextView[@text="Please enter the same password"]'
    );
  }

  get signUpBtn() {
    return $(`//android.view.ViewGroup[@content-desc="button-SIGN UP"]`);
  }

  async tapTheSignUpBtn() {
    await this.signUpBtn.click();
  }
}

module.exports = new RegistrationPage();
