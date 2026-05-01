import { allure } from 'allure-playwright';
import type { Page } from '@playwright/test';
import { HeaderFragment } from '../fragments/header.fragment';
import { BasePage } from './base.page';

export class MainPage extends BasePage {
  headerFragment: HeaderFragment;

  constructor(page: Page) {
    super(page);
    this.headerFragment = new HeaderFragment(page);
  }

  async open(): Promise<void> {
    await allure.step('Open home page', async () => {
      await this.openPage('/');
    });
  }
}
