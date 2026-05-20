const { test, expect } = require("@playwright/test");

test.describe("Homepage & Navigation Module", () => {
  test("HN_01 - Homepage loads successfully", async ({ page }) => {
    await page.goto("https://www.razer.com/");

    await expect(page).toHaveURL("https://www.razer.com/");
  });

  //Click on the popup cookies
  test("HN_02 - Cookie popup accepts correctly", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page.getByRole("button", { name: "Accept All" }).click();
  });

  //Clicking on the Buy Now Button
  test("HN_03 - Buy Navigation redirects correctly", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.locator("a").filter({ hasText: /^Buy$/ }).click();
    //   await page.goto('https://www.razer.com/gaming-laptops/razer-blade-18/RZ09-05827ER3-R3U1');
  });

  //Clicking on the Learn More Button
  test("HN_04 - Hero banner Learn More button works", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page
      .locator("a")
      .filter({ hasText: /^Learn More$/ })
      .first()
      .click();
  });

  //Search Operations:->

  //Search icon opens search input
  test("HN_05 - Search icon opens search input", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.getByRole("button", { name: "Search" }).click();
  });

  //Search input accepts typing
  test("HN_06 - Search input accepts typing", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.getByRole("button", { name: "Search" }).click();
    await page.getByText("Search razer.com").click();
    await page
      .getByRole("textbox", { name: "Search razer.com" })
      .fill("Razer Blade");
  });

  //Search input accepts typing and redirects
  test("HN_07 - Search input accepts typing and redirects", async ({
    page,
  }) => {
    await page.goto("https://www.razer.com/");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.getByRole("button", { name: "Search" }).click();
    await page.getByRole("dialog", { name: "Search" }).click();
    await page
      .getByRole("textbox", { name: "Search razer.com" })
      .fill("BlackShark");
    await page
      .getByRole("textbox", { name: "Search razer.com" })
      .press("Enter");
  });

  //Cart Operations:->
  //Cart Opens Successfully
  test("HN_08 - Cart opens successfully", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.getByRole("button", { name: "items in cart" }).click();
    await page.getByRole("link", { name: "Cart (0 items)" }).click();
  });

  //Razer Logo return to homepage
  test("HN_09 - Razer Logo returns to the HomePage", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page
      .locator("a")
      .filter({ hasText: /^Shop Now$/ })
      .click();
    await page.getByRole("link", { name: "Razer Homepage" }).click();
  });

  //Footer Link Check
  test("HN_10 - Get Help footer link opens correctly", async ({ page }) => {
    await page.goto("https://www.razer.com/");

    await page
      .getByRole("button", {
        name: "Accept All",
      })
      .click();

    await page
      .getByRole("link", {
        name: "Get Help",
      })
      .click();
  });

  //Check for Mobile hamburger menu
  test("HN_11 - Mobile hamburger menu opens successfully", async ({ page }) => {
    await page.setViewportSize({
      width: 375,
      height: 667,
    });

    await page.goto("https://www.razer.com/");
    await page
      .getByRole("button", {
        name: "Accept All",
      })
      .click();

    await page
      .getByRole("button", {
        name: "Menu",
      })
      .click();
  });

  // Sticky Navabr check
  test("HN_12 - Sticky navbar visible while scrolling", async ({ page }) => {
    await page.goto("https://www.razer.com/");

    await page
      .getByRole("button", {
        name: "Accept All",
      })
      .click();

    await page.mouse.wheel(0, 3000); //scrolls down
    await expect(page.getByRole("navigation")).toBeVisible();
  });

  test("HN_13 - Change location popup opens correctly", async ({ page }) => {
    await page.goto("https://www.razer.com/");

    await page
      .getByRole("button", {
        name: "Accept All",
      })
      .click();

    await page
      .getByRole("link", {
        name: "Change Location >",
      })
      .click();
  });

  //Browser Back Button works
  test("HN_14 - Browser back button works correctly", async ({ page }) => {
    await page.goto("https://www.razer.com/");

    await page
      .getByRole("button", {
        name: "Accept All",
      })
      .click();

    await page.locator("a").filter({ hasText: /^Buy$/ }).click();

    await page.goBack({
      waitUntil: "domcontentloaded", // browser failure in fireforx
    });

    await expect(page).toHaveURL("https://www.razer.com/");
  });

  //HomePage responsive at mobile viewport
  test("HN_15 - Homepage responsive at mobile viewport", async ({ page }) => {
    await page.setViewportSize({
      width: 375,
      height: 667,
    });

    await page.goto("https://www.razer.com/");

    await page
      .getByRole("button", {
        name: "Accept All",
      })
      .click();

    await expect(page.locator("body")).toBeVisible();
  });
});
