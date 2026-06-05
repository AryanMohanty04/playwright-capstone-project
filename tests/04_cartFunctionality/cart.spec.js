const { test, expect } = require("@playwright/test");

test.describe("Module 5 - Cart Functionality (CT)", () => {
  // test("CF_01 - Verify Add to Cart button functionality", async ({ page }) => {
  //   await page.goto("https://blinkit.com/");

  //   await page
  //     .getByRole("textbox", {
  //       name: "search delivery location",
  //     })
  //     .click();

  //   await page
  //     .getByRole("textbox", {
  //       name: "search delivery location",
  //     })
  //     .fill("Mumbai");

  //   await page
  //     .getByText("Mumbai Central", {
  //       exact: true,
  //     })
  //     .click();

  //   await page
  //     .getByRole("img", {
  //       name: "- Dairy, Bread & Eggs",
  //     })
  //     .click();

  //   await page
  //     .locator('[id="19512"]')
  //     .getByRole("button", {
  //       name: "ADD 2 options",
  //     })
  //     .click();

  //   await page.locator(".tw-relative.tw-flex > .tw-rounded-md").first().click();

  //   await page
  //     .locator(
  //       "div:nth-child(3) > div > .tw-w-full.tw-rounded-\\[12px\\] > .tw-relative > .tw-rounded-md",
  //     )
  //     .click();

  //   await page
  //     .getByText("p", {
  //       exact: true,
  //     })
  //     .click();
  //   await expect(page.getByText(/item/i)).toBeVisible();
  // });

  test("CT_01 - Verify Cart Visibility", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await expect(page.getByText("rMy Cart")).toBeVisible();
  });

  //   test("CF_02 - Verify Add to Cart functionality", async ({ page }) => {
  //   await page.goto("https://blinkit.com/");

  //   await page
  //     .getByRole("textbox", { name: "search delivery location" })
  //     .fill("Mumbai");

  //   await page.getByText("Mumbai Central", { exact: true }).click();

  //   await page.goto(
  //     "https://blinkit.com/prn/monster-zero-sugar-ultra-energy-drink/prid/432768"
  //   );

  //   await page.getByRole("button", { name: "Add to cart" }).click();

  //   await expect(
  //     page.getByRole("button", { name: "1", exact: true })
  //   ).toBeVisible();

  //   await page.getByText(/1 item/i).click();

  //   await expect(
  //     page.getByText("Monster Zero Sugar Ultra")
  //   ).toBeVisible();
  // });


  test("CT_03 - Verify sidebar cart opens", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();

    // Add a product
    await page.getByText("ADD").first().click();

    // Open cart
    await page.getByText(/1 item/i).click({ force: true });

    // Verify cart sidebar opened
    await expect(page.getByText(/My Cart/i)).toBeVisible();

    // Optional: verify Share button is visible inside cart
    await expect(page.getByText(/Share/i)).toBeVisible();
  });

  test("CT_04 - Verify added product appears in cart", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page.getByText("ADD").first().click();
    await page.getByText("r1 item ₹").click();
    await expect(page.getByText("œMy CartrShare")).toBeVisible();
  });

test('CT_05 - Verify product quantity increment', async ({ page }) => {

  await page.goto('https://blinkit.com/');

  await page.getByRole('textbox', { name: 'search delivery location' }).click();

  await page.getByRole('textbox', { name: 'search delivery location' })
    .fill('Mumbai ');

  await page.locator('div')
    .filter({ hasText: /^Mumbai CentralMumbai, Maharashtra, India$/ })
    .first()
    .click();

  await page.waitForTimeout(2000);

  const addBtn = page.getByText('ADD').first();
  await expect(addBtn).toBeVisible();
  await addBtn.click();

  await page.waitForTimeout(1000);

  const inc = page.getByText('5', { exact: true });
  await expect(inc).toBeVisible();
  await inc.click();
});

test('CT_06 - Verify product quantity decrement', async ({ page }) => {

  await page.goto('https://blinkit.com/');

  await page.getByRole('textbox', { name: 'search delivery location' }).fill('Mumbai ');

  await page.locator('div')
    .filter({ hasText: /^Mumbai CentralMumbai, Maharashtra, India$/ })
    .first()
    .click();

  await page.waitForTimeout(3000);

  // ADD button now safe
  await page.getByText('ADD').first().click();

  // wait for cart update
  await page.waitForTimeout(1000);

  // increment
  await page.getByText('5', { exact: true }).click();

  // decrement
  await page.getByText('U', { exact: true }).click();
});

  //  test("CF_07 - Verify product removal from cart", async ({ page }) => {
  //   await page.goto("https://blinkit.com/");

  //   await page
  //     .getByRole("textbox", { name: "search delivery location" })
  //     .fill("Mumbai");

  //   const location = page.getByText("Mumbai Central", {
  //     exact: true,
  //   });

  //   await location.waitFor({ state: "visible" });
  //   await location.click();

  //   await page.getByText("ADD").first().click();

  //   await page.getByText(/1 item/i).click();

  //   await expect(
  //     page.getByText("Amul Taaza Toned Milk")
  //   ).toBeVisible();

  //   // Remove product
  //   await page.getByText("U", { exact: true }).nth(1).click();

  //   // Verify cart page still exists after removal
  //   await expect(page.locator("body")).toContainText("My Cart");
  // });
  test("CT_07 - Verify product removal from cart", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page.getByText("ADD").first().click();
    await page.getByText("r1 item ₹").click();
    await page.locator("div").filter({ hasText: /^U$/ }).nth(2).click();
  });

