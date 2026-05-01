import { test as baseTest } from '@playwright/test';
import { ApiMock } from '../mocks/api.mock';
import { DemoPage } from '../ui/pages/demoPage';
import { MainPage } from '../ui/pages/mainPage';
import { SsoLoginPage } from '../ui/pages/ssoLoginPage';

interface PomFixtures {
  mainPage: MainPage;
  demoPage: DemoPage;
  ssoLoginPage: SsoLoginPage;
  apiMock: ApiMock;
}

export const pomTest = baseTest.extend<PomFixtures>({
  apiMock: async ({ page }, use) => {
    const apiMock = new ApiMock(page);
    await use(apiMock);
  },

  demoPage: async ({ page }, use) => {
    const demoPage = new DemoPage(page);
    await use(demoPage);
  },

  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await use(mainPage);
  },

  ssoLoginPage: async ({ page }, use) => {
    const ssoLoginPage = new SsoLoginPage(page);
    await use(ssoLoginPage);
  },
});
