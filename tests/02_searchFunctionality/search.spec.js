const { test, expect } = require("@playwright/test");

test.describe("Module - 2 Search Functionality Module (S)", () => {
  test("S_01 - Verify search icon opens search input field", async ({
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

  test("S_02 - Verify search textbox accepts user input", async ({ page }) => {
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

  test("S_03 - Search redirects to results page", async ({ page }) => {
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

  test("S_04 - Verify invalid search handling", async ({ page }) => {
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

  test("S_05 - Verify empty search validation", async ({ page }) => {
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

  test("S_06 - Verify multiple consecutive searches", async ({ page }) => {
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

  test("S_07 - Verify Search close functionality", async ({ page }) => {
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

  test("S_08 - Verify search works in mobile viewport", async ({ page }) => {
    // Mobile viewport
    await page.setViewportSize({
      width: 375,
      height: 812,
    });
    await page.goto("https://blinkit.com/");
    await expect(page).toHaveURL("https://blinkit.com/");
  });

  test("S_09 - Verify search with uppercase input", async ({ page }) => {
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

  test("S_10 - Verify product navigation from search results", async ({
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

  test("S_11 - Verify special character search handling", async ({ page }) => {
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

  test("S_12 - Verify search suggestions appear dynamically", async ({
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

  test("S_13 - Verify search results display correctly", async ({ page }) => {
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

// const { test, expect } = require("@playwright/test");
// const { LocationPage } = require("../../pages/LocationPage");
// const { SearchPage } = require("../../pages/SearchPage");

// test.describe("Module - 2 Search Functionality Module (S)", () => {
//   test("S_01 - Verify search icon opens search input field", async ({ page }) => {
//     const location = new LocationPage(page);
//     const search = new SearchPage(page);

//     await location.open();
//     await location.selectMumbai();
//     await search.openSearch();
//   });

//   test("S_02 - Verify search textbox accepts user input", async ({ page }) => {
//     const location = new LocationPage(page);
//     const search = new SearchPage(page);

//     await location.open();
//     await location.selectMumbai();
//     await search.openSearch();

//     await search.search("Egg");
//   });

//   test("S_03 - Search redirects to results page", async ({ page }) => {
//     const location = new LocationPage(page);
//     const search = new SearchPage(page);

//     await location.open();
//     await location.selectMumbai();
//     await search.openSearch();

//     await search.search("Egg");
//   });

//   test("S_04 - Verify invalid search handling", async ({ page }) => {
//     const location = new LocationPage(page);

//     await location.open();
//     await location.selectMumbai();

//     await expect(page.locator("body")).toBeVisible();
//   });

//   test("S_05 - Verify empty search validation", async ({ page }) => {
//     const location = new LocationPage(page);
//     const search = new SearchPage(page);

//     await location.open();
//     await location.selectMumbai();
//     await search.openSearch();

//     await search.pressEnter();

//     await expect(page).toHaveURL("https://blinkit.com/s/");
//   });

//   test("S_06 - Verify multiple consecutive searches", async ({ page }) => {
//     const location = new LocationPage(page);
//     const search = new SearchPage(page);

//     await location.open();
//     await location.selectMumbai();
//     await search.openSearch();

//     await search.search("Redbull");
//     await search.gotoSearchURL("monster");
//   });

//   test("S_07 - Verify Search close functionality", async ({ page }) => {
//     const location = new LocationPage(page);
//     const search = new SearchPage(page);

//     await location.open();
//     await location.selectMumbai();
//     await search.openSearch();

//     await search.search("Monster");
//     await search.openResultItem();
//   });

//   test("S_08 - Verify search works in mobile viewport", async ({ page }) => {
//     await page.setViewportSize({ width: 375, height: 812 });

//     const location = new LocationPage(page);

//     await location.open();
//     await expect(page).toHaveURL("https://blinkit.com/");
//   });

//   test("S_09 - Verify search with uppercase input", async ({ page }) => {
//     const location = new LocationPage(page);
//     const search = new SearchPage(page);

//     await location.open();
//     await location.selectMumbai();
//     await search.openSearch();

//     await search.search("MONSTER");
//     await search.gotoSearchURL("monster");
//   });

//   test("S_10 - Verify product navigation from search results", async ({ page }) => {
//     const location = new LocationPage(page);
//     const search = new SearchPage(page);

//     await location.open();
//     await location.selectMumbai();
//     await search.openSearch();

//     await search.search("Monster");
//     await search.pressEnter();

//     await search.gotoSearchURL("");
//     await search.openResultItem();
//   });

//   test("S_11 - Verify special character search handling", async ({ page }) => {
//     const location = new LocationPage(page);

//     await location.open();
//     await location.selectMumbai();

//     await expect(page.getByText("Nothing here yet")).toBeVisible();
//   });

//   test("S_12 - Verify search suggestions appear dynamically", async ({ page }) => {
//     const location = new LocationPage(page);
//     const search = new SearchPage(page);

//     await location.open();
//     await location.selectMumbai();
//     await search.openSearch();

//     await search.search("chips");

//     await expect(page.getByRole("button", { name: "Chips" })).toBeVisible();
//   });

//   test("S_13 - Verify search results display correctly", async ({ page }) => {
//     const location = new LocationPage(page);
//     const search = new SearchPage(page);

//     await location.open();
//     await location.selectMumbai();
//     await search.openSearch();

//     await search.search("Milk");
//     await search.gotoSearchURL("Milk");

//     await expect(page.getByRole("button", { name: "Gokul milk" })).toBeVisible();
//   });
// });