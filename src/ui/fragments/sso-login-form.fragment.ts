import { allure } from 'allure-playwright';
import type { Locator, Page } from '@playwright/test';
import { Button } from '../components/button.component';
import { Input } from '../components/input.component';
import { Title } from '../components/title.component';
import { BaseFragment } from './base.fragment';

/** Форма входа SSO */
export class SsoLoginFormFragment extends BaseFragment {
  root: Locator;
  form: Locator;
  phoneInput: Input;
  passwordInput: Input;
  submitButton: Button;

  constructor(page: Page) {
    super(page);
    this.root = this.page.locator('div.ta-login-form__form-wrapper');
    this.form = this.root.locator('form.ta-login-form__form');
    this.phoneInput = new Input(this.page, this.form, 'input[name="phone"]', 'SSO phone');
    this.passwordInput = new Input(this.page, this.form, 'input[name="password"]', 'SSO password');
    this.submitButton = new Button(this.page, this.form, 'button[type="submit"]', 'SSO submit');
  }

  async authorize(phone: string, password: string): Promise<void> {
    await allure.step('Авторизация в форме SSO', async () => {
      await this.phoneInput.fill(phone);
      await this.passwordInput.fill(password);
      await this.submitButton.click();
    });
  }
}
