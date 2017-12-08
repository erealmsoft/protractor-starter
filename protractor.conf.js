'use strict';

// Protractor configuration
var config = {
    baseUrl: 'https://www.erealmsoft.com',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/*.js'],
    capabilities: {
        browserName: 'firefox'
    },
    // multiCapabilities: [{
    //     browserName: 'firefox'
    // }, {
    //     browserName: 'chrome'
    // }],
    onPrepare: function () {
        browser.driver.manage().window().setSize(1200, 1000);
    }
};

exports.config = config;
