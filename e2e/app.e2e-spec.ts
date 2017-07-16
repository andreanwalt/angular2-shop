import { Angular2ShopPage } from './app.po';

describe('angular2-shop App', () => {
  let page: Angular2ShopPage;

  beforeEach(() => {
    page = new Angular2ShopPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to ag!!'))
      .then(done, done.fail);
  });
});
