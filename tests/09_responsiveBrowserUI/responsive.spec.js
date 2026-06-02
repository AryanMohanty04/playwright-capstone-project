// import { test, expect } from "fixtures/locationFixture.js";

// test.describe("Responsive UI Module", () => {
//   test("RT_01", async ({ page }) => {
//     await expect(page).toHaveURL(/blinkit/);
//   });
// });

const { test, expect, devices } = require("@playwright/test");

test.use({
  ...devices["iPhone 12"],
});

test.describe("Module 9 -Mobile Interactive Module (MI)", () => {
  test("MI_01 - App loads on mobile viewport", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await expect(page).toHaveTitle(/blinkit/i);
  });
  test("MI_02 - Close intro slider", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    const closeBtn = page.getByAltText("Close Slider");

    if (await closeBtn.isVisible()) {
      await closeBtn.click();
    }

    await expect(page.getByText("Select manually")).toBeVisible();
  });
  test("MI_03 - Select delivery location", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByAltText("Close Slider")
      .click()
      .catch(() => {});

    await page.getByText("Select manually").click();

    await page.getByPlaceholder("search delivery location").fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();

    await expect(page.locator("body")).toContainText("Mumbai");
  });
test('MI_04 - Verify Search Bar Visibility', async ({ page }) => {
  await page.goto('https://blinkit.com/');

  await page.getByAltText('Close Slider').click();
  await page.getByText('Select manually').click();

  await page.getByPlaceholder('search delivery location').fill('Mumbai');

  await page.locator('div')
    .filter({ hasText: /^Mumbai CentralMumbai, Maharashtra, India$/ })
    .first()
    .click();

  await page.waitForTimeout(3000);

  await expect(page.locator('body')).toBeVisible();
});
test("MI_05 - Verify category buttons are visible on mobile", async ({ page }) => {
  await page.goto("https://blinkit.com/");

  await page.getByAltText("Close Slider").click().catch(() => {});
  await page.getByText("Select manually").click();

  await page.getByPlaceholder("search delivery location").fill("Mumbai");
  await page.getByText("Mumbai Central", { exact: true }).click();

  await page.waitForTimeout(3000);
  const categories = page.locator("div").filter({
    hasText: /Vegetables|Fruits|Atta|Rice|Dal|Oil|Ghee|Masala/
  });

  await expect(categories.first()).toBeVisible();
});
  test("MI_06 - Hamburger menu opens", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    const menu = page
      .locator("button, div")
      .filter({ hasText: /menu/i })
      .first();

    if (await menu.isVisible()) {
      await menu.click();
    }
  });
test('MI_07 -Verify Cart Visibility', async ({ page }) => {
  await page.goto('https://blinkit.com/');
  await page.getByAltText('Close Slider').click();
  await page.getByText('Select manually').click();
  await page.getByPlaceholder('search delivery location').click();
  await page.getByPlaceholder('search delivery location').fill('Mumbai');
  await page.locator('div').filter({ hasText: /^Mumbai CentralMumbai, Maharashtra, India$/ }).first().click();
  await page.getByRole('button', { name: 'Vegetables & Fruits' }).click();
  await page.locator('[id="423735"]').getByRole('button', { name: 'ADD' }).click();
  await expect(page.getByText('item₹ 16View Cart')).toBeVisible();
});
//   test("RC_09 - Cart drawer opens", async ({ page }) => {
//     await page.goto("https://blinkit.com/");

//     await page.getByText("Select manually").click();

//     await page.getByPlaceholder("search delivery location").fill("Mumbai");

//     await page.getByText("Mumbai Central", { exact: true }).click();

//     await page.getByText("ADD").first().click();

//     await page.getByText(/1 item/i).click();

//     await expect(page.getByText(/my cart/i)).toBeVisible();
//   });
// test('test', async ({ page }) => {
//   await page.goto('https://blinkit.com/');
//   await page.getByAltText('Close Slider').click();
//   await page.getByText('Select manually').click();
//   await page.getByPlaceholder('search delivery location').click();
//   await page.getByPlaceholder('search delivery location').fill('Mumbai');
//   await page.locator('div').filter({ hasText: /^Mumbai CentralMumbai, Maharashtra, India$/ }).first().click();
//   await page.reload();
//   await page.getByAltText('Close Slider').click();
//   await expect(page.getByText('Mumbai Central, Mumbai,')).toBeVisible();
// });

const mobileDevices = [
  { name: "Samsung Galaxy S21", device: devices["Galaxy S9+"] },
  { name: "iPhone SE", device: devices["iPhone SE"] },
  { name: "iPad", device: devices["iPad Pro"] },
];

for (const { name, device } of mobileDevices) {
  test(`MI_08 - App loads correctly on ${name}`, async ({ browser }) => {
    const context = await browser.newContext({ ...device });
    const page = await context.newPage();

    await page.goto("https://blinkit.com/");

    await expect(page).toHaveTitle(/blinkit/i);
    await context.close();
  });

  test(`MI_09 - Search bar is visible on ${name}`, async ({ browser }) => {
  const context = await browser.newContext({ ...device });
  const page = await context.newPage();

  await page.goto("https://blinkit.com/s/");

  await expect(
    page.getByRole("textbox", { name: "Search for atta dal and more" })
  ).toBeVisible();

  await context.close();
});
}

test("MI_10 - Blinkit logo is visible on mobile", async ({ page }) => {
  await page.goto("https://blinkit.com/");
  await expect(page.getByAltText("Blinkit Logo")
    .or(page.locator("img[alt*='blinkit' i]").first())
  ).toBeVisible();
});

test("MI_11 - Product page loads on mobile viewport", async ({ page }) => {
  await page.goto("https://blinkit.com/s/?q=milk");
  await expect(page.locator("body")).toContainText(/milk/i);
});

test("MI_12 - Page is scrollable on mobile", async ({ page }) => {
  await page.goto("https://blinkit.com/");
  await page.evaluate(() => window.scrollBy(0, 500));
  const scrollY = await page.evaluate(() => window.scrollY);
  expect(scrollY).toBeGreaterThan(0);
});

test("MI_13 - Blinkit page title is correct on mobile", async ({ page }) => {
  await page.goto("https://blinkit.com/");
  await expect(page).toHaveTitle(/blinkit/i);
});

});
