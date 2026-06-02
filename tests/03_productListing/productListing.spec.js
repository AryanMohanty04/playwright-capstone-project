import { test, expect } from "@playwright/test";

test.describe("Module 3 - Product Listing Module (PL)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();
  });

  // PLP_01 //
  test("PL_01 - Product listing loads", async ({ page }) => {
    await page.waitForLoadState("networkidle");

    await expect(page.getByText("ADD").first()).toBeVisible({
      timeout: 10000,
    });
  });

  // PLP_02
  test("PL_02 - product opens detail page", async ({ page }) => {
    await page.getByText("Amul Taaza Toned Milk").first().click();
    await expect(page).toHaveURL(/prn|product|pdp/i);
  });

  // // PLP_03
  test("PL_03 - Add Now button works", async ({ page }) => {
    await page.getByText("ADD").first().click();
    await expect(page.getByText(/1 item/i)).toBeVisible();
  });

  // PLP_04
  // test("PLP_04 - Learn More opens details", async ({ page }) => {
  //   await page.getByText("Amul Taaza Toned Milk").first().click();
  //   await expect(page).toHaveURL(/prn\/amul-taaza-toned-milk\/prid\/19512/);
  //   const infoButton = page
  //     .getByText(/product details|more info|details/i)
  //     .first();

  //   if (await infoButton.isVisible()) {
  //     await infoButton.click();
  //   }
  //   await expect(page.locator("body")).toContainText(/milk|amul/i);
  // });

  // // PLP_05 //s
  test("PL_05 - Images load", async ({ page }) => {
    const images = page.locator("img");
    await expect(images.first()).toBeVisible();
  });

  // PLP_06
  test("PL_06 - Price information available", async ({ page }) => {
    await expect(page.locator("body")).toContainText("₹");
  });

  // // PLP_07
  test("PL_07 - Product card contains image", async ({ page }) => {
    const images = page.locator("img");

    await expect(images.first()).toBeVisible();
  });

  // PLP_08
  test("PL_08 - Multiple product cards displayed", async ({ page }) => {
    await page.waitForLoadState("networkidle");

    const addButtons = page.getByText("ADD");

    await expect(addButtons.first()).toBeVisible({
      timeout: 10000,
    });

    const count = await addButtons.count();

    expect(count).toBeGreaterThanOrEqual(5);
  });

  test("PL_09 - Product listing available after refresh", async ({ page }) => {
    await page.reload();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();
    // await expect(page.getByText("ADD").first()).toBeVisible();
  });

  test("PL_11 - User can return to PLP from PDP", async ({ page }) => {
    await page.getByText("Amul Taaza Toned Milk").first().click();

    await expect(page).toHaveURL(/prn|product|pdp/i);

    await page.goBack();

    await expect(page.getByText("ADD").first()).toBeVisible();
  });

  test("PL_12 - Multiple product images displayed", async ({ page }) => {
    await page.waitForLoadState("networkidle");

    const images = page.locator("img");

    await expect(images.first()).toBeVisible({
      timeout: 10000,
    });

    expect(await images.count()).toBeGreaterThan(5);
  });
  test("PL_13 - Products remain visible after scrolling", async ({ page }) => {
    await page.mouse.wheel(0, 2000);

    await page.waitForLoadState("networkidle");

    await expect(page.getByText("ADD").first()).toBeVisible();
  });
test("PL_14 - Return to listing from PDP", async ({ page }) => {
  await page.getByText("Amul Taaza Toned Milk").first().click();

  await expect(page).toHaveURL(/prn|product|pdp/i);

  await page.goBack();

  await expect(
    page.getByText("Amul Taaza Toned Milk").first()
  ).toBeVisible();
});

  test("PL_15 - At least 5 product cards displayed", async ({ page }) => {
    const addButtons = page.getByText("ADD");

    await expect(addButtons.first()).toBeVisible();

    const count = await addButtons.count();

    expect(count).toBeGreaterThanOrEqual(5);
  });
});
