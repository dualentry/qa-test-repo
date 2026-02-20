import { expect, test as base } from '@playwright/test';

import { PlaywrightHomePage } from '../pages/playwright-home.page';

type Fixtures = {
  homePage: PlaywrightHomePage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new PlaywrightHomePage(page));
  },
});

export { expect };
