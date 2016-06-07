import { HealrpgPage } from './app.po';

describe('healrpg App', function() {
  let page: HealrpgPage;

  beforeEach(() => {
    page = new HealrpgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('healrpg works!');
  });
});
