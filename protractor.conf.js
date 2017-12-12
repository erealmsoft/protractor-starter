'use strict';

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
    dest: 'report/screenshots',
    filename: 'test-report.html'
});

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
    // Setup the report before any tests start
    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(reporter);
        browser.driver.manage().window().setSize(1200, 1000);
    },
    // Assign the test reporter to each running instance
    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};

exports.config = config;
