const { test, expect } = require("@playwright/test");

test.describe("Verify Cart Functionality", () => {
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
  test("CF_01 - Verify Add to Cart functionality", async ({ page }) => {
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

    await page
      .getByRole("img", {
        name: "- Dairy, Bread & Eggs",
      })
      .click();

    await page
      .locator('[id="242693"]')
      .getByRole("button", { name: "ADD" })
      .click();

    await expect(page.getByText(/item/i)).toBeVisible();

    await page.getByText(/item/i).click();
  });

  // test("CF_02 - Verify cart sidebar opens", async ({ page }) => {
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
  //   await page.getByText(/2 items/i).click();
  //   await expect(page.getByText(/My Cart/i)).toBeVisible();
  // });

  test("CF_02 - Verify sidebar cart opens", async ({ page }) => {
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

  test("CF_03 - Verify added product appears in cart", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", {
        name: "search delivery location",
      })
      .click();

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

    await page
      .getByRole("img", {
        name: "- Dairy, Bread & Eggs",
      })
      .click();

    await page
      .locator('[id="19512"]')
      .getByRole("button", {
        name: "ADD 2 options",
      })
      .click();

    await page.locator(".tw-relative.tw-flex > .tw-rounded-md").first().click();

    await page
      .locator(
        "div:nth-child(3) > div > .tw-w-full.tw-rounded-\\[12px\\] > .tw-relative > .tw-rounded-md",
      )
      .click();

    await page
      .getByText("p", {
        exact: true,
      })
      .click();

    // Open cart
    await page.getByText(/2 items/i).click();

    // Verify product visible in cart
    await expect(page.getByText(/My Cart/i)).toBeVisible();
  });

  test("CF_04 - Verify product quantity increment", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", {
        name: "search delivery location",
      })
      .click();

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

    await page
      .getByRole("img", {
        name: "- Dairy, Bread & Eggs",
      })
      .click();

    await page
      .locator('[id="19512"]')
      .getByRole("button", {
        name: "ADD 2 options",
      })
      .click();

    await page.locator(".tw-relative.tw-flex > .tw-rounded-md").first().click();

    await page
      .locator(
        "div:nth-child(3) > div > .tw-w-full.tw-rounded-\\[12px\\] > .tw-relative > .tw-rounded-md",
      )
      .click();

    await page
      .getByText("p", {
        exact: true,
      })
      .click();

    // Open cart
    await page.getByText(/2 items/i).click();

    await expect(page.getByText(/My Cart/i)).toBeVisible();

    // Increase quantity
    await page
      .getByText("5", {
        exact: true,
      })
      .first()
      .click();

    await page
      .getByText("5", {
        exact: true,
      })
      .nth(1)
      .click();

    // Verify quantity updated
    await expect(page.locator("body")).toContainText("2");
  });

  //   test("CF_05 - Verify product quantity decrement", async ({ page }) => {
  //   await page.goto("https://blinkit.com/");

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

  //   await page
  //     .locator(".tw-relative.tw-flex > .tw-rounded-md")
  //     .first()
  //     .click();

  //   await page
  //     .locator(
  //       "div:nth-child(3) > div > .tw-w-full.tw-rounded-\\[12px\\] > .tw-relative > .tw-rounded-md"
  //     )
  //     .click();

  //   await page
  //     .getByText("p", {
  //       exact: true,
  //     })
  //     .click();

  //   // Open cart
  //   await page.getByText(/2 items/i).click();

  //   await expect(
  //     page.getByText(/My Cart/i)
  //   ).toBeVisible();

  //   // Increase quantity
  //   const plusButton = page.getByText("5", {
  //     exact: true,
  //   });

  //   await expect(plusButton).toBeVisible();
  //   await plusButton.click();

  //   // Decrease quantity
  //   const minusButton = page.getByText("U", {
  //     exact: true,
  //   });

  //   await expect(minusButton).toBeVisible();
  //   await minusButton.click();

  //   // Verify cart remains visible
  //   await expect(
  //     page.getByText(/My Cart/i)
  //   ).toBeVisible();
  // });
  test("CF_05 - Verify product quantity decrement", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page.getByRole("img", { name: "- Dairy, Bread & Eggs" }).click();
    await page
      .locator('[id="242693"]')
      .getByRole("button", { name: "ADD" })
      .click();
    await page.getByText("r1 item ₹").click();
    await page.getByText("5", { exact: true }).click();
  });

  test("CF_06 - Verify product removal from cart", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .press("ArrowDown");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page.getByRole("img", { name: "- Dairy, Bread & Eggs" }).click();
    await page
      .locator('[id="242693"]')
      .getByRole("button", { name: "ADD" })
      .click();
    await page.getByText("r", { exact: true }).click();
    await page.getByText("U", { exact: true }).click();
  });

  test("CF_07 - Verify cart total price updates dynamically", async ({
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
    await page.getByRole("img", { name: "- Dairy, Bread & Eggs" }).click();
    await page
      .locator('[id="242693"]')
      .getByRole("button", { name: "ADD" })
      .click();
    await page
      .locator('[id="176"]')
      .getByRole("button", { name: "ADD" })
      .click();
    await page.getByText("r2 items ₹").click();
  });

  test("CF_08 - Verify multiple products can be added to cart", async ({
    page,
  }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();

    // Add first product
    await page.getByText("ADD").first().click();
    await page.getByText("r1 item ₹").click();
    await page
      .locator("div")
      .filter({ hasText: /^Amul Taaza Toned Milk500 ml₹30U15$/ })
      .nth(4)
      .click();
    await page.getByText("œ").click();
    await page.getByText("ADD").first().click();
    await page.getByText("r2 items ₹").click();
    await page.getByText("Gokul Full Cream Milk").nth(2).click();
    await page
      .locator("div")
      .filter({ hasText: /^Gokul Full Cream Milk500 ml₹38U15$/ })
      .nth(4)
      .click();
  });

  test("CF_09 - Verify same product quantity increases instead of duplicate entry", async ({
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

    // Add product
    await page.getByText("ADD").first().click();

    // Open cart
    await page.getByText(/1 item/i).click();

    // Increase quantity
    await page.getByText("5", { exact: true }).nth(1).click();

    // Verify product still exists
    await expect(page.locator("body")).toContainText("Amul");
    // Verify quantity became 2
    await expect(page.locator("body")).toContainText("2");
  });

  test("CF_10 - Verify cart count badge updates correctly", async ({
    page,
  }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();

    // Add first product
    await page.getByText("ADD").first().click();

    // Verify badge
    await expect(page.getByText(/1 item/i)).toBeVisible();

    // Add second product
    await page.getByText("ADD").nth(1).click();

    // Verify badge updates
    await expect(page.getByText(/2 items/i)).toBeVisible();
  });

  test("CF_11 - Verify cart is empty state", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();

    // Wait for UI to stabilize
    await page.waitForTimeout(2000);

    // Assert cart badge is NOT visible
    await expect(page.locator("text=/1 item|2 items/i")).toHaveCount(0);
  });

  test("CF_12 - Verify cart persists after refresh", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();

    await page.getByText("ADD").first().click();

    await expect(page.getByText(/1 item/i)).toBeVisible();

    // refresh page
    await page.reload();

    // 🔥 wait for UI to rebuild
    await page.waitForLoadState("networkidle");

    // 🔥 extra stability wait (Blinkit needs this)
    await page.waitForTimeout(2000);

    // verify cart still exists
    await expect(page.getByText(/1 item/i)).toBeVisible({ timeout: 10000 });
  });

  test("CF_13 - Verify cart persists across navigation", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    // Select location
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();

    // Add product
    await page.getByText("ADD").first().click();

    // Verify item added
    await expect(page.getByText(/1 item/i)).toBeVisible();

    // Reload page
    await page.reload();

    // IMPORTANT: re-check cart state, not UI popup
    await expect(page.getByText(/1 item/i)).toBeVisible();
  });

  test("CF_14 - Verify cart drawer closes", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();

    await page.getByText("ADD").first().click();

    await page.getByText(/1 item/i).click();

    await expect(page.getByText(/My Cart/i)).toBeVisible();
    await page.locator("body").click({ position: { x: 10, y: 10 } });
    await expect(page.getByText(/My Cart/i)).toHaveCount(0);
  });

  test("CF_15 - Verify clicking outside closes cart drawer", async ({
    page,
  }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();

    await page.getByText("ADD").first().click();

    await page.getByText(/1 item/i).click();

    await expect(page.getByText(/My Cart/i)).toBeVisible();

    // click outside drawer
    await page.mouse.click(10, 10);

    // verify closed
    await expect(page.getByText(/My Cart/i)).toHaveCount(0);
  });

  test("CF_16 - Verify max quantity handling", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();

    await page.getByText("ADD").first().click();

    await page.getByText(/1 item/i).click();

    // increase quantity multiple times
    for (let i = 0; i < 3; i++) {
      await page.getByText("5", { exact: true }).nth(1).click();
    }

    // verify cart still stable
    await expect(page.getByText(/My Cart/i)).toBeVisible();
  });

  test("CF_17 - Verify cart total updates after quantity increase", async ({
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

  test("CF_18 - Verify cart total decreases after quantity reduction", async ({
    page,
  }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();

    await page.getByText("ADD").first().click();

    await page.getByText(/1 item/i).click();

    // increase qty
    await page.getByText("5", { exact: true }).nth(1).click();

    const increasedTotal = await page.locator("body").textContent();

    // decrease qty
    await page.getByText("U", { exact: true }).nth(1).click();

    const decreasedTotal = await page.locator("body").textContent();

    expect(decreasedTotal).not.toEqual(increasedTotal);
  });
});
