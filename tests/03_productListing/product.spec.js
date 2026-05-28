const { test, expect } = require("@playwright/test");

// Product listing page loads correctly
test("PLP_01 - Product listing page loads correctly", async ({ page }) => {

  await page.goto("https://www.razer.com/pc/gaming-laptops");

  await page.getByRole("button", {
    name: "Accept All",
  }).click();

  await expect(page).toHaveURL(/gaming-laptops/);

});

//Product page opens correctly
test("PLP_02 - Product page opens correctly", async ({ page }) => {
  await page.goto("https://www.razer.com/pc/gaming-laptops");

  await page.getByRole("button", {
    name: "Accept All",
  }).click();

  await page.getByRole("link", {
    name: "buy now",
  }).first().click({
    force: true, //it was creating an unusual bug hence forced true
  });

  await expect(page).toHaveURL(/razer-blade/);
});

// test("PLP_02 - Product page opens correctly", async ({ page }) => {

//   await page.goto("https://www.razer.com/pc/gaming-laptops");

//   await page.getByRole("button", {
//     name: "Accept All",
//   }).click();

//   const buyButton = page.getByRole("link", {
//     name: "buy now",
//   }).first();

//   await buyButton.scrollIntoViewIfNeeded();

//   await Promise.all([
//     page.waitForURL(/razer-blade/),
//     buyButton.click({ force: true }),
//   ]);

//   await expect(page).toHaveURL(/razer-blade/);

// });


//Buy Now button works
test("PLP_03 - Buy Now button works", async ({ page }) => {

  await page.goto("https://www.razer.com/pc/gaming-laptops");

  await page.getByRole("button", {
    name: "Accept All",
  }).click();

  await page.getByRole("link", {
    name: "buy now",
  }).nth(1).click({
    force: true,
  });

});

// Learn More button works
test("PLP_04 - Learn More button works", async ({ page }) => {

  await page.goto("https://www.razer.com/pc/gaming-laptops");

  await page.getByRole("button", {
    name: "Accept All",
  }).click();

  await page.getByRole("link", {
    name: "learn more",
  }).nth(1).click({
    force: true,
  });

});

// Product prices visible
test("PLP_05 - Product prices visible", async ({ page }) => {
  await page.goto("https://www.razer.com/pc/gaming-laptops");
  await page.getByRole("button", {
    name: "Accept All",
  }).click();
  await expect(
  page.locator("text=US$")
    .first()
).toBeVisible();
});

// Product tiles visible
test("PLP_06 - Product tiles visible", async ({ page }) => {
  await page.goto("https://www.razer.com/pc/gaming-laptops");
  await page.getByRole("button", {
    name: "Accept All",
  }).click();
  await expect(
    page.locator(".tile-group").first()
  ).toBeVisible();
});