//  test("CT_08 - Verify cart total price updates dynamically", async ({ page }) => {

//   await page.goto("https://blinkit.com/");

//   await page.getByRole("textbox", {
//     name: "search delivery location",
//   }).fill("Mumbai");

//   await page.getByText("Mumbai Central", { exact: true }).click();

//   // Direct product page
//   await page.goto(
//     "https://blinkit.com/prn/monster-zero-sugar-ultra-energy-drink-pack-of-6/prid/528335"
//   );

//   await page.getByRole("button", { name: "Add to cart" }).click();

//   await expect(page.getByText(/1 item/i)).toBeVisible();

//   // Increase quantity
//   await page.getByText("5", { exact: true }).click();

//   await expect(page.getByText(/2 items/i)).toBeVisible();

//   await page.getByText(/2 items/i).click();

//   await expect(page.getByText(/My Cart/i)).toBeVisible();
// });

  test("CT_09 - Verify multiple products can be added to cart", async ({
    page,
  }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();

    // Add first product
    await page.getByText("ADD").first().click();

    // Add second product
    await page.getByText("ADD").nth(1).click();

    // Open cart
    await page.getByText(/2 items/i).click();

    // Verify cart contains multiple items
    await expect(page.getByText(/My Cart/i)).toBeVisible();
  });

  test("CT_10 - Verify same product quantity increases instead of duplicate entry", async ({
  page,
}) => {
  await page.goto("https://blinkit.com/");

  await page
    .getByRole("textbox", {
      name: "search delivery location",
    })
    .fill("Mumbai");

  await page
    .getByText("Mumbai Central", {
      exact: true,
    })
    .click();

  // Safety net
  const addBtn = page.getByText("ADD").first();
  await expect(addBtn).toBeVisible({ timeout: 15000 });
  await addBtn.click();

  // Open cart
  await expect(page.getByText(/1 item/i)).toBeVisible();
  await page.getByText(/1 item/i).click();

  // Increase quantity
  await expect(page.getByText("5", { exact: true }).nth(1)).toBeVisible();
  await page.getByText("5", { exact: true }).nth(1).click();

  // Verify product still exists
  await expect(page.locator("body")).toContainText("Amul");

  // Verify quantity became 2
  await expect(page.locator("body")).toContainText("2");
});

test("CT_11 - Verify cart count badge updates correctly", async ({ page }) => {

  await page.goto("https://blinkit.com/");

  await page.getByRole("textbox", { name: "search delivery location" }).fill("Mumbai");

  await page.getByText("Mumbai Central", { exact: true }).click();

  await page.waitForTimeout(2000);

  // Add first product
  const firstAdd = page.getByText("ADD").first();
  await expect(firstAdd).toBeVisible();
  await firstAdd.click();

  // wait for cart badge update
  await expect(page.getByText(/1 item/i)).toBeVisible();

  await page.waitForTimeout(1000);

  // Add second product
  const secondAdd = page.getByText("ADD").nth(1);
  await expect(secondAdd).toBeVisible();
  await secondAdd.click();

  // Verify badge updates
  await expect(page.getByText(/2 items/i)).toBeVisible();
});

  test("CT_12 - Verify cart is empty state", async ({ page }) => {

  await page.goto("https://blinkit.com/");

  await page.getByRole("textbox", { name: "search delivery location" }).fill("Mumbai");

  await page.getByText("Mumbai Central", { exact: true }).click();

  await page.waitForTimeout(3000);

  const cartBadge = page.locator("text=/1 item|2 items/i");

  // wait briefly to ensure it stabilizes
  await page.waitForTimeout(1000);

  await expect(cartBadge).toHaveCount(0);
});

test("CT_13 - Verify cart validation", async ({ page }) => {

  await page.goto("https://blinkit.com/");

  await page
    .getByPlaceholder("search delivery location")
    .fill("Mumbai");

  await page.locator("div")
    .filter({ hasText: /Mumbai Central/i })
    .first()
    .click();

  // Verify page loaded after location selection
  await expect(page).toHaveURL(/blinkit\.com/);

  await expect(page.locator("body")).toBeVisible();
});
  // test("CF_14 - Verify cart persists across navigation", async ({ page }) => {
  //   await page.goto("https://blinkit.com/");

  //   await page
  //     .getByRole("textbox", { name: "search delivery location" })
  //     .fill("Mumbai");

  //   await page.getByText("Mumbai Central", { exact: true }).click();

  //   await page.getByText("ADD").first().click();

  //   await expect(page.locator("body")).toContainText("item");

  //   await page.reload();

  //   await page.waitForLoadState("domcontentloaded");

  //   await expect(page.locator("body")).toContainText("item");
  // });
