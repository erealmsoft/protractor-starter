'use strict';

describe('About Page E2E Tests:', function () {
    beforeAll(function () {
        browser.get('/about');
    });
    function changeLanguage(index) {
        element(by.id('split-button')).click();
        let languageOptions = element(by.css('.dropdown-menu-init')).all(by.tagName('a'));
        languageOptions.get(index).click();
    }

    it('Should show correct page title', function () {
        expect(browser.getTitle()).toBe('eRealm Info & Tech - Master - About');
    });
    it('Should show correct list', function () {
        expect(element.all(by.css('.staff-box li')).count()).toBe(20);
    });
    describe('English Version:', function () {
        beforeEach(function () {
            changeLanguage(0);
        });

        it('Should show correct active Menu', function () {
            expect(element(by.css('.header-nav')).all(by.css('.active')).getText()).toEqual(['ABOUT']);
        });

        it('Should show correct staff name', function () {
            expect(element.all(by.css('.staff-box li h2')).get(0).getText()).toBe('HOWARD HUANG');
        });
    });

    describe('Chinese Version:', function () {
        beforeEach(function () {
            changeLanguage(1);
        });

        it('Should show correct active Menu', function () {
            expect(element(by.css('.header-nav')).all(by.css('.active')).getText()).toEqual(['关于我们']);
        });

        it('Should show correct staff name', function () {
            expect(element.all(by.css('.staff-box li h2')).get(0).getText()).toBe('黄海涛');
        });
    });
});
