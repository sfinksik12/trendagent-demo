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

    await ssoLoginPage.loginFormFragment.authorize('79536691903', '1602268');
  });
});
