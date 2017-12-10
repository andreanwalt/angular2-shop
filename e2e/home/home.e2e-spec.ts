import { Angular2ShopPage } from './home.po';

describe('angular2-shop Home', () => {
  let page: Angular2ShopPage;

  beforeEach(() => {
    page = new Angular2ShopPage();
  });

  it('should display State of the Art Text', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('State of the Art'))
      .then(done, done.fail);
  });
});
