const { chromium } = require('@playwright/test');

async function globalSetup() {
  const browser = await chromium.launch({ headless: false }); // keep visible for OTP
  const page = await browser.newPage();

  await page.goto('https://blinkit.com/');

  await page.getByRole('textbox', {
    name: 'search delivery location',
  }).fill('Mumbai');

  await page.getByText('Mumbai Central', { exact: true }).click();

  await page.getByText('Login').click();

  await page.locator('[data-test-id="phone-no-text-box"]').fill('9938139399');

  await page.getByText('Continue').click();

  // OTP manual step
  await page.locator('[data-test-id="otp-text-box"]').nth(0).fill('5');
  await page.locator('[data-test-id="otp-text-box"]').nth(1).fill('1');
  await page.locator('[data-test-id="otp-text-box"]').nth(2).fill('5');
  await page.locator('[data-test-id="otp-text-box"]').nth(3).fill('2');

  // instead of timeout → wait for login UI
  await page.waitForSelector('text=Logout', { timeout: 60000 }).catch(() => {});

  await page.context().storageState({
    path: 'auth.json',
  });

  await browser.close();
}

module.exports = globalSetup;