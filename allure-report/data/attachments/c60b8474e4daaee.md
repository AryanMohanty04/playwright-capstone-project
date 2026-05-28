# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_management\cart_management.spec.js >> Cart Management Module >> CT_10 - Cart Persistence (refresh)
- Location: tests\cart_management\cart_management.spec.js:228:2

# Error details

```
ReferenceError: acceptCookies is not defined
```

# Test source

```ts
  130 | 
  131 |     const increaseBtn = page.getByRole("button", {
  132 |       name: "Increase quantity of item",
  133 |     });
  134 |     await increaseBtn.waitFor({ state: "visible", timeout: 10000 });
  135 |     await increaseBtn.click();
  136 |   });
  137 | 
  138 |   test("CT_06 - Decrease Quantity Button Works", async ({ page }) => {
  139 |     await page.goto("https://www.razer.com/cart");
  140 | 
  141 |     await page
  142 |       .getByRole("button", { name: "Accept All" })
  143 |       .waitFor({ state: "visible", timeout: 10000 });
  144 |     await page.getByRole("button", { name: "Accept All" }).click();
  145 | 
  146 |     await page
  147 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  148 |       .waitFor({ state: "visible", timeout: 10000 });
  149 |     await page
  150 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  151 |       .click();
  152 | 
  153 |     const increaseBtn = page.getByRole("button", {
  154 |       name: "Increase quantity of item",
  155 |     });
  156 |     await increaseBtn.waitFor({ state: "visible", timeout: 10000 });
  157 |     await increaseBtn.click();
  158 | 
  159 |     const decreaseBtn = page.getByRole("button", {
  160 |       name: "Reduce quantity of item",
  161 |     });
  162 |     await decreaseBtn.waitFor({ state: "visible", timeout: 10000 });
  163 |     await decreaseBtn.click();
  164 |   });
  165 | 
  166 |   test("CT_07 - Remove Product Button Works", async ({ page }) => {
  167 |     await page.goto("https://www.razer.com/cart");
  168 | 
  169 |     await page
  170 |       .getByRole("button", { name: "Accept All" })
  171 |       .waitFor({ state: "visible", timeout: 10000 });
  172 |     await page.getByRole("button", { name: "Accept All" }).click();
  173 | 
  174 |     await page
  175 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  176 |       .waitFor({ state: "visible", timeout: 10000 });
  177 |     await page
  178 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  179 |       .click();
  180 | 
  181 |     const removeBtn = page.getByRole("button", {
  182 |       name: "Remove item from cart",
  183 |     });
  184 |     await removeBtn.waitFor({ state: "visible", timeout: 10000 });
  185 |     await removeBtn.click();
  186 |   });
  187 | 
  188 |   test("CT_08 - Empty Cart Validation", async ({ page }) => {
  189 |     await page.goto("https://www.razer.com/cart");
  190 | 
  191 |     const acceptBtn = page.getByRole("button", { name: "Accept All" });
  192 |     if (await acceptBtn.isVisible()) {
  193 |       await acceptBtn.click();
  194 |     }
  195 | 
  196 |     await expect(
  197 |       page.getByRole("heading", { name: /Your cart is empty/i }),
  198 |     ).toBeVisible({ timeout: 10000 });
  199 |   });
  200 | 
  201 |   test("CT_09 - Subtotal Validation", async ({ page }) => {
  202 |     await page.goto("https://www.razer.com/cart");
  203 | 
  204 |     await page
  205 |       .getByRole("button", { name: "Accept All" })
  206 |       .waitFor({ state: "visible", timeout: 10000 });
  207 |     await page.getByRole("button", { name: "Accept All" }).click();
  208 | 
  209 |     await page
  210 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  211 |       .waitFor({ state: "visible", timeout: 10000 });
  212 |     await page
  213 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  214 |       .click();
  215 | 
  216 |     await page
  217 |       .getByRole("button", { name: "Add to Cart - Razer Viper V4" })
  218 |       .waitFor({ state: "visible", timeout: 10000 });
  219 |     await page
  220 |       .getByRole("button", { name: "Add to Cart - Razer Viper V4" })
  221 |       .click();
  222 | 
  223 |     await expect(page.getByText(/Subtotal US\$289.98/i)).toBeVisible({
  224 |       timeout: 10000,
  225 |     });
  226 |   });
  227 | 
  228 |  test("CT_10 - Cart Persistence (refresh)", async ({ page }) => {
  229 |   await page.goto("https://www.razer.com/cart");
> 230 |   await acceptCookies(page);
      |   ^ ReferenceError: acceptCookies is not defined
  231 | 
  232 |   await page.getByRole("button", { name: "Add to Cart - Razer Atlas Pro" }).waitFor({ state: "visible", timeout: 10000 });
  233 |   await page.getByRole("button", { name: "Add to Cart - Razer Atlas Pro" }).click({ force: true });
  234 | 
  235 |   // Refresh
  236 |   await page.reload();
  237 | 
  238 |   // Verify item still in cart
  239 |   await expect(page.getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })).not.toBeVisible({ timeout: 10000 });
  240 | });
  241 | 
  242 |   test("CT_11 - Add Same Product Twice", async ({ page }) => {
  243 |     await page.goto("https://www.razer.com/cart");
  244 | 
  245 |     await page
  246 |       .getByRole("button", { name: "Accept All" })
  247 |       .waitFor({ state: "visible", timeout: 10000 });
  248 |     await page.getByRole("button", { name: "Accept All" }).click();
  249 | 
  250 |     await page
  251 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  252 |       .waitFor({ state: "visible", timeout: 10000 });
  253 |     await page
  254 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  255 |       .click();
  256 | 
  257 |     await page
  258 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  259 |       .waitFor({ state: "visible", timeout: 10000 });
  260 |     await page
  261 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  262 |       .click();
  263 |   });
  264 | 
  265 |   test("CT_12 - Add Different Products to Cart", async ({ page }) => {
  266 |     await page.goto("https://www.razer.com/cart");
  267 | 
  268 |     await page
  269 |       .getByRole("button", { name: "Accept All" })
  270 |       .waitFor({ state: "visible", timeout: 10000 });
  271 |     await page.getByRole("button", { name: "Accept All" }).click();
  272 | 
  273 |     await page
  274 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  275 |       .waitFor({ state: "visible", timeout: 10000 });
  276 |     await page
  277 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  278 |       .click();
  279 | 
  280 |     await page
  281 |       .getByRole("button", { name: "Add to Cart - Razer Blade 16" })
  282 |       .waitFor({ state: "visible", timeout: 10000 });
  283 |     await page
  284 |       .getByRole("button", { name: "Add to Cart - Razer Blade 16" })
  285 |       .click();
  286 | 
  287 |     await page
  288 |       .getByRole("button", { name: "Add to Cart - Razer Viper V4" })
  289 |       .waitFor({ state: "visible", timeout: 10000 });
  290 |     await page
  291 |       .getByRole("button", { name: "Add to Cart - Razer Viper V4" })
  292 |       .click();
  293 |   });
  294 | 
  295 |   test("CT_13 - Cart Checkout Navigation", async ({ page }) => {
  296 |     await page.goto("https://www.razer.com/cart");
  297 | 
  298 |     await page
  299 |       .getByRole("button", { name: "Accept All" })
  300 |       .waitFor({ state: "visible", timeout: 10000 });
  301 |     await page.getByRole("button", { name: "Accept All" }).click();
  302 | 
  303 |     await page
  304 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  305 |       .waitFor({ state: "visible", timeout: 10000 });
  306 |     await page
  307 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  308 |       .click();
  309 | 
  310 |     await page
  311 |       .locator("app-razer-cart-totals")
  312 |       .getByRole("link", { name: "checkout" })
  313 |       .waitFor({ state: "visible", timeout: 10000 });
  314 |     await page
  315 |       .locator("app-razer-cart-totals")
  316 |       .getByRole("link", { name: "checkout" })
  317 |       .click();
  318 | 
  319 |     await expect(page).toHaveURL(/checkout/, { timeout: 10000 });
  320 |   });
  321 | 
  322 |   test("CT_14 - Maximum Quantity Limit", async ({ page }) => {
  323 |     await page.goto("https://www.razer.com/cart");
  324 | 
  325 |     await page
  326 |       .getByRole("button", { name: "Accept All" })
  327 |       .waitFor({ state: "visible", timeout: 10000 });
  328 |     await page.getByRole("button", { name: "Accept All" }).click();
  329 | 
  330 |     await page
```