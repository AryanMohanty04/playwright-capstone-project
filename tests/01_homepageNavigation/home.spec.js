const { test, expect } = require("@playwright/test");
test.describe("Homepage Navigation Module", () => {
  test("HN_01 - Verifying Homepage loads successfully", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await expect(page).toHaveURL("https://blinkit.com/");
  });

  test("HN_02 - Verify location popup acceptance", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
  });

  test("HN_03 - Verify Shop Now button functionality", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page.getByRole("img", { name: "fnv banner" }).click();
  });

  test("HN_04 - Verify logo returns to Homepage", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page.getByRole("img", { name: "fnv banner" }).click();
    await page.getByRole("link").filter({ hasText: /^$/ }).click();
    await expect(page).toHaveURL("https://blinkit.com/");
  });

  test("HN_05 - Verifying Search Box Typing", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page.getByRole("textbox", { name: "Search for atta dal and more" });
  });

  test("HN_06 - Verify search input accepts typing", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page.goto("https://blinkit.com/s/");
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .fill("egg");
  });

  test("HN_07 - Verify search and redirect functionality", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page
      .getByRole("link", { name: '! Search "chocolate" Search "' })
      .click();
    await page.goto("https://blinkit.com/s/");
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .fill("egg");
    await expect(page).toHaveURL("https://blinkit.com/s/?q=egg");
  });

  test("HN_08 - Verify cart opens after adding products", async ({ page }) => {
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
      .locator('[id="19512"]')
      .getByRole("button", { name: "ADD 2 options" })
      .click();
    await page.locator(".tw-relative.tw-flex > .tw-rounded-md").first().click();
    await page.getByText("p", { exact: true }).click();
    await page.getByText("item").click();
    await page.getByText("My Cart").click();
  });

  test("HN_09 - Verify footer", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    // Select location
    const locationInput = page.getByRole("textbox", {
      name: "search delivery location",
    });

    await locationInput.click();
    await locationInput.fill("Mumbai");

    await page
      .getByText("Mumbai Central", {
        exact: true,
      })
      .click();
    await page.locator("footer").scrollIntoViewIfNeeded();
    await expect(page.locator("footer")).toBeVisible();
  });

  test("HN_10 - Verify Contact footer link", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    const locationInput = page.getByRole("textbox", {
      name: "search delivery location",
    });

    await locationInput.click();
    await locationInput.fill("Mumbai");

    await page
      .getByText("Mumbai Central", {
        exact: true,
      })
      .click();
    await page.locator("footer").scrollIntoViewIfNeeded();
    const [newPage] = await Promise.all([
      page.waitForEvent("popup"),
      page
        .getByRole("link", {
          name: "Contact",
        })
        .click(),
    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(/contact/);
    await expect(newPage).toHaveTitle(/contact/i);
  });

  test("HN_11 - Verify browser back navigation", async ({ page }) => {

  await page.goto("https://blinkit.com/");

  const locationInput = page.getByRole("textbox", {
    name: "search delivery location",
  });
  await locationInput.click();
  await locationInput.fill("Mumbai");
  await page.getByText("Mumbai Central", {
    exact: true,
  }).click();
  await page.getByRole("img", {
    name: "- Dairy, Bread & Eggs",
  }).click();
  await expect(page).not.toHaveURL("https://blinkit.com/");
  await page.goBack();
  await expect(page).toHaveURL("https://blinkit.com/");

});

  test("HN_12 - Verify sticky navbar", async ({ page }) => {
  await page.goto("https://blinkit.com/");
  const locationInput = page.getByRole("textbox", {
    name: "search delivery location",
  });
  await locationInput.click();
  await locationInput.fill("Mumbai");
  await page.getByText("Mumbai Central", {
    exact: true,
  }).click();
  const navbar = page.locator("header");
  await expect(navbar).toBeVisible();
  await page.mouse.wheel(0, 3000);
  await expect(navbar).toBeVisible();
});
});


test("HN_13 - Verify mobile responsiveness", async ({ browser }) => {

  const context = await browser.newContext({
    viewport: {
      width: 375,
      height: 812,
    },
  });
  const page = await context.newPage();
  await page.goto("https://blinkit.com/");
  await expect(page).toHaveURL(/blinkit/);
  await expect(page.locator("body")).toBeVisible();
  await expect(page.locator("header")).toBeVisible();

});

test("HN_14 - Verify search suggestions appear", async ({ page }) => {

  await page.goto("https://blinkit.com/");

  const locationInput = page.getByRole("textbox", {
    name: "search delivery location",
  });

  await locationInput.click();
  await locationInput.fill("Mumbai");

  await page.getByText("Mumbai Central", {
    exact: true,
  }).click();

  await page.goto("https://blinkit.com/s/");

  const searchBox = page.getByRole("textbox", {
    name: "Search for atta dal and more",
  });

  await searchBox.fill("milk");
  await expect(
    page.getByText(/milk/i).first()
  ).toBeVisible();

});

test("HN_15 - Verify homepage refresh behavior", async ({ page }) => {

  await page.goto("https://blinkit.com/");
  const locationInput = page.getByRole("textbox", {
    name: "search delivery location",
  });

  await locationInput.click();
  await locationInput.fill("Mumbai");
  await page.getByText("Mumbai Central", {
    exact: true,
  }).click();
  await page.reload();
  await expect(page).toHaveURL("https://blinkit.com/");
  await expect(page.locator("header")).toBeVisible();

});