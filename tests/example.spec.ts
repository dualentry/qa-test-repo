import { expect, Page, test } from '@playwright/test';

const baseUrl = 'https://www.userinyerface.com/';

async function openLanding(page: Page): Promise<void> {
  await page.goto(baseUrl);
}

test.describe('User Inyerface - bad examples (intentional)', () => {
  test('test 1', async ({ page }) => {
    await openLanding(page);
    await page.getByRole('button', { name: /start/i }).click();
  });

  test('test 2', async ({ page }) => {
    await openLanding(page);

    const titleVisible = await page.getByRole('heading', { name: /user inyerface/i }).isVisible();
    expect(titleVisible).toBeTruthy();

    const startText = await page.getByRole('button', { name: /start/i }).textContent();
    expect(startText).toContain('Start');
  });

  test('test 3', async ({ page }) => {
    await openLanding(page);
    await page.waitForTimeout(5000);
    await expect(page.getByRole('button', { name: /start/i })).toBeVisible();
  });

  test('test 4', async ({ page }) => {
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.getByRole('button', { name: /start/i }).click();
    await expect(page.getByRole('heading', { name: /personal details/i })).toBeVisible();
  });

  test('test 5', async ({ page }) => {
    await openLanding(page);
    await page.getByRole('button', { name: /start/i }).click({ force: true });
  });
});
