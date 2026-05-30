const { chromium } = require('@playwright/test');

async function globalSetup() {
  const browser = await chromium.launch({ headless: false });

  // 🔥 IMPORTANT: fresh context every time
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://blinkit.com/');

  await page.getByRole('textbox', {
    name: 'search delivery location',
  }).fill('Mumbai');

  await page.getByText('Mumbai Central', { exact: true }).click();

  await page.getByText('Login').click();

  await page.locator('[data-test-id="phone-no-text-box"]').fill('9938139399');

  await page.getByText('Continue').click();

  // ❌ DO NOT auto-fill OTP anymore
  await page.pause(); // manually enter fresh OTP

  await context.storageState({ path: 'auth.json' });

  await browser.close();
}

module.exports = globalSetup;