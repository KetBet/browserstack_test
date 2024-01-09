class HomePage {
  get wdioLogo() {
    return $(
      '//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]'
    );
  }

  get appDescription() {
    return $(
      '//android.widget.TextView[@text="Demo app for the appium-boilerplate"]'
    );
  }

  get webviewIcon() {
    return $('//android.widget.TextView[@text="󰖟"]');
  }

  get loginIcon() {
    return $(`//android.widget.Button[@content-desc="Login"]`);
  }

  get dragIcon() {
    return $(`//android.widget.Button[@content-desc="Drag"]`);
  }

  async tapTheWebviewIcon() {
    await this.webviewIcon.click();
  }

  async tapTheLoginIcon() {
    await this.loginIcon.click();
  }

  async tapTheDragIcon() {
    await this.dragIcon.click();
  }
}

module.exports = new HomePage();
