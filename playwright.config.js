// @ts-check
const { defineConfig, devices } = require("@playwright/test");
require("dotenv").config();

module.exports = defineConfig({
  testDir: "./tests",

  globalSetup: require.resolve('./global-setup'),

  timeout: process.env.CI ? 120000 : 60000,

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 1 : 0,

  workers: process.env.CI ? 1 : 4,

  reporter: [
    ["html"],
    ["list"],
    ["allure-playwright", { resultsDir: "allure-results" }],
  ],

  use: {
    headless: !!process.env.CI,

    slowMo: process.env.CI ? 0 : 500,
    storageState: undefined,

    trace: "on-first-retry",

    screenshot: "only-on-failure",
  },

  // projects: [
  //   {
  //     name: "chromium",
  //     use: { ...devices["Desktop Chrome"] },
  //   },
  //   {
  //     name: "firefox",
  //     use: { ...devices["Desktop Firefox"] },
  //   },
  //   {
  //     name: "webkit",
  //     use: { ...devices["Desktop Safari"] },
  //   },
  // ],
  // projects: [
  //   {
  //     name: "chromium",
  //     use: {
  //       ...devices["Desktop Chrome"],
  //       storageState: "auth.json",
  //     },
  //   },
  //   {
  //     name: "firefox",
  //     use: {
  //       ...devices["Desktop Firefox"],
  //       storageState: "auth.json",
  //     },
  //   },
  //   {
  //     name: "webkit",
  //     use: {
  //       ...devices["Desktop Safari"],
  //       storageState: "auth.json",
  //     },
  //   },
  // ],
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    },
  ],
});
