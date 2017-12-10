import { Angular2ShopPage } from './contact.po';
import { browser, by, element } from 'protractor';

describe('angular2-shop Contact', () => {
  let page: Angular2ShopPage;

  beforeEach(() => {
    page = new Angular2ShopPage();
  });

  it('should display contact form', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Kontaktformular'))
      .then(done, done.fail);
  });

  it('should be checked', () => {
    element(by.cssContainingText('option', 'Herr')).click();
  });

  it('should be checked', () => {
    let elem =  element(by.name("firstname"));
    elem.sendKeys("Max");
  });

  it('should be show mandatory field from error message', () => {
    let elem =  element(by.name("lastname"));
    elem.sendKeys("mu");
    expect(element.all(by.css('.alert-danger div')).get(0).getText()).toBe('Nachname ist ein Pflichtfeld!');
  });

  it('should be show min length error message', () => {
    let elem =  element(by.name("lastname"));
    elem.clear();
    elem.sendKeys("mu");
    expect(element.all(by.css('.alert-danger div')).get(1).getText()).toBe('Nachname muss mindestens 4 Zeichen lang sein.');
  });

  it('should be Mustermann last name', () => {
    let elem =  element(by.name("lastname"));
    elem.clear();
    elem.sendKeys("Mustermann");
  });

});
