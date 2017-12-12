'use strict';

describe('Contact Page E2E Tests:', function () {
    beforeAll(function () {
        browser.get('/contact');
    });
    function changeLanguage(index) {
        element(by.id('split-button')).click();
        let languageOptions = element(by.css('.dropdown-menu-init')).all(by.tagName('a'));
        languageOptions.get(index).click();
    }

    it('Should show correct page title', function () {
        expect(browser.getTitle()).toBe('eRealm Info & Tech - Master - Contact');
    });

    function submitInfo() {
        element(by.css('.submit-btn')).element(by.css('[type=reset]')).click();
        element(by.model('vm.contact.name')).clear().sendKeys('test name');
        element(by.model('vm.contact.email')).clear().sendKeys('test@erealmsoft.com');
        element(by.model('vm.contact.message')).clear().sendKeys('test message');
        element(by.css('.submit-btn')).element(by.css('[type=submit]')).click();
        browser.sleep(2000);
    }

    describe('English Version:', function () {
        beforeEach(function () {
            changeLanguage(0);
        });

        it('Should show correct active Menu', function () {
            expect(element(by.css('.header-nav')).all(by.css('.active')).getText()).toEqual(['CONTACT']);
        });

        it('Should show correct message after info submitted', function () {
            submitInfo();
            expect(element(by.css('.submit-btn')).element(by.css('.text-success')).getText()).toEqual('Your information submitted successfully!');
        });
    });

    describe('Chinese Version:', function () {
        beforeEach(function () {
            changeLanguage(1);
        });

        it('Should show correct active Menu', function () {
            expect(element(by.css('.header-nav')).all(by.css('.active')).getText()).toEqual(['联系我们']);
        });

        it('Should show correct message after info submitted', function () {
            submitInfo();
            expect(element(by.css('.submit-btn')).element(by.css('.text-success')).getText()).toEqual('您的信息提交成功！');
        });
    });
});
