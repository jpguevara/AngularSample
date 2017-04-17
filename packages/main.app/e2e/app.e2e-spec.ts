import { Main.AppPage } from './app.po';

describe('main.app App', () => {
  let page: Main.AppPage;

  beforeEach(() => {
    page = new Main.AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
