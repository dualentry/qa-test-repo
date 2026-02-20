import { Locator, Page } from '@playwright/test';

import { BasePage } from './base.page';

export class PlaywrightHomePage extends BasePage {
  readonly url = 'https://playwright.dev/';

  constructor(page: Page) {
    super(page);
  }

  get getStartedLink(): Locator {
    return this.page.getByRole('link', { name: 'Get started' });
  }

  get installationHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Installation' });
  }

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async clickGetStarted(): Promise<void> {
    await this.getStartedLink.click();
  }
}
