exports.config = {
    runner: 'local',
    specs: ['./tests/specs/**/*.js'],
    capabilities: [{
      platformName: 'Android',
      'appium:deviceName': 'Android Emulator',
      'appium:app': './app.apk',
      'appium:automationName': 'UiAutomator2'
    }],
    framework: 'mocha',
    reporters: ['spec'],
  };