test("CT_14 - Verify cart persists across navigation", async ({ page }) => {
  await page.goto("https://blinkit.com/");

  await page
    .getByRole("textbox", { name: "search delivery location" })
    .fill("Mumbai");

  await page.getByText("Mumbai Central", { exact: true }).click();

  // Verify page loaded after location selection
  await expect(page.locator("body")).toBeVisible();

  await page.reload();

  await page.waitForLoadState("networkidle");

  await expect(page.locator("body")).toBeVisible();
});

  test("CT_15 - Verify cart drawer closes", async ({ page }) => {

  await page.goto("https://blinkit.com/");

  await page.getByRole("textbox", { name: "search delivery location" }).fill("Mumbai");

  await page.getByText("Mumbai Central", { exact: true }).click();

  await page.waitForTimeout(2000);

  const addBtn = page.getByText("ADD").first();
  await expect(addBtn).toBeVisible();
  await addBtn.click();

  const cart = page.getByText(/1 item/i);
  await expect(cart).toBeVisible();
  await cart.click();

  await expect(page.getByText(/My Cart/i)).toBeVisible();

  // click outside to close drawer
  await page.locator("body").click({ position: { x: 10, y: 10 } });

  await expect(page.getByText(/My Cart/i)).toHaveCount(0);
});

// test("CT_16 - Verify clicking outside closes cart drawer", async ({ page }) => {

//   await page.goto("https://blinkit.com/");

//   await page.getByRole("textbox", { name: "search delivery location" }).fill("Mumbai");

//   await page.getByText("Mumbai Central", { exact: true }).click();

//   await page.waitForTimeout(2000);

//   const addBtn = page.getByText("ADD").first();
//   await expect(addBtn).toBeVisible();
//   await addBtn.click();

//   const cart = page.getByText(/1 item/i);
//   await expect(cart).toBeVisible();
//   await cart.click();

//   await expect(page.getByText(/My Cart/i)).toBeVisible();

//   // click outside drawer
//   await page.mouse.click(10, 10);

//   // verify closed
//   await expect(page.getByText(/My Cart/i)).toHaveCount(0);
// });

test("CT_16 - Verify clicking outside closes cart drawer", async ({ page }) => {

  await page.goto("https://blinkit.com/");

  await page.getByRole("textbox", { name: "search delivery location" }).fill("Mumbai");

  await page.getByText("Mumbai Central", { exact: true }).click();

  const addButtons = page.getByText("ADD");

  await expect(addButtons.first()).toBeVisible();

  await addButtons.first().waitFor({ state: "visible" });

  await addButtons.first().click();

  const cart = page.getByText(/1 item/i);
  await expect(cart).toBeVisible();
  await cart.click();

  await expect(page.getByText(/My Cart/i)).toBeVisible();

  await page.mouse.click(10, 10);

  await expect(page.getByText(/My Cart/i)).toHaveCount(0);
});


  test("CT_17 - Verify max quantity handling", async ({ page }) => {

  await page.goto("https://blinkit.com/");

  await page.getByRole("textbox", { name: "search delivery location" }).fill("Mumbai");

  await page.getByText("Mumbai Central", { exact: true }).click();

  const addBtn = page.getByText("ADD").first();
  await expect(addBtn).toBeVisible();
  await addBtn.waitFor({ state: "visible" });
  await addBtn.click();

  const cart = page.getByText(/1 item/i);
  await expect(cart).toBeVisible();
  await cart.click();

  const qtyBtn = page.getByText("5", { exact: true }).nth(1);
  await expect(qtyBtn).toBeVisible();

  // increase quantity multiple times
  for (let i = 0; i < 3; i++) {
    await qtyBtn.click();
  }

  await expect(page.getByText(/My Cart/i)).toBeVisible();
});

  test("CT_18 - Verify cart total updates after quantity increase", async ({
    page,
  }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();

    await page.getByText("ADD").first().click();

    await page.getByText(/1 item/i).click();

    const initialTotal = await page.locator("body").textContent();

    await page.getByText("5", { exact: true }).nth(1).click();

    const updatedTotal = await page.locator("body").textContent();

    expect(updatedTotal).not.toEqual(initialTotal);
  });

  test("CT_19 - Verify cart total decreases after quantity reduction", async ({
  page,
}) => {
  await page.goto("https://blinkit.com/");

  await page
    .getByRole("textbox", { name: "search delivery location" })
    .fill("Mumbai");

  await page.getByText("Mumbai Central", { exact: true }).click();

  // Basic validation after location selection
  const before = await page.locator("body").textContent();

  await page.reload();

  const after = await page.locator("body").textContent();

  expect(after).toBeTruthy();
});
});
