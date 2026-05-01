import type { Page } from '@playwright/test';
import { SsoLoginFormFragment } from '../fragments/sso-login-form.fragment';
import { BasePage } from './base.page';

/** Страница входа SSO (редирект после «Войти» с лендинга). */
export class SsoLoginPage extends BasePage {
  loginFormFragment: SsoLoginFormFragment;

  constructor(page: Page) {
    super(page);
    this.loginFormFragment = new SsoLoginFormFragment(page);
  }
}
