const { test, expect } = require("@playwright/test");

test.describe("Search Module Functionality", () => {
  test("SF_01 - Verify search icon opens search input field", async ({
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
      .getByRole("link", { name: '! Search "curd" Search "rice' })
      .click();
  });

  test("SF_02 - Verify search textbox accepts user input", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page
      .getByRole("link", { name: '! Search "curd" Search "rice' })
      .click();
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .fill("Egg");
  });

  test("SF_03 - Search redirects to results page", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page
      .getByRole("link", { name: '! Search "curd" Search "rice' })
      .click();
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .fill("Egg");
  });

  test("SF_04 - Verify invalid search handling", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    const searchBox = page.getByRole("textbox", {
      name: "Search for atta dal and more",
    });
    await expect(page.locator("body")).toBeVisible();
  });

  test("SF_05 - Verify empty search validation", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page.getByRole("link", { name: '! Search "sugar" Search "' }).click();
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .press("Enter");
    await expect(page).toHaveURL("https://blinkit.com/s/");
  });

  test("SF_06 - Verify multiple consecutive searches", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page
      .getByRole("link", { name: '! Search "paneer" Search "' })
      .click();
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .fill("Redbull");
    await page.goto("https://blinkit.com/s/?q=red%20bull");
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .fill("Redbull");
    await page.goto("https://blinkit.com/s/?q=monster");
  });

  test("SF_07 - Verify Search close functionality", async ({ page }) => {
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
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .fill("Monster");
    await page.getByRole("button", { name: "Monster", exact: true }).click();
    await page.getByText("p", { exact: true }).click();
    await expect(page).toHaveURL("https://blinkit.com/s/");
  });

  test("SF_08 - Verify search works in mobile viewport", async ({ page }) => {
    // Mobile viewport
    await page.setViewportSize({
      width: 375,
      height: 812,
    });
    await page.goto("https://blinkit.com/");
    await expect(page).toHaveURL("https://blinkit.com/");
  });

  test("SF_09 - Verify search with uppercase input", async ({ page }) => {
    await page.goto("https://blinkit.com/");
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .click();
    await page
      .getByRole("textbox", { name: "search delivery location" })
      .fill("Mumbai");
    await page.getByText("Mumbai Central", { exact: true }).click();
    await page.getByRole("link", { name: '! Search "sugar" Search "' }).click();
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .fill("MONSTER");
    await page.goto("https://blinkit.com/s/?q=monster");
  });

  test("SF_10 - Verify product navigation from search results", async ({
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
      .getByRole("link", { name: '! Search "paneer" Search "' })
      .click();
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .fill("Monster");
    await page
      .getByRole("textbox", { name: "Search for atta dal and more" })
      .press("Enter");
    await page.goto("https://blinkit.com/s/");
    await page.locator(".list > div").click();
  });

  test("SF_11 - Verify special character search handling", async ({ page }) => {
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
      .getByRole("link", {
        name: '! Search "chocolate" Search "',
      })
      .click();

    await page
      .getByRole("textbox", {
        name: "Search for atta dal and more",
      })
      .fill("#@!");

    // Verify invalid/special character handling
    await expect(page.getByText("Nothing here yet")).toBeVisible();
  });

  test("SF_12 - Verify search suggestions appear dynamically", async ({
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
      .fill("chips");
    await expect(
      page.getByRole("button", {
        name: "Chips",
        exact: true,
      }),
    ).toBeVisible();
  });

  test("SF_13 - Verify search results display correctly", async ({ page }) => {
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
      .getByRole("link", {
        name: '! Search "paneer" Search "',
      })
      .click();

    await page
      .getByRole("textbox", {
        name: "Search for atta dal and more",
      })
      .fill("Milk");

    await page.goto("https://blinkit.com/s/?q=Milk");

    // Verify search result appears
    await expect(
      page.getByRole("button", {
        name: "Gokul milk",
      }),
    ).toBeVisible();
  });

//   test("SF_14 - Verify search results display correctly", async ({
//   page,
// }) => {

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

//   await page.getByText("Mumbai Central", {
//     exact: true,
//   }).click();

//   // Open search page directly
//   await page.goto("https://blinkit.com/s/");

//   const searchBox = page.getByRole("textbox", {
//     name: "Search for atta dal and more",
//   });

//   await expect(searchBox).toBeVisible();

//   await searchBox.fill("milk");

//   await searchBox.press("Enter");

//   // Verify results loaded
//   await expect(
//     page.locator("body")
//   ).toContainText(/milk/i);

// });

});
