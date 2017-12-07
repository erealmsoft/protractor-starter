'use strict';

describe('Home Page E2E Tests:', function () {
    beforeEach(function () {
        browser.get('https://www.erealmsoft.com');
    });
    it('Should show correct page title', function () {
        expect(browser.getTitle()).toBe('eRealm Info & Tech - Master - Home');
    });

    it('Should show correct Menus', function () {
        expect(element(by.css('.header-nav')).all(by.tagName('li')).getText()).toEqual(['HOME', 'PORTFOLIO', 'CONTACT', 'ABOUT']);
    });

    it('Should show correct active Menu', function () {
        expect(element(by.css('.header-nav')).all(by.css('.active')).getText()).toEqual(['HOME']);
    });
});
