import { Angular2ShopPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('angular2-shop App', () => {
  let page: Angular2ShopPage;

  beforeEach(() => {
    page = new Angular2ShopPage();
  });

  it('should display cookie message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('This site use cookies to provide the best experience. Click here for more information.'))
      .then(done, done.fail);
  });

  it('should be click cookie message and should be empty', () => {

    element.all(by.css('#info span')).then(function(elements) {
      elements[0].click();
    });

    let elem = element.all(by.css('#info-text')).get(0);
    expect(element(by.id('info-text')).getText()).toBe('');
  });

});
