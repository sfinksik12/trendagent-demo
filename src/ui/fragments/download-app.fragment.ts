import type { Locator, Page } from '@playwright/test';
import { Button } from '../components/button.component';
import { Label } from '../components/label.component';
import { BaseFragment } from './base.fragment';

/** Фрагмент блока скачивания мобильного приложения. */
export class DownloadAppFragment extends BaseFragment {
  root: Locator;
  title: Label;
  subtitle: Label;
  appStoreLink: Button;
  googlePlayLink: Button;
  appGalleryLink: Button;
  qrCodeLink: Button;

  constructor(page: Page) {
    super(page);
    this.root = this.page.locator('div.mobile-apps.demo-apps');
    this.title = new Label(this.page, this.root, '.message-bubble__title', 'Download app title');
    this.subtitle = new Label(this.page, this.root, '.message-bubble__sub', 'Download app subtitle');
    this.appStoreLink = new Button(this.page, this.root, '.mobile-apps__link_desktop a[href*="apps.apple.com"]', 'App Store link');
    this.googlePlayLink = new Button(this.page, this.root, '.mobile-apps__link_desktop a[href*="play.google.com"]', 'Google Play link');
    this.appGalleryLink = new Button(this.page, this.root, '.mobile-apps__link_desktop a[href*="appgallery.huawei.com"]', 'AppGallery link');
    this.qrCodeLink = new Button(this.page, this.root, 'a[href="https://promo.trendagent.ru/apps"]', 'QR code link');
  }
}
