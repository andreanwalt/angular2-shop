import { Angular2ShopPage } from './shop.po';
import { browser, by, element } from 'protractor';
//var sgpt = require('sg-protractor-tools');


describe('angular2-shop Shop', () => {
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

  it('should be 32 items in list', function() {
    let list = element.all(by.css('.panel'));
    expect(list.count()).toBe(32);
  });


  it('should be click product and should be 4 active elements in panels class', () => {

    element.all(by.css('.order')).then(function(elements) {
      // elements is an array of ElementFinders.
      elements[0].click();
      browser.driver.sleep(1000);
      elements[0].click();
      browser.driver.sleep(1000);
      elements[1].click();
      browser.driver.sleep(1000);
      elements[2].click();
      browser.driver.sleep(1000);

      // window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
      browser.executeScript('window.scrollTo(0, 770)').then(function () {
        browser.driver.sleep(1000);
        //expect(<some control>.<some state>).toBe(<some outcome>);
        elements[7].click();
      });

      let list = element.all(by.css('.panel .active'));
      expect(list.count()).toBe(4);
    });

  });

});
