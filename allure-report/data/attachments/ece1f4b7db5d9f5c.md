# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_management\cart_management.spec.js >> Cart Management Module >> CT_10 - Cart Persistence (refresh)
- Location: tests\cart_management\cart_management.spec.js:206:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Accept All' }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - button "Skip to Header" [ref=e5] [cursor=pointer]
        - button "Skip to Main Content" [ref=e6] [cursor=pointer]
        - button "Skip to Footer" [ref=e7] [cursor=pointer]
      - banner [ref=e8]:
        - navigation "global" [ref=e15]:
          - list [ref=e16]:
            - listitem [ref=e17]:
              - link "Razer Homepage" [ref=e19] [cursor=pointer]:
                - /url: /
                - img "Razer Homepage" [ref=e20]
            - listitem [ref=e21] [cursor=pointer]:
              - link "Store" [ref=e22]:
                - /url: https://www.razer.com/store
              - button "Store" [ref=e23]
            - listitem [ref=e24] [cursor=pointer]:
              - link "PC" [ref=e25]:
                - /url: https://www.razer.com/pc
              - button "PC" [ref=e26]
            - listitem [ref=e27] [cursor=pointer]:
              - link "Console" [ref=e28]:
                - /url: https://www.razer.com/console-gaming
              - button "Console" [ref=e29]
            - listitem [ref=e30] [cursor=pointer]:
              - link "Mobile" [ref=e31]:
                - /url: https://www.razer.com/mobile
              - button "Mobile" [ref=e32]
            - listitem [ref=e33] [cursor=pointer]:
              - link "Furniture & Lifestyle" [ref=e34]:
                - /url: https://www.razer.com/lifestyle
              - button "Furniture & Lifestyle" [ref=e35]
            - listitem [ref=e36] [cursor=pointer]:
              - link "Gold & Silver" [ref=e37]:
                - /url: https://gold.razer.com/us/en
              - button "Gold & Silver" [ref=e38]
            - listitem [ref=e39] [cursor=pointer]:
              - link "Community" [ref=e40]:
                - /url: https://www.razer.com/community
              - button "Community" [ref=e41]
            - listitem [ref=e42]:
              - link "Razer.AI" [ref=e43] [cursor=pointer]:
                - /url: https://razer.ai
            - listitem [ref=e44] [cursor=pointer]:
              - link "Support" [ref=e45]:
                - /url: https://mysupport.razer.com/
              - button "Support" [ref=e46]
            - listitem [ref=e47]:
              - generic [ref=e50]:
                - button "Search" [ref=e51] [cursor=pointer]: 
                - text: ❮  
            - listitem [ref=e52]:
              - button "0 items in cart" [ref=e58] [cursor=pointer]: 
      - main [ref=e59]:
        - generic [ref=e60]:
          - generic [ref=e61]:
            - generic [ref=e63]:
              - heading "Your cart is empty" [level=1] [ref=e64]
              - paragraph [ref=e65]: Fear not, have a look at our latest products and start shopping.
            - link "SHOP RAZER.COM" [ref=e67] [cursor=pointer]
          - region "product recommendation carousel" [ref=e71]:
            - generic [ref=e72]: This is a carousel. Use Next and Previous buttons to navigate, or jump to a slide using the slide dots.
            - heading "FREQUENTLY BOUGHT TOGETHER" [level=2] [ref=e73]
            - generic [ref=e74]:
              - group "Product 1 of 4" [ref=e75]:
                - generic [ref=e77]:
                  - generic [ref=e78]:
                    - heading "Razer Atlas Pro - Black" [level=3] [ref=e79]
                    - generic [ref=e80]:
                      - generic [ref=e84]:
                        - generic [ref=e85]: "Product price:"
                        - text: US$129.99
                      - link "View details" [ref=e87] [cursor=pointer]:
                        - /url: /gaming-mouse-mats/razer-atlas-pro/RZ02-05760100-R3U1
                  - button "Add to Cart - Razer Atlas Pro - Black. For US$129.99" [ref=e89] [cursor=pointer]: Add
              - group "Product 2 of 4" [ref=e90]:
                - generic [ref=e92]:
                  - generic [ref=e93]:
                    - heading "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black" [level=3] [ref=e94]
                    - generic [ref=e95]:
                      - generic [ref=e99]:
                        - generic [ref=e100]: "Product price:"
                        - text: US$5,599.99
                      - link "View details" [ref=e102] [cursor=pointer]:
                        - /url: /gaming-laptops/razer-blade-16/RZ09-05819EN9-R3U1
                  - button "Add to Cart - Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black. For US$5,599.99" [ref=e104] [cursor=pointer]: Add
              - group "Product 3 of 4" [ref=e105]:
                - generic [ref=e107]:
                  - generic [ref=e108]:
                    - heading "Razer Viper V4 Pro - Black" [level=3] [ref=e109]
                    - generic [ref=e110]:
                      - generic [ref=e114]:
                        - generic [ref=e115]: "Product price:"
                        - text: US$159.99
                      - link "View details" [ref=e117] [cursor=pointer]:
                        - /url: /gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1
                  - button "Add to Cart - Razer Viper V4 Pro - Black. For US$159.99" [ref=e119] [cursor=pointer]: Add
              - group "Product 4 of 4" [ref=e120]:
                - generic [ref=e122]:
                  - generic [ref=e123]:
                    - heading "Razer Gigantus V2 Pro - NiKo Edition" [level=3] [ref=e124]
                    - generic [ref=e125]:
                      - generic [ref=e129]:
                        - generic [ref=e130]: "Product price:"
                        - text: US$69.99
                      - link "View details" [ref=e132] [cursor=pointer]:
                        - /url: /gaming-mouse-mats/razer-gigantus-v2-pro/RZ02-05491300-R3U1
                  - button "Add to Cart - Razer Gigantus V2 Pro - NiKo Edition. For US$69.99" [ref=e134] [cursor=pointer]: Add
            - generic [ref=e135]:
              - button "Previous" [disabled]
              - button "Next" [ref=e136] [cursor=pointer]
      - contentinfo [ref=e137]:
        - generic [ref=e142]:
          - generic [ref=e143]:
            - generic [ref=e145]:
              - heading "Shop" [level=2] [ref=e147]
              - list [ref=e149]:
                - listitem [ref=e150]:
                  - link "RazerStores" [ref=e151] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstores
                - listitem [ref=e152]:
                  - link "RazerCafe" [ref=e153] [cursor=pointer]:
                    - /url: https://www.razer.com/razercafe
                - listitem [ref=e154]:
                  - link "Store Locator" [ref=e155] [cursor=pointer]:
                    - /url: https://www.razer.com/store-finder
                - listitem [ref=e156]:
                  - link "Purchase Programs" [ref=e157] [cursor=pointer]:
                    - /url: https://www.razer.com/store/programs
                - listitem [ref=e158]:
                  - link "Bulk Order Program" [ref=e159] [cursor=pointer]:
                    - /url: https://www.razer.com/store/bulk-purchase
                - listitem [ref=e160]:
                  - link "Education" [ref=e161] [cursor=pointer]:
                    - /url: https://www.razer.com/education
                - listitem [ref=e162]:
                  - link "Only at Razer" [ref=e163] [cursor=pointer]:
                    - /url: https://www.razer.com/only-at-razer
                - listitem [ref=e164]:
                  - link "Razer Silver" [ref=e165] [cursor=pointer]:
                    - /url: https://www.razer.com/store/rewards
                - listitem [ref=e166]:
                  - link "Affiliate" [ref=e167] [cursor=pointer]:
                    - /url: https://www.razer.com/affiliate
                - listitem [ref=e168]:
                  - link "Newsletter" [ref=e169] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter
            - generic [ref=e171]:
              - heading "Explore" [level=2] [ref=e173]
              - list [ref=e175]:
                - listitem [ref=e176]:
                  - link "Technology" [ref=e177] [cursor=pointer]:
                    - /url: https://www.razer.com/technology
                - listitem [ref=e178]:
                  - link "Chroma RGB" [ref=e179] [cursor=pointer]:
                    - /url: https://www.razer.com/chroma
                - listitem [ref=e180]:
                  - link "Concepts" [ref=e181] [cursor=pointer]:
                    - /url: https://www.razer.com/concepts
                - listitem [ref=e182]:
                  - link "Esports" [ref=e183] [cursor=pointer]:
                    - /url: https://www.razer.com/esports
                - listitem [ref=e184]:
                  - link "Collabs" [ref=e185] [cursor=pointer]:
                    - /url: https://www.razer.com/lifestyle/collabs
            - generic [ref=e187]:
              - heading "Support" [level=2] [ref=e189]
              - list [ref=e191]:
                - listitem [ref=e192]:
                  - link "Get Help" [ref=e193] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/?c=us
                - listitem [ref=e194]:
                  - link "Registration & Warranty" [ref=e195] [cursor=pointer]:
                    - /url: https://www.razer.com/product-registration
                - listitem [ref=e196]:
                  - link "RazerStore Support" [ref=e197] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstore-support
                - listitem [ref=e198]:
                  - link "RazerCare" [ref=e199] [cursor=pointer]:
                    - /url: https://www.razer.com/razercare
                - listitem [ref=e200]:
                  - link "Manage Razer ID" [ref=e201] [cursor=pointer]:
                    - /url: https://razerid.razer.com
                - listitem [ref=e202]:
                  - link "Support Videos" [ref=e203] [cursor=pointer]:
                    - /url: https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos
                - listitem [ref=e204]:
                  - link "Recycling Program" [ref=e205] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/app/answers/detail/a_id/5904
                - listitem [ref=e206]:
                  - link "Accessibility Statement" [ref=e207] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/commitment-to-accessibility
            - generic [ref=e209]:
              - heading "Company" [level=2] [ref=e211]
              - list [ref=e213]:
                - listitem [ref=e214]:
                  - link "About Us" [ref=e215] [cursor=pointer]:
                    - /url: https://www.razer.com/about-razer
                - listitem [ref=e216]:
                  - link "Careers" [ref=e217] [cursor=pointer]:
                    - /url: https://careers.razer.com
                - listitem [ref=e218]:
                  - link "Newsroom" [ref=e219] [cursor=pointer]:
                    - /url: https://www.razer.com/newsroom
                - listitem [ref=e220]:
                  - link "zVentures" [ref=e221] [cursor=pointer]:
                    - /url: https://www.zvntrs.com
                - listitem [ref=e222]:
                  - link "Contact Us" [ref=e223] [cursor=pointer]:
                    - /url: https://www.razer.com/contact-us
                - listitem [ref=e224]:
                  - link "AI Gaming Newsletter" [ref=e225] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter/ai
            - generic [ref=e227]:
              - heading "Follow Us" [level=2] [ref=e229]
              - list [ref=e231]:
                - listitem [ref=e232]:
                  - link "Visit Razer’s Facebook Page" [ref=e233] [cursor=pointer]:
                    - /url: https://www.facebook.com/razer
                    - figure [ref=e234]
                - listitem [ref=e235]:
                  - link "Visit Razer’s Instagram Page" [ref=e236] [cursor=pointer]:
                    - /url: https://www.instagram.com/razer
                    - figure [ref=e237]
                - listitem [ref=e238]:
                  - link "Visit Razer’s Threads Page" [ref=e239] [cursor=pointer]:
                    - /url: https://www.threads.net/@razer
                    - figure [ref=e240]
                - listitem [ref=e241]:
                  - link "Visit Razer’s X Page" [ref=e242] [cursor=pointer]:
                    - /url: https://www.twitter.com/Razer
                    - figure [ref=e243]
                - listitem [ref=e244]:
                  - link "Visit Razer’s YouTube Page" [ref=e245] [cursor=pointer]:
                    - /url: https://www.youtube.com/razer
                    - figure [ref=e246]
                - listitem [ref=e247]:
                  - link "Visit Razer’s TikTok Page" [ref=e248] [cursor=pointer]:
                    - /url: https://www.tiktok.com/@razer
                    - figure [ref=e249]
                - listitem [ref=e250]:
                  - link "Visit Razer’s Twitch Page" [ref=e251] [cursor=pointer]:
                    - /url: https://www.twitch.tv/razer
                    - figure [ref=e252]
                - listitem [ref=e253]:
                  - link "Visit Razer’s Discord Page" [ref=e254] [cursor=pointer]:
                    - /url: https://discord.com/invite/razer
                    - figure [ref=e255]
            - generic [ref=e259]: FOR GAMERS. BY GAMERS.™
          - generic [ref=e263]:
            - generic [ref=e264]:
              - generic [ref=e266]: Copyright © 2026 Razer Inc. All rights reserved.
              - list [ref=e268]:
                - listitem [ref=e269]:
                  - link "Site Map" [ref=e270] [cursor=pointer]:
                    - /url: https://www.razer.com/sitemap
                - listitem [ref=e271]:
                  - text: "|"
                  - link "Legal Terms" [ref=e272] [cursor=pointer]:
                    - /url: https://www.razer.com/legal
                - listitem [ref=e273]:
                  - text: "|"
                  - link "Privacy Policy" [ref=e274] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/customer-privacy-policy
                - listitem [ref=e275]:
                  - text: "|"
                  - button "Cookie Settings" [ref=e276] [cursor=pointer]
            - generic [ref=e278]:
              - text: United States |
              - link "Change Location >" [ref=e279] [cursor=pointer]:
                - /url: /choose-location
    - text: 
  - textbox [ref=e288]
