import { allure } from 'allure-playwright';
import type { Locator, Page } from '@playwright/test';
import { Button } from '../components/button.component';
import { BaseFragment } from './base.fragment';

/** Фрагмент хедера лендинга */
export class HeaderFragment extends BaseFragment {
  root: Locator;
  logoLink: Button;
  languageSelector: Button;
  contactsLink: Button;
  loginLink: Button;
  getAccessButton: Button;

  constructor(page: Page) {
    super(page);
    this.root = this.page.locator('nav.navbar');
    this.logoLink = new Button(this.page, this.root, 'a.logo-link', 'TrendAgent logo link');
    this.languageSelector = new Button(this.page, this.root, '[role="combobox"]', 'Language selector');
    this.contactsLink = new Button(this.page, this.root, 'a[href="/help"]', 'Contacts link');
    this.loginLink = new Button(this.page, this.root, 'a[href*="/oauth"]', 'Login link');
    this.getAccessButton = new Button(this.page, this.root, 'a[href="/demo"]', 'Get access link');
  }

  async getLanguageOption(languageName: string): Promise<Button> {
    return allure.step(`Получение опции языка "${languageName}"`, async () => {
      return new Button(this.page, this.root, `text=${languageName}`, `${languageName} language option`);
    });
  }
}
