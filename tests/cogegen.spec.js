
/*npx playwright codegen -o tests/filename*/

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1780723516353');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('songs');
  await expect(page.getByRole('combobox', { name: 'Search' })).toHaveValue('songs');
  await expect(page.getByRole('search')).toContainText('Google Search');
  await page.getByRole('button', { name: 'Google Search' }).click();
  await page.locator('iframe[name="a-glhxiknnevum"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
});