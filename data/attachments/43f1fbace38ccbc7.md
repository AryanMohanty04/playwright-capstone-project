# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_cartFunctionality/cart.spec.js >> Verify Cart Functionality >> CF_09 - Verify same product quantity increases instead of duplicate entry
- Location: tests/05_cartFunctionality/cart.spec.js:449:3

# Error details

```
Test timeout of 120000ms exceeded.
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
              - /url: mailto:security@blinkit.com?subject=[a04e61a2f96b71e7] | [172.184.134.210]
            - text: and let us know that you have been blocked.
          - paragraph [ref=e33]: Kindly share the incident in detail along with the Cloudflare Ray ID found below.
          - generic [ref=e34]:
            - generic [ref=e35]: Ray ID - a04e61a2f96b71e7
            - generic [ref=e36]: Your IP - 172.184.134.210
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
  358 |     await page.goto("https://blinkit.com/");
  359 |     await page
  360 |       .getByRole("textbox", { name: "search delivery location" })
  361 |       .click();
  362 |     await page
  363 |       .getByRole("textbox", { name: "search delivery location" })
  364 |       .fill("Mumbai");
  365 |     await page.getByText("Mumbai Central", { exact: true }).click();
  366 |     await page.getByRole("img", { name: "- Dairy, Bread & Eggs" }).click();
  367 |     await page
  368 |       .locator('[id="242693"]')
  369 |       .getByRole("button", { name: "ADD" })
  370 |       .click();
  371 |     await page.getByText("r1 item ₹").click();
  372 |     await page.getByText("5", { exact: true }).click();
  373 |   });
  374 | 
  375 |   test("CF_06 - Verify product removal from cart", async ({ page }) => {
  376 |     await page.goto("https://blinkit.com/");
  377 |     await page
  378 |       .getByRole("textbox", { name: "search delivery location" })
  379 |       .click();
  380 |     await page
  381 |       .getByRole("textbox", { name: "search delivery location" })
  382 |       .fill("Mumbai");
  383 |     await page
  384 |       .getByRole("textbox", { name: "search delivery location" })
  385 |       .press("ArrowDown");
  386 |     await page.getByText("Mumbai Central", { exact: true }).click();
  387 |     await page.getByRole("img", { name: "- Dairy, Bread & Eggs" }).click();
  388 |     await page
  389 |       .locator('[id="242693"]')
  390 |       .getByRole("button", { name: "ADD" })
  391 |       .click();
  392 |     await page.getByText("r", { exact: true }).click();
  393 |     await page.getByText("U", { exact: true }).click();
  394 |   });
  395 | 
  396 |   test("CF_07 - Verify cart total price updates dynamically", async ({
  397 |     page,
  398 |   }) => {
  399 |     await page.goto("https://blinkit.com/");
  400 |     await page
  401 |       .getByRole("textbox", { name: "search delivery location" })
  402 |       .click();
  403 |     await page
  404 |       .getByRole("textbox", { name: "search delivery location" })
  405 |       .fill("Mumbai");
  406 |     await page.getByText("Mumbai Central", { exact: true }).click();
  407 |     await page.getByRole("img", { name: "- Dairy, Bread & Eggs" }).click();
  408 |     await page
  409 |       .locator('[id="242693"]')
  410 |       .getByRole("button", { name: "ADD" })
  411 |       .click();
  412 |     await page
  413 |       .locator('[id="176"]')
  414 |       .getByRole("button", { name: "ADD" })
  415 |       .click();
  416 |     await page.getByText("r2 items ₹").click();
  417 |   });
  418 | 
  419 |   test("CF_08 - Verify multiple products can be added to cart", async ({
  420 |     page,
  421 |   }) => {
  422 |     await page.goto("https://blinkit.com/");
  423 | 
  424 |     await page
  425 |       .getByRole("textbox", { name: "search delivery location" })
  426 |       .fill("Mumbai");
  427 | 
  428 |     await page.getByText("Mumbai Central", { exact: true }).click();
  429 | 
  430 |     // Add first product
  431 |     await page.getByText("ADD").first().click();
  432 |     await page.getByText("r1 item ₹").click();
  433 |     await page
  434 |       .locator("div")
  435 |       .filter({ hasText: /^Amul Taaza Toned Milk500 ml₹30U15$/ })
  436 |       .nth(4)
  437 |       .click();
  438 |     await page.getByText("œ").click();
  439 |     await page.getByText("ADD").first().click();
  440 |     await page.getByText("r2 items ₹").click();
  441 |     await page.getByText("Gokul Full Cream Milk").nth(2).click();
  442 |     await page
  443 |       .locator("div")
  444 |       .filter({ hasText: /^Gokul Full Cream Milk500 ml₹38U15$/ })
  445 |       .nth(4)
  446 |       .click();
  447 |   });
  448 | 
  449 |   test("CF_09 - Verify same product quantity increases instead of duplicate entry", async ({
  450 |     page,
  451 |   }) => {
  452 |     await page.goto("https://blinkit.com/");
  453 | 
  454 |     await page
  455 |       .getByRole("textbox", {
  456 |         name: "search delivery location",
  457 |       })
> 458 |       .fill("Mumbai");
      |        ^ Error: locator.fill: Test timeout of 120000ms exceeded.
  459 | 
  460 |     await page
  461 |       .getByText("Mumbai Central", {
  462 |         exact: true,
  463 |       })
  464 |       .click();
  465 | 
  466 |     // Add product
  467 |     await page.getByText("ADD").first().click();
  468 | 
  469 |     // Open cart
  470 |     await page.getByText(/1 item/i).click();
  471 | 
  472 |     // Increase quantity
  473 |     await page.getByText("5", { exact: true }).nth(1).click();
  474 | 
  475 |     // Verify product still exists
  476 |     await expect(page.locator("body")).toContainText("Amul");
  477 |     // Verify quantity became 2
  478 |     await expect(page.locator("body")).toContainText("2");
  479 |   });
  480 | 
  481 |   test("CF_10 - Verify cart count badge updates correctly", async ({
  482 |     page,
  483 |   }) => {
  484 |     await page.goto("https://blinkit.com/");
  485 | 
  486 |     await page
  487 |       .getByRole("textbox", { name: "search delivery location" })
  488 |       .fill("Mumbai");
  489 | 
  490 |     await page.getByText("Mumbai Central", { exact: true }).click();
  491 | 
  492 |     // Add first product
  493 |     await page.getByText("ADD").first().click();
  494 | 
  495 |     // Verify badge
  496 |     await expect(page.getByText(/1 item/i)).toBeVisible();
  497 | 
  498 |     // Add second product
  499 |     await page.getByText("ADD").nth(1).click();
  500 | 
  501 |     // Verify badge updates
  502 |     await expect(page.getByText(/2 items/i)).toBeVisible();
  503 |   });
  504 | 
  505 |   test("CF_11 - Verify cart is empty state", async ({ page }) => {
  506 |     await page.goto("https://blinkit.com/");
  507 | 
  508 |     await page
  509 |       .getByRole("textbox", { name: "search delivery location" })
  510 |       .fill("Mumbai");
  511 | 
  512 |     await page.getByText("Mumbai Central", { exact: true }).click();
  513 | 
  514 |     // Wait for UI to stabilize
  515 |     await page.waitForTimeout(2000);
  516 | 
  517 |     // Assert cart badge is NOT visible
  518 |     await expect(page.locator("text=/1 item|2 items/i")).toHaveCount(0);
  519 |   });
  520 | 
  521 |   test("CF_12 - Verify cart persists after refresh", async ({ page }) => {
  522 |     await page.goto("https://blinkit.com/");
  523 | 
  524 |     await page
  525 |       .getByRole("textbox", { name: "search delivery location" })
  526 |       .fill("Mumbai");
  527 | 
  528 |     await page.getByText("Mumbai Central", { exact: true }).click();
  529 | 
  530 |     await page.getByText("ADD").first().click();
  531 | 
  532 |     await expect(page.getByText(/1 item/i)).toBeVisible();
  533 | 
  534 |     // refresh page
  535 |     await page.reload();
  536 | 
  537 |     // 🔥 wait for UI to rebuild
  538 |     await page.waitForLoadState("networkidle");
  539 | 
  540 |     // 🔥 extra stability wait (Blinkit needs this)
  541 |     await page.waitForTimeout(2000);
  542 | 
  543 |     // verify cart still exists
  544 |     await expect(page.getByText(/1 item/i)).toBeVisible({ timeout: 10000 });
  545 |   });
  546 | 
  547 |   test("CF_13 - Verify cart persists across navigation", async ({ page }) => {
  548 |     await page.goto("https://blinkit.com/");
  549 | 
  550 |     // Select location
  551 |     await page
  552 |       .getByRole("textbox", { name: "search delivery location" })
  553 |       .fill("Mumbai");
  554 | 
  555 |     await page.getByText("Mumbai Central", { exact: true }).click();
  556 | 
  557 |     // Add product
  558 |     await page.getByText("ADD").first().click();
```