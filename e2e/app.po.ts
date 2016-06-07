export class HealrpgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('healrpg-app h1')).getText();
  }
}
