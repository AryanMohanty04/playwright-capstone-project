const { test, expect, devices } = require("@playwright/test");
const { HomePage } = require("../../pages/HomePage");

test.describe("Module 1 - Homepage Navigation Module (HN)", () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.setLocation();
  });

  test("HN_01 - Verifying Homepage loads successfully", async ({ page }) => {
    await page.waitForURL("https://blinkit.com/");
    await expect(page).toHaveURL("https://blinkit.com/");
  });

  test("HN_02 - Verify location popup acceptance", async ({ page }) => {
    await expect(page).toHaveURL("https://blinkit.com/");
  });

  test("HN_03 - Verify Shop Now button functionality", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.clickFnvBanner();
    await page.waitForLoadState("domcontentloaded");
  });

  test("HN_04 - Verify logo returns to Homepage", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.clickFnvBanner();
    await homePage.clickLogo();
    await expect(page).toHaveURL("https://blinkit.com/");
  });

  test("HN_05 - Verifying Search Box Typing", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.searchBox).toBeDefined();
  });

  test("HN_06 - Verify search input accepts typing", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.fillSearchBox("egg");
  });

  test("HN_07 - Verify search and redirect functionality", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.fillSearchBox("egg");
    await expect(page).toHaveURL("https://blinkit.com/s/?q=egg");
  });

  test("HN_09 - Verify footer", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.scrollToFooter();
    await expect(homePage.footer).toBeVisible();
  });

  test("HN_10 - Verify Contact footer link", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.scrollToFooter();
    const newPage = await homePage.clickContactLink();
    await expect(newPage).toHaveURL(/contact/);
    await expect(newPage).toHaveTitle(/contact/i);
  });

  test("HN_11 - Verify browser back navigation", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.clickDairyBanner();
    await page.waitForLoadState("domcontentloaded");
    await expect(page).not.toHaveURL("https://blinkit.com/");
    await page.goBack();
    await page.waitForURL("https://blinkit.com/");
    await expect(page).toHaveURL("https://blinkit.com/");
  });

  test("HN_12 - Verify sticky navbar", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.navbar).toBeVisible();
    await homePage.scrollDown();
    await expect(homePage.navbar).toBeVisible();
  });
});

test("HN_13 - Verify mobile responsiveness", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
  });
  const page = await context.newPage();
  await page.goto("https://blinkit.com/");
  await expect(page).toHaveURL(/blinkit/);
  await expect(page.locator("body")).toBeVisible();
  await expect(page.locator("header")).toBeVisible();
});

test("HN_14 - Verify search suggestions appear", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.setLocation();
  await homePage.fillSearchBox("milk");
  await expect(page.getByText(/milk/i).first()).toBeVisible();
});

test("HN_15 - Verify homepage refresh behavior", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.setLocation();
  await homePage.reload();
  await expect(page).toHaveURL("https://blinkit.com/");
  await expect(homePage.navbar).toBeVisible();
});
