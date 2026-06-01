const { test } = require("@playwright/test");

test("Generate Auth State", async ({ page }) => {
  await page.goto("https://blinkit.com/");

  await page.getByRole("textbox", {
    name: "search delivery location",
  }).fill("Mumbai");

  await page.getByText("Mumbai Central", {
    exact: true,
  }).click();

  await page.getByText("Login").click();

  await page
    .locator('[data-test-id="phone-no-text-box"]')
    .fill("9938139399");

  await page.getByText("Continue").click();

  await page.pause(); // Enter OTP manually

  await page.context().storageState({
    path: "auth.json",
  });
});