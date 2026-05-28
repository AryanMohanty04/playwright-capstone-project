# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_management/cart_management.spec.js >> Cart Management Module >> CT_14 - Maximum Quantity Limit
- Location: tests/cart_management/cart_management.spec.js:312:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Accept All' }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - region "We value your privacy" [ref=e2]:
    - generic [ref=e3]:
      - button "Close" [ref=e4] [cursor=pointer]
      - generic [ref=e5]:
        - heading "We value your privacy" [level=2] [ref=e6]
        - generic [ref=e7]:
          - paragraph [ref=e9]:
            - text: We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. You can opt out from tracking by clicking on "
            - strong [ref=e10]: Do Not Track
            - text: "\"."
            - link "Cookie Policy" [ref=e11] [cursor=pointer]:
              - /url: https://www.razer.com/legal/cookies
          - button "Do Not Track" [ref=e13] [cursor=pointer]
  - generic [ref=e14]:
    - generic [ref=e15]:
      - generic [ref=e16]:
        - button "Skip to Header" [ref=e17] [cursor=pointer]
        - button "Skip to Main Content" [ref=e18] [cursor=pointer]
        - button "Skip to Footer" [ref=e19] [cursor=pointer]
      - banner [ref=e20]:
        - navigation "global" [ref=e27]:
          - list [ref=e28]:
            - listitem [ref=e29]:
              - link "Razer Homepage" [ref=e31] [cursor=pointer]:
                - /url: /
                - img "Razer Homepage" [ref=e32]
            - listitem [ref=e33] [cursor=pointer]:
              - link "Store" [ref=e34]:
                - /url: https://www.razer.com/store
              - button "Store" [ref=e35]
            - listitem [ref=e36] [cursor=pointer]:
              - link "PC" [ref=e37]:
                - /url: https://www.razer.com/pc
              - button "PC" [ref=e38]
            - listitem [ref=e39] [cursor=pointer]:
              - link "Console" [ref=e40]:
                - /url: https://www.razer.com/console-gaming
              - button "Console" [ref=e41]
            - listitem [ref=e42] [cursor=pointer]:
              - link "Mobile" [ref=e43]:
                - /url: https://www.razer.com/mobile
              - button "Mobile" [ref=e44]
            - listitem [ref=e45] [cursor=pointer]:
              - link "Furniture & Lifestyle" [ref=e46]:
                - /url: https://www.razer.com/lifestyle
              - button "Furniture & Lifestyle" [ref=e47]
            - listitem [ref=e48] [cursor=pointer]:
              - link "Gold & Silver" [ref=e49]:
                - /url: https://gold.razer.com/us/en
              - button "Gold & Silver" [ref=e50]
            - listitem [ref=e51] [cursor=pointer]:
              - link "Community" [ref=e52]:
                - /url: https://www.razer.com/community
              - button "Community" [ref=e53]
            - listitem [ref=e54]:
              - link "Razer.AI" [ref=e55] [cursor=pointer]:
                - /url: https://razer.ai
            - listitem [ref=e56] [cursor=pointer]:
              - link "Support" [ref=e57]:
                - /url: https://mysupport.razer.com/
              - button "Support" [ref=e58]
            - listitem [ref=e59]:
              - generic [ref=e62]:
                - button "Search" [ref=e63] [cursor=pointer]: 
                - text: ❮  
            - listitem [ref=e64]:
              - button "0 items in cart" [ref=e70] [cursor=pointer]: 
      - main [ref=e71]:
        - generic [ref=e72]:
          - generic [ref=e73]:
            - generic [ref=e75]:
              - heading "Your cart is empty" [level=1] [ref=e76]
              - paragraph [ref=e77]: Fear not, have a look at our latest products and start shopping.
            - link "SHOP RAZER.COM" [ref=e79] [cursor=pointer]
          - region "product recommendation carousel" [ref=e83]:
            - generic [ref=e84]: This is a carousel. Use Next and Previous buttons to navigate, or jump to a slide using the slide dots.
            - heading "FREQUENTLY BOUGHT TOGETHER" [level=2] [ref=e85]
            - generic [ref=e86]:
              - group "Product 1 of 4" [ref=e87]:
                - generic [ref=e89]:
                  - generic [ref=e90]:
                    - heading "Razer Atlas Pro - Black" [level=3] [ref=e91]
                    - generic [ref=e92]:
                      - generic [ref=e96]:
                        - generic [ref=e97]: "Product price:"
                        - text: US$129.99
                      - link "View details" [ref=e99] [cursor=pointer]:
                        - /url: /gaming-mouse-mats/razer-atlas-pro/RZ02-05760100-R3U1
                  - button "Add to Cart - Razer Atlas Pro - Black. For US$129.99" [ref=e101] [cursor=pointer]: Add
              - group "Product 2 of 4" [ref=e102]:
                - generic [ref=e104]:
                  - generic [ref=e105]:
                    - heading "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black" [level=3] [ref=e106]
                    - generic [ref=e107]:
                      - generic [ref=e111]:
                        - generic [ref=e112]: "Product price:"
                        - text: US$5,599.99
                      - link "View details" [ref=e114] [cursor=pointer]:
                        - /url: /gaming-laptops/razer-blade-16/RZ09-05819EN9-R3U1
                  - button "Add to Cart - Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black. For US$5,599.99" [ref=e116] [cursor=pointer]: Add
              - group "Product 3 of 4" [ref=e117]:
                - generic [ref=e119]:
                  - generic [ref=e120]:
                    - heading "Razer Viper V4 Pro - Black" [level=3] [ref=e121]
                    - generic [ref=e122]:
                      - generic [ref=e126]:
                        - generic [ref=e127]: "Product price:"
                        - text: US$159.99
                      - link "View details" [ref=e129] [cursor=pointer]:
                        - /url: /gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1
                  - button "Add to Cart - Razer Viper V4 Pro - Black. For US$159.99" [ref=e131] [cursor=pointer]: Add
              - group "Product 4 of 4" [ref=e132]:
                - generic [ref=e134]:
                  - generic [ref=e135]:
                    - heading "Razer Gigantus V2 Pro - NiKo Edition" [level=3] [ref=e136]
                    - generic [ref=e137]:
                      - generic [ref=e141]:
                        - generic [ref=e142]: "Product price:"
                        - text: US$69.99
                      - link "View details" [ref=e144] [cursor=pointer]:
                        - /url: /gaming-mouse-mats/razer-gigantus-v2-pro/RZ02-05491300-R3U1
                  - button "Add to Cart - Razer Gigantus V2 Pro - NiKo Edition. For US$69.99" [ref=e146] [cursor=pointer]: Add
            - generic [ref=e147]:
              - button "Previous" [disabled]
              - button "Next" [ref=e148] [cursor=pointer]
      - contentinfo [ref=e149]:
        - generic [ref=e154]:
          - generic [ref=e155]:
            - generic [ref=e157]:
              - heading "Shop" [level=2] [ref=e159]
              - list [ref=e161]:
                - listitem [ref=e162]:
                  - link "RazerStores" [ref=e163] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstores
                - listitem [ref=e164]:
                  - link "RazerCafe" [ref=e165] [cursor=pointer]:
                    - /url: https://www.razer.com/razercafe
                - listitem [ref=e166]:
                  - link "Store Locator" [ref=e167] [cursor=pointer]:
                    - /url: https://www.razer.com/store-finder
                - listitem [ref=e168]:
                  - link "Purchase Programs" [ref=e169] [cursor=pointer]:
                    - /url: https://www.razer.com/store/programs
                - listitem [ref=e170]:
                  - link "Bulk Order Program" [ref=e171] [cursor=pointer]:
                    - /url: https://www.razer.com/store/bulk-purchase
                - listitem [ref=e172]:
                  - link "Education" [ref=e173] [cursor=pointer]:
                    - /url: https://www.razer.com/education
                - listitem [ref=e174]:
                  - link "Only at Razer" [ref=e175] [cursor=pointer]:
                    - /url: https://www.razer.com/only-at-razer
                - listitem [ref=e176]:
                  - link "Razer Silver" [ref=e177] [cursor=pointer]:
                    - /url: https://www.razer.com/store/rewards
                - listitem [ref=e178]:
                  - link "Affiliate" [ref=e179] [cursor=pointer]:
                    - /url: https://www.razer.com/affiliate
                - listitem [ref=e180]:
                  - link "Newsletter" [ref=e181] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter
            - generic [ref=e183]:
              - heading "Explore" [level=2] [ref=e185]
              - list [ref=e187]:
                - listitem [ref=e188]:
                  - link "Technology" [ref=e189] [cursor=pointer]:
                    - /url: https://www.razer.com/technology
                - listitem [ref=e190]:
                  - link "Chroma RGB" [ref=e191] [cursor=pointer]:
                    - /url: https://www.razer.com/chroma
                - listitem [ref=e192]:
                  - link "Concepts" [ref=e193] [cursor=pointer]:
                    - /url: https://www.razer.com/concepts
                - listitem [ref=e194]:
                  - link "Esports" [ref=e195] [cursor=pointer]:
                    - /url: https://www.razer.com/esports
                - listitem [ref=e196]:
                  - link "Collabs" [ref=e197] [cursor=pointer]:
                    - /url: https://www.razer.com/lifestyle/collabs
            - generic [ref=e199]:
              - heading "Support" [level=2] [ref=e201]
              - list [ref=e203]:
                - listitem [ref=e204]:
                  - link "Get Help" [ref=e205] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/?c=us
                - listitem [ref=e206]:
                  - link "Registration & Warranty" [ref=e207] [cursor=pointer]:
                    - /url: https://www.razer.com/product-registration
                - listitem [ref=e208]:
                  - link "RazerStore Support" [ref=e209] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstore-support
                - listitem [ref=e210]:
                  - link "RazerCare" [ref=e211] [cursor=pointer]:
                    - /url: https://www.razer.com/razercare
                - listitem [ref=e212]:
                  - link "Manage Razer ID" [ref=e213] [cursor=pointer]:
                    - /url: https://razerid.razer.com
                - listitem [ref=e214]:
                  - link "Support Videos" [ref=e215] [cursor=pointer]:
                    - /url: https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos
                - listitem [ref=e216]:
                  - link "Recycling Program" [ref=e217] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/app/answers/detail/a_id/5904
                - listitem [ref=e218]:
                  - link "Accessibility Statement" [ref=e219] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/commitment-to-accessibility
            - generic [ref=e221]:
              - heading "Company" [level=2] [ref=e223]
              - list [ref=e225]:
                - listitem [ref=e226]:
                  - link "About Us" [ref=e227] [cursor=pointer]:
                    - /url: https://www.razer.com/about-razer
                - listitem [ref=e228]:
                  - link "Careers" [ref=e229] [cursor=pointer]:
                    - /url: https://careers.razer.com
                - listitem [ref=e230]:
                  - link "Newsroom" [ref=e231] [cursor=pointer]:
                    - /url: https://www.razer.com/newsroom
                - listitem [ref=e232]:
                  - link "zVentures" [ref=e233] [cursor=pointer]:
                    - /url: https://www.zvntrs.com
                - listitem [ref=e234]:
                  - link "Contact Us" [ref=e235] [cursor=pointer]:
                    - /url: https://www.razer.com/contact-us
                - listitem [ref=e236]:
                  - link "AI Gaming Newsletter" [ref=e237] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter/ai
            - generic [ref=e239]:
              - heading "Follow Us" [level=2] [ref=e241]
              - list [ref=e243]:
                - listitem [ref=e244]:
                  - link "Visit Razer’s Facebook Page" [ref=e245] [cursor=pointer]:
                    - /url: https://www.facebook.com/razer
                    - figure [ref=e246]
                - listitem [ref=e247]:
                  - link "Visit Razer’s Instagram Page" [ref=e248] [cursor=pointer]:
                    - /url: https://www.instagram.com/razer
                    - figure [ref=e249]
                - listitem [ref=e250]:
                  - link "Visit Razer’s Threads Page" [ref=e251] [cursor=pointer]:
                    - /url: https://www.threads.net/@razer
                    - figure [ref=e252]
                - listitem [ref=e253]:
                  - link "Visit Razer’s X Page" [ref=e254] [cursor=pointer]:
                    - /url: https://www.twitter.com/Razer
                    - figure [ref=e255]
                - listitem [ref=e256]:
                  - link "Visit Razer’s YouTube Page" [ref=e257] [cursor=pointer]:
                    - /url: https://www.youtube.com/razer
                    - figure [ref=e258]
                - listitem [ref=e259]:
                  - link "Visit Razer’s TikTok Page" [ref=e260] [cursor=pointer]:
                    - /url: https://www.tiktok.com/@razer
                    - figure [ref=e261]
                - listitem [ref=e262]:
                  - link "Visit Razer’s Twitch Page" [ref=e263] [cursor=pointer]:
                    - /url: https://www.twitch.tv/razer
                    - figure [ref=e264]
                - listitem [ref=e265]:
                  - link "Visit Razer’s Discord Page" [ref=e266] [cursor=pointer]:
                    - /url: https://discord.com/invite/razer
                    - figure [ref=e267]
            - generic [ref=e271]: FOR GAMERS. BY GAMERS.™
          - generic [ref=e275]:
            - generic [ref=e276]:
              - generic [ref=e278]: Copyright © 2026 Razer Inc. All rights reserved.
              - list [ref=e280]:
                - listitem [ref=e281]:
                  - link "Site Map" [ref=e282] [cursor=pointer]:
                    - /url: https://www.razer.com/sitemap
                - listitem [ref=e283]:
                  - text: "|"
                  - link "Legal Terms" [ref=e284] [cursor=pointer]:
                    - /url: https://www.razer.com/legal
                - listitem [ref=e285]:
                  - text: "|"
                  - link "Privacy Policy" [ref=e286] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/customer-privacy-policy
                - listitem [ref=e287]:
                  - text: "|"
                  - button "Cookie Settings" [ref=e288] [cursor=pointer]
            - generic [ref=e290]:
              - text: United States |
              - link "Change Location >" [ref=e291] [cursor=pointer]:
                - /url: /choose-location
    - text: 
  - textbox [ref=e300]
