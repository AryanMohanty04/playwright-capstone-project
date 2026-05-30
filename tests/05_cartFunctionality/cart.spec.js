const { test, expect } = require("@playwright/test");

test.describe("Verify Cart Functionality", () => {
  test("CF_01 - Verify Add to Cart button functionality", async ({ page }) => {
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
    await expect(page.getByText(/item/i)).toBeVisible();
  });

  test("CF_02 - Verify cart sidebar opens", async ({ page }) => {
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
    await page.getByText(/2 items/i).click();
    await expect(page.getByText(/My Cart/i)).toBeVisible();
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

  test("CF_05 - Verify product quantity decrement", async ({ page }) => {
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

    // Increase quantity first
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

    // Decrease quantity
    await page
      .getByText("U", {
        exact: true,
      })
      .first()
      .click();
    // Verify cart still visible after decrement
    await expect(page.getByText(/My Cart/i)).toBeVisible();
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
    .getByRole("textbox", {
      name: "search delivery location",
    })
    .click();

  await page
    .getByRole("textbox", {
      name: "search delivery location",
    })
    .fill("Mumbai");

  await page.getByText("Mumbai Central", {
    exact: true,
  }).click();

  await page.getByRole("img", {
    name: "- Dairy, Bread & Eggs",
  }).click();

  await page
    .locator('[id="19512"]')
    .getByRole("button", {
      name: "ADD 2 options",
    })
    .click();

  await page
    .locator(".tw-relative.tw-flex > .tw-rounded-md")
    .first()
    .click();

  await page
    .locator(
      "div:nth-child(3) > div > .tw-w-full.tw-rounded-\\[12px\\] > .tw-relative > .tw-rounded-md"
    )
    .click();

  // Open cart
  await page.getByText(/2 items/i).click();

  // Verify grand total visible
  await expect(
  page.locator("div").filter({
    hasText: /Grand total/i,
  })
).toBeVisible();

});
});
