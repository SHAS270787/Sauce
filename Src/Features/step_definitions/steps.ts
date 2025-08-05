import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

setDefaultTimeout(30 * 1000);

const BACKPACK_ID = '4';

Given('I am on the Sauce Demo login page', async function (this: CustomWorld) {
  await this.page.goto('https://www.saucedemo.com/');
});

When('I login with {string} and {string}', async function (this: CustomWorld, username: string, password: string) {
  await this.page.locator('[data-test="username"]').fill(username);
  await this.page.locator('[data-test="password"]').fill(password);
  await this.page.locator('[data-test="login-button"]').click();
});

When('I add the backpack to the cart', async function (this: CustomWorld) {
  await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

When('I go to the cart', async function (this: CustomWorld) {
  await this.page.locator('.shopping_cart_link').click();
});

Then('I should see the backpack in the cart', async function (this: CustomWorld) {
  const item = await this.page.locator('.inventory_item_name').textContent();
  expect(item).toContain('Sauce Labs Backpack');
});

Then('the cart badge should show {int} item(s)', async function (this: CustomWorld, count: number) {
  const badgeText = await this.page.locator('.shopping_cart_badge').textContent();
  expect(parseInt(badgeText || '0')).toBe(count);
});

Then('the local storage should contain the backpack item', async function (this: CustomWorld) {
  const item = await this.page.evaluate(() => {
    return window.localStorage.getItem('cart-contents');
  });
  if (!item || !item.includes(BACKPACK_ID)) {
    throw new Error(`Backpack item not found in local storage. Found: ${item}`);
  }
});

Then('I navigate back to the product listing page', async function (this: CustomWorld) {
  await this.page.locator('[data-test="continue-shopping"]').click();
});

Then('I go to the cart again', async function (this: CustomWorld) {
  await this.page.locator('.shopping_cart_link').click();
});
