
import { expect, Page, test } from '@playwright/test';

const baseUrl = 'https://www.userinyerface.com/';

async function openLanding(page: Page): Promise<void> {
  await page.goto(baseUrl);
}

test.describe('User Inyerface - good examples', () => {
  test('test 1: good: assert landing content is visible', async ({ page }) => {
    await openLanding(page);
    await expect(page.getByRole('heading', { name: /user inyerface/i })).toBeVisible();
  });

  test('test 2: good: use web-first assertions for UI state', async ({ page }) => {
    await openLanding(page);
    await expect(page.getByRole('button', { name: /start/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /start/i })).toBeEnabled();
  });

  test('test 3: good: wait via expected UI state, not timeouts', async ({ page }) => {
    await openLanding(page);
    await expect(page.getByRole('button', { name: /start/i })).toBeVisible();
    await page.getByRole('button', { name: /start/i }).click();
  });

  test('test 4: good: avoid networkidle, assert a user-visible cue', async ({ page }) => {
    await openLanding(page);
    await page.getByRole('button', { name: /start/i }).click();
    await expect(page.getByRole('heading', { name: /personal details/i })).toBeVisible();
  });

  test('test 5: good: avoid force, make the action realistic', async ({ page }) => {
    await openLanding(page);
    const startButton = page.getByRole('button', { name: /start/i });
    await expect(startButton).toBeVisible();
    await startButton.click();
  });
});