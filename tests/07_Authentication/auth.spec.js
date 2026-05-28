// // import { defineConfig } from '@playwright/test';
// // import dotenv from 'dotenv';
// const {test,expect} = require("@playwright/test");

// test('Valid login test', async ({ page }) => {
//   await page.goto('https://razerid.razer.com/');

//   await page.fill('#input-login-email', 'aryan33348@gmail.com');
//   await page.fill('#input-login-password', 'AryanKirigaya04');

//   await page.click('button:has-text("Log in")');

//   await expect(page).toHaveURL(/dashboard/);
// });