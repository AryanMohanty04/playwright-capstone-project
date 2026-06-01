import { test, expect } from "@playwright/test";

test.describe("PLP Module", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();
  });

  // PLP_01 //
  test("PLP_01 - Product listing loads", async ({ page }) => {
    await expect(page.getByText("ADD").first()).toBeVisible();
  });

  // PLP_02
  test("PLP_02 - product opens detail page", async ({ page }) => {
    await page.locator("text=Ultimate Rolling Paper").first().click();
    await expect(page).toHaveURL(/prn|product|pdp/i);
  });

  // // PLP_03
  test("PLP_03 - Add Now button works", async ({ page }) => {
    await page.getByText("ADD").first().click();
    await expect(page.getByText(/1 item/i)).toBeVisible();
  });

  // PLP_04
  test("PLP_04 - Learn More opens details", async ({ page }) => {
    await page.getByText("Amul Taaza Toned Milk").first().click();
    await expect(page).toHaveURL(/prn\/amul-taaza-toned-milk\/prid\/19512/);
    const infoButton = page
      .getByText(/product details|more info|details/i)
      .first();

    if (await infoButton.isVisible()) {
      await infoButton.click();
    }
    await expect(page.locator("body")).toContainText(/milk|amul/i);
  });

  // // PLP_05 //s
  test("PLP_05 - Images load", async ({ page }) => {
    const images = page.locator("img");
    await expect(images.first()).toBeVisible();
  });

  // PLP_06
  test("PLP_06 - Name & price visible", async ({ page }) => {
    await expect(page.getByText(/₹/).first()).toBeVisible();
  });

  // // PLP_07
  test("PLP_07 - Filter panel open/close", async ({ page }) => {
    await page.getByText(/filter/i).click();
    await expect(page.getByText(/filters/i)).toBeVisible();
  });

  // // PLP_08
  // test("PLP_08 - Category filter", async ({ page }) => {
  //   await page.getByText("Dairy").click();
  //   await expect(page.locator("body")).toContainText(/dairy/i);
  // });

  // // PLP_09
  // test("PLP_09 - Price filter", async ({ page }) => {
  //   await page.getByText(/price/i).click();
  //   await expect(page.locator("body")).toContainText("₹");
  // });

  // // PLP_10
  // test("PLP_10 - Sort low to high", async ({ page }) => {
  //   await page.getByText(/sort/i).click();
  //   await page.getByText(/low to high/i).click();
  // });

  // // PLP_11
  // test("PLP_11 - Sort high to low", async ({ page }) => {
  //   await page.getByText(/sort/i).click();
  //   await page.getByText(/high to low/i).click();
  // });

  // // PLP_12
  // test("PLP_12 - Clear filters", async ({ page }) => {
  //   await page.getByText(/filter/i).click();
  //   await page.getByText(/clear/i).click();
  // });

  // // PLP_13
  // test("PLP_13 - Multiple filters", async ({ page }) => {
  //   await page.getByText("Dairy").click();
  //   await page.getByText(/₹/).first().click();
  // });

  // // PLP_14
  // test("PLP_14 - Mobile responsiveness", async ({ page }) => {
  //   await page.setViewportSize({ width: 375, height: 812 });

  //   await expect(page.getByText("ADD").first()).toBeVisible();
  // });

  // // PLP_15
  // test("PLP_15 - Out of stock handling", async ({ page }) => {
  //   await expect(page.locator("text=Out of stock")).toBeVisible();
  // });
});
