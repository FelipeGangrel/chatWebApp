import { ChatWebAppPage } from './app.po';

describe('chat-web-app App', function() {
  let page: ChatWebAppPage;

  beforeEach(() => {
    page = new ChatWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
