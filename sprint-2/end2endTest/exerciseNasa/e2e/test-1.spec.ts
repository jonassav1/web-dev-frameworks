import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('http://localhost:5174/');
  await page.getByRole('link', { name: 'Picture of the day' }).click();
  await page.getByRole('link', { name: 'Favorites' }).click();
  await page.getByRole('link', { name: 'Picture of the day' }).click();
  await page
    .getByRole('textbox', { name: 'Date for the NASA picture of' })
    .fill('2025-04-24');
  await page.getByRole('heading', { name: 'Picture of the day' }).click();
  await page.getByRole('img', { name: "NGC 6164: A Dragon's Egg" }).click();
  await page.getByRole('button', { name: '❤️' }).click();
  await page.getByRole('link', { name: 'Favorites' }).click();
  await page.getByText("NGC 6164: A Dragon's Egg").click();
  await expect(page.getByText("NGC 6164: A Dragon's Egg")).toHaveText(
    "A Dragon's Egg"
  );
});
