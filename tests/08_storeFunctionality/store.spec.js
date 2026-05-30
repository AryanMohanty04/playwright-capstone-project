const { test, expect } = require("@playwright/test");

test.describe("Store Module Functionality", () => {
  test("SF_1 - Search for a product", async ({ page }) => {
    // SETUP: set delivery location
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();

    // STEP 1: Open search and type exact product name
    await page.getByRole("link", { name: /Search/i }).click();
    const searchBox = page.getByRole("textbox", {
      name: "Search for atta dal and more",
    });
    await searchBox.fill("Monster Energy");
    await searchBox.press("Enter");
  });

  test("SF_02 - Search for a product using partial/misspelled keyword", async ({
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
      .getByRole("link", { name: '! Search "rice" Search "egg"' })
      .click();
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .fill("mont");
    await page.goto("https://blinkit.com/s/?q=mont");
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .press("Enter");
    await expect(page).toHaveURL(/mont/);

    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .click();
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .fill("monter");
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .press("Enter");
    await expect(page).toHaveURL(/monter/);
    const monsterBtn = page.getByRole("button", {
      name: "Monster",
      exact: true,
    });
    await expect(monsterBtn).toBeVisible();
    await monsterBtn.click();
    await expect(page).toHaveURL(/Monster|monster/);
  });

  test("SF_03 - Browse products by category", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();

    // STEP 1: Click on Cold Drinks & Juices category
    await page.getByRole("img", { name: "- Cold Drinks & Juices" }).click();

    // STEP 2: Verify category page loaded
    await expect(page).toHaveURL(
      "https://blinkit.com/cn/soft-drinks/cid/332/1102",
    );

    // STEP 3: Verify products are visible in this category
    const product = page.getByRole("button", {
      name: "10 mins Coca-Cola Diet Coke",
    });
    await expect(product).toBeVisible();
  });

  test("SF_04 - Add a product to cart", async ({ page }) => {
    // SETUP: set delivery location
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();

    // STEP 1: Search for egg
    await page
      .getByRole("link", { name: '! Search "curd" Search "rice' })
      .click();
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .fill("egg");
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .press("Enter");

    // STEP 2: Go to product page
    await page.goto(
      "https://blinkit.com/prn/hen-fruit-30-max-protein-speciality-eggs/prid/363154",
    );

    // STEP 3: Click ADD button
    // STEP 3: Click ADD button
    await page.getByRole("button", { name: /add/i }).first().click();

    // DEBUG: see what's on the page after clicking
    await page.waitForTimeout(2000);
    console.log(await page.content());
  });

  test("SF_05 - Verify search suggestions appear", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();

    const search = page.getByRole("link", { name: /Search/i });
    await search.click();

    const box = page.getByRole("textbox", {
      name: "Search for atta dal and more",
    });
    await box.fill("mil");

    const suggestions = page.getByText("milk");
    await expect(suggestions.first()).toBeVisible();
  });

  test("SF_06 - Empty search result handling", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();

    await page.getByRole("link", { name: /Search/i }).click();

    const box = page.getByRole("textbox", {
      name: "Search for atta dal and more",
    });
    await box.fill("asdhjkasdhjka123");
    await box.press("Enter");

    await expect(page.getByText(/no results/i)).toBeVisible();
  });

  // test("SF_07 - Navigate multiple categories", async ({ page }) => {
  //   await page.goto("https://blinkit.com/");

  //   await page.getByRole("textbox", { name: "search delivery location" }).fill("Mumbai");
  //   await page.getByText("Mumbai Central", { exact: true }).click();

  //   await page.getByText("Fruits & Vegetables").click();
  //   await expect(page).toHaveURL(/fruits|vegetables/);

  //   await page.goBack();

  //   await page.getByText("Dairy, Bread & Eggs").click();
  //   await expect(page).toHaveURL(/dairy|eggs/);
  // });

  test("SF_07 - Verify product page opens correctly", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page.getByRole("img", { name: "Amul Taaza Toned Milk" }).click();
    await expect(page).toHaveURL(
      "https://blinkit.com/prn/amul-taaza-toned-milk/prid/19512",
    );
  });

  test("SF_08 - Verify product page opens correctly", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    // SET LOCATION
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();

    await page.goto("https://blinkit.com/cn/soft-drinks/cid/332/1102");

    const product = page
      .getByRole("button", { name: /coca|pepsi|sprite/i })
      .first();
    await product.click();
    await expect(page).toHaveURL(/prn|prid|product/);
  });
});
