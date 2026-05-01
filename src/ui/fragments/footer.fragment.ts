import type { Locator, Page } from '@playwright/test';
import { Button } from '../components/button.component';
import { Label } from '../components/label.component';
import { Title } from '../components/title.component';
import { BaseFragment } from './base.fragment';

/** Фрагмент основного футера демо-страницы. */
export class FooterFragment extends BaseFragment {
  root: Locator;
  logoLink: Button;
  telegramLink: Button;
  vkLink: Button;
  projectsTitle: Title;
  educationTitle: Title;
  rewardsTitle: Title;
  contactsTitle: Title;
  trendAgentLink: Button;
  educationCoursesLink: Button;
  rewardsTableLink: Button;
  regionalContactsLink: Button;
  copyrightText: Label;
  madeByText: Label;

  constructor(page: Page) {
    super(page);
    this.root = this.page.locator('footer.footer');
    this.logoLink = new Button(this.page, this.root, 'a.footer__logo', 'Footer logo link');
    this.telegramLink = new Button(this.page, this.root, 'a[href="https://t.me/trendagent"]', 'Telegram link');
    this.vkLink = new Button(this.page, this.root, 'a[href="https://vk.com/trendagent"]', 'VK link');
    this.projectsTitle = new Title(this.page, this.root, 'h6:has-text("Проекты")', 'Projects title');
    this.educationTitle = new Title(this.page, this.root, 'h6:has-text("TrendAgent Education")', 'Education title');
    this.rewardsTitle = new Title(this.page, this.root, 'h6:has-text("Вознаграждение")', 'Rewards title');
    this.contactsTitle = new Title(this.page, this.root, 'h6:has-text("Контакты")', 'Contacts title');
    this.trendAgentLink = new Button(
      this.page,
      this.root,
      'nav.footer__nav > .footer__nav-group:first-child > .footer__nav-section:first-child a:first-of-type',
      'TrendAgent project link',
    );
    this.educationCoursesLink = new Button(
      this.page,
      this.root,
      'nav.footer__nav > .footer__nav-group:first-child > .footer__nav-section:nth-child(2) a:first-of-type',
      'Online courses link',
    );
    this.rewardsTableLink = new Button(
      this.page,
      this.root,
      'nav.footer__nav > .footer__nav-group:nth-child(2) > .footer__nav-section:first-child a:first-of-type',
      'Rewards table link',
    );
    this.regionalContactsLink = new Button(
      this.page,
      this.root,
      'nav.footer__nav > .footer__nav-group:nth-child(2) > .footer__nav-section:nth-child(2) a:first-of-type',
      'Regional contacts link',
    );
    this.copyrightText = new Label(this.page, this.root, 'p:has-text("TrendAgent Software")', 'Footer copyright text');
    this.madeByText = new Label(this.page, this.root, 'p:has-text("TrendTech")', 'Footer made by text');
  }
}
