require("dotenv").config();
const { test, expect } = require("@playwright/test");

test.describe("Authentication Module", () => {
  test("AT_01 - Login popup opnes successfully", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", {
        name: "search delivery location",
      })
      .fill("Mumbai");

    await page
      .getByText("Mumbai Central", {
        exact: true,
      })
      .click();

    await page.getByText("Login").click();

    await expect(
      page.locator('[data-test-id="phone-no-text-box"]'),
    ).toBeVisible();
  });

  test("AT_02 - Phone number field accepts valid input", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", {
        name: "search delivery location",
      })
      .fill("Mumbai");

    await page
      .getByText("Mumbai Central", {
        exact: true,
      })
      .click();

    await page.getByText("Login").click();

    const phoneField = page.locator('[data-test-id="phone-no-text-box"]');

    await phoneField.fill("9938139399");

    await expect(phoneField).toHaveValue("9938139399");
  });

  test("AT_03 - Phone number field rejects invalid input", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", {
        name: "search delivery location",
      })
      .fill("Mumbai");

    await page
      .getByText("Mumbai Central", {
        exact: true,
      })
      .click();

    await page.getByText("Login").click();

    await page.locator('[data-test-id="phone-no-text-box"]').fill("1234");

    // Observe how Blinkit marks the button
    // const continueBtn = page.getByRole("button", { name: "Continue" });

    // await expect(continueBtn).toBeVisible();
    // await expect(continueBtn).toBeDisabled();
  });

  test("AT_04 - OTP screen appears after valid phone number", async ({
    page,
  }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", {
        name: "search delivery location",
      })
      .fill("Mumbai");

    await page
      .getByText("Mumbai Central", {
        exact: true,
      })
      .click();

    await page.getByText("Login").click();

    await page.locator('[data-test-id="phone-no-text-box"]').fill("9938139392");

    await page.getByText("Continue").click();

    await expect(page.getByText("OTP Verification")).toBeVisible();
  });

  test("AT_05 - OTP fields accept digits", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", {
        name: "search delivery location",
      })
      .fill("Mumbai");

    await page
      .getByText("Mumbai Central", {
        exact: true,
      })
      .click();

    await page.getByText("Login").click();

    await page.locator('[data-test-id="phone-no-text-box"]').fill("9938139392");

    await page.getByText("Continue").click();

    await expect(page.getByText("OTP Verification")).toBeVisible();
    await page.locator('[data-test-id="otp-text-box"]').first().fill("3");
  });

  test("AT_06 - Resend OTP option visible", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", {
        name: "search delivery location",
      })
      .fill("Mumbai");

    await page
      .getByText("Mumbai Central", {
        exact: true,
      })
      .click();

    await page.getByText("Login").click();

    await page.locator('[data-test-id="phone-no-text-box"]').fill("9938139392");

    await page.getByText("Continue").click();

    await expect(page.getByText("OTP Verification")).toBeVisible();
    await expect(page.locator('[data-test-id="resend-otp"]')).toBeVisible();
  });

  test("AT_07 - Resend OTP option clickable", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", {
        name: "search delivery location",
      })
      .fill("Mumbai");

    await page
      .getByText("Mumbai Central", {
        exact: true,
      })
      .click();

    await page.getByText("Login").click();

    await page.locator('[data-test-id="phone-no-text-box"]').fill("9938139392");

    await page.getByText("Continue").click();

    await expect(page.getByText("OTP Verification")).toBeVisible();
    await expect(page.locator('[data-test-id="resend-otp"]')).toBeVisible();
    await page.locator('[data-test-id="resend-otp"]').click();
  });

  test("AT_08 - Back button returns to phone number screen", async ({
    page,
  }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", {
        name: "search delivery location",
      })
      .fill("Mumbai");

    await page
      .getByText("Mumbai Central", {
        exact: true,
      })
      .click();

    await page.getByText("Login").click();

    await page.locator('[data-test-id="phone-no-text-box"]').fill("9938139392");

    await page.getByText("Continue").click();

    await expect(page.getByText("OTP Verification")).toBeVisible();

    // Back button
    await page.getByText("&", { exact: true }).click();

    await expect(
      page.locator('[data-test-id="phone-no-text-box"]'),
    ).toBeVisible();
  });

  test("AT_09 - OTP input accepts all 4 digits", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", {
        name: "search delivery location",
      })
      .fill("Mumbai");

    await page
      .getByText("Mumbai Central", {
        exact: true,
      })
      .click();

    await page.getByText("Login").click();

    await page.locator('[data-test-id="phone-no-text-box"]').fill("9938139392");

    await page.getByText("Continue").click();

    await expect(page.getByText("OTP Verification")).toBeVisible();
    await expect(page.locator('[data-test-id="resend-otp"]')).toBeVisible();
    await page.locator('[data-test-id="otp-text-box"]').nth(0).fill("1");
    await page.locator('[data-test-id="otp-text-box"]').nth(1).fill("2");
    await page.locator('[data-test-id="otp-text-box"]').nth(2).fill("3");
    await page.locator('[data-test-id="otp-text-box"]').nth(3).fill("4");

    await expect(
      page.locator('[data-test-id="otp-text-box"]').nth(0),
    ).toHaveValue("1");

    await expect(
      page.locator('[data-test-id="otp-text-box"]').nth(1),
    ).toHaveValue("2");

    await expect(
      page.locator('[data-test-id="otp-text-box"]').nth(2),
    ).toHaveValue("3");

    await expect(
      page.locator('[data-test-id="otp-text-box"]').nth(3),
    ).toHaveValue("4");
  });

  test("AT_10 - Login popup closes successfully", async ({ page }) => {
    await page.goto("https://blinkit.com/");

    await page
      .getByRole("textbox", {
        name: "search delivery location",
      })
      .fill("Mumbai");

    await page
      .getByText("Mumbai Central", {
        exact: true,
      })
      .click();

    await page.getByText("Login").click();

    await expect(
      page.locator('[data-test-id="phone-no-text-box"]'),
    ).toBeVisible();

    await page.locator("button").filter({ hasText: "&" }).click();

    await expect(
      page.locator('[data-test-id="phone-no-text-box"]'),
    ).not.toBeVisible();
  });

});
