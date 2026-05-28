const { test, expect } = require("@playwright/test");

test.describe("Search Module", () => {
  // Search Icon opens to Search Box
  test("S1 - Search Icon Opens to Search box", async ({ page }) => {
    await page.goto("https://www.razer.com/");

    await page
      .getByRole("button", {
        name: "Accept All",
      })
      .click();

    await page
      .getByRole("button", {
        name: "Search",
      })
      .click();
  });

  // Search Textbox accepts text
  test("S2 - Search textbox accepts text", async ({ page }) => {
    await page.goto("https://www.razer.com/");

    await page
      .getByRole("button", {
        name: "Accept All",
      })
      .click();

    await page
      .getByRole("button", {
        name: "Search",
      })
      .click();

    await page
      .getByRole("textbox", {
        name: "Search razer.com",
      })
      .fill("Blade");
  });

  // Search redirects to result page
  test("S3 - Search textbox redirect to result page", async ({ page }) => {
    await page.goto("https://www.razer.com/");

    await page
      .getByRole("button", {
        name: "Accept All",
      })
      .click();
    await page
      .getByRole("button", {
        name: "Search",
      })
      .click();
    const searchBox = page.getByRole("textbox", {
      name: "Search razer.com",
    });
    await searchBox.fill("BlackShark");
    await Promise.all([
      page.waitForURL("**/search/blackshark?sel=products"),
      searchBox.press("Enter"),
    ]);
    await page
      .getByRole("link", {
        name: /Razer BlackShark/i,
      })
      .first()
      .click();
    await expect(page).toHaveURL(/blackshark/i);
  });

  test("S4 - Invalid Search Handled Correctly", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page
      .getByRole("button", {
        name: "Accept All",
      })
      .click();
    await page
      .getByRole("button", {
        name: "Search",
      })
      .click();
    const searchBox = page.getByRole("textbox", {
      name: "Search razer.com",
    });
    await searchBox.fill("YellowShark");
    await Promise.all([
      page.waitForURL(/search\/yellowshark/i),
      searchBox.press("Enter"),
    ]);
    await expect(
      page.getByRole("heading", {
        name: "Sorry! No matches were found.",
      }),
    ).toBeVisible();
  });

  //Empty Search Validation works
  test("S5 - Empty Search Validation works", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page
      .getByRole("button", {
        name: "Accept All",
      })
      .click();
    await page
      .getByRole("button", {
        name: "Search",
      })
      .click();
    const searchBox = page.getByRole("textbox", {
      name: "Search razer.com",
    });
    await searchBox.press("Enter");
    await expect(page).toHaveURL("https://www.razer.com/");
    await expect(searchBox).toBeVisible();
  });

  test("S6 - Multiple searches work correctly", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page
      .getByRole("button", {
        name: "Accept All",
      })
      .click();
    await page
      .getByRole("button", {
        name: "Search",
      })
      .click();
    const searchBox = page.getByRole("textbox", {
      name: "Search razer.com",
    });
    await searchBox.fill("Viper");
    await Promise.all([
      page.waitForURL(/search\/viper/i),
      searchBox.press("Enter"),
    ]);
    await expect(page).toHaveURL(/search\/viper/i);
    await page
      .getByRole("button", {
        name: "Clear Search",
      })
      .click();
    await searchBox.fill("BlackShark");
    await Promise.all([
      page.waitForURL(/search\/blackshark/i),
      searchBox.press("Enter"),
    ]);
    await expect(page).toHaveURL(/search\/blackshark/i);
  });

  //Search closes successfully
  test("S7 - Search closes successfully", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.getByRole("button", { name: "Search" }).click();
    await page.getByRole("button", { name: "Close Search" }).click();
  });

  //Search works for mobile viewport
  test("S8 - Search works in mobile viewport", async ({ page }) => {
    await page.setViewportSize({
      width: 375,
      height: 812,
    });
    await page.goto("https://www.razer.com/");
    await page
      .getByRole("button", {
        name: "Accept All",
      })
      .click();
    await page
      .getByRole("button", {
        name: "Search",
      })
      .click();
    const searchBox = page.getByRole("textbox", {
      name: "Search razer.com",
    });
    await searchBox.fill("Viper");
    await Promise.all([
      page.waitForURL(/search\/viper/i),
      searchBox.press("Enter"),
    ]);
    await expect(page).toHaveURL(/search\/viper/i);
  });

  test("S9 - Search works with uppercase input", async ({ page }) => {
    await page.goto("https://www.razer.com/");

    await page
      .getByRole("button", {
        name: "Accept All",
      })
      .click();

    await page
      .getByRole("button", {
        name: "Search",
      })
      .click();

    const searchBox = page.getByRole("textbox", {
      name: "Search razer.com",
    });

    await searchBox.fill("BLACKSHARK");

    await Promise.all([
      page.waitForURL(/search\/blackshark/i),
      searchBox.press("Enter"),
    ]);

    await expect(page).toHaveURL(/search\/blackshark/i);
  });

  test("S10 - User can open product from search results", async ({ page }) => {
    await page.goto("https://www.razer.com/");

    await page
      .getByRole("button", {
        name: "Accept All",
      })
      .click();

    await page
      .getByRole("button", {
        name: "Search",
      })
      .click();

    const searchBox = page.getByRole("textbox", {
      name: "Search razer.com",
    });

    await searchBox.fill("BlackShark");

    await Promise.all([
      page.waitForURL(/search\/blackshark/i),
      searchBox.press("Enter"),
    ]);

    await page
      .getByRole("link", {
        name: /Razer BlackShark/i,
      })
      .first()
      .click();

    // Validate product page opened
    await expect(page).toHaveURL(/blackshark/i);
  });
});
