const { test, expect } = require("@playwright/test");

test.describe("Store Module Functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).waitFor();

    await page.getByText("Mumbai Central", { exact: true }).click();
  });

  test("SF_01 - Category (Juice)", async ({ page }) => {
    await page.getByRole("img", { name: "- Cold Drinks & Juices" }).click();
    await expect(page).toHaveURL(
      "https://blinkit.com/cn/soft-drinks/cid/332/1102",
    );
  });

  test("SF_02 - Category (Dairy)", async ({ page }) => {
    await page.getByRole("img", { name: "- Dairy, Bread & Eggs" }).click();
    await expect(page).toHaveURL("https://blinkit.com/cn/milk/cid/14/922");
  });

  test("SF_03 - Category (Fruits)", async ({ page }) => {
    await page.getByRole("img", { name: "- Fruits & Vegetables" }).click();

    await expect(page).toHaveURL(
      "https://blinkit.com/cn/fresh-vegetables/cid/1487/1489",
    );
  });

  test("SF_04 - Verify Category Page Displays Products", async ({ page }) => {
    await page
      .getByRole("img", {
        name: "- Fruits & Vegetables",
      })
      .click();

    await expect(page).toHaveURL(
      "https://blinkit.com/cn/fresh-vegetables/cid/1487/1489",
    );

    await expect(
      page.getByRole("heading", {
        name: "Vegetables & Fruits",
      }),
    ).toBeVisible();
  });

  test("SF_05 - Verify Product Cards Display Product Name", async ({
    page,
  }) => {
    await page
      .getByRole("img", {
        name: "- Cold Drinks & Juices",
      })
      .click();

    await expect(
      page.getByRole("button", {
        name: /Coca-Cola Diet Coke/i,
      }),
    ).toBeVisible();
  });

  test("SF_06 - Verify Product Cards Display Product Price", async ({
    page,
  }) => {
    await page
      .getByRole("img", {
        name: "- Cold Drinks & Juices",
      })
      .click();

    await expect(page).toHaveURL(/soft-drinks/);

    await expect(page.getByText("₹").first()).toBeVisible();
  });

  test("SF_07 - Verify Product Cards Display Product Image", async ({
    page,
  }) => {
    await page
      .getByRole("img", {
        name: "- Cold Drinks & Juices",
      })
      .click();

    await expect(page).toHaveURL(/soft-drinks/);

    const images = page.locator("img");

    expect(await images.count()).toBeGreaterThan(0);
  });

  test("SF_09 - Verify Category Page Is Not Empty", async ({ page }) => {
    await page
      .getByRole("img", {
        name: "- Cold Drinks & Juices",
      })
      .click();

    await expect(page).toHaveURL(/soft-drinks/);

    await expect(
      page.getByText(/Coca-Cola|Pepsi|Sprite/i).first(),
    ).toBeVisible();
  });

  test("SF_10 - Verify Category URL Structure", async ({ page }) => {
    await page
      .getByRole("img", {
        name: "- Cold Drinks & Juices",
      })
      .click();

    await expect(page).toHaveURL(/\/cn\//);
  });

  test("SF_11 - Verify Category Page Loads Successfully", async ({ page }) => {
    await page
      .getByRole("img", {
        name: "- Cold Drinks & Juices",
      })
      .click();

    await expect(page).toHaveURL(/soft-drinks/);

    await expect(
      page.getByRole("heading", {
        name: /Cold Drinks/i,
      }),
    ).toBeVisible();
  });

  test("SF_12 - Verify Category Page Persists After Refresh", async ({
    page,
  }) => {
    await page
      .getByRole("img", {
        name: "- Cold Drinks & Juices",
      })
      .click();

    await expect(page).toHaveURL(/soft-drinks/);

    await page.reload();

    await expect(page).toHaveURL(/soft-drinks/);
  });

  // test("SF_13 - Verify Multiple Categories Can Be Opened Sequentially", async ({
  //   page,
  // }) => {
  //   await page
  //     .getByRole("img", {
  //       name: "- Cold Drinks & Juices",
  //     })
  //     .click();

  //   await expect(page).toHaveURL(/soft-drinks/);

  //   await page.goBack();

  //   await page
  //     .getByRole("img", {
  //       name: "- Dairy, Bread & Eggs",
  //     })
  //     .click();

  //   await expect(page).toHaveURL(/milk|dairy|eggs/);
  // });

  test("SF_14 - Verify Scrolling Through Category Page Works", async ({
    page,
  }) => {
    await page
      .getByRole("img", {
        name: "- Cold Drinks & Juices",
      })
      .click();

    await expect(page).toHaveURL(/soft-drinks/);

    await page.mouse.wheel(0, 3000);

    await expect(
      page.getByText(/Coca-Cola|Pepsi|Sprite/i).first(),
    ).toBeVisible();
  });

  // test("SF_15 - Verify Product Count Is Greater Than Zero", async ({
  //   page,
  // }) => {
  //   await page
  //     .getByRole("img", {
  //       name: "- Cold Drinks & Juices",
  //     })
  //     .click();

  //   await expect(page).toHaveURL(/soft-drinks/);

  //   const products = page.locator("img");

  //   expect(await products.count()).toBeGreaterThan(5);
  // });
  test("SF_15 - Verify Product Count Is Greater Than Zero", async ({
    page,
  }) => {
    await page
      .getByRole("img", {
        name: "- Cold Drinks & Juices",
      })
      .click();

    await expect(page).toHaveURL(/soft-drinks/);

    await expect(
      page
        .getByRole("button", {
          name: /Coca-Cola|Pepsi|Sprite/i,
        })
        .first(),
    ).toBeVisible();
  });

  test("SF_16 - Verify Product Card Contains Image, Name, Price and ADD Button", async ({
    page,
  }) => {
    await page
      .getByRole("img", {
        name: "- Cold Drinks & Juices",
      })
      .click();

    await expect(page).toHaveURL(/soft-drinks/);

    // Product Name
    await expect(
      page.getByRole("button", {
        name: /Coca-Cola Diet Coke/i,
      }),
    ).toBeVisible();

    // Product Image
    await expect(page.locator("img").first()).toBeVisible();

    // Product Price
    await expect(page.getByText(/₹/).first()).toBeVisible();

    // ADD Button
    await expect(
      page
        .getByRole("button", {
          name: /add/i,
        })
        .first(),
    ).toBeVisible();
  });
});
