import { test as base, expect, devices } from "@playwright/test";

export const test = base.extend({
  page: async ({ browser }, use) => {
    const context = await browser.newContext({
      ...devices["iPhone 12"],
    });

    const page = await context.newPage();

    await page.goto("https://blinkit.com/");

    // popup handling
    const closeBtn = page.getByAltText("Close Slider");
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
    }

    const manual = page.getByText("Select manually");
    if (await manual.isVisible()) {
      await manual.click();
    }

    await page
      .getByPlaceholder("search delivery location")
      .fill("Mumbai");

    await page.getByText("Mumbai Central", { exact: true }).click();

    await use(page);

    await context.close();
  },
});

export { expect };