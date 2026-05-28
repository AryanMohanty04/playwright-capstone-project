# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_management\cart_management.spec.js >> Cart Management Module >> CT_08 - Empty Cart Validation
- Location: tests\cart_management\cart_management.spec.js:197:3

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Accept All' }) to be visible

```

# Test source

```ts
  100 |     await page
  101 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  102 |       .click();
  103 | 
  104 |     // Click the product link in the cart modal
  105 |     await page
  106 |       .getByRole("link", { name: /Razer Blade/i })
  107 |       .waitFor({ state: "visible", timeout: 10000 });
  108 |     await page.getByRole("link", { name: /Razer Blade/i }).click();
  109 | 
  110 |     // URL confirmation is sufficient — confirms correct product page
  111 |     await expect(page).toHaveURL(/razer-blade/i, { timeout: 10000 });
  112 |   });
  113 | 
  114 |   test("CT_05 - Increase Quantity Button Works", async ({ page }) => {
  115 |     await page.goto("https://www.razer.com/store");
  116 | 
  117 |     await page
  118 |       .getByRole("button", { name: "Accept All" })
  119 |       .waitFor({ state: "visible", timeout: 10000 });
  120 |     await page.getByRole("button", { name: "Accept All" }).click();
  121 | 
  122 |     await page
  123 |       .getByRole("group", { name: "slide 1 of 16" })
  124 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  125 |       .waitFor({ state: "visible", timeout: 10000 });
  126 |     await page
  127 |       .getByRole("group", { name: "slide 1 of 16" })
  128 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  129 |       .click();
  130 | 
  131 |     await page
  132 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  133 |       .waitFor({ state: "visible", timeout: 10000 });
  134 |     await page
  135 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  136 |       .click();
  137 | 
  138 |     const increaseBtn = page.getByRole("button", {
  139 |       name: "Increase quantity of item",
  140 |     });
  141 |     await increaseBtn.waitFor({ state: "visible", timeout: 10000 });
  142 |     await increaseBtn.click();
  143 |   });
  144 | 
  145 |   test("CT_06 - Decrease Quantity Button Works", async ({ page }) => {
  146 |   await page.goto("https://www.razer.com/store");
  147 | 
  148 |   await page.getByRole("button", { name: "Accept All" }).waitFor({ state: "visible", timeout: 10000 });
  149 |   await page.getByRole("button", { name: "Accept All" }).click();
  150 | 
  151 |   await page.getByRole("group", { name: "slide 1 of 16" }).getByLabel("BUY - New Razer Blade 18, For US$").waitFor({ state: "visible", timeout: 10000 });
  152 |   await page.getByRole("group", { name: "slide 1 of 16" }).getByLabel("BUY - New Razer Blade 18, For US$").click();
  153 | 
  154 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 18" }).waitFor({ state: "visible", timeout: 10000 });
  155 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 18" }).click();
  156 | 
  157 |   const increaseBtn = page.getByRole("button", { name: "Increase quantity of item" });
  158 |   await increaseBtn.waitFor({ state: "visible", timeout: 10000 });
  159 |   await increaseBtn.click();
  160 | 
  161 |   const decreaseBtn = page.getByRole("button", { name: "Reduce quantity of item" });
  162 |   await decreaseBtn.waitFor({ state: "visible", timeout: 10000 });
  163 |   await decreaseBtn.click();
  164 | });
  165 | 
  166 |   test("CT_07 - Remove Product Button Works", async ({ page }) => {
  167 |     await page.goto("https://www.razer.com/store");
  168 | 
  169 |     await page
  170 |       .getByRole("button", { name: "Accept All" })
  171 |       .waitFor({ state: "visible", timeout: 10000 });
  172 |     await page.getByRole("button", { name: "Accept All" }).click();
  173 | 
  174 |     await page
  175 |       .getByRole("group", { name: "slide 1 of 16" })
  176 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  177 |       .waitFor({ state: "visible", timeout: 10000 });
  178 |     await page
  179 |       .getByRole("group", { name: "slide 1 of 16" })
  180 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  181 |       .click();
  182 | 
  183 |     await page
  184 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  185 |       .waitFor({ state: "visible", timeout: 10000 });
  186 |     await page
  187 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  188 |       .click();
  189 | 
  190 |     const removeBtn = page.getByRole("button", {
  191 |       name: "Remove item from cart",
  192 |     });
  193 |     await removeBtn.waitFor({ state: "visible", timeout: 10000 });
  194 |     await removeBtn.click();
  195 |   });
  196 | 
  197 |   test("CT_08 - Empty Cart Validation", async ({ page }) => {
  198 |   await page.goto("https://www.razer.com/store");
  199 | 
> 200 |   await page.getByRole("button", { name: "Accept All" }).waitFor({ state: "visible", timeout: 10000 });
      |                                                          ^ Error: locator.waitFor: Target page, context or browser has been closed
  201 |   await page.getByRole("button", { name: "Accept All" }).click();
  202 | 
  203 |   await page.getByRole("button", { name: "items in cart" }).waitFor({ state: "visible", timeout: 10000 });
  204 |   await page.getByRole("button", { name: "items in cart" }).click();
  205 | 
  206 |   await page.getByRole("link", { name: /Cart/i }).waitFor({ state: "visible", timeout: 10000 });
  207 |   await page.getByRole("link", { name: /Cart/i }).click();
  208 | 
  209 |   await expect(page.getByRole("heading", { name: /Your cart is empty/i })).toBeVisible({ timeout: 10000 });
  210 | });
  211 | 
  212 | test("CT_09 - Subtotal Validation", async ({ page }) => {
  213 |   await page.goto("https://www.razer.com/store");
  214 | 
  215 |   await page.getByRole("button", { name: "Accept All" }).waitFor({ state: "visible", timeout: 10000 });
  216 |   await page.getByRole("button", { name: "Accept All" }).click();
  217 | 
  218 |   await page.getByRole("group", { name: "slide 1 of 16" }).getByLabel("BUY - New Razer Blade 18, For US$").waitFor({ state: "visible", timeout: 10000 });
  219 |   await page.getByRole("group", { name: "slide 1 of 16" }).getByLabel("BUY - New Razer Blade 18, For US$").click();
  220 | 
  221 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 18" }).waitFor({ state: "visible", timeout: 10000 });
  222 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 18" }).click();
  223 | 
  224 |   // Verify subtotal after first item
  225 |   await expect(page.getByText(/Subtotal US\$3,999.99/i)).toBeVisible({ timeout: 10000 });
  226 | 
  227 |   // Add same item again
  228 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 18" }).waitFor({ state: "visible", timeout: 10000 });
  229 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 18" }).click();
  230 | 
  231 |   // Verify subtotal updated after second item
  232 |   await expect(page.getByText(/Subtotal US\$9,999.98/i)).toBeVisible({ timeout: 10000 });
  233 | });
  234 | 
  235 | });
  236 | 
```