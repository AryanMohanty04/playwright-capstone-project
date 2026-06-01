// @ts-check
const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  timeout: process.env.CI ? 120000 : 60000,
  fullyParallel: true,           // ← was false, big perf win
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 4,  // ← was 1 in CI, too slow

  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright', { resultsDir: 'allure-results' }]
  ],

  use: {
    headless: !!process.env.CI,   // ← uncomment this! Critical for Ubuntu CI
    slowMo: process.env.CI ? 0 : 500,
    storageState: undefined,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: process.env.CI
    ? [
        // In CI only run Chromium to stay within 60min limit
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
      ]
    : [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
        { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
      ],
});