import { allure } from 'allure-playwright';
import { expect, test } from '../index';

test.describe('Авторизация', () => {
  test.beforeEach(async ({ mainPage }) => {
    await mainPage.open();
  });

  test('Клик по Войти открывает форму SSO', async ({ mainPage, ssoLoginPage }) => {
    await allure.step('Нажать Войти в хедере', async () => {
      await mainPage.headerFragment.loginLink.click();
      await mainPage.page.waitForURL(/sso\.trend\.tech\/login/);
    });

    await allure.step('Отображается форма авторизации SSO', async () => {
      await expect(ssoLoginPage.loginFormFragment.root).toBeVisibleAllure();
      await expect(ssoLoginPage.loginFormFragment.phoneInput).toBeVisibleAllure();
      await expect(ssoLoginPage.loginFormFragment.passwordInput).toBeVisibleAllure();
      await expect(ssoLoginPage.loginFormFragment.submitButton).toBeVisibleAllure();
    });

    const phone = process.env.SSO_TEST_PHONE;
    const password = process.env.SSO_TEST_PASSWORD;
    if (phone && password) {
      await ssoLoginPage.loginFormFragment.authorize(phone, password);
    }
  });
});
