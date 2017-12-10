import { Angular2ShopPage } from './about.po';
import { browser, by, element } from 'protractor';

describe('angular2-shop About', () => {
  let page: Angular2ShopPage;

  beforeEach(() => {
    page = new Angular2ShopPage();
  });

  it('should display headline', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Das Team'))
      .then(done, done.fail);
  });

  it('should be 9 profils cart', function() {
    let list = element.all(by.css('.card'));
    expect(list.count()).toBe(9);
  });

});
