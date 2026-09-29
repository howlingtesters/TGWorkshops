import { test, expect } from '@playwright/test';

/**
 * POC: Node + Playwright + lokalny serwer działają.
 * Playwright sam startuje `npm run server` (patrz playwright.config.ts).
 */
test('otwiera lokalny kreator postaci', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/kreator\.html/);
  await expect(page.getByRole('heading', { name: 'Create your team' })).toBeVisible();
});
