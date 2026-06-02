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

test.describe("Module 9 -Responsive UI Interaction Module", () => {
  test("RC_01 - App loads on mobile viewport", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await expect(page).toHaveTitle(/blinkit/i);
  });
  test("RC_02 - Close intro slider", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    const closeBtn = page.getByAltText("Close Slider");

    if (await closeBtn.isVisible()) {
      await closeBtn.click();
    }

    await expect(page.getByText("Select manually")).toBeVisible();
  });
  test("RC_03 - Select delivery location", async ({ page }) => {
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
test('RC_04 - Verify Search Bar Visibility', async ({ page }) => {
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
test("RC_05 - Verify category buttons are visible on mobile", async ({ page }) => {
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
  test("RC_06 - Hamburger menu opens", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    const menu = page
      .locator("button, div")
      .filter({ hasText: /menu/i })
      .first();

    if (await menu.isVisible()) {
      await menu.click();
    }
  });
test('RC_07 -Verify Cart Visibility', async ({ page }) => {
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

});
