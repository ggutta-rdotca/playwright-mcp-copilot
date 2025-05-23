import { test, expect } from '@playwright/test';


test('Toronto property search', async ({ page }) => {
  // Navigate to realtor.ca
  await page.goto('https://www.realtor.ca');

  // Handle cookie consent if present
  const cookieDismiss = page.getByRole('link', { name: 'Dismiss' });
  if (await cookieDismiss.isVisible())
    await cookieDismiss.click();

  // Navigate to Toronto properties
  await page.goto('https://www.realtor.ca/on/toronto/real-estate');

  // Wait for listing cards to be visible
  const listingCards = page.locator('.listingCard');
  await expect(listingCards.first()).toBeVisible();

  // Get the first listing's title
  const firstListingTitle = page.locator('.listingCard h2').first();
  await expect(firstListingTitle).toBeVisible();
  
  // Assert that the title contains either "Toronto" or "ON"
  const titleText = await firstListingTitle.textContent();
  expect(titleText?.includes('Toronto') || titleText?.includes('ON')).toBeTruthy();
});
