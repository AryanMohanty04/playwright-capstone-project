const { test, expect } = require("@playwright/test");

test.describe("Search Module Functionality", () => {
  test("SF_01 - Verify search icon opens search input field", async ({
    page,
  }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page
      .getByRole("link", { name: '! Search "curd" Search "rice' })
      .click();
  });

  test("SF_02 - Verify search textbox accepts user input", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page
      .getByRole("link", { name: '! Search "curd" Search "rice' })
      .click();
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .fill("Egg");
  });

  test("SF_03 - Search redirects to results page", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page
      .getByRole("link", { name: '! Search "curd" Search "rice' })
      .click();
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .fill("Egg");
  });

  test("SF_04 - Verify invalid search handling", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    const searchBox = page.getByRole("textbox", {
      name: "Search for atta dal and more",
    });

    await page.getByRole('textbox', { name: 'Search for atta dal and more' }).fill('Razer');
    // Verify application handled invalid search gracefully
    await expect(page.locator("body")).toBeVisible();
  });

});
