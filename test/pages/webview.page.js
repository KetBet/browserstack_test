class WebviewPage {
    get widgetText() {
    return $(
      '//android.widget.TextView[@text="Next-gen browser and mobile automation test framework for Node.js"]'
    );
  }

  get navBarBtn() {
    return $('//android.widget.Button[@text="Toggle navigation bar"]')
  }

  get searchIcon() {
    return $('//android.widget.Button[@text="Search"]');
  }
}

module.exports = new WebviewPage();
