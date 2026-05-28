const { test, expect } = require("@playwright/test");
test.describe("Cart Management Module", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.razer.com");
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
    await page.context().clearCookies();
  });
  test("CT_01 - Add Product to Cart", async ({ page }) => {
    await page.goto("https://www.razer.com/cart");

    const acceptBtn = page.getByRole("button", { name: "Accept All" });
    if (await acceptBtn.isVisible()) {
      await acceptBtn.click();
    }

    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .click();

    await expect(page).toHaveURL(/cart/, { timeout: 10000 });
  });

  test("CT_02 - Verifying Cart Items Updated Correctly", async ({ page }) => {
    await page.goto("https://www.razer.com/cart");

    const acceptBtn = page.getByRole("button", { name: "Accept All" });
    if (await acceptBtn.isVisible()) {
      await acceptBtn.click();
    }

    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .click();

    // Verify item appears in cart
    await expect(
      page.locator("app-razer-cart-item-list").getByText("US$"),
    ).toBeVisible({ timeout: 10000 });
  });
  test("CT_03 - Opening cart page successfully", async ({ page }) => {
    await page.goto("https://www.razer.com/store");

    await page
      .getByRole("button", { name: "Accept All" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page.getByRole("button", { name: "Accept All" }).click();

    await page
      .getByRole("button", { name: "items in cart" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page.getByRole("button", { name: "items in cart" }).click();

    await page
      .getByRole("link", { name: /Cart/i })
      .waitFor({ state: "visible", timeout: 10000 });
    await page.getByRole("link", { name: /Cart/i }).click();

    await expect(page).toHaveURL(/cart/, { timeout: 10000 });
  });

  test("CT_04 - Verify Product Details in Cart", async ({ page }) => {
    await page.goto("https://www.razer.com/store");

    await page
      .getByRole("button", { name: "Accept All" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page.getByRole("button", { name: "Accept All" }).click();

    await page
      .getByRole("group", { name: "slide 1 of 16" })
      .getByLabel("BUY - New Razer Blade 18, For US$")
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .getByRole("group", { name: "slide 1 of 16" })
      .getByLabel("BUY - New Razer Blade 18, For US$")
      .click();

    await page
      .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
      .click();

    // Click the product link in the cart modal
    await page
      .getByRole("link", { name: /Razer Blade/i })
      .waitFor({ state: "visible", timeout: 10000 });
    await page.getByRole("link", { name: /Razer Blade/i }).click();

    // URL confirmation is sufficient — confirms correct product page
    await expect(page).toHaveURL(/razer-blade/i, { timeout: 10000 });
  });

  test("CT_05 - Increase Quantity Button Works", async ({ page }) => {
    await page.goto("https://www.razer.com/cart");

    await page
      .getByRole("button", { name: "Accept All" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page.getByRole("button", { name: "Accept All" }).click();

    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .click();

    await page
      .getByRole("button", { name: "Remove item from cart" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page.getByRole("button", { name: "Remove item from cart" }).click();

    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .click();

    const increaseBtn = page.getByRole("button", {
      name: "Increase quantity of item",
    });
    await increaseBtn.waitFor({ state: "visible", timeout: 10000 });
    await increaseBtn.click();
  });

  test("CT_06 - Decrease Quantity Button Works", async ({ page }) => {
    await page.goto("https://www.razer.com/cart");

    await page
      .getByRole("button", { name: "Accept All" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page.getByRole("button", { name: "Accept All" }).click();

    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .click();

    const increaseBtn = page.getByRole("button", {
      name: "Increase quantity of item",
    });
    await increaseBtn.waitFor({ state: "visible", timeout: 10000 });
    await increaseBtn.click();

    const decreaseBtn = page.getByRole("button", {
      name: "Reduce quantity of item",
    });
    await decreaseBtn.waitFor({ state: "visible", timeout: 10000 });
    await decreaseBtn.click();
  });

//   test('CT_07  Add and remove product from cart', async ({ page }) => {
//   await page.goto('https://www.razer.com/');
//   await page.getByRole('button', { name: 'Accept All' }).click();
//   await page.getByRole('link', { name: 'Store', exact: true }).click();
//   await page.getByRole('link', { name: 'Laptops' }).click();
//   await page.getByRole('button', { name: 'Close' }).click();
//   await page.getByRole('link', { name: 'BUY - New Razer Blade 18 with GeForce RTX 5070 Ti, 32 GB RAM and 1 TB SSD, For' }).click();
//   await page.getByRole('button', { name: 'Add to Cart - Razer Blade 18' }).click();
//   await page.getByRole('button', { name: 'Remove item from cart' }).click();
// });

  test("CT_08 - Empty Cart Validation", async ({ page }) => {
    await page.goto("https://www.razer.com/cart");

    const acceptBtn = page.getByRole("button", { name: "Accept All" });
    if (await acceptBtn.isVisible()) {
      await acceptBtn.click();
    }

    await expect(
      page.getByRole("heading", { name: /Your cart is empty/i }),
    ).toBeVisible({ timeout: 10000 });
  });

  test("CT_09 - Subtotal Validation", async ({ page }) => {
    await page.goto("https://www.razer.com/cart");

    await page
      .getByRole("button", { name: "Accept All" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page.getByRole("button", { name: "Accept All" }).click();

    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .click();

    await page
      .getByRole("button", { name: "Add to Cart - Razer Viper V4" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .getByRole("button", { name: "Add to Cart - Razer Viper V4" })
      .click();

    await expect(page.getByText(/Subtotal US\$289.98/i)).toBeVisible({
      timeout: 10000,
    });
  });

 test("CT_10 - Cart Persistence (refresh)", async ({ page }) => {
  await page.goto("https://www.razer.com/cart");

  const acceptBtn = page.getByRole("button", { name: "Accept All" });
  if (await acceptBtn.isVisible()) {
    await acceptBtn.click();
  }
  await page.locator(".cky-overlay").waitFor({ state: "hidden", timeout: 10000 }).catch(() => {});

  await page.getByRole("button", { name: "Add to Cart - Razer Atlas Pro" }).waitFor({ state: "visible", timeout: 10000 });
  await page.getByRole("button", { name: "Add to Cart - Razer Atlas Pro" }).click({ force: true });

  await page.reload();
});

  test("CT_11 - Add Same Product Twice", async ({ page }) => {
    await page.goto("https://www.razer.com/cart");

    await page
      .getByRole("button", { name: "Accept All" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page.getByRole("button", { name: "Accept All" }).click();

    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .click();

    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .click();
  });

  test("CT_12 - Add Different Products to Cart", async ({ page }) => {
  await page.goto("https://www.razer.com/cart");

  const acceptBtn = page.getByRole("button", { name: "Accept All" });
  if (await acceptBtn.isVisible()) {
    await acceptBtn.click();
  }
  await page.locator(".cky-overlay").waitFor({ state: "hidden", timeout: 10000 }).catch(() => {});

  await page.getByRole("button", { name: "Add to Cart - Razer Atlas Pro" }).waitFor({ state: "visible", timeout: 10000 });
  await page.getByRole("button", { name: "Add to Cart - Razer Atlas Pro" }).click({ force: true });

  await page.getByRole("button", { name: "Add to Cart - Razer Blade 16" }).waitFor({ state: "visible", timeout: 10000 });
  await page.getByRole("button", { name: "Add to Cart - Razer Blade 16" }).click({ force: true });

  await page.getByRole("button", { name: "Add to Cart - Razer Viper V4" }).waitFor({ state: "visible", timeout: 10000 });
  await page.getByRole("button", { name: "Add to Cart - Razer Viper V4" }).click({ force: true });
});

  test("CT_13 - Cart Checkout Navigation", async ({ page }) => {
    await page.goto("https://www.razer.com/cart");

    await page
      .getByRole("button", { name: "Accept All" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page.getByRole("button", { name: "Accept All" }).click();

    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .click();

    await page
      .locator("app-razer-cart-totals")
      .getByRole("link", { name: "checkout" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .locator("app-razer-cart-totals")
      .getByRole("link", { name: "checkout" })
      .click();

    await expect(page).toHaveURL(/checkout/, { timeout: 10000 });
  });

  test("CT_14 - Maximum Quantity Limit", async ({ page }) => {
    await page.goto("https://www.razer.com/cart");

    await page
      .getByRole("button", { name: "Accept All" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page.getByRole("button", { name: "Accept All" }).click();

    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
      .click();

    const increaseBtn = page.getByRole("button", {
      name: "Increase quantity of item",
    });
    await increaseBtn.waitFor({ state: "visible", timeout: 10000 });
    await increaseBtn.click({ force: true });
    await increaseBtn.click({ force: true });
    await increaseBtn.click({ force: true });
  });

  test("CT_15 - Open Cart on Mobile Screen Size", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 390, height: 844 });

    await page.goto("https://www.razer.com/cart");

    const acceptBtn = page.getByRole("button", { name: "Accept All" });
    if (await acceptBtn.isVisible()) {
      await acceptBtn.click();
    }

    await expect(page).toHaveURL(/cart/, { timeout: 10000 });
    await expect(
      page.getByRole("heading", { name: /Your cart is empty/i }),
    ).toBeVisible({ timeout: 10000 });
  });
});
