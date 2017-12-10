import { browser, by, element } from 'protractor';

export class Angular2ShopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.id('info-text')).getText();
  }
}
