const { test, expect } = require("@playwright/test");

test.describe("Product Details", () => {
  //Product details page loads corrects
  test("PD_01 Store Page loads correctly", async ({ page }) => {
    await page.goto("https://www.razer.com/store");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.getByRole("link", { name: "Store", exact: true }).click();
    await expect(page).toHaveURL("https://www.razer.com/store");
  });

  //
  test("PD_02 - Store Page Shows Products Correctly", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.getByRole("link", { name: "Store", exact: true }).click();
    await page.getByRole("heading", { name: "BEST SELLERS" }).click();
    await page
      .getByRole("link", { name: "BUY - Razer Viper V4 Pro -" })
      .click();
    await page.getByRole("button", { name: "Close" }).click();
    await expect(page).toHaveURL(
      "https://www.razer.com/gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1?cid=ecom_store",
    );
  });

  //Product image loads successfully
  test("PD_03 - Product image loads successfully", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.getByRole("link", { name: "Store", exact: true }).click();
    const productImage = page.locator(
      "//div[@aria-label='slide 1 of 16']//div[@class='thumbnail-holder']//img",
    );
    await expect(productImage).toBeVisible();
  });


  test("PD_04 - Product image gallery works correctly", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.getByRole("link", { name: "Store", exact: true }).click();
    await page.locator(".thumbnail-holder > img").first().click();
    await page.getByRole("button", { name: "Close" }).click();
    // await page.getByRole('link', { name: 'Customize your Razer Blade' }).click();
    // await expect(page).toHaveURL("https://www.razer.com/gaming-laptops/razer-blade-18");
  });

  // test("PD-05 - Product specifications are visible", async({page})=>{

  // });

});