```

# Test source

```ts
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
  230 | 
  231 |   const acceptBtn = page.getByRole("button", { name: "Accept All" });
  232 |   if (await acceptBtn.isVisible()) {
  233 |     await acceptBtn.click();
  234 |   }
  235 |   await page.locator(".cky-overlay").waitFor({ state: "hidden", timeout: 10000 }).catch(() => {});
  236 | 
  237 |   await page.getByRole("button", { name: "Add to Cart - Razer Atlas Pro" }).waitFor({ state: "visible", timeout: 10000 });
  238 |   await page.getByRole("button", { name: "Add to Cart - Razer Atlas Pro" }).click({ force: true });
  239 | 
  240 |   await page.reload();
  241 | });
  242 | 
  243 |   test("CT_11 - Add Same Product Twice", async ({ page }) => {
  244 |     await page.goto("https://www.razer.com/cart");
  245 | 
  246 |     await page
  247 |       .getByRole("button", { name: "Accept All" })
  248 |       .waitFor({ state: "visible", timeout: 10000 });
  249 |     await page.getByRole("button", { name: "Accept All" }).click();
  250 | 
  251 |     await page
  252 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  253 |       .waitFor({ state: "visible", timeout: 10000 });
  254 |     await page
  255 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  256 |       .click();
  257 | 
  258 |     await page
  259 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  260 |       .waitFor({ state: "visible", timeout: 10000 });
  261 |     await page
  262 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  263 |       .click();
  264 |   });
  265 | 
  266 |   test("CT_12 - Add Different Products to Cart", async ({ page }) => {
  267 |   await page.goto("https://www.razer.com/cart");
  268 | 
  269 |   const acceptBtn = page.getByRole("button", { name: "Accept All" });
  270 |   if (await acceptBtn.isVisible()) {
  271 |     await acceptBtn.click();
  272 |   }
  273 |   await page.locator(".cky-overlay").waitFor({ state: "hidden", timeout: 10000 }).catch(() => {});
  274 | 
  275 |   await page.getByRole("button", { name: "Add to Cart - Razer Atlas Pro" }).waitFor({ state: "visible", timeout: 10000 });
  276 |   await page.getByRole("button", { name: "Add to Cart - Razer Atlas Pro" }).click({ force: true });
  277 | 
  278 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 16" }).waitFor({ state: "visible", timeout: 10000 });
  279 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 16" }).click({ force: true });
  280 | 
  281 |   await page.getByRole("button", { name: "Add to Cart - Razer Viper V4" }).waitFor({ state: "visible", timeout: 10000 });
  282 |   await page.getByRole("button", { name: "Add to Cart - Razer Viper V4" }).click({ force: true });
  283 | });
  284 | 
  285 |   test("CT_13 - Cart Checkout Navigation", async ({ page }) => {
  286 |     await page.goto("https://www.razer.com/cart");
  287 | 
  288 |     await page
  289 |       .getByRole("button", { name: "Accept All" })
  290 |       .waitFor({ state: "visible", timeout: 10000 });
  291 |     await page.getByRole("button", { name: "Accept All" }).click();
  292 | 
  293 |     await page
  294 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  295 |       .waitFor({ state: "visible", timeout: 10000 });
  296 |     await page
  297 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  298 |       .click();
  299 | 
  300 |     await page
  301 |       .locator("app-razer-cart-totals")
  302 |       .getByRole("link", { name: "checkout" })
  303 |       .waitFor({ state: "visible", timeout: 10000 });
  304 |     await page
  305 |       .locator("app-razer-cart-totals")
  306 |       .getByRole("link", { name: "checkout" })
  307 |       .click();
  308 | 
  309 |     await expect(page).toHaveURL(/checkout/, { timeout: 10000 });
  310 |   });
  311 | 
  312 |   test("CT_14 - Maximum Quantity Limit", async ({ page }) => {
  313 |     await page.goto("https://www.razer.com/cart");
  314 | 
  315 |     await page
  316 |       .getByRole("button", { name: "Accept All" })
> 317 |       .waitFor({ state: "visible", timeout: 10000 });
      |        ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  318 |     await page.getByRole("button", { name: "Accept All" }).click();
  319 | 
  320 |     await page
  321 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  322 |       .waitFor({ state: "visible", timeout: 10000 });
  323 |     await page
  324 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  325 |       .click();
  326 | 
  327 |     const increaseBtn = page.getByRole("button", {
  328 |       name: "Increase quantity of item",
  329 |     });
  330 |     await increaseBtn.waitFor({ state: "visible", timeout: 10000 });
  331 |     await increaseBtn.click({ force: true });
  332 |     await increaseBtn.click({ force: true });
  333 |     await increaseBtn.click({ force: true });
  334 |   });
  335 | 
  336 |   test("CT_15 - Open Cart on Mobile Screen Size", async ({ page }) => {
  337 |     // Set mobile viewport
  338 |     await page.setViewportSize({ width: 390, height: 844 });
  339 | 
  340 |     await page.goto("https://www.razer.com/cart");
  341 | 
  342 |     const acceptBtn = page.getByRole("button", { name: "Accept All" });
  343 |     if (await acceptBtn.isVisible()) {
  344 |       await acceptBtn.click();
  345 |     }
  346 | 
  347 |     await expect(page).toHaveURL(/cart/, { timeout: 10000 });
  348 |     await expect(
  349 |       page.getByRole("heading", { name: /Your cart is empty/i }),
  350 |     ).toBeVisible({ timeout: 10000 });
  351 |   });
  352 | });
  353 | 
```