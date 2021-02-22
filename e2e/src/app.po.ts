import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  // get total items tag inner text
  getTotalItemsText() {
    return element(by.css('#totalItems')).getText() as Promise<string>;
  }
}
