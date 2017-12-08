'use strict';

describe('Home Page E2E Tests:', function () {
    beforeAll(function () {
        browser.get('/');
    });
    function changeLanguage(index) {
        element(by.id('split-button')).click();
        let languageOptions = element(by.css('.dropdown-menu-init')).all(by.tagName('a'));
        languageOptions.get(index).click();
    }

    it('Should show correct page title', function () {
        expect(browser.getTitle()).toBe('eRealm Info & Tech - Master - Home');
    });

    describe('English Version:', function () {
        beforeEach(function () {
            changeLanguage(0);
        });

        it('Should show correct Menus', function () {
            let menuList = element(by.css('.header-nav')).all(by.tagName('li'));
            expect(menuList.get(0).getText()).toEqual('HOME');
            expect(menuList.get(1).getText()).toEqual('PORTFOLIO');
            expect(menuList.get(2).getText()).toEqual('CONTACT');
            expect(menuList.get(3).getText()).toEqual('ABOUT');
        });

        it('Should show correct active Menu', function () {
            expect(element(by.css('.header-nav')).all(by.css('.active')).getText()).toEqual(['HOME']);
        });
    });

    describe('Chinese Version:', function () {
        beforeEach(function () {
            changeLanguage(1);
        });

        it('Should show correct Menus', function () {
            let menuList = element(by.css('.header-nav')).all(by.tagName('li'));
            expect(menuList.get(0).getText()).toEqual('主页');
            expect(menuList.get(1).getText()).toEqual('项目展示');
            expect(menuList.get(2).getText()).toEqual('联系我们');
            expect(menuList.get(3).getText()).toEqual('关于我们');
        });

        it('Should show correct active Menu', function () {
            expect(element(by.css('.header-nav')).all(by.css('.active')).getText()).toEqual(['主页']);
        });
    });
});
