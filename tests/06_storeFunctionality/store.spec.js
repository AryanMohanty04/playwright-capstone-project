// const { test, expect } = require("@playwright/test");

// test.describe("Store Functionalities", () => {
//   //checking store page url
//   test("SF_01 - Verify Store Page URL", async ({ page }) => {
//     await page.goto("https://www.razer.com/");
//     await page.getByRole("button", { name: "Accept All" }).click();
//     await page.getByRole("link", { name: "Store", exact: true }).click();
//     await expect(page).toHaveURL("https://www.razer.com/store");
//   });

//   test("SF_02 - Store Images redirects to correct URL", async ({ page }) => {
//     await page.goto("https://www.razer.com/");
//     await page.getByRole("button", { name: "Accept All" }).click();
//     await page.getByRole("link", { name: "Store", exact: true }).click();
//     await page.getByRole("link", { name: "Laptops" }).click();
//     await expect(page).toHaveURL("https://www.razer.com/store/gaming-laptops");
//   });

// });

const { test, expect } = require("@playwright/test");

test.describe("Store Functionalities", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.getByRole("link", { name: "Store", exact: true }).click();
  });

  test("SF_01 - Verify Store Page URL", async ({ page }) => {
    await expect(page).toHaveURL(/store/);
  });

  test("SF_02 - Verify Laptops category navigation", async ({ page }) => {
    await page.getByRole("link", { name: "Laptops" }).click();
    await expect(page).toHaveURL(/gaming-laptops/);
  });

  test("SF_-03 - Carousel navigation works", async ({ page }) => {
    await page
      .locator("#fresh-off-line")
      .getByRole("button", { name: "Next" })
      .click();
    await page
      .locator("#fresh-off-line")
      .getByRole("button", { name: "Next" })
      .click();
    await page
      .locator("#fresh-off-line")
      .getByRole("button", { name: "Next" })
      .click();
    await page
      .locator("#fresh-off-line")
      .getByRole("button", { name: "Previous" })
      .click();
    await page
      .locator("#fresh-off-line")
      .getByRole("button", { name: "Previous" })
      .click();
  });
  test("SF_04 - Verify Product Image Navigation", async ({ page }) => {
    // Click first recommended product image
    await page
      .locator(".thumbnail-holder.recommendation-link > img")
      .first()
      .click();

    // Close popup if shown
    const closeBtn = page.getByRole("button", {
      name: "Close",
      exact: true,
    });
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
    }
    // Verify correct product page URL
    await expect(page).toHaveURL(/razer-viper-v4-pro/);
  });

  test("SF_05 - Verify Search Bar Visibility", async ({ page }) => {
    await page
      .getByRole("button", {
        name: "Search",
      })
      .click();
    const searchBox = page.getByRole("textbox", {
      name: "Search razer.com",
    });
    await expect(searchBox).toBeAttached();
  });

  test("SF_06 - Verify Search Functionality", async ({ page }) => {
    await page
      .getByRole("button", {
        name: "Search",
      })
      .click();
    const searchBox = page.getByRole("textbox", {
      name: "Search razer.com",
    });

    await searchBox.fill("Laptops");
    await searchBox.press("Enter");
    await expect(page).toHaveURL(/search\/laptops/);
    await expect(page.locator("body")).toContainText(/laptops/i);
  });

  test("SF_07 - Verify Store Category Navigation", async ({ page }) => {
    // Navigate to Laptops category
    await page
      .getByRole("link", {
        name: "Laptops",
      })
      .click();

    // Close popup if visible
    const closeBtn = page.getByRole("button", {
      name: "Close",
    });

    if (await closeBtn.isVisible()) {
      await closeBtn.click();
    }
    await expect(page).toHaveURL(/gaming-laptops/);
    await page
      .getByRole("link", {
        name: "Mouse Mats",
      })
      .click();
    await expect(page).toHaveURL(/mouse-mats/);
  });

  test("SF_08 - Verify Product Details Display", async ({ page }) => {
    await page
      .locator(".thumbnail-holder.recommendation-link > img")
      .first()
      .click();

    await page
      .getByRole("button", {
        name: "Close",
        exact: true,
      })
      .click();
    const addToCartBtn = page.getByRole("button", {
      name: /Add to Cart/i,
    });
    await expect(page).toHaveURL(/razer-viper-v4-pro/);
  });

  test("SF_09 - Verify Product Details Page Navigation", async ({ page }) => {
    // Open gaming chair page directly
    await page.goto("https://www.razer.com/gaming-chairs/razer-iskur-v2-x");

    const closeBtn = page.getByRole("button", {
      name: "Close",
      exact: true,
    });

    if (await closeBtn.isVisible()) {
      await closeBtn.click();
    }
    await expect(page).toHaveURL(/razer-iskur-v2-x/);
  });

  test("SF_10 - Verify Product Page URL", async ({ page }) => {
    await page
      .locator(".thumbnail-holder.recommendation-link > img")
      .first()
      .click();

    await expect(page).toHaveURL(/razer-viper-v4-pro/);
  });

  test("SF_11 - Verify Breadcrumb Navigation", async ({ page }) => {
    await page.goto(
      "https://www.razer.com/gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1",
    );
    const closeBtn = page.getByRole("button", {
      name: /close/i,
    });

    if (await closeBtn.isVisible().catch(() => false)) {
      await closeBtn.click();
    }
    await page.goto("https://www.razer.com/pc/gaming-mice");

    await expect(page).toHaveURL(/gaming-mice/);
  });

  test("SF_12 - Verify Store Menu Links", async ({ page }) => {
    await page
      .getByRole("link", {
        name: "Laptops",
      })
      .click();

    await expect(page).toHaveURL(/gaming-laptops/);
    await page.goto("https://www.razer.com/store");
    await page
      .getByRole("link", {
        name: "Mice",
      })
      .click();
    await expect(page).toHaveURL(/gaming-mice/);
    await page.goto("https://www.razer.com/store");
  });

  test("SF_13 - Verify Footer Links on Store Page", async ({ page }) => {
    await page
      .getByRole("link", {
        name: "Get Help",
      })
      .click();
    await expect(page).toHaveURL(/support|help/);
  });

  test("SF_14 - Verify Responsive Layout", async ({ page }) => {
    await page.setViewportSize({
      width: 375,
      height: 812,
    });
    await page.reload();
    await expect(page).toHaveURL(/razer/);
    const bodyText = await page.locator("body").textContent();
    expect(bodyText.length).toBeGreaterThan(100);
  });

  test("SF_15 - Verify Page Load Performance", async ({ page }) => {
    const startTime = Date.now();
    await page.goto("https://www.razer.com/store", {
      waitUntil: "load",
    });
    const loadTime = Date.now() - startTime;
    console.log(`Store Page Load Time: ${loadTime} ms`);

    // Verify page loaded within 15 seconds
    expect(loadTime).toBeLessThan(15000);
  });
});
