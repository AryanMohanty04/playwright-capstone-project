import { test as base, expect } from "@playwright/test";

export const test = base.extend({
  mobilePage: async ({ page }, use) => {
    await page.setViewportSize({ width: 375, height: 812 }); // iPhone size
    await use(page);
  },

  tabletPage: async ({ page }, use) => {
    await page.setViewportSize({ width: 768, height: 1024 }); // iPad size
    await use(page);
  },

  desktopPage: async ({ page }, use) => {
    await page.setViewportSize({ width: 1366, height: 768 }); // laptop
    await use(page);
  },
});

export { expect };