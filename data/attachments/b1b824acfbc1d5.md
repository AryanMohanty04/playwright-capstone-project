# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_cartFunctionality/cart.spec.js >> Module 5 - Cart Functionality (CT) >> CT_06 - Verify product quantity decrement
- Location: tests/05_cartFunctionality/cart.spec.js:304:3

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: locator.click: Test timeout of 120000ms exceeded.
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
              - /url: mailto:security@blinkit.com?subject=[a0587137f9253908] | [172.214.46.102]
            - text: and let us know that you have been blocked.
          - paragraph [ref=e33]: Kindly share the incident in detail along with the Cloudflare Ray ID found below.
          - generic [ref=e34]:
            - generic [ref=e35]: Ray ID - a0587137f9253908
            - generic [ref=e36]: Your IP - 172.214.46.102
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
  208 |   //     })
  209 |   //     .click();
  210 | 
  211 |   //   await page
  212 |   //     .getByRole("img", {
  213 |   //       name: "- Dairy, Bread & Eggs",
  214 |   //     })
  215 |   //     .click();
  216 | 
  217 |   //   await page
  218 |   //     .locator('[id="19512"]')
  219 |   //     .getByRole("button", {
  220 |   //       name: "ADD 2 options",
  221 |   //     })
  222 |   //     .click();
  223 | 
  224 |   //   await page
  225 |   //     .locator(".tw-relative.tw-flex > .tw-rounded-md")
  226 |   //     .first()
  227 |   //     .click();
  228 | 
  229 |   //   await page
  230 |   //     .locator(
  231 |   //       "div:nth-child(3) > div > .tw-w-full.tw-rounded-\\[12px\\] > .tw-relative > .tw-rounded-md"
  232 |   //     )
  233 |   //     .click();
  234 | 
  235 |   //   await page
  236 |   //     .getByText("p", {
  237 |   //       exact: true,
  238 |   //     })
  239 |   //     .click();
  240 | 
  241 |   //   // Open cart
  242 |   //   await page.getByText(/2 items/i).click();
  243 | 
  244 |   //   await expect(
  245 |   //     page.getByText(/My Cart/i)
  246 |   //   ).toBeVisible();
  247 | 
  248 |   //   // Increase quantity
  249 |   //   const plusButton = page.getByText("5", {
  250 |   //     exact: true,
  251 |   //   });
  252 | 
  253 |   //   await expect(plusButton).toBeVisible();
  254 |   //   await plusButton.click();
  255 | 
  256 |   //   // Decrease quantity
  257 |   //   const minusButton = page.getByText("U", {
  258 |   //     exact: true,
  259 |   //   });
  260 | 
  261 |   //   await expect(minusButton).toBeVisible();
  262 |   //   await minusButton.click();
  263 | 
  264 |   //   // Verify cart remains visible
  265 |   //   await expect(
  266 |   //     page.getByText(/My Cart/i)
  267 |   //   ).toBeVisible();
  268 |   // });
  269 |   // test("CF_06 - Verify product quantity decrement", async ({ page }) => {
  270 |   //   await page.goto("https://blinkit.com/");
  271 | 
  272 |   //   await page
  273 |   //     .getByRole("textbox", { name: "search delivery location" })
  274 |   //     .click();
  275 | 
  276 |   //   await page
  277 |   //     .getByRole("textbox", { name: "search delivery location" })
  278 |   //     .fill("Mumbai");
  279 | 
  280 |   //   await page.getByText("Mumbai Central", { exact: true }).click();
  281 | 
  282 |   //   await page.getByRole("img", { name: "fnv banner" }).click();
  283 | 
  284 |   //   await page
  285 |   //     .locator('[id="423735"]')
  286 |   //     .getByRole("button", { name: "ADD" })
  287 |   //     .click();
  288 | 
  289 |   //   // Increase to 2
  290 |   //   await page.locator("button").nth(1).click();
  291 | 
  292 |   //   await page.getByText(/2 items/i).click();
  293 | 
  294 |   //   await expect(page.getByText("Green Chilli100 g₹16₹18U25")).toBeVisible();
  295 | 
  296 |   //   // Decrement twice
  297 |   //   await page.locator("div").filter({ hasText: /^U$/ }).first().click();
  298 |   //   await page.locator("div").filter({ hasText: /^U$/ }).first().click();
  299 | 
  300 |   //   // Verify item removed or quantity reduced
  301 |   //   await expect(page.getByText(/My Cart/i)).toBeVisible();
  302 |   // });
  303 | 
  304 |   test("CT_06 - Verify product quantity decrement", async ({ page }) => {
  305 |     await page.goto("https://blinkit.com/");
  306 |     await page
  307 |       .getByRole("textbox", { name: "search delivery location" })
> 308 |       .click();
      |        ^ Error: locator.click: Test timeout of 120000ms exceeded.
  309 |     await page
  310 |       .getByRole("textbox", { name: "search delivery location" })
  311 |       .fill("Mumbai");
  312 |     await page
  313 |       .locator("div")
  314 |       .filter({ hasText: /^Mumbai CentralMumbai, Maharashtra, India$/ })
  315 |       .first()
  316 |       .click();
  317 |     await page.getByText("ADD").first().click();
  318 |     await page.locator("div").filter({ hasText: /^5$/ }).first().click();
  319 |     await page.getByText("r2 items ₹").click();
  320 |     await page.locator("div").filter({ hasText: /^U$/ }).nth(2).click();
  321 |   });
  322 |   //  test("CF_07 - Verify product removal from cart", async ({ page }) => {
  323 |   //   await page.goto("https://blinkit.com/");
  324 | 
  325 |   //   await page
  326 |   //     .getByRole("textbox", { name: "search delivery location" })
  327 |   //     .fill("Mumbai");
  328 | 
  329 |   //   const location = page.getByText("Mumbai Central", {
  330 |   //     exact: true,
  331 |   //   });
  332 | 
  333 |   //   await location.waitFor({ state: "visible" });
  334 |   //   await location.click();
  335 | 
  336 |   //   await page.getByText("ADD").first().click();
  337 | 
  338 |   //   await page.getByText(/1 item/i).click();
  339 | 
  340 |   //   await expect(
  341 |   //     page.getByText("Amul Taaza Toned Milk")
  342 |   //   ).toBeVisible();
  343 | 
  344 |   //   // Remove product
  345 |   //   await page.getByText("U", { exact: true }).nth(1).click();
  346 | 
  347 |   //   // Verify cart page still exists after removal
  348 |   //   await expect(page.locator("body")).toContainText("My Cart");
  349 |   // });
  350 |   test("CT_07 - Verify product removal from cart", async ({ page }) => {
  351 |     await page.goto("https://blinkit.com/");
  352 |     await page
  353 |       .getByRole("textbox", { name: "search delivery location" })
  354 |       .click();
  355 |     await page
  356 |       .getByRole("textbox", { name: "search delivery location" })
  357 |       .fill("Mumbai");
  358 |     await page.getByText("Mumbai Central", { exact: true }).click();
  359 |     await page.getByText("ADD").first().click();
  360 |     await page.getByText("r1 item ₹").click();
  361 |     await page.locator("div").filter({ hasText: /^U$/ }).nth(2).click();
  362 |   });
  363 | 
  364 |   test("CT_08 - Verify cart total price updates dynamically", async ({
  365 |     page,
  366 |   }) => {
  367 |     await page.goto("https://blinkit.com/");
  368 | 
  369 |     await page
  370 |       .getByRole("textbox", { name: "search delivery location" })
  371 |       .fill("Mumbai");
  372 | 
  373 |     await page.getByText("Mumbai Central", { exact: true }).click();
  374 | 
  375 |     await page.getByText("ADD").first().click();
  376 | 
  377 |     await expect(page.getByText(/1 item/i)).toBeVisible();
  378 | 
  379 |     await page.getByText("ADD").nth(1).click();
  380 | 
  381 |     await expect(page.getByText(/2 items/i)).toBeVisible();
  382 | 
  383 |     await page.getByText(/2 items/i).click();
  384 | 
  385 |     await expect(page.getByText(/My Cart/i)).toBeVisible();
  386 |   });
  387 | 
  388 |   test("CT_09 - Verify multiple products can be added to cart", async ({
  389 |     page,
  390 |   }) => {
  391 |     await page.goto("https://blinkit.com/");
  392 | 
  393 |     await page
  394 |       .getByRole("textbox", { name: "search delivery location" })
  395 |       .fill("Mumbai");
  396 | 
  397 |     await page.getByText("Mumbai Central", { exact: true }).click();
  398 | 
  399 |     // Add first product
  400 |     await page.getByText("ADD").first().click();
  401 | 
  402 |     // Add second product
  403 |     await page.getByText("ADD").nth(1).click();
  404 | 
  405 |     // Open cart
  406 |     await page.getByText(/2 items/i).click();
  407 | 
  408 |     // Verify cart contains multiple items
```