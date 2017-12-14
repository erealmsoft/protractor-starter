'use strict';

describe('Portfolio Page E2E Tests:', function () {
    beforeAll(function () {
        browser.get('/portfolio');
        browser.driver.manage().window().setSize(1200, 1600);
    });
    function changeLanguage(index) {
        element(by.id('split-button')).click();
        let languageOptions = element(by.css('.dropdown-menu-init')).all(by.tagName('a'));
        languageOptions.get(index).click();
    }

    it('Should show correct page title', function () {
        expect(browser.getTitle()).toBe('eRealm Info & Tech - Master - Portfolio');
    });

    describe('English Version:', function () {
        beforeEach(function () {
            changeLanguage(0);
        });

        it('Should show correct active Menu', function () {
            expect(element(by.css('.header-nav')).all(by.css('.active')).getText()).toEqual(['PORTFOLIO']);
        });

        it('Should show correct portfolio', function () {
            expect(element.all(by.css('.project-wrapper h3')).get(0).getText()).toEqual('Kodak Winning Fotos App and Website');
        });
    });

    describe('Chinese Version:', function () {
        beforeEach(function () {
            changeLanguage(1);
        });

        it('Should show correct active Menu', function () {
            expect(element(by.css('.header-nav')).all(by.css('.active')).getText()).toEqual(['项目展示']);
        });

        it('Should show correct portfolio', function () {
            expect(element.all(by.css('.project-wrapper h3')).get(0).getText()).toEqual('Kodak WinningFotos 网站及相关App');
        });
    });
});
