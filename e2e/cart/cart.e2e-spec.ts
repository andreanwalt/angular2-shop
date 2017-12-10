import { Angular2ShopPage } from './cart.po';
import { browser, by, element } from 'protractor';

describe('angular2-shop Cart', () => {
  let page: Angular2ShopPage;

  beforeEach(() => {
    page = new Angular2ShopPage();
  });

  it('should display headline text', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Warenkorb'))
      .then(done, done.fail);
  });


  it('should be 4 items in cart', function() {
    let list = element.all(by.css('.cart tbody tr'));
    expect(list.count()).toBe(4);
  });

  it('should be click increment and qty should be 44', () => {
    let elem = element.all(by.css('.qty')).get(0);
    expect(elem.getAttribute('value')).toBe('44');
  });

  it('should be click delete, accept confirm and should be 3 items in cart', () => {
    element.all(by.css('.delete')).then(function(elements) {
      elements[1].click();
      browser.switchTo().alert().accept();
      let list = element.all(by.css('.cart tbody tr'));
      expect(list.count()).toBe(3);
    });
  });

  it('should be click increment and qty should be 13', () => {
    element.all(by.css('.inc')).then(function(elements) {
      elements[1].click();
    });
    let elem = element.all(by.css('.qty')).get(1);
    expect(elem.getAttribute('value')).toBe('13');
  });

  it('should be click decrement and qty should be 12', () => {

    element.all(by.css('.dec')).then(function(elements) {
      elements[1].click();
    });
    let elem = element.all(by.css('.qty')).get(1);
    expect(elem.getAttribute('value')).toBe('12');
  });

  it("should be 122 from input", function(){
      let elem = element.all(by.css('.qty')).get(0);
      // alternate
      // let elem = element.all(by.css('.qty')).first();
      elem.sendKeys(2);
      expect(elem.getAttribute('value')).toBe('122');
  });

  it("should be 13 from input", function(){
      let elem = element.all(by.css('.qty')).get(0);
      elem.clear()
      elem.sendKeys(3);
      expect(elem.getAttribute('value')).toBe('13');
      //browser.pause();
  });

});
