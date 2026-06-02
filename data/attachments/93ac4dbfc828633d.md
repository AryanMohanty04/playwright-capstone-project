# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 06_checkoutFlow/checkout.spec.js >> Module 6 - Checkout Flow Module (CF) >> CF_04 - Checkout page requires user to be logged in
- Location: tests/06_checkoutFlow/checkout.spec.js:55:3

# Error details

```
Error: Error reading storage state from auth.json:
ENOENT: no such file or directory, open 'auth.json'
```

# Test source

```ts
  1   | const { test, expect } = require("@playwright/test");
  2   | 
  3   | test.describe("Module 6 - Checkout Flow Module (CF)", () => {
  4   |   test.use({
  5   |     storageState: "auth.json",
  6   |     permissions: ["geolocation"],
  7   |     geolocation: {
  8   |       latitude: 12.9716,
  9   |       longitude: 77.5946,
  10  |     },
  11  |   });
  12  | 
  13  |   test("CF_01 - User can navigate to checkout page from cart", async ({
  14  |     page,
  15  |   }) => {
  16  |     await page.goto("https://blinkit.com/");
  17  |     await page
  18  |       .getByRole("link", { name: '! Search "chocolate" Search "' })
  19  |       .click();
  20  |     await page
  21  |       .getByRole("textbox", { name: "Search for atta dal and more" })
  22  |       .fill("Monster");
  23  |     await page
  24  |       .getByRole("button", { name: /Monster Zero/ })
  25  |       .first()
  26  |       .click();
  27  |     await page.getByRole("button", { name: "Add to cart" }).click();
  28  |     await page.getByText("r1 item ₹").click();
  29  |     await page.getByText("₹598TOTALProceedf").click();
  30  |     await page
  31  |       .locator("div")
  32  |       .filter({ hasText: "Select delivery address Add a" })
  33  |       .nth(4)
  34  |       .click();
  35  |   });
  36  | 
  37  |   test("CF_02 - Checkout page is inaccessible without items in cart", async ({
  38  |     page,
  39  |   }) => {
  40  |     await page.goto("https://blinkit.com/checkout/");
  41  | 
  42  |     await expect(page).not.toHaveURL(/checkout/);
  43  |   });
  44  | 
  45  |   test("CF_03 - User can go back to cart from checkout without losing items", async ({
  46  |     page,
  47  |   }) => {
  48  |     await page.goto("https://blinkit.com/");
  49  |     await page.getByText("ADD").first().click();
  50  |     await page.getByText("r1 item ₹").click();
  51  |     await page.getByText("Proceed").click();
  52  |     await page.locator(".CartAddress__Icon-sc-1jlv8-4").click();
  53  |   });
  54  | 
  55  |   test("CF_04 - Checkout page requires user to be logged in", async ({
  56  |     browser,
  57  |   }) => {
> 58  |     const context = await browser.newContext();
      |                     ^ Error: Error reading storage state from auth.json:
  59  |     const page = await context.newPage();
  60  | 
  61  |     await page.goto("https://blinkit.com/checkout/");
  62  | 
  63  |     // check it redirected away from checkout
  64  |     await expect(page).not.toHaveURL(/checkout/);
  65  | 
  66  |     await context.close();
  67  |   });
  68  | 
  69  |   test("CF_05 - Progress steps are displayed on checkout page", async ({
  70  |     page,
  71  |   }) => {
  72  |     await page.goto("https://blinkit.com/");
  73  |     await page.getByText("ADD").first().click();
  74  |     await page.getByText("r1 item ₹").click();
  75  |     await expect(page.getByText(/TOTALProceedf/)).toBeVisible();
  76  |   });
  77  | 
  78  |   test("CF_06 - User can select a saved delivery address", async ({ page }) => {
  79  |     await page.goto("https://blinkit.com/");
  80  |     await page.getByText("ADD").first().click();
  81  |     await page.getByText("r1 item ₹").click();
  82  |     await page.getByText("Proceed").click();
  83  |     await page
  84  |       .locator(".AddressList__AddressItemWrapper-sc-zt55li-1")
  85  |       .first()
  86  |       .click();
  87  |   });
  88  | 
  89  |   test("CF_07 - User can add a new delivery address during checkout", async ({
  90  |     page,
  91  |   }) => {
  92  |     await page.goto("https://blinkit.com/");
  93  | 
  94  |     await page.getByText("ADD").first().click();
  95  |     await page.getByText("r1 item ₹").click();
  96  |     await page.getByText(/TOTALProceedf/).click();
  97  | 
  98  |     //   await expect(page).toHaveURL(/checkout/);
  99  |     await page.getByText("Add a new address").click();
  100 | 
  101 |     await expect(page.getByText("Add a new address")).toBeVisible();
  102 |   });
  103 | 
  104 |   test("CF_08 - User can add new Address", async ({ page }) => {
  105 |     await page.goto("https://blinkit.com/");
  106 | 
  107 |     await page.getByText("ADD").first().click();
  108 | 
  109 |     await page.getByText(/1 item/i).click();
  110 | 
  111 |     await expect(page.getByText(/My Cart/i)).toBeVisible();
  112 | 
  113 |     const proceed = page.getByText("Proceed");
  114 | 
  115 |     await expect(proceed).toBeVisible({ timeout: 10000 });
  116 |     await proceed.click();
  117 | 
  118 |     await page.getByText("Add a new address").click();
  119 |   });
  120 | 
  121 |   test("CF_09 - User can see the new address form", async ({ page }) => {
  122 |     await page.goto("https://blinkit.com/");
  123 | 
  124 |     await page.locator("div").filter({ hasText: "Account" }).nth(5).click();
  125 | 
  126 |     await page.getByText("Saved Addresses").click();
  127 | 
  128 |     await page.locator('[data-test-id="add-new-address"]').click();
  129 | 
  130 |     // safer check instead of full messy UI string
  131 |     await expect(page.getByText(/save address as/i)).toBeVisible();
  132 |   });
  133 | 
  134 |   test("CF_10 - Address form contains required input fields", async ({
  135 |     page,
  136 |   }) => {
  137 |     await page.goto("https://blinkit.com/");
  138 | 
  139 |     await page.locator("div").filter({ hasText: "Account" }).nth(5).click();
  140 | 
  141 |     await page.getByText("Saved Addresses").click();
  142 | 
  143 |     await page.locator('[data-test-id="add-new-address"]').click();
  144 | 
  145 |     await expect(page.getByLabel(/flat|house/i)).toBeVisible();
  146 |   });
  147 | 
  148 |   
  149 | });
  150 | 
```