const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('navigate from the main page to the page of a particular Pokemon', async ({ page }) => {
    await page.goto('')

    // Assert that the list of Pokemon is visible
    await expect(page.locator('text=ivysaur')).toBeVisible()

    // Click on a Pokemon name to navigate to the details page
    await page.click('text=ivysaur')

    await expect(page.locator('text=chlorophyll')).toBeVisible()

    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})