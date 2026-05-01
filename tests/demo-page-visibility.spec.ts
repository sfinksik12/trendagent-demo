import { allure } from 'allure-playwright';
import { test, expect } from '../index';

test.describe('Проверка отображения основных элементов страницы', () => {
  test.beforeEach(async ({ demoPage }) => {
    await demoPage.open();
  });

  test('Все основные фрагменты страницы отображаются', async ({ demoPage }) => {
    await allure.step('Проверка отображения элементов хедера', async () => {
      await expect.soft(demoPage.headerFragment.root).toBeVisibleAllure();
      await expect.soft(demoPage.headerFragment.logoLink).toBeVisibleAllure();
      await expect.soft(demoPage.headerFragment.languageSelector).toBeVisibleAllure();
      await expect.soft(demoPage.headerFragment.contactsLink).toBeVisibleAllure();
      await expect.soft(demoPage.headerFragment.loginLink).toBeVisibleAllure();
      await expect.soft(demoPage.headerFragment.getAccessButton).toBeVisibleAllure();
    });

    await allure.step('Проверка отображения элементов формы', async () => {
      await expect.soft(demoPage.demoFormFragment.root).toBeVisibleAllure();
      await expect.soft(demoPage.demoFormFragment.form).toBeVisibleAllure();
      await expect.soft(demoPage.demoFormFragment.title).toBeVisibleAllure();
      await expect.soft(demoPage.demoFormFragment.description).toBeVisibleAllure();
      await expect.soft(demoPage.demoFormFragment.citySelector).toBeVisibleAllure();
      await expect.soft(demoPage.demoFormFragment.fullNameInput).toBeVisibleAllure();
      await expect.soft(demoPage.demoFormFragment.phoneCountrySelector).toBeVisibleAllure();
      await expect.soft(demoPage.demoFormFragment.phoneInput).toBeVisibleAllure();
      await expect.soft(demoPage.demoFormFragment.emailInput).toBeVisibleAllure();
      await expect.soft(demoPage.demoFormFragment.agreementText).toBeVisibleAllure();
      await expect.soft(demoPage.demoFormFragment.agreementPolicyLink).toBeVisibleAllure();
      await expect.soft(demoPage.demoFormFragment.submitButton).toBeVisibleAllure();
    });

    await allure.step('Проверка отображения блока скачивания приложения', async () => {
      await expect.soft(demoPage.downloadAppFragment.root).toBeVisibleAllure();
      await expect.soft(demoPage.downloadAppFragment.title).toBeVisibleAllure();
      await expect.soft(demoPage.downloadAppFragment.subtitle).toBeVisibleAllure();
      await expect.soft(demoPage.downloadAppFragment.appStoreLink).toBeVisibleAllure();
      await expect.soft(demoPage.downloadAppFragment.googlePlayLink).toBeVisibleAllure();
      await expect.soft(demoPage.downloadAppFragment.appGalleryLink).toBeVisibleAllure();
      await expect.soft(demoPage.downloadAppFragment.qrCodeLink).toBeVisibleAllure();
    });

    await allure.step('Проверка отображения элементов футера', async () => {
      await expect.soft(demoPage.footerFragment.root).toBeVisibleAllure();
      await expect.soft(demoPage.footerFragment.logoLink).toBeVisibleAllure();
      await expect.soft(demoPage.footerFragment.telegramLink).toBeVisibleAllure();
      await expect.soft(demoPage.footerFragment.vkLink).toBeVisibleAllure();
      await expect.soft(demoPage.footerFragment.copyrightText).toBeVisibleAllure();
      await expect.soft(demoPage.footerFragment.madeByText).toBeVisibleAllure();
    });
  });
});
