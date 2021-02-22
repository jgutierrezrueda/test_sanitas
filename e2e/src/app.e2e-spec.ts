import { AppPage } from './app.po';
import {browser} from 'protractor';
import {environment} from '../../src/environments/environment';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('TestApp');
  });

  it('should be default num items', () => {
    page.navigateTo();
    expect(page.getTotalItemsText()).toContain(environment.numItemsDefault);
  });
});
