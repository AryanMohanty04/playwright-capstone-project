# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08_storeFunctionality/store.spec.js >> Store Module Functionality >> SF_02 - Category (Dairy)
- Location: tests/08_storeFunctionality/store.spec.js:23:3

# Error details

```
Test timeout of 120000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.fill: Test timeout of 120000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'search delivery location' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - main [ref=e3]:
    - article [ref=e7]:
      - generic [ref=e9]:
        - generic [ref=e14]:
          - img "access denied" [ref=e17]
          - generic [ref=e18]:
            - generic [ref=e19]: access denied
            - generic [ref=e21]:
              - paragraph [ref=e22]: sorry, you have been blocked!
              - paragraph [ref=e23]
        - generic [ref=e30]:
          - paragraph [ref=e31]:
            - text: The page you are trying to access has blocked you, your recent actions performed on the website might have led to this. If you wish to proceed further and gain access to this page, write to us at
            - link "security@blinkit.com" [ref=e32] [cursor=pointer]:
              - /url: mailto:security@blinkit.com?subject=[a04d9cb92da655cb] | [52.173.163.135]
            - text: and let us know that you have been blocked.
          - paragraph [ref=e33]: Kindly share the incident in detail along with the Cloudflare Ray ID found below.
          - generic [ref=e34]:
            - generic [ref=e35]: Ray ID - a04d9cb92da655cb
            - generic [ref=e36]: Your IP - 52.173.163.135
  - contentinfo [ref=e37]:
    - generic [ref=e40]:
      - heading "#1 instant delivery service in India" [level=4] [ref=e41]
      - paragraph [ref=e42]: Shop on the go and get anything delivered in 10 minutes (or less). Buy everything from groceries to fresh fruits & vegetables, cakes and bakery items, to meats & seafood, cosmetics, mobiles & accessories, electronics, baby care products and much more. We get it delivered at your doorstep in the fastest and the safest way possible.
      - heading "single app for all your daily needs" [level=4] [ref=e43]
      - paragraph [ref=e44]: Order thousands of products at just a tap - milk, eggs, bread, cooking oil, ghee, atta, rice, fresh fruits & vegetables, spices, chocolates, chips, biscuits, Maggi, cold drinks, shampoos, soaps, body wash, pet food, diapers, electronics, other organic and gourmet products from your neighbourhood stores and a lot more.
      - heading "order online on Blinkit to enjoy instant delivery magic" [level=4] [ref=e45]
      - paragraph [ref=e46]: "Cities we currently serve: Agra, Ahmedabad, Bengaluru, Chandigarh, Chennai, Delhi, Faridabad, HR-NCR, Hyderabad, Jaipur, Jalandhar, Kanpur, Kolkata, Lucknow, Mathura, Meerut, Mohali, Mumbai, Panchkula, Pune, UP-NCR"
```

# Test source

```ts
  1   | const { test, expect } = require("@playwright/test");
  2   | 
  3   | test.describe("Store Module Functionality", () => {
  4   |   test.beforeEach(async ({ page }) => {
  5   |     await page.goto("https://blinkit.com/");
  6   | 
  7   |     await page
  8   |       .getByRole("textbox", { name: "search delivery location" })
> 9   |       .fill("Mumbai");
      |        ^ Error: locator.fill: Test timeout of 120000ms exceeded.
  10  | 
  11  |     await page.getByText("Mumbai Central", { exact: true }).waitFor();
  12  | 
  13  |     await page.getByText("Mumbai Central", { exact: true }).click();
  14  |   });
  15  | 
  16  |   test("SF_01 - Category (Juice)", async ({ page }) => {
  17  |     await page.getByRole("img", { name: "- Cold Drinks & Juices" }).click();
  18  |     await expect(page).toHaveURL(
  19  |       "https://blinkit.com/cn/soft-drinks/cid/332/1102",
  20  |     );
  21  |   });
  22  | 
  23  |   test("SF_02 - Category (Dairy)", async ({ page }) => {
  24  |     await page.getByRole("img", { name: "- Dairy, Bread & Eggs" }).click();
  25  |     await expect(page).toHaveURL("https://blinkit.com/cn/milk/cid/14/922");
  26  |   });
  27  | 
  28  |   test("SF_03 - Category (Fruits)", async ({ page }) => {
  29  |     await page.getByRole("img", { name: "- Fruits & Vegetables" }).click();
  30  | 
  31  |     await expect(page).toHaveURL(
  32  |       "https://blinkit.com/cn/fresh-vegetables/cid/1487/1489",
  33  |     );
  34  |   });
  35  | 
  36  |   test("SF_04 - Verify Category Page Displays Products", async ({ page }) => {
  37  |     await page
  38  |       .getByRole("img", {
  39  |         name: "- Fruits & Vegetables",
  40  |       })
  41  |       .click();
  42  | 
  43  |     await expect(page).toHaveURL(
  44  |       "https://blinkit.com/cn/fresh-vegetables/cid/1487/1489",
  45  |     );
  46  | 
  47  |     await expect(
  48  |       page.getByRole("heading", {
  49  |         name: "Vegetables & Fruits",
  50  |       }),
  51  |     ).toBeVisible();
  52  |   });
  53  | 
  54  |   test("SF_05 - Verify Product Cards Display Product Name", async ({
  55  |     page,
  56  |   }) => {
  57  |     await page
  58  |       .getByRole("img", {
  59  |         name: "- Cold Drinks & Juices",
  60  |       })
  61  |       .click();
  62  | 
  63  |     await expect(
  64  |       page.getByRole("button", {
  65  |         name: /Coca-Cola Diet Coke/i,
  66  |       }),
  67  |     ).toBeVisible();
  68  |   });
  69  | 
  70  |   test("SF_06 - Verify Product Cards Display Product Price", async ({
  71  |     page,
  72  |   }) => {
  73  |     await page
  74  |       .getByRole("img", {
  75  |         name: "- Cold Drinks & Juices",
  76  |       })
  77  |       .click();
  78  | 
  79  |     await expect(page).toHaveURL(/soft-drinks/);
  80  | 
  81  |     await expect(page.getByText("₹").first()).toBeVisible();
  82  |   });
  83  | 
  84  |   test("SF_07 - Verify Product Cards Display Product Image", async ({
  85  |     page,
  86  |   }) => {
  87  |     await page
  88  |       .getByRole("img", {
  89  |         name: "- Cold Drinks & Juices",
  90  |       })
  91  |       .click();
  92  | 
  93  |     await expect(page).toHaveURL(/soft-drinks/);
  94  | 
  95  |     const images = page.locator("img");
  96  | 
  97  |     expect(await images.count()).toBeGreaterThan(0);
  98  |   });
  99  | 
  100 |   test("SF_09 - Verify Category Page Is Not Empty", async ({ page }) => {
  101 |     await page
  102 |       .getByRole("img", {
  103 |         name: "- Cold Drinks & Juices",
  104 |       })
  105 |       .click();
  106 | 
  107 |     await expect(page).toHaveURL(/soft-drinks/);
  108 | 
  109 |     await expect(
```