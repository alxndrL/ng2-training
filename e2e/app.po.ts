import { browser, element, by } from 'protractor';

export class TodosAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('behalf-root h1')).getText();
  }
}
