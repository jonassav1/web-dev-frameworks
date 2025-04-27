import { test, expect, Locator } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(100000);
  async function waitAndClick(locator: Locator) {
    await page.waitForTimeout(10000);
    await locator.click();
  }

  await page.goto('http://localhost:5174/');

  await waitAndClick(page.getByRole('button', { name: '❤️' }));

  await page.getByLabel('Date for the NASA picture of').fill('2025-04-16');

  await page.getByRole('button', { name: '❤️' });

  await page.getByRole('link', { name: 'Favorites' });

  await waitAndClick(page.getByRole('button', { name: '❤️' }).first());

  await waitAndClick(page.getByRole('link', { name: 'Picture of the day' }));

  await page.getByLabel('Date for the NASA picture of').fill('2025-04-04');

  await waitAndClick(page.getByRole('button', { name: '❤️' }));

  await waitAndClick(page.getByRole('link', { name: 'Picture of the day' }));

  await expect(page.getByText('Hickson 44 in Leo')).toHaveText(
    'Hickson 44 in Leo'
  );
  await expect(
    page.getByRole('img', { name: 'Hickson 44 in Leo' })
  ).toBeVisible();
});
