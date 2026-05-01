import type { Locator, Page } from '@playwright/test';
import { Button } from '../components/button.component';
import { Checkbox } from '../components/checkbox.component';
import { Input } from '../components/input.component';
import { Label } from '../components/label.component';
import { Title } from '../components/title.component';
import { BaseFragment } from './base.fragment';

/** Фрагмент формы получения демо-доступа. */
export class DemoFormFragment extends BaseFragment {
  root: Locator;
  form: Locator;
  title: Title;
  description: Label;
  citySelector: Button;
  fullNameInput: Input;
  phoneCountrySelector: Button;
  phoneInput: Input;
  emailInput: Input;
  agreementCheckbox: Checkbox;
  agreementText: Label;
  agreementPolicyLink: Button;
  submitButton: Button;

  constructor(page: Page) {
    super(page);
    this.root = this.page.locator('div.demo');
    this.form = this.root.locator('form.demo-form');
    this.title = new Title(this.page, this.root, 'h2', 'Demo page title');
    this.description = new Label(this.page, this.root, '.top-wrapper > span.section-sub:not(.section-sub_screen-sm)', 'Demo page description');
    this.citySelector = new Button(this.page, this.form, '> .field-root:first-child [role="combobox"]', 'City selector');
    this.fullNameInput = new Input(this.page, this.form, 'input[name="name"]', 'Full name input');
    this.phoneCountrySelector = new Button(this.page, this.form, '.demo-form__phone-wrapper [role="combobox"]', 'Phone country selector');
    this.phoneInput = new Input(this.page, this.form, 'input[name="phone"]', 'Phone input');
    this.emailInput = new Input(this.page, this.form, 'input[name="email"]', 'Email input');
    this.agreementCheckbox = new Checkbox(this.page, this.form, 'input[name="agreement"]', 'Agreement checkbox');
    this.agreementText = new Label(this.page, this.form, '.demo-form__agreement-label', 'Agreement text');
    this.agreementPolicyLink = new Button(this.page, this.form, 'a[href="https://legal.trendagent.ru/privacy"]', 'Privacy policy link');
    this.submitButton = new Button(this.page, this.form, 'button[type="submit"]', 'Submit demo access button');
  }
}
