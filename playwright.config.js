import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  workers: process.env.CI ? 1 : 2,

  retries: process.env.CI ? 2 : 0,

  outputDir: "test-results",

  reporter: [["list"], ["allure-playwright"]],

  use: {
    baseURL: "https://www.razer.com",

    headless: true,

    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "on-first-retry",

    actionTimeout: 30000,
    navigationTimeout: 30000,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});