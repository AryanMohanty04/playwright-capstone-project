const { test, expect } = require("@playwright/test");
test.use({
  storageState: "auth.json",
});
test.describe("Logged In Authentication Tests", () => {
  test("AT_11 - User remains logged in", async ({ page }) => {
  await page.goto("https://blinkit.com/");
  await expect(page.getByText("Account")).toBeVisible();
});

  test("AT_12 - Account menu opens", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page.getByText("Account").click();

    await expect(page.getByText("My Account")).toBeVisible();
  });

  test("AT_13 - Session persists after refresh", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page.reload();

    await expect(page.getByText("Account")).toBeVisible();
  });

  test("AT_14 - Account links are working", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page.locator(".ProfileButton__DownArrow-sc-975teb-0").click();
    await page.getByText("My Orders").click();
    await expect(page).toHaveURL("https://blinkit.com/account/orders");
  });

  test('AT_15 - Account redirect correctly to address page', async ({ page }) => {
  await page.goto('https://blinkit.com/');
  await page.locator('.ProfileButton__DownArrow-sc-975teb-0').click();
  await page.getByText('Saved Addresses').click();
  await expect(page).toHaveURL("https://blinkit.com/account/addresses");
});
});
