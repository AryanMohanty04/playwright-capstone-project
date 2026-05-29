# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 01_homepage/homepage.spec.js >> Homepage & Navigation Module >> HN_10 - Get Help footer link opens correctly
- Location: tests/01_homepage/homepage.spec.js:91:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Accept All' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - img [ref=e3]
  - generic [ref=e4]: "::CLOUDFLARE_ERROR_1000S_BOX::"
```

# Test source

```ts
  1   | const { test, expect } = require("@playwright/test");
  2   | 
  3   | test.describe("Homepage & Navigation Module", () => {
  4   |   test("HN_01 - Homepage loads successfully", async ({ page }) => {
  5   |     await page.goto("https://www.razer.com/");
  6   | 
  7   |     await expect(page).toHaveURL(/razer\.com/);
  8   |   });
  9   | 
  10  |   //Click on the popup cookies
  11  |   test('HN-02 Buy link redirects to product page', async ({ page }) => {
  12  |   await page.goto('https://www.razer.com/');
  13  |   await page.getByRole('button', { name: 'Accept All' }).click();
  14  |   await page.getByRole('link', { name: 'Buy' }).first().click();
  15  |   await expect(page).toHaveURL("https://www.razer.com/gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1");
  16  | });
  17  | 
  18  |   //Clicking on the Buy Now Button
  19  |   test("HN_03 - Store navigation and homepage redirect works", async ({ page }) => {
  20  |     await page.goto("https://www.razer.com/");
  21  |     await page.getByRole("button", { name: "Accept All" }).click();
  22  |     await page.getByRole("link", { name: "Store", exact: true }).click();
  23  |     await page.getByRole("link", { name: "Razer Homepage" }).click();
  24  |   });
  25  | 
  26  |   //Clicking on the Learn More Button
  27  |   test("HN_04 - Hero banner Learn More button works", async ({ page }) => {
  28  |     await page.goto("https://www.razer.com/");
  29  |     await page.getByRole("button", { name: "Accept All" }).click();
  30  |     await page
  31  |       .locator("a")
  32  |       .filter({ hasText: /^Learn More$/ })
  33  |       .first()
  34  |       .click();
  35  |   });
  36  | 
  37  |   //Search Operations:->
  38  | 
  39  |   //Search icon opens search input
  40  |   test("HN_05 - Search icon opens search input", async ({ page }) => {
  41  |     await page.goto("https://www.razer.com/");
  42  |     await page.getByRole("button", { name: "Accept All" }).click();
  43  |     await page.getByRole("button", { name: "Search" }).click();
  44  |   });
  45  | 
  46  |   //Search input accepts typing
  47  |   test("HN_06 - Search input accepts typing", async ({ page }) => {
  48  |     await page.goto("https://www.razer.com/");
  49  |     await page.getByRole("button", { name: "Accept All" }).click();
  50  |     await page.getByRole("button", { name: "Search" }).click();
  51  |     await page.getByText("Search razer.com").click();
  52  |     await page
  53  |       .getByRole("textbox", { name: "Search razer.com" })
  54  |       .fill("Razer Blade");
  55  |   });
  56  | 
  57  |   //Search input accepts typing and redirects
  58  |   test("HN_07 - Search input accepts typing and redirects", async ({
  59  |     page,
  60  |   }) => {
  61  |     await page.goto("https://www.razer.com/");
  62  |     await page.getByRole("button", { name: "Accept All" }).click();
  63  |     await page.getByRole("button", { name: "Search" }).click();
  64  |     await page.getByRole("dialog", { name: "Search" }).click();
  65  |     await page
  66  |       .getByRole("textbox", { name: "Search razer.com" })
  67  |       .fill("BlackShark");
  68  |     await page
  69  |       .getByRole("textbox", { name: "Search razer.com" })
  70  |       .press("Enter");
  71  |   });
  72  | 
  73  |   //Cart Operations:->
  74  |   //Cart Opens Successfully
  75  |   test("HN_08 - Cart opens successfully", async ({ page }) => {
  76  |     await page.goto("https://www.razer.com/");
  77  |     await page.getByRole("button", { name: "Accept All" }).click();
  78  |     await page.getByRole("button", { name: "items in cart" }).click();
  79  |     await page.getByRole("link", { name: "Cart (0 items)" }).click();
  80  |   });
  81  | 
  82  |   //Razer Logo return to homepage
  83  |   test("HN_09 - Razer Logo returns to the HomePage", async ({ page }) => {
  84  |     await page.goto("https://www.razer.com/");
  85  |     await page.getByRole("button", { name: "Accept All" }).click();
  86  |     await page.getByRole("link", { name: "Store", exact: true }).click();
  87  |     await page.getByRole("link", { name: "Razer Homepage" }).click();
  88  |   });
  89  | 
  90  |   //Footer Link Check
  91  |   test("HN_10 - Get Help footer link opens correctly", async ({ page }) => {
  92  |     await page.goto("https://www.razer.com/");
  93  | 
  94  |     await page
  95  |       .getByRole("button", {
  96  |         name: "Accept All",
  97  |       })
> 98  |       .click();
      |        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  99  | 
  100 |     await page
  101 |       .getByRole("link", {
  102 |         name: "Get Help",
  103 |       })
  104 |       .click();
  105 |   });
  106 | 
  107 |   //Check for Mobile hamburger menu
  108 |   test("HN_11 - Mobile hamburger menu opens successfully", async ({ page }) => {
  109 |     await page.setViewportSize({
  110 |       width: 375,
  111 |       height: 667,
  112 |     });
  113 | 
  114 |     await page.goto("https://www.razer.com/");
  115 |     await page
  116 |       .getByRole("button", {
  117 |         name: "Accept All",
  118 |       })
  119 |       .click();
  120 | 
  121 |     await page
  122 |       .getByRole("button", {
  123 |         name: "Menu",
  124 |       })
  125 |       .click();
  126 |   });
  127 | 
  128 |   // Sticky Navabr check
  129 |   test("HN_12 - Sticky navbar visible while scrolling", async ({ page }) => {
  130 |     await page.goto("https://www.razer.com/");
  131 | 
  132 |     await page
  133 |       .getByRole("button", {
  134 |         name: "Accept All",
  135 |       })
  136 |       .click();
  137 | 
  138 |     await page.mouse.wheel(0, 3000); //scrolls down
  139 |     await expect(page.getByRole("navigation")).toBeVisible();
  140 |   });
  141 | 
  142 |   test("HN_13 - Change location popup opens correctly", async ({ page }) => {
  143 |     await page.goto("https://www.razer.com/");
  144 | 
  145 |     await page
  146 |       .getByRole("button", {
  147 |         name: "Accept All",
  148 |       })
  149 |       .click();
  150 | 
  151 |     await page
  152 |       .getByRole("link", {
  153 |         name: "Change Location >",
  154 |       })
  155 |       .click();
  156 |   });
  157 | 
  158 |   //Browser Back Button works
  159 |   test("HN_14 - Browser back button works correctly", async ({ page }) => {
  160 |   await page.goto("https://www.razer.com/");
  161 | 
  162 |   const acceptBtn = page.getByRole("button", { name: "Accept All" });
  163 |   if (await acceptBtn.isVisible().catch(() => false)) {
  164 |     await acceptBtn.click();
  165 |   }
  166 | 
  167 |   await page.getByRole("link", { name: "Buy" }).first().click();
  168 | 
  169 |   await page.waitForLoadState("domcontentloaded");
  170 | 
  171 |   await page.goBack();
  172 | 
  173 |   await expect(page).toHaveURL(/razer\.com/);
  174 | });
  175 | 
  176 |   //HomePage responsive at mobile viewport
  177 |   test("HN_15 - Homepage responsive at mobile viewport", async ({ page }) => {
  178 |     await page.setViewportSize({
  179 |       width: 375,
  180 |       height: 667,
  181 |     });
  182 | 
  183 |     await page.goto("https://www.razer.com/");
  184 | 
  185 |     await page
  186 |       .getByRole("button", {
  187 |         name: "Accept All",
  188 |       })
  189 |       .click();
  190 | 
  191 |     await expect(page.locator("body")).toBeVisible();
  192 |   });
  193 | });
  194 | 
```