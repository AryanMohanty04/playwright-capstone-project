# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02_search/search.spec.js >> Search Module >> S10 - User can open product from search results
- Location: tests/02_search/search.spec.js:222:3

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
  129 |       .click();
  130 |     await page
  131 |       .getByRole("button", {
  132 |         name: "Search",
  133 |       })
  134 |       .click();
  135 |     const searchBox = page.getByRole("textbox", {
  136 |       name: "Search razer.com",
  137 |     });
  138 |     await searchBox.fill("Viper");
  139 |     await Promise.all([
  140 |       page.waitForURL(/search\/viper/i),
  141 |       searchBox.press("Enter"),
  142 |     ]);
  143 |     await expect(page).toHaveURL(/search\/viper/i);
  144 |     await page
  145 |       .getByRole("button", {
  146 |         name: "Clear Search",
  147 |       })
  148 |       .click();
  149 |     await searchBox.fill("BlackShark");
  150 |     await Promise.all([
  151 |       page.waitForURL(/search\/blackshark/i),
  152 |       searchBox.press("Enter"),
  153 |     ]);
  154 |     await expect(page).toHaveURL(/search\/blackshark/i);
  155 |   });
  156 | 
  157 |   //Search closes successfully
  158 |   test("S7 - Search closes successfully", async ({ page }) => {
  159 |     await page.goto("https://www.razer.com/");
  160 |     await page.getByRole("button", { name: "Accept All" }).click();
  161 |     await page.getByRole("button", { name: "Search" }).click();
  162 |     await page.getByRole("button", { name: "Close Search" }).click();
  163 |   });
  164 | 
  165 |   //Search works for mobile viewport
  166 |   test("S8 - Search works in mobile viewport", async ({ page }) => {
  167 |     await page.setViewportSize({
  168 |       width: 375,
  169 |       height: 812,
  170 |     });
  171 |     await page.goto("https://www.razer.com/");
  172 |     await page
  173 |       .getByRole("button", {
  174 |         name: "Accept All",
  175 |       })
  176 |       .click();
  177 |     await page
  178 |       .getByRole("button", {
  179 |         name: "Search",
  180 |       })
  181 |       .click();
  182 |     const searchBox = page.getByRole("textbox", {
  183 |       name: "Search razer.com",
  184 |     });
  185 |     await searchBox.fill("Viper");
  186 |     await Promise.all([
  187 |       page.waitForURL(/search\/viper/i),
  188 |       searchBox.press("Enter"),
  189 |     ]);
  190 |     await expect(page).toHaveURL(/search\/viper/i);
  191 |   });
  192 | 
  193 |   test("S9 - Search works with uppercase input", async ({ page }) => {
  194 |     await page.goto("https://www.razer.com/");
  195 | 
  196 |     await page
  197 |       .getByRole("button", {
  198 |         name: "Accept All",
  199 |       })
  200 |       .click();
  201 | 
  202 |     await page
  203 |       .getByRole("button", {
  204 |         name: "Search",
  205 |       })
  206 |       .click();
  207 | 
  208 |     const searchBox = page.getByRole("textbox", {
  209 |       name: "Search razer.com",
  210 |     });
  211 | 
  212 |     await searchBox.fill("BLACKSHARK");
  213 | 
  214 |     await Promise.all([
  215 |       page.waitForURL(/search\/blackshark/i),
  216 |       searchBox.press("Enter"),
  217 |     ]);
  218 | 
  219 |     await expect(page).toHaveURL(/search\/blackshark/i);
  220 |   });
  221 | 
  222 |   test("S10 - User can open product from search results", async ({ page }) => {
  223 |     await page.goto("https://www.razer.com/");
  224 | 
  225 |     await page
  226 |       .getByRole("button", {
  227 |         name: "Accept All",
  228 |       })
> 229 |       .click();
      |        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  230 | 
  231 |     await page
  232 |       .getByRole("button", {
  233 |         name: "Search",
  234 |       })
  235 |       .click();
  236 | 
  237 |     const searchBox = page.getByRole("textbox", {
  238 |       name: "Search razer.com",
  239 |     });
  240 | 
  241 |     await searchBox.fill("BlackShark");
  242 | 
  243 |     await Promise.all([
  244 |       page.waitForURL(/search\/blackshark/i),
  245 |       searchBox.press("Enter"),
  246 |     ]);
  247 | 
  248 |     await page
  249 |       .getByRole("link", {
  250 |         name: /Razer BlackShark/i,
  251 |       })
  252 |       .first()
  253 |       .click();
  254 | 
  255 |     // Validate product page opened
  256 |     await expect(page).toHaveURL(/blackshark/i);
  257 |   });
  258 | });
  259 | 
```