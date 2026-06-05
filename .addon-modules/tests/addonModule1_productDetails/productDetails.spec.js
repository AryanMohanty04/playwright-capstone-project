const { test, expect } = require("@playwright/test");
test.describe("Module 4 - Product Details Module (PD)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
  });

  // test("PD_01 - Verify Product Details", async ({ page }) => {
  //   // await page.goto("https://blinkit.com/");

  //   // await page.getByPlaceholder("search delivery location").fill("Mumbai");

  //   // await page.locator('div')
  //   //   .filter({ hasText: /Mumbai Central/i })
  //   //   .first()
  //   //   .click();

  //   await page
  //     .getByText(/Fruits|Vegetables|Grocery/i)
  //     .first()
  //     .click();

  //   const product = page
  //     .locator("div:has-text('ADD'), button:has-text('ADD')")
  //     .first();
  //   await product.click();

  //   await expect(page.locator("text=Product Details")).toBeVisible();
  // });

  // test("PD_01 - Verify Product Details", async ({ page }) => {
  //   await page.goto("https://blinkit.com/");
  //   await page
  //     .getByRole("textbox", { name: "search delivery location" })
  //     .click();
  //   await page
  //     .getByRole("textbox", { name: "search delivery location" })
  //     .fill("Mumbai");
  //   await page
  //     .locator("div")
  //     .filter({ hasText: /^Mumbai CentralMumbai, Maharashtra, India$/ })
  //     .first()
  //     .click();
  //   await page.getByRole("img", { name: "fnv banner" }).click();
  //   await page
  //     .getByRole("button", { name: "20% OFF 13 mins Onion (Kanda" })
  //     .click();
  //   await expect(
  //     page.getByRole("button", { name: "Product Details" }),
  //   ).toBeVisible();
  // });

test('PD_02 - Verify Product Information is displayed correctly', async ({ page }) => {
  await page.goto(
      "https://blinkit.com/prn/amul-taaza-toned-milk/prid/561270",
    );
  await expect(page.getByRole('button', { name: 'Product Details' })).toBeVisible();
});

  test("PD_03 - Verify product images load correctly", async ({ page }) => {
    await page.goto(
      "https://blinkit.com/prn/amul-taaza-toned-milk/prid/561270",
    );
    await expect(
      page.locator(".ProductCarousel__ImageContainer-sc-11ow1fv-1 > div"),
    ).toBeVisible();
  });

  test("PD_04 - Verify image gallery functionality", async ({ page }) => {
    await page.goto(
      "https://blinkit.com/prn/amul-taaza-toned-milk/prid/561270",
    );

    await expect(
      page.locator(".ProductCarousel__ImageContainer-sc-11ow1fv-1 > div"),
    ).toBeVisible();

    await page.getByRole("img").nth(3).click();
    await expect(
      page.locator(".ProductCarousel__ImageContainer-sc-11ow1fv-1 > div"),
    ).toBeVisible();

    await page.getByRole("img").nth(4).click();
    await expect(
      page.locator(".ProductCarousel__ImageContainer-sc-11ow1fv-1 > div"),
    ).toBeVisible();

    await page.getByRole("img").nth(5).click();
    await expect(
      page.locator(".ProductCarousel__ImageContainer-sc-11ow1fv-1 > div"),
    ).toBeVisible();
  });

  test("PD_05 - Verify product specifications are visible", async ({
    page,
  }) => {
    await page.goto(
      "https://blinkit.com/prn/amul-taaza-toned-milk/prid/561270",
    );

    await page.locator("#collapsed_button_id").click();

    const specsButton = page.locator("#collapsed_button_id");

    await specsButton.waitFor({ state: "visible" });
    await specsButton.click();
  });

  test("PD_06 - Verify quantity selection functionality", async ({
    page,
    browserName,
  }) => {
    await page.goto(
      "https://blinkit.com/prn/amul-taaza-toned-milk/prid/561270",
    );

    await page.mouse.move(0, 0);

    await page.getByRole("button", { name: "Add to cart" }).click({
      force: browserName === "firefox",
    });

    await expect(
      page.getByRole("button", { name: "1", exact: true }),
    ).toBeVisible();

    await page
      .locator("button")
      .nth(2)
      .click({
        force: browserName === "firefox",
      });

    await expect(
      page.getByRole("button", { name: "2", exact: true }),
    ).toBeVisible();
  });

  test("PD_07 - Verify quantity cannot go below minimum", async ({
    page,
    browserName,
  }) => {
    await page.goto(
      "https://blinkit.com/prn/amul-taaza-toned-milk/prid/561270",
    );

    await page.mouse.move(0, 0);

    await page.getByRole("button", { name: "Add to cart" }).click({
      force: browserName === "firefox",
    });

    await page.locator("button").nth(1).click();

    await expect(
      page.getByRole("button", { name: "Add to cart" }),
    ).toBeVisible();
  });

  test("PD_08 - Verify Add to Cart button functionality", async ({
    page,
    browserName,
  }) => {
    await page.goto(
      "https://blinkit.com/prn/amul-taaza-toned-milk/prid/561270",
    );

    const addToCart = page.getByRole("button", {
      name: "Add to cart",
    });

    await expect(addToCart).toBeVisible();

    await page.mouse.move(0, 0);

    await addToCart.click({
      force: browserName === "firefox",
    });

    await expect(
      page.getByRole("button", { name: "1", exact: true }),
    ).toBeVisible();
  });

  test("PD_09 - Verify 'Why shop from Blinkit' section is displayed", async ({
    page,
  }) => {
    await page.goto(
      "https://blinkit.com/prn/amul-taaza-toned-milk/prid/561270",
    );

    await expect(page.getByText("Why shop from blinkit?")).toBeVisible();

    await expect(page.locator(".first-row")).toBeVisible();
  });

  test("PD_11 - Verify product availability status", async ({ page }) => {
    await page.goto(
      "https://blinkit.com/prn/amul-taaza-toned-milk/prid/561270",
    );

    await expect(
      page.getByRole("button", { name: /add to cart/i }),
    ).toBeVisible();
  });

  test("PD_12 - Verify Product Banner Visibility", async ({ page }) => {
    await expect(page.getByRole("img", { name: "fnv banner" })).toBeVisible();
    await page.getByRole("img", { name: "fnv banner" }).click();
  });

  //PD_12 written in another describe block for checking mobile responsiveness
});
// test.describe("PD_12 - Mobile Responsiveness of Module 4", () => {
//   test.use({
//     viewport: { width: 390, height: 844 },
//   });

//   test("PD_12 - Verify product details page responsiveness", async ({
//     page,
//   }) => {
//     await page.goto(
//       "https://blinkit.com/prn/amul-taaza-toned-milk/prid/561270",
//     );

//     await page.getByAltText("Close Slider").click();

//     await expect(
//       page.getByRole("button", { name: "Amul Taaza Toned Milk" }),
//     ).toBeVisible();

//     await expect(
//       page.getByRole("button", { name: "Add to cart" }),
//     ).toBeVisible();

//     await page.getByRole("button", { name: "Add to cart" }).click();

//     await expect(
//       page.getByRole("button", { name: "1", exact: true }),
//     ).toBeVisible();
//   });
// });
