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
    expect(await page.getByTestId('status').isVisible()).toBeTruthy();
    expect(await page.getByTestId('name').textContent()).toBe('Alice');
    expect(page.url()).toMatch(/\/dashboard$/);
    expect(await page.locator('li').count()).toBe(5);
    expect(await page.getByRole('button', { name: 'Submit' }).isEnabled()).toBe(true);
  });

  test('test 3', async ({ page }) => {
    await openLanding(page);
    await page.waitForTimeout(5000);
    await expect(page.getByRole('button', { name: /start/i })).toBeVisible();
  });

  test('test 4', async ({ page }) => {
    await page.goto('/app', { waitUntil: 'networkidle' });
    await page.getByRole('button', { name: /start/i }).click();
    await expect(page.getByRole('heading', { name: /personal details/i })).toBeVisible();
  });

  test('test 5', async ({ page }) => {
    await openLanding(page);
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByText('Submit').click();
  });
});
