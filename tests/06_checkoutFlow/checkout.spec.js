const { test, expect } = require("@playwright/test");

test.describe("Checkout Flow Module", () => {
  test.use({
    storageState: "auth.json",
    permissions: ["geolocation"],
    geolocation: {
      latitude: 12.9716,
      longitude: 77.5946,
    },
  });

  test("CF_01 - User can navigate to checkout page from cart", async ({
    page,
  }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("link", { name: '! Search "chocolate" Search "' })
      .click();
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .fill("Monster");
    await page
      .getByRole("button", { name: /Monster Zero/ })
      .first()
      .click();
    await page.getByRole("button", { name: "Add to cart" }).click();
    await page.getByText("r1 item ₹").click();
    await page.getByText("₹598TOTALProceedf").click();
    await page
      .locator("div")
      .filter({ hasText: "Select delivery address Add a" })
      .nth(4)
      .click();
  });

  test("CF_02 - Checkout page is inaccessible without items in cart", async ({
    page,
  }) => {
    await page.goto("https://blinkit.com/checkout/");

    await expect(page).not.toHaveURL(/checkout/);
  });

  test("CF_03 - User can go back to cart from checkout without losing items", async ({
    page,
  }) => {
    await page.goto("https://blinkit.com/");
    await page.getByText("ADD").first().click();
    await page.getByText("r1 item ₹").click();
    await page.getByText("Proceed").click();;
    await page.locator(".CartAddress__Icon-sc-1jlv8-4").click();
  });

  test("CF_04 - Checkout page requires user to be logged in", async ({
    browser,
  }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://blinkit.com/checkout/");

    // check it redirected away from checkout
    await expect(page).not.toHaveURL(/checkout/);

    await context.close();
  });

  test("CF_05 - Progress steps are displayed on checkout page", async ({
    page,
  }) => {
    await page.goto("https://blinkit.com/");
    await page.getByText("ADD").first().click();
    await page.getByText("r1 item ₹").click();
    await expect(page.getByText(/TOTALProceedf/)).toBeVisible();
  });

  test("CF_06 - User can select a saved delivery address", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page.getByText("ADD").first().click();
    await page.getByText("r1 item ₹").click();
    await page.getByText("Proceed").click();
    await page
      .locator(".AddressList__AddressItemWrapper-sc-zt55li-1")
      .first()
      .click();
  });

  test("CF_07 - User can add a new delivery address during checkout", async ({
    page,
  }) => {
    await page.goto("https://blinkit.com/");

    await page.getByText("ADD").first().click();
    await page.getByText("r1 item ₹").click();
    await page.getByText(/TOTALProceedf/).click();

    //   await expect(page).toHaveURL(/checkout/);
    await page.getByText("Add a new address").click();

    await expect(page.getByText("Add a new address")).toBeVisible();
  });

  test("CF_08 - User can add new Address", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page.getByText("ADD").first().click();
    await page.getByText("r1 item ₹").click();
    await page.getByText("Proceed").click();
    await page.getByText("Add a new address").click();
  });

  test('CF_09 - User can see the new address form', async ({ page }) => {
  await page.goto('https://blinkit.com/');

  await page.locator('div').filter({ hasText: 'Account' }).nth(5).click();

  await page.getByText('Saved Addresses').click();

  await page.locator('[data-test-id="add-new-address"]').click();

  // safer check instead of full messy UI string
  await expect(page.getByText(/save address as/i)).toBeVisible();
});

test('CF_10 - Address form contains required input fields', async ({ page }) => {
  await page.goto('https://blinkit.com/');

  await page.locator('div').filter({ hasText: 'Account' }).nth(5).click();

  await page.getByText('Saved Addresses').click();

  await page.locator('[data-test-id="add-new-address"]').click();

  await expect(page.getByLabel(/flat|house/i)).toBeVisible();
});
});
