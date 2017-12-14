'use strict';

describe('About Page E2E Tests:', function () {
    beforeAll(function () {
        browser.get('/about');
        browser.driver.manage().window().setSize(1200, 1600);
        browser.sleep(3000);
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

    function changeMobileLanguage(index) {
        element(by.css('.hamburger-box')).click();
        let languageOptions = element(by.css('.small-nav')).all(by.css('.small-nav-item'));
        languageOptions.get(4 + index).click();
    }

    describe('Mobile Version:', function () {
        beforeAll(function () {
            browser.driver.manage().window().setSize(375, 667);
        });

        it('Should show correct english Menus', function () {
            changeMobileLanguage(0);
            element(by.css('.hamburger-box')).click();
            expect(element(by.css('.small-nav')).all(by.css('.small-nav-item')).getText()).toEqual(['HOME', 'PORTFOLIO', 'CONTACT', 'ABOUT', 'ENGLISH', '简体中文'])
            element(by.css('.hamburger-box')).click();
        });
        it('Should show correct chinese Menus', function () {
            changeMobileLanguage(1);
            element(by.css('.hamburger-box')).click();
            expect(element(by.css('.small-nav')).all(by.css('.small-nav-item')).getText()).toEqual(['主页', '项目展示', '联系我们', '关于我们', 'ENGLISH', '简体中文'])
            element(by.css('.hamburger-box')).click();
        });
    });
});
