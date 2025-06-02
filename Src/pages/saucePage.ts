import { Page, expect } from '@playwright/test';

export class SauceDemoPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }

  async addFirstProductToCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  async goToCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

  async proceedToCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async enterCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    await this.page.locator('[data-test="continue"]').click();
  }

  async finishOrder() {
    await this.page.locator('[data-test="finish"]').click();
  }

  async verifyOrderConfirmation() {
    const confirmation = this.page.locator('.complete-header');
    await expect(confirmation).toBeVisible();
    await expect(confirmation).toHaveText('Thank you for your order!');
  }
}
