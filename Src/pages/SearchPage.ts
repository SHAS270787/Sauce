import { Page } from '@playwright/test';

export class SearchPage {
  private page: Page;
  private popup: Page | null = null;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    console.log('Navigating to https://www.directferries.co.uk/');
    await this.page.goto('https://www.directferries.co.uk/', {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    await this.page.waitForSelector('[data-testid="outbound-route-display"]', { timeout: 20000 });
  }

  async selectRoute(route: string) {
    console.log(`Selecting route: ${route}`);
    await this.page.getByTestId('outbound-route-display').click();
    await this.page.getByTestId(route).click();
  }

  async selectChildren(count: number) {
    console.log(`Selecting ${count} children`);
    await this.page.getByTestId('outbound-passengers').click();
    for (let i = 1; i < count; i++) {
      await this.page.getByTestId('counter-increment-range-0-17').getByTestId('add').click();
    }
    await this.page.getByTestId('button-done').click();
  }

  async selectVehicle() {
    console.log('Selecting a vehicle');
    await this.page.getByTestId('outbound-vehicle-display').click();
    await this.page.getByTestId('vehicle-list-type-2').click();
    await this.page.getByTestId('radio-button-abarth').click();
    await this.page.getByTestId('radio-button-500').click();
    await this.page.getByTestId('button-done').click();
  }

  async clickSearch() {
    console.log('Preparing to click search button...');
    await this.page.waitForSelector('[data-testid="button-submit"]', { timeout: 30000 });
    console.log('Clicking search button and waiting for popup...');
    const [popup] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.getByTestId('button-submit').click(),
    ]);
    this.popup = popup;
    await this.popup.waitForLoadState('domcontentloaded');
    console.log('Popup loaded.');
  }
  }
