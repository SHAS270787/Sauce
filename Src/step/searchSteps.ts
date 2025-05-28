import { Given, When, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

let browser: Browser;
let page: Page;
let searchPage: SearchPage;

Before({ timeout: 30000 }, async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  searchPage = new SearchPage(page);
});

Given('I navigate to the Direct Ferries homepage', async function () {
  await searchPage.navigate();
});

When('I select the Dover route', async function () {
  await searchPage.selectRoute('Dover-Calais');
});

When('I select 1 child', async function () {
  await searchPage.selectChildren(1);
});

When('I select a vehicle', async function () {
  await searchPage.selectVehicle();
});

When('I click the Search button', { timeout: 30000 }, async function () {
    await searchPage.clickSearch();
  });
  
After(async function () {
  if (page) await page.close();
  if (browser) await browser.close();
});
