import { Styng2Page } from './app.po';

describe('styng2 App', () => {
  let page: Styng2Page;

  beforeEach(() => {
    page = new Styng2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
