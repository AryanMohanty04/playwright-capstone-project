const { test, expect } = require("@playwright/test");

test.describe("Search Module", () => {

  test.beforeEach(async ({ page }) => {

    await page.goto("https://www.razer.com/");

    // Handle cookie popup safely
    const acceptBtn = page.locator('button:has-text("Accept All")');

    if (await acceptBtn.isVisible().catch(() => false)) {
      await acceptBtn.click();
    }

  });

  // reusable search opener
  async function openSearch(page) {

  const searchBtn = page.locator('button[data-testid="search-button"], button:has-text("Search")').first();

  await searchBtn.waitFor({
    state: "visible",
    timeout: 20000,
  });

  await searchBtn.click();

  const searchBox = page.locator('input[type="search"], input[placeholder*="Search"]').first();

  await searchBox.waitFor({
    state: "visible",
    timeout: 20000,
  });

  return searchBox;
}

  // SR_01
  test("SR_01 - Search icon opens correctly", async ({ page }) => {

    const searchBox = await openSearch(page);

    await expect(searchBox).toBeVisible();
  });

  // SR_02
  test("SR_02 - Search textbox accepts input", async ({ page }) => {

    const searchBox = await openSearch(page);

    await searchBox.fill("BlackShark");

    await expect(searchBox).toHaveValue("BlackShark");
  });

  // SR_03
  test("SR_03 - Search redirects to result page", async ({ page }) => {

    const searchBox = await openSearch(page);

    await searchBox.fill("BlackShark");
    await searchBox.press("Enter");

    await page.waitForLoadState("networkidle");

    await expect(page).toHaveURL(/search/);
  });

  // SR_04
  test("SR_04 - Search results visible", async ({ page }) => {

    const searchBox = await openSearch(page);

    await searchBox.fill("BlackShark");
    await searchBox.press("Enter");

    await page.waitForLoadState("networkidle");

    await expect(page.locator("body"))
      .toContainText("BlackShark");
  });

  // SR_05
  test("SR_05 - Invalid search handled correctly", async ({ page }) => {

    const searchBox = await openSearch(page);

    await searchBox.fill("aryanmohanty");
    await searchBox.press("Enter");

    await page.waitForLoadState("networkidle");

    await expect(page.locator("body"))
      .toContainText("No matches were found");
  });

  // SR_06
  test("SR_06 - Empty search validation works", async ({ page }) => {

    const searchBox = await openSearch(page);

    await searchBox.press("Enter");

    await expect(page).toHaveURL("https://www.razer.com/");
  });

  // SR_07
  test("SR_07 - Multiple searches work consecutively", async ({ page }) => {

    let searchBox = await openSearch(page);

    await searchBox.fill("BlackShark");
    await searchBox.press("Enter");

    await page.waitForLoadState("networkidle");

    // reopen search
    const searchBtn = page.locator('[aria-label="Search"]');

    await searchBtn.click();

    searchBox = page.locator('input[placeholder*="Search"]');

    await searchBox.fill("Razer Blade");
    await searchBox.press("Enter");

    await page.waitForLoadState("networkidle");

    await expect(page.locator("body"))
      .toContainText("Razer Blade");
  });

  // SR_08
  test("SR_08 - Search closes successfully", async ({ page }) => {

    await openSearch(page);

    await closeBtn.click();
  });

  // SR_09
  test("SR_09 - Search works on mobile viewport", async ({ page }) => {

    await page.setViewportSize({
      width: 375,
      height: 667,
    });

    await page.goto("https://www.razer.com/");

    const acceptBtn = page.locator('button:has-text("Accept All")');

    if (await acceptBtn.isVisible().catch(() => false)) {
      await acceptBtn.click();
    }

    const searchBox = await openSearch(page);

    await searchBox.fill("BlackShark");
    await searchBox.press("Enter");

    await page.waitForLoadState("networkidle");

    await expect(page.locator("body"))
      .toContainText("BlackShark");
  });

  // SR_10
  test("SR_10 - Search suggestions appear dynamically", async ({ page }) => {

    const searchBox = await openSearch(page);

    await searchBox.fill("Blade");

    await expect(
      page.locator("#alg-search-products")
    ).toBeVisible();
  });

});