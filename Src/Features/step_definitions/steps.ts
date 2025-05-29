import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

setDefaultTimeout(30 * 1000);

Given('I am on the Sauce Demo login page', async () => {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
});

When('I login with {string} and {string}', async (username: string, password: string) => {
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
});

When('I add the backpack to the cart', async () => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

When('I go to the cart and checkout', async () => {
  await page.locator('.shopping_cart_link').click();
  await page.locator('[data-test="checkout"]').click();
});

When('I enter my name {string}, {string}, and postcode {string}', async (first, last, postcode) => {
  await page.locator('[data-test="firstName"]').fill(first);
  await page.locator('[data-test="lastName"]').fill(last);
  await page.locator('[data-test="postalCode"]').fill(postcode);
  await page.locator('[data-test="continue"]').click();
});

When('I place the order', async () => {
  await page.locator('[data-test="finish"]').click();
});

Then('I should be returned to products page', async () => {
  await page.locator('[data-test="back-to-products"]').click();
  await browser.close();
});
