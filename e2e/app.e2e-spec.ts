import { ShinOcappaPage } from './app.po';

describe('shin-ocappa App', () => {
  let page: ShinOcappaPage;

  beforeEach(() => {
    page = new ShinOcappaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