```

# Test source

```ts
  111 |       .waitFor({ state: "visible", timeout: 10000 });
  112 |     await page.getByRole("button", { name: "Remove item from cart" }).click();
  113 | 
  114 |     await page
  115 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  116 |       .waitFor({ state: "visible", timeout: 10000 });
  117 |     await page
  118 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  119 |       .click();
  120 | 
  121 |     const increaseBtn = page.getByRole("button", {
  122 |       name: "Increase quantity of item",
  123 |     });
  124 |     await increaseBtn.waitFor({ state: "visible", timeout: 10000 });
  125 |     await increaseBtn.click();
  126 |   });
  127 | 
  128 |  test("CT_06 - Decrease Quantity Button Works", async ({ page }) => {
  129 |   await page.goto("https://www.razer.com/cart");
  130 | 
  131 |   await page.getByRole("button", { name: "Accept All" }).waitFor({ state: "visible", timeout: 10000 });
  132 |   await page.getByRole("button", { name: "Accept All" }).click();
  133 | 
  134 |   await page.getByRole("button", { name: "Add to Cart - Razer Atlas Pro" }).waitFor({ state: "visible", timeout: 10000 });
  135 |   await page.getByRole("button", { name: "Add to Cart - Razer Atlas Pro" }).click();
  136 | 
  137 |   const increaseBtn = page.getByRole("button", { name: "Increase quantity of item" });
  138 |   await increaseBtn.waitFor({ state: "visible", timeout: 10000 });
  139 |   await increaseBtn.click();
  140 | 
  141 |   const decreaseBtn = page.getByRole("button", { name: "Reduce quantity of item" });
  142 |   await decreaseBtn.waitFor({ state: "visible", timeout: 10000 });
  143 |   await decreaseBtn.click();
  144 | });
  145 | 
  146 |   test("CT_07 - Remove Product Button Works", async ({ page }) => {
  147 |     await page.goto("https://www.razer.com/cart");
  148 | 
  149 |     await page
  150 |       .getByRole("button", { name: "Accept All" })
  151 |       .waitFor({ state: "visible", timeout: 10000 });
  152 |     await page.getByRole("button", { name: "Accept All" }).click();
  153 | 
  154 |     await page
  155 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  156 |       .waitFor({ state: "visible", timeout: 10000 });
  157 |     await page
  158 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  159 |       .click();
  160 | 
  161 |     const removeBtn = page.getByRole("button", {
  162 |       name: "Remove item from cart",
  163 |     });
  164 |     await removeBtn.waitFor({ state: "visible", timeout: 10000 });
  165 |     await removeBtn.click();
  166 |   });
  167 | 
  168 |   test("CT_08 - Empty Cart Validation", async ({ page }) => {
  169 |   await page.goto("https://www.razer.com/cart");
  170 | 
  171 |   const acceptBtn = page.getByRole("button", { name: "Accept All" });
  172 |   if (await acceptBtn.isVisible()) {
  173 |     await acceptBtn.click();
  174 |   }
  175 | 
  176 |   await expect(page.getByRole("heading", { name: /Your cart is empty/i })).toBeVisible({ timeout: 10000 });
  177 | });
  178 | 
  179 |   test("CT_09 - Subtotal Validation", async ({ page }) => {
  180 |     await page.goto("https://www.razer.com/cart");
  181 | 
  182 |     await page
  183 |       .getByRole("button", { name: "Accept All" })
  184 |       .waitFor({ state: "visible", timeout: 10000 });
  185 |     await page.getByRole("button", { name: "Accept All" }).click();
  186 | 
  187 |     await page
  188 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  189 |       .waitFor({ state: "visible", timeout: 10000 });
  190 |     await page
  191 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  192 |       .click();
  193 | 
  194 |     await page
  195 |       .getByRole("button", { name: "Add to Cart - Razer Viper V4" })
  196 |       .waitFor({ state: "visible", timeout: 10000 });
  197 |     await page
  198 |       .getByRole("button", { name: "Add to Cart - Razer Viper V4" })
  199 |       .click();
  200 | 
  201 |     await expect(page.getByText(/Subtotal US\$289.98/i)).toBeVisible({
  202 |       timeout: 10000,
  203 |     });
  204 |   });
  205 | 
  206 |   test("CT_10 - Cart Persistence (refresh)", async ({ page }) => {
  207 |     await page.goto("https://www.razer.com/cart");
  208 | 
  209 |     await page
  210 |       .getByRole("button", { name: "Accept All" })
> 211 |       .waitFor({ state: "visible", timeout: 10000 });
      |        ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  212 |     await page.getByRole("button", { name: "Accept All" }).click();
  213 | 
  214 |     await page
  215 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  216 |       .waitFor({ state: "visible", timeout: 10000 });
  217 |     await page
  218 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  219 |       .click();
  220 | 
  221 |     await page
  222 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  223 |       .waitFor({ state: "visible", timeout: 10000 });
  224 |     await page
  225 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  226 |       .click();
  227 |     // Refresh the page
  228 |     await page.reload();
  229 |     // Verify item still in cart after refresh
  230 |     await expect(
  231 |       page.locator("app-razer-cart-item-list").getByText("US$"),
  232 |     ).toBeVisible({ timeout: 10000 });
  233 |   });
  234 | 
  235 |   test("CT_11 - Add Same Product Twice", async ({ page }) => {
  236 |     await page.goto("https://www.razer.com/cart");
  237 | 
  238 |     await page
  239 |       .getByRole("button", { name: "Accept All" })
  240 |       .waitFor({ state: "visible", timeout: 10000 });
  241 |     await page.getByRole("button", { name: "Accept All" }).click();
  242 | 
  243 |     await page
  244 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  245 |       .waitFor({ state: "visible", timeout: 10000 });
  246 |     await page
  247 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  248 |       .click();
  249 | 
  250 |     await page
  251 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  252 |       .waitFor({ state: "visible", timeout: 10000 });
  253 |     await page
  254 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  255 |       .click();
  256 |   });
  257 | 
  258 |   test("CT_12 - Add Different Products to Cart", async ({ page }) => {
  259 |     await page.goto("https://www.razer.com/cart");
  260 | 
  261 |     await page
  262 |       .getByRole("button", { name: "Accept All" })
  263 |       .waitFor({ state: "visible", timeout: 10000 });
  264 |     await page.getByRole("button", { name: "Accept All" }).click();
  265 | 
  266 |     await page
  267 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  268 |       .waitFor({ state: "visible", timeout: 10000 });
  269 |     await page
  270 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  271 |       .click();
  272 | 
  273 |     await page
  274 |       .getByRole("button", { name: "Add to Cart - Razer Blade 16" })
  275 |       .waitFor({ state: "visible", timeout: 10000 });
  276 |     await page
  277 |       .getByRole("button", { name: "Add to Cart - Razer Blade 16" })
  278 |       .click();
  279 | 
  280 |     await page
  281 |       .getByRole("button", { name: "Add to Cart - Razer Viper V4" })
  282 |       .waitFor({ state: "visible", timeout: 10000 });
  283 |     await page
  284 |       .getByRole("button", { name: "Add to Cart - Razer Viper V4" })
  285 |       .click();
  286 |   });
  287 | 
  288 |   test("CT_13 - Cart Checkout Navigation", async ({ page }) => {
  289 |     await page.goto("https://www.razer.com/cart");
  290 | 
  291 |     await page
  292 |       .getByRole("button", { name: "Accept All" })
  293 |       .waitFor({ state: "visible", timeout: 10000 });
  294 |     await page.getByRole("button", { name: "Accept All" }).click();
  295 | 
  296 |     await page
  297 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  298 |       .waitFor({ state: "visible", timeout: 10000 });
  299 |     await page
  300 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  301 |       .click();
  302 | 
  303 |     await page
  304 |       .locator("app-razer-cart-totals")
  305 |       .getByRole("link", { name: "checkout" })
  306 |       .waitFor({ state: "visible", timeout: 10000 });
  307 |     await page
  308 |       .locator("app-razer-cart-totals")
  309 |       .getByRole("link", { name: "checkout" })
  310 |       .click();
  311 | 
```