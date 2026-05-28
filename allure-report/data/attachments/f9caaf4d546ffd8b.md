# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_management\cart_management.spec.js >> CT_01 - Add Product to cart
- Location: tests\cart_management\cart_management.spec.js:301:1

# Error details

```
TimeoutError: page.waitForURL: Timeout 10000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
  navigated to "https://www.razer.com/cart"
============================================================
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
              - generic [ref=e57]:
                - button "3 items in cart" [ref=e58] [cursor=pointer]: 
                - generic [ref=e59]: "3"
      - main [ref=e60]:
        - generic [ref=e61]:
          - generic [ref=e63]:
            - generic [ref=e66]:
              - heading "Your cart total is US$3,999.99" [level=1] [ref=e68]
              - link "checkout" [ref=e70] [cursor=pointer]
            - list [ref=e76]:
              - listitem [ref=e77]:
                - group "product card" [ref=e80]:
                  - generic [ref=e81]:
                    - generic [ref=e87]:
                      - generic [ref=e88]:
                        - heading "Razer Blade 18" [level=2] [ref=e90]:
                          - link "Razer Blade 18" [ref=e91] [cursor=pointer]:
                            - /url: /gaming-laptops/razer-blade-18/RZ09-05827ER3-R3U1
                        - button "Show details" [ref=e96] [cursor=pointer]:
                          - generic [ref=e98]: Show details
                      - generic [ref=e100]:
                        - generic [ref=e103]:
                          - button "Remove item from cart" [ref=e104] [cursor=pointer]
                          - status [ref=e105]:
                            - generic [ref=e106]: Items in cart
                            - text: "1"
                          - button "Increase quantity of item" [ref=e108] [cursor=pointer]
                        - generic "Product price" [ref=e111]: US$3,999.99
                    - group "product card" [ref=e117]:
                      - generic [ref=e118]:
                        - heading "Add RazerCare for Razer Blade 18, from US$529.99" [level=3] [ref=e119]:
                          - generic [ref=e120]: Add RazerCare for Razer Blade 18, from US$529.99
                        - generic [ref=e121]:
                          - text: Protect your new device for up to 3 years.
                          - link "Learn more" [ref=e123] [cursor=pointer]:
                            - /url: /razercare
                            - text: Learn more
                      - button "Add" [ref=e126] [cursor=pointer]
              - listitem [ref=e127]:
                - group "product card" [ref=e130]:
                  - generic [ref=e136]:
                    - generic [ref=e137]:
                      - 'heading "Lego Batman: Legacy of the Dark Knight" [level=2] [ref=e139]'
                      - generic [ref=e140]:
                        - list [ref=e141]:
                          - listitem [ref=e142]: Product key will be delivered by email
                        - generic [ref=e143]:
                          - generic [ref=e144]: 
                          - paragraph [ref=e145]:
                            - text: Free gift with Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5070 Ti - Black
                            - text: (worth US$69.99)
                    - generic [ref=e146]:
                      - status [ref=e150]:
                        - generic [ref=e151]: Items in cart
                        - text: "1"
                      - generic "Product price" [ref=e155]: Free
              - listitem [ref=e156]:
                - group "product card" [ref=e159]:
                  - generic [ref=e165]:
                    - generic [ref=e166]:
                      - heading "007 First Light GeForce RTX 50 Series Bundle" [level=2] [ref=e168]
                      - generic [ref=e169]:
                        - list [ref=e170]:
                          - listitem [ref=e171]: Product key will be delivered by email
                        - generic [ref=e172]:
                          - generic [ref=e173]: 
                          - paragraph [ref=e174]:
                            - text: Free gift with Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5070 Ti - Black
                            - text: (worth US$69.99)
                    - generic [ref=e175]:
                      - status [ref=e179]:
                        - generic [ref=e180]: Items in cart
                        - text: "1"
                      - generic "Product price" [ref=e184]: Free
          - generic [ref=e189]:
            - generic [ref=e190]:
              - generic [ref=e191]:
                - generic [ref=e192]:
                  - link "Join Razer Silver" [ref=e193] [cursor=pointer]:
                    - /url: "#"
                  - generic [ref=e194]:
                    - text: to earn up to
                    - generic [ref=e195]:
                      - img [ref=e196]
                      - text: 200,000 for this purchase.
                - button "Discover a whole new world of rewards" [ref=e198] [cursor=pointer]
              - group "carbon offset" [ref=e202]:
                - img "Carbon Offset Program" [ref=e204]
                - generic [ref=e205]:
                  - heading "Add US$7.04 to offset your carbon footprint" [level=2] [ref=e206]
                  - paragraph [ref=e207]:
                    - text: Powered by Restorify.
                    - button "Learn more" [ref=e208] [cursor=pointer]
                - button "Add" [ref=e210] [cursor=pointer]
              - generic [ref=e212]:
                - button "Have a promo code?" [ref=e217] [cursor=pointer]:
                  - generic [ref=e219]: Have a promo code?
                - generic [ref=e222]: Actual sales tax will be calculated later upon entry of your billing/shipping address.
              - list [ref=e223]:
                - listitem [ref=e224]:
                  - generic [ref=e226]: Subtotal
                  - generic [ref=e227]: US$3,999.99
                  - generic [ref=e228]: Excludes local taxes
                - listitem [ref=e229]:
                  - generic [ref=e231]: Shipping
                  - generic [ref=e233]: Calculated after address entry
                - listitem
                - listitem [ref=e234]:
                  - generic [ref=e235]: Your Total
                  - generic [ref=e236]: US$3,999.99
            - generic [ref=e238]:
              - paragraph [ref=e242]:
                - text: Starting at $167/mo or 0% APR with Affirm  .
                - link "Learn more - Learn more about Affirm Financing (opens in modal)" [ref=e243] [cursor=pointer]:
                  - /url: javascript:void(0)
                  - text: Learn more
              - link "checkout" [ref=e245] [cursor=pointer]
          - region "product recommendation carousel" [ref=e249]:
            - generic [ref=e250]: This is a carousel. Use Next and Previous buttons to navigate, or jump to a slide using the slide dots.
            - heading "FREQUENTLY BOUGHT TOGETHER" [level=2] [ref=e251]
            - generic [ref=e252]:
              - group "Product 1 of 4" [ref=e253]:
                - generic [ref=e255]:
                  - generic [ref=e256]:
                    - heading "Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5090 - Black" [level=3] [ref=e257]
                    - generic [ref=e258]:
                      - generic [ref=e262]:
                        - generic [ref=e263]: "Product price:"
                        - text: US$6,999.99
                      - link "View details" [ref=e265] [cursor=pointer]:
                        - /url: /gaming-laptops/razer-blade-18/RZ09-0582EER9-R3U1
                  - button "Add to Cart - Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5090 - Black. For US$6,999.99" [ref=e267] [cursor=pointer]: Add
              - group "Product 2 of 4" [ref=e268]:
                - generic [ref=e270]:
                  - generic [ref=e271]:
                    - heading "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black" [level=3] [ref=e272]
                    - generic [ref=e273]:
                      - generic [ref=e277]:
                        - generic [ref=e278]: "Product price:"
                        - text: US$4,899.99
                      - link "View details" [ref=e280] [cursor=pointer]:
                        - /url: /gaming-laptops/razer-blade-16/RZ09-05819EN4-R3U1
                  - button "Add to Cart - Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black. For US$4,899.99" [ref=e282] [cursor=pointer]: Add
              - group "Product 3 of 4" [ref=e283]:
                - generic [ref=e285]:
                  - generic [ref=e286]:
                    - heading "Razer Viper V4 Pro - Black" [level=3] [ref=e287]
                    - generic [ref=e288]:
                      - generic [ref=e292]:
                        - generic [ref=e293]: "Product price:"
                        - text: US$159.99
                      - link "View details" [ref=e295] [cursor=pointer]:
                        - /url: /gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1
                  - button "Add to Cart - Razer Viper V4 Pro - Black. For US$159.99" [ref=e297] [cursor=pointer]: Add
              - group "Product 4 of 4" [ref=e298]:
                - generic [ref=e300]:
                  - generic [ref=e301]:
                    - heading "Razer Kraken Kitty V2 - Gengar Edition" [level=3] [ref=e302]
                    - generic [ref=e303]:
                      - generic [ref=e307]:
                        - generic [ref=e308]: "Product price:"
                        - text: US$139.99
                      - link "View details" [ref=e310] [cursor=pointer]:
                        - /url: /gaming-headsets/razer-kraken-kitty-v2/RZ04-04730300-R3M1
                  - button "Add to Cart - Razer Kraken Kitty V2 - Gengar Edition. For US$139.99" [ref=e312] [cursor=pointer]: Add
            - generic [ref=e313]:
              - button "Previous" [disabled]
              - button "Next" [ref=e314] [cursor=pointer]
      - contentinfo [ref=e315]:
        - generic [ref=e320]:
          - generic [ref=e321]:
            - generic [ref=e323]:
              - heading "Shop" [level=2] [ref=e325]
              - list [ref=e327]:
                - listitem [ref=e328]:
                  - link "RazerStores" [ref=e329] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstores
                - listitem [ref=e330]:
                  - link "RazerCafe" [ref=e331] [cursor=pointer]:
                    - /url: https://www.razer.com/razercafe
                - listitem [ref=e332]:
                  - link "Store Locator" [ref=e333] [cursor=pointer]:
                    - /url: https://www.razer.com/store-finder
                - listitem [ref=e334]:
                  - link "Purchase Programs" [ref=e335] [cursor=pointer]:
                    - /url: https://www.razer.com/store/programs
                - listitem [ref=e336]:
                  - link "Bulk Order Program" [ref=e337] [cursor=pointer]:
                    - /url: https://www.razer.com/store/bulk-purchase
                - listitem [ref=e338]:
                  - link "Education" [ref=e339] [cursor=pointer]:
                    - /url: https://www.razer.com/education
                - listitem [ref=e340]:
                  - link "Only at Razer" [ref=e341] [cursor=pointer]:
                    - /url: https://www.razer.com/only-at-razer
                - listitem [ref=e342]:
                  - link "Razer Silver" [ref=e343] [cursor=pointer]:
                    - /url: https://www.razer.com/store/rewards
                - listitem [ref=e344]:
                  - link "Affiliate" [ref=e345] [cursor=pointer]:
                    - /url: https://www.razer.com/affiliate
                - listitem [ref=e346]:
                  - link "Newsletter" [ref=e347] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter
            - generic [ref=e349]:
              - heading "Explore" [level=2] [ref=e351]
              - list [ref=e353]:
                - listitem [ref=e354]:
                  - link "Technology" [ref=e355] [cursor=pointer]:
                    - /url: https://www.razer.com/technology
                - listitem [ref=e356]:
                  - link "Chroma RGB" [ref=e357] [cursor=pointer]:
                    - /url: https://www.razer.com/chroma
                - listitem [ref=e358]:
                  - link "Concepts" [ref=e359] [cursor=pointer]:
                    - /url: https://www.razer.com/concepts
                - listitem [ref=e360]:
                  - link "Esports" [ref=e361] [cursor=pointer]:
                    - /url: https://www.razer.com/esports
                - listitem [ref=e362]:
                  - link "Collabs" [ref=e363] [cursor=pointer]:
                    - /url: https://www.razer.com/lifestyle/collabs
            - generic [ref=e365]:
              - heading "Support" [level=2] [ref=e367]
              - list [ref=e369]:
                - listitem [ref=e370]:
                  - link "Get Help" [ref=e371] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/?c=us
                - listitem [ref=e372]:
                  - link "Registration & Warranty" [ref=e373] [cursor=pointer]:
                    - /url: https://www.razer.com/product-registration
                - listitem [ref=e374]:
                  - link "RazerStore Support" [ref=e375] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstore-support
                - listitem [ref=e376]:
                  - link "RazerCare" [ref=e377] [cursor=pointer]:
                    - /url: https://www.razer.com/razercare
                - listitem [ref=e378]:
                  - link "Manage Razer ID" [ref=e379] [cursor=pointer]:
                    - /url: https://razerid.razer.com
                - listitem [ref=e380]:
                  - link "Support Videos" [ref=e381] [cursor=pointer]:
                    - /url: https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos
                - listitem [ref=e382]:
                  - link "Recycling Program" [ref=e383] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/app/answers/detail/a_id/5904
                - listitem [ref=e384]:
                  - link "Accessibility Statement" [ref=e385] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/commitment-to-accessibility
            - generic [ref=e387]:
              - heading "Company" [level=2] [ref=e389]
              - list [ref=e391]:
                - listitem [ref=e392]:
                  - link "About Us" [ref=e393] [cursor=pointer]:
                    - /url: https://www.razer.com/about-razer
                - listitem [ref=e394]:
                  - link "Careers" [ref=e395] [cursor=pointer]:
                    - /url: https://careers.razer.com
                - listitem [ref=e396]:
                  - link "Newsroom" [ref=e397] [cursor=pointer]:
                    - /url: https://www.razer.com/newsroom
                - listitem [ref=e398]:
                  - link "zVentures" [ref=e399] [cursor=pointer]:
                    - /url: https://www.zvntrs.com
                - listitem [ref=e400]:
                  - link "Contact Us" [ref=e401] [cursor=pointer]:
                    - /url: https://www.razer.com/contact-us
                - listitem [ref=e402]:
                  - link "AI Gaming Newsletter" [ref=e403] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter/ai
            - generic [ref=e405]:
              - heading "Follow Us" [level=2] [ref=e407]
              - list [ref=e409]:
                - listitem [ref=e410]:
                  - link "Visit Razer’s Facebook Page" [ref=e411] [cursor=pointer]:
                    - /url: https://www.facebook.com/razer
                    - figure [ref=e412]
                - listitem [ref=e413]:
                  - link "Visit Razer’s Instagram Page" [ref=e414] [cursor=pointer]:
                    - /url: https://www.instagram.com/razer
                    - figure [ref=e415]
                - listitem [ref=e416]:
                  - link "Visit Razer’s Threads Page" [ref=e417] [cursor=pointer]:
                    - /url: https://www.threads.net/@razer
                    - figure [ref=e418]
                - listitem [ref=e419]:
                  - link "Visit Razer’s X Page" [ref=e420] [cursor=pointer]:
                    - /url: https://www.twitter.com/Razer
                    - figure [ref=e421]
                - listitem [ref=e422]:
                  - link "Visit Razer’s YouTube Page" [ref=e423] [cursor=pointer]:
                    - /url: https://www.youtube.com/razer
                    - figure [ref=e424]
                - listitem [ref=e425]:
                  - link "Visit Razer’s TikTok Page" [ref=e426] [cursor=pointer]:
                    - /url: https://www.tiktok.com/@razer
                    - figure [ref=e427]
                - listitem [ref=e428]:
                  - link "Visit Razer’s Twitch Page" [ref=e429] [cursor=pointer]:
                    - /url: https://www.twitch.tv/razer
                    - figure [ref=e430]
                - listitem [ref=e431]:
                  - link "Visit Razer’s Discord Page" [ref=e432] [cursor=pointer]:
                    - /url: https://discord.com/invite/razer
                    - figure [ref=e433]
            - generic [ref=e437]: FOR GAMERS. BY GAMERS.™
          - generic [ref=e441]:
            - generic [ref=e442]:
              - generic [ref=e444]: Copyright © 2026 Razer Inc. All rights reserved.
              - list [ref=e446]:
                - listitem [ref=e447]:
                  - link "Site Map" [ref=e448] [cursor=pointer]:
                    - /url: https://www.razer.com/sitemap
                - listitem [ref=e449]:
                  - text: "|"
                  - link "Legal Terms" [ref=e450] [cursor=pointer]:
                    - /url: https://www.razer.com/legal
                - listitem [ref=e451]:
                  - text: "|"
                  - link "Privacy Policy" [ref=e452] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/customer-privacy-policy
                - listitem [ref=e453]:
                  - text: "|"
                  - button "Cookie Settings" [ref=e454] [cursor=pointer]
            - generic [ref=e456]:
              - text: United States |
              - link "Change Location >" [ref=e457] [cursor=pointer]:
                - /url: /choose-location
    - text: 
  - textbox [ref=e467]
```

# Test source

```ts
  209 | 
  210 | //     await Promise.race([
  211 | //       emptyMsg.waitFor({ timeout: 10000 }).catch(() => {}),
  212 | //       product.waitFor({ state: "detached", timeout: 10000 }).catch(() => {}),
  213 | //     ]);
  214 | //     const isEmptyVisible = await emptyMsg.isVisible().catch(() => false);
  215 | //     const isProductGone = !(await product.isVisible().catch(() => true));
  216 | 
  217 | //     expect(isEmptyVisible || isProductGone).toBeFalsy();
  218 | //   });
  219 | 
  220 | //   test("CT_08 - Empty Cart Validation", async ({ page }) => {
  221 | //     await page.goto("https://www.razer.com/store");
  222 | 
  223 | //     await page.getByRole("button", { name: "Accept All" }).click();
  224 | 
  225 | //     await page.getByRole("button", { name: "items in cart" }).click();
  226 | //     await page.getByRole("link", { name: /Cart/i }).click();
  227 | 
  228 | //     await page.waitForURL(/cart/, { timeout: 10000 });
  229 | 
  230 | //     await expect(
  231 | //       page.getByRole("heading", { name: /your cart is empty/i }),
  232 | //     ).toBeVisible();
  233 | //   });
  234 | 
  235 | //   test("CT_09 - Subtotal Validation", async ({ page }) => {
  236 | //     await page.goto("https://www.razer.com/store");
  237 | //     await page.getByRole("button", { name: "Accept All" }).click();
  238 | //     await page
  239 | //       .getByRole("group", { name: "slide 1 of 16" })
  240 | //       .getByLabel("BUY - New Razer Blade 18, For US$")
  241 | //       .click();
  242 | //     await page
  243 | //       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  244 | //       .click();
  245 | //     await page.getByRole("button", { name: "items in cart" }).click();
  246 | //     await page.getByRole("link", { name: /Cart/i }).click();
  247 | //     await page.waitForURL(/cart/, { timeout: 10000 });
  248 | //     await expect(page.getByText(/Subtotal/i)).toBeVisible();
  249 | //   });
  250 | 
  251 | //   test("CT_10 - Cart Persistence (refresh)", async ({ page }) => {
  252 | //     await page.goto("https://www.razer.com/store");
  253 | //     await page.getByRole("button", { name: "Accept All" }).click();
  254 | //     await page
  255 | //       .getByRole("group", { name: "slide 1 of 16" })
  256 | //       .getByLabel("BUY - New Razer Blade 18, For US$")
  257 | //       .click();
  258 | //     await page
  259 | //       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  260 | //       .click();
  261 | //     await page.getByRole("button", { name: "Show details" }).click();
  262 | //     await page.goto("https://www.razer.com/cart");
  263 | //     await page.getByRole("button", { name: "Show details" }).click();
  264 | //   });
  265 | 
  266 | //   test("CT_11 - Increase quantity works up to limit", async ({ page }) => {
  267 | //     await page.goto("https://www.razer.com/store");
  268 | 
  269 | //     await page.getByRole("button", { name: "Accept All" }).click();
  270 | 
  271 | //     // add product
  272 | //     await page
  273 | //       .getByRole("group", { name: "slide 1 of 16" })
  274 | //       .getByLabel("BUY - New Razer Blade 18, For US$")
  275 | //       .click();
  276 | 
  277 | //     await page
  278 | //       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  279 | //       .click();
  280 | 
  281 | //     // increase quantity once (your current approach)
  282 | //     const increaseBtn = page.getByRole("button", {
  283 | //       name: "Increase quantity of item",
  284 | //     });
  285 | 
  286 | //     await increaseBtn.click();
  287 | 
  288 | //     // optional safe check (NOT visibility-based)
  289 | //     const qty = page.locator('input[type="number"]').first();
  290 | 
  291 | //     // if input exists, validate it increased from 1 → 2
  292 | //     if (await qty.count()) {
  293 | //       const value = await qty.inputValue();
  294 | //       expect(Number(value)).toBeGreaterThanOrEqual(2);
  295 | //     }
  296 | //   });
  297 | // });
  298 | 
  299 | 
  300 | 
  301 | test("CT_01 - Add Product to cart", async ({ page }) => {
  302 |   await page.goto("https://www.razer.com/store");
  303 |   await page.getByRole("button", { name: "Accept All" }).waitFor({ state: "visible", timeout: 10000 });
  304 |   await page.getByRole("button", { name: "Accept All" }).click();
  305 |   await page.getByRole("group", { name: "slide 1 of 16" }).getByLabel("BUY - New Razer Blade 18, For US$").waitFor({ state: "visible", timeout: 10000 });
  306 |   await page.getByRole("group", { name: "slide 1 of 16" }).getByLabel("BUY - New Razer Blade 18, For US$").click();
  307 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 18" }).waitFor({ state: "visible", timeout: 10000 });
  308 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 18" }).click();
> 309 |   await page.waitForURL(/cart/, { timeout: 10000 });
      |              ^ TimeoutError: page.waitForURL: Timeout 10000ms exceeded.
  310 | });
  311 | 
  312 | test("CT_02 - Verifying cart items updated correctly", async ({ page }) => {
  313 |   await page.goto("https://www.razer.com/store");
  314 | 
  315 |   await page.getByRole("button", { name: "Accept All" }).waitFor({ state: "visible", timeout: 10000 });
  316 |   await page.getByRole("button", { name: "Accept All" }).click();
  317 | 
  318 |   await page.getByRole("group", { name: "slide 1 of 16" }).getByLabel("BUY - New Razer Blade 18, For US$").waitFor({ state: "visible", timeout: 10000 });
  319 |   await page.getByRole("group", { name: "slide 1 of 16" }).getByLabel("BUY - New Razer Blade 18, For US$").click();
  320 | 
  321 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 18" }).waitFor({ state: "visible", timeout: 10000 });
  322 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 18" }).click();
  323 | 
  324 |   await page.waitForURL(/cart/, { timeout: 10000 });
  325 |   await expect(page.getByRole("heading", { name: /Your cart total is US\$/i })).toBeVisible({ timeout: 10000 });
  326 | });
```