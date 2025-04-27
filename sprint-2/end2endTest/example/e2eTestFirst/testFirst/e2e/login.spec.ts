import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await page.getByLabel('Email').fill('Johnsson@gmail.com')
  await page.getByLabel('Password').fill('123')
  await page.getByRole('button', { name: 'sign in' }).click()
  await expect(page.getByText('Password is weak')).toBeVisible()

  await page.getByLabel('Password').fill('password123.')
  await page.getByRole('button', { name: 'sign in' }).click()
  await expect(page.getByText('Welcome!')).toBeVisible()
})
