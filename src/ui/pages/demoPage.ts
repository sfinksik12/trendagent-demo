import { allure } from 'allure-playwright';
import type { Page } from '@playwright/test';
import { DemoFormFragment } from '../fragments/demo-form.fragment';
import { DownloadAppFragment } from '../fragments/download-app.fragment';
import { FooterFragment } from '../fragments/footer.fragment';
import { HeaderFragment } from '../fragments/header.fragment';
import { BasePage } from './base.page';

export class DemoPage extends BasePage {
  headerFragment: HeaderFragment;
  demoFormFragment: DemoFormFragment;
  downloadAppFragment: DownloadAppFragment;
  footerFragment: FooterFragment;

  constructor(page: Page) {
    super(page);
    this.headerFragment = new HeaderFragment(page);
    this.demoFormFragment = new DemoFormFragment(page);
    this.downloadAppFragment = new DownloadAppFragment(page);
    this.footerFragment = new FooterFragment(page);
  }

  async open(): Promise<void> {
    await allure.step('Open demo page', async () => {
      await this.openPage('/demo');
    });
  }
}
