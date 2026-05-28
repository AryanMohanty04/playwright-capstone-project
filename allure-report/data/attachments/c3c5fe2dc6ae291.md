# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_management\cart_management.spec.js >> Cart Management Module >> CT_06 - Decrease Quantity Button Works
- Location: tests\cart_management\cart_management.spec.js:145:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Increase quantity of item' }) to be visible

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
          - status [ref=e64]:
            - generic [ref=e65]: Loading...
          - generic [ref=e70]:
            - generic [ref=e71]:
              - generic [ref=e72]:
                - generic [ref=e73]:
                  - link "Join Razer Silver" [ref=e74] [cursor=pointer]:
                    - /url: "#"
                  - generic [ref=e75]:
                    - text: to earn up to
                    - generic [ref=e76]: 200,000 for this purchase.
                - button "Discover a whole new world of rewards" [ref=e78] [cursor=pointer]
              - group "carbon offset" [ref=e82]:
                - img "Carbon Offset Program" [ref=e84]
                - generic [ref=e85]:
                  - heading "Add US$7.04 to offset your carbon footprint" [level=2] [ref=e86]
                  - paragraph [ref=e87]:
                    - text: Powered by Restorify.
                    - button "Learn more" [ref=e88] [cursor=pointer]
                - button "Add" [ref=e90] [cursor=pointer]
              - generic [ref=e92]:
                - button "Have a promo code?" [ref=e97] [cursor=pointer]:
                  - generic [ref=e99]: Have a promo code?
                - generic [ref=e102]: Actual sales tax will be calculated later upon entry of your billing/shipping address.
              - list [ref=e103]:
                - listitem [ref=e104]:
                  - generic [ref=e106]: Subtotal
                  - generic [ref=e107]: US$3,999.99
                  - generic [ref=e108]: Excludes local taxes
                - listitem [ref=e109]:
                  - generic [ref=e111]: Shipping
                  - generic [ref=e113]: Calculated after address entry
                - listitem
                - listitem [ref=e114]:
                  - generic [ref=e115]: Your Total
                  - generic [ref=e116]: US$3,999.99
            - generic [ref=e118]:
              - paragraph [ref=e122]:
                - text: Starting at $167/mo or 0% APR with Affirm  .
                - link "Learn more - Learn more about Affirm Financing (opens in modal)" [ref=e123] [cursor=pointer]:
                  - /url: javascript:void(0)
                  - text: Learn more
              - link "checkout" [ref=e125] [cursor=pointer]
          - region "product recommendation carousel" [ref=e129]:
            - generic [ref=e130]: This is a carousel. Use Next and Previous buttons to navigate, or jump to a slide using the slide dots.
            - heading "FREQUENTLY BOUGHT TOGETHER" [level=2] [ref=e131]
            - generic [ref=e132]:
              - group "Product 1 of 4" [ref=e133]:
                - generic [ref=e135]:
                  - generic [ref=e136]:
                    - heading "Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5090 - Black" [level=3] [ref=e137]
                    - generic [ref=e138]:
                      - generic [ref=e142]:
                        - generic [ref=e143]: "Product price:"
                        - text: US$6,999.99
                      - link "View details" [ref=e145] [cursor=pointer]:
                        - /url: /gaming-laptops/razer-blade-18/RZ09-0582EER9-R3U1
                  - button "Add to Cart - Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5090 - Black. For US$6,999.99" [disabled] [ref=e147]: Add
              - group "Product 2 of 4" [ref=e148]:
                - generic [ref=e150]:
                  - generic [ref=e151]:
                    - heading "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black" [level=3] [ref=e152]
                    - generic [ref=e153]:
                      - generic [ref=e157]:
                        - generic [ref=e158]: "Product price:"
                        - text: US$5,599.99
                      - link "View details" [ref=e160] [cursor=pointer]:
                        - /url: /gaming-laptops/razer-blade-16/RZ09-05819EN9-R3U1
                  - button "Add to Cart - Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black. For US$5,599.99" [disabled] [ref=e162]: Add
              - group "Product 3 of 4" [ref=e163]:
                - generic [ref=e165]:
                  - generic [ref=e166]:
                    - heading "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black" [level=3] [ref=e167]
                    - generic [ref=e168]:
                      - generic [ref=e172]:
                        - generic [ref=e173]: "Product price:"
                        - text: US$4,899.99
                      - link "View details" [ref=e175] [cursor=pointer]:
                        - /url: /gaming-laptops/razer-blade-16/RZ09-05819EN4-R3U1
                  - button "Add to Cart - Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black. For US$4,899.99" [disabled] [ref=e177]: Add
              - group "Product 4 of 4" [ref=e178]:
                - generic [ref=e180]:
                  - generic [ref=e181]:
                    - heading "Razer Kraken Kitty V2 - Gengar Edition" [level=3] [ref=e182]
                    - generic [ref=e183]:
                      - generic [ref=e187]:
                        - generic [ref=e188]: "Product price:"
                        - text: US$139.99
                      - link "View details" [ref=e190] [cursor=pointer]:
                        - /url: /gaming-headsets/razer-kraken-kitty-v2/RZ04-04730300-R3M1
                  - button "Add to Cart - Razer Kraken Kitty V2 - Gengar Edition. For US$139.99" [disabled] [ref=e192]: Add
            - generic [ref=e193]:
              - button "Previous" [disabled]
              - button "Next" [ref=e194] [cursor=pointer]
      - contentinfo [ref=e195]:
        - generic [ref=e200]:
          - generic [ref=e201]:
            - generic [ref=e203]:
              - heading "Shop" [level=2] [ref=e205]
              - list [ref=e207]:
                - listitem [ref=e208]:
                  - link "RazerStores" [ref=e209] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstores
                - listitem [ref=e210]:
                  - link "RazerCafe" [ref=e211] [cursor=pointer]:
                    - /url: https://www.razer.com/razercafe
                - listitem [ref=e212]:
                  - link "Store Locator" [ref=e213] [cursor=pointer]:
                    - /url: https://www.razer.com/store-finder
                - listitem [ref=e214]:
                  - link "Purchase Programs" [ref=e215] [cursor=pointer]:
                    - /url: https://www.razer.com/store/programs
                - listitem [ref=e216]:
                  - link "Bulk Order Program" [ref=e217] [cursor=pointer]:
                    - /url: https://www.razer.com/store/bulk-purchase
                - listitem [ref=e218]:
                  - link "Education" [ref=e219] [cursor=pointer]:
                    - /url: https://www.razer.com/education
                - listitem [ref=e220]:
                  - link "Only at Razer" [ref=e221] [cursor=pointer]:
                    - /url: https://www.razer.com/only-at-razer
                - listitem [ref=e222]:
                  - link "Razer Silver" [ref=e223] [cursor=pointer]:
                    - /url: https://www.razer.com/store/rewards
                - listitem [ref=e224]:
                  - link "Affiliate" [ref=e225] [cursor=pointer]:
                    - /url: https://www.razer.com/affiliate
                - listitem [ref=e226]:
                  - link "Newsletter" [ref=e227] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter
            - generic [ref=e229]:
              - heading "Explore" [level=2] [ref=e231]
              - list [ref=e233]:
                - listitem [ref=e234]:
                  - link "Technology" [ref=e235] [cursor=pointer]:
                    - /url: https://www.razer.com/technology
                - listitem [ref=e236]:
                  - link "Chroma RGB" [ref=e237] [cursor=pointer]:
                    - /url: https://www.razer.com/chroma
                - listitem [ref=e238]:
                  - link "Concepts" [ref=e239] [cursor=pointer]:
                    - /url: https://www.razer.com/concepts
                - listitem [ref=e240]:
                  - link "Esports" [ref=e241] [cursor=pointer]:
                    - /url: https://www.razer.com/esports
                - listitem [ref=e242]:
                  - link "Collabs" [ref=e243] [cursor=pointer]:
                    - /url: https://www.razer.com/lifestyle/collabs
            - generic [ref=e245]:
              - heading "Support" [level=2] [ref=e247]
              - list [ref=e249]:
                - listitem [ref=e250]:
                  - link "Get Help" [ref=e251] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/?c=us
                - listitem [ref=e252]:
                  - link "Registration & Warranty" [ref=e253] [cursor=pointer]:
                    - /url: https://www.razer.com/product-registration
                - listitem [ref=e254]:
                  - link "RazerStore Support" [ref=e255] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstore-support
                - listitem [ref=e256]:
                  - link "RazerCare" [ref=e257] [cursor=pointer]:
                    - /url: https://www.razer.com/razercare
                - listitem [ref=e258]:
                  - link "Manage Razer ID" [ref=e259] [cursor=pointer]:
                    - /url: https://razerid.razer.com
                - listitem [ref=e260]:
                  - link "Support Videos" [ref=e261] [cursor=pointer]:
                    - /url: https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos
                - listitem [ref=e262]:
                  - link "Recycling Program" [ref=e263] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/app/answers/detail/a_id/5904
                - listitem [ref=e264]:
                  - link "Accessibility Statement" [ref=e265] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/commitment-to-accessibility
            - generic [ref=e267]:
              - heading "Company" [level=2] [ref=e269]
              - list [ref=e271]:
                - listitem [ref=e272]:
                  - link "About Us" [ref=e273] [cursor=pointer]:
                    - /url: https://www.razer.com/about-razer
                - listitem [ref=e274]:
                  - link "Careers" [ref=e275] [cursor=pointer]:
                    - /url: https://careers.razer.com
                - listitem [ref=e276]:
                  - link "Newsroom" [ref=e277] [cursor=pointer]:
                    - /url: https://www.razer.com/newsroom
                - listitem [ref=e278]:
                  - link "zVentures" [ref=e279] [cursor=pointer]:
                    - /url: https://www.zvntrs.com
                - listitem [ref=e280]:
                  - link "Contact Us" [ref=e281] [cursor=pointer]:
                    - /url: https://www.razer.com/contact-us
                - listitem [ref=e282]:
                  - link "AI Gaming Newsletter" [ref=e283] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter/ai
            - generic [ref=e285]:
              - heading "Follow Us" [level=2] [ref=e287]
              - list [ref=e289]:
                - listitem [ref=e290]:
                  - link "Visit Razer’s Facebook Page" [ref=e291] [cursor=pointer]:
                    - /url: https://www.facebook.com/razer
                    - figure [ref=e292]
                - listitem [ref=e293]:
                  - link "Visit Razer’s Instagram Page" [ref=e294] [cursor=pointer]:
                    - /url: https://www.instagram.com/razer
                    - figure [ref=e295]
                - listitem [ref=e296]:
                  - link "Visit Razer’s Threads Page" [ref=e297] [cursor=pointer]:
                    - /url: https://www.threads.net/@razer
                    - figure [ref=e298]
                - listitem [ref=e299]:
                  - link "Visit Razer’s X Page" [ref=e300] [cursor=pointer]:
                    - /url: https://www.twitter.com/Razer
                    - figure [ref=e301]
                - listitem [ref=e302]:
                  - link "Visit Razer’s YouTube Page" [ref=e303] [cursor=pointer]:
                    - /url: https://www.youtube.com/razer
                    - figure [ref=e304]
                - listitem [ref=e305]:
                  - link "Visit Razer’s TikTok Page" [ref=e306] [cursor=pointer]:
                    - /url: https://www.tiktok.com/@razer
                    - figure [ref=e307]
                - listitem [ref=e308]:
                  - link "Visit Razer’s Twitch Page" [ref=e309] [cursor=pointer]:
                    - /url: https://www.twitch.tv/razer
                    - figure [ref=e310]
                - listitem [ref=e311]:
                  - link "Visit Razer’s Discord Page" [ref=e312] [cursor=pointer]:
                    - /url: https://discord.com/invite/razer
                    - figure [ref=e313]
            - generic [ref=e317]: FOR GAMERS. BY GAMERS.™
          - generic [ref=e321]:
            - generic [ref=e322]:
              - generic [ref=e324]: Copyright © 2026 Razer Inc. All rights reserved.
              - list [ref=e326]:
                - listitem [ref=e327]:
                  - link "Site Map" [ref=e328] [cursor=pointer]:
                    - /url: https://www.razer.com/sitemap
                - listitem [ref=e329]:
                  - text: "|"
                  - link "Legal Terms" [ref=e330] [cursor=pointer]:
                    - /url: https://www.razer.com/legal
                - listitem [ref=e331]:
                  - text: "|"
                  - link "Privacy Policy" [ref=e332] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/customer-privacy-policy
                - listitem [ref=e333]:
                  - text: "|"
                  - button "Cookie Settings" [ref=e334] [cursor=pointer]
            - generic [ref=e336]:
              - text: United States |
              - link "Change Location >" [ref=e337] [cursor=pointer]:
                - /url: /choose-location
    - text: 
  - textbox [ref=e346]
  - textbox [ref=e347]
```

# Test source

```ts
  72  |     await page
  73  |       .getByRole("link", { name: /Cart/i })
  74  |       .waitFor({ state: "visible", timeout: 10000 });
  75  |     await page.getByRole("link", { name: /Cart/i }).click();
  76  | 
  77  |     await expect(page).toHaveURL(/cart/, { timeout: 10000 });
  78  |   });
  79  | 
  80  |   test("CT_04 - Verify Product Details in Cart", async ({ page }) => {
  81  |     await page.goto("https://www.razer.com/store");
  82  | 
  83  |     await page
  84  |       .getByRole("button", { name: "Accept All" })
  85  |       .waitFor({ state: "visible", timeout: 10000 });
  86  |     await page.getByRole("button", { name: "Accept All" }).click();
  87  | 
  88  |     await page
  89  |       .getByRole("group", { name: "slide 1 of 16" })
  90  |       .getByLabel("BUY - New Razer Blade 18, For US$")
  91  |       .waitFor({ state: "visible", timeout: 10000 });
  92  |     await page
  93  |       .getByRole("group", { name: "slide 1 of 16" })
  94  |       .getByLabel("BUY - New Razer Blade 18, For US$")
  95  |       .click();
  96  | 
  97  |     await page
  98  |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  99  |       .waitFor({ state: "visible", timeout: 10000 });
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
  146 |     await page.goto("https://www.razer.com/store");
  147 | 
  148 |     await page
  149 |       .getByRole("button", { name: "Accept All" })
  150 |       .waitFor({ state: "visible", timeout: 10000 });
  151 |     await page.getByRole("button", { name: "Accept All" }).click();
  152 | 
  153 |     await page
  154 |       .getByRole("group", { name: "slide 1 of 16" })
  155 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  156 |       .waitFor({ state: "visible", timeout: 10000 });
  157 |     await page
  158 |       .getByRole("group", { name: "slide 1 of 16" })
  159 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  160 |       .click();
  161 | 
  162 |     await page
  163 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  164 |       .waitFor({ state: "visible", timeout: 10000 });
  165 |     await page
  166 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  167 |       .click();
  168 | 
  169 |     const increaseBtn = page.getByRole("button", {
  170 |       name: "Increase quantity of item",
  171 |     });
> 172 |     await increaseBtn.waitFor({ state: "visible", timeout: 10000 });
      |                       ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  173 |     await increaseBtn.click();
  174 | 
  175 |     const decreaseBtn = page.getByRole("button", {
  176 |       name: "Reduce quantity of item",
  177 |     });
  178 |     await decreaseBtn.waitFor({ state: "visible", timeout: 10000 });
  179 | await decreaseBtn.click({ force: true });
  180 |   });
  181 | 
  182 |   test("CT_07 - Remove Product Button Works", async ({ page }) => {
  183 |     await page.goto("https://www.razer.com/store");
  184 | 
  185 |     await page
  186 |       .getByRole("button", { name: "Accept All" })
  187 |       .waitFor({ state: "visible", timeout: 10000 });
  188 |     await page.getByRole("button", { name: "Accept All" }).click();
  189 | 
  190 |     await page
  191 |       .getByRole("group", { name: "slide 1 of 16" })
  192 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  193 |       .waitFor({ state: "visible", timeout: 10000 });
  194 |     await page
  195 |       .getByRole("group", { name: "slide 1 of 16" })
  196 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  197 |       .click();
  198 | 
  199 |     await page
  200 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  201 |       .waitFor({ state: "visible", timeout: 10000 });
  202 |     await page
  203 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  204 |       .click();
  205 | 
  206 |     const removeBtn = page.getByRole("button", {
  207 |       name: "Remove item from cart",
  208 |     });
  209 |     await removeBtn.waitFor({ state: "visible", timeout: 10000 });
  210 |     await removeBtn.click();
  211 |   });
  212 | 
  213 |   test("CT_08 - Empty Cart Validation", async ({ page }) => {
  214 |     await page.goto("https://www.razer.com/store");
  215 | 
  216 |     await page
  217 |       .getByRole("button", { name: "Accept All" })
  218 |       .waitFor({ state: "visible", timeout: 10000 });
  219 |     await page.getByRole("button", { name: "Accept All" }).click();
  220 | 
  221 |     await page
  222 |       .getByRole("button", { name: "items in cart" })
  223 |       .waitFor({ state: "visible", timeout: 10000 });
  224 |     await page.getByRole("button", { name: "items in cart" }).click();
  225 | 
  226 |     await page
  227 |       .getByRole("link", { name: /Cart/i })
  228 |       .waitFor({ state: "visible", timeout: 10000 });
  229 |     await page.getByRole("link", { name: /Cart/i }).click();
  230 | 
  231 |     await expect(
  232 |       page.getByRole("heading", { name: /Your cart is empty/i }),
  233 |     ).toBeVisible({ timeout: 10000 });
  234 |   });
  235 | 
  236 |  test("CT_09 - Subtotal Validation", async ({ page }) => {
  237 |   await page.goto("https://www.razer.com/store");
  238 | 
  239 |   await page.getByRole("button", { name: "Accept All" }).waitFor({ state: "visible", timeout: 10000 });
  240 |   await page.getByRole("button", { name: "Accept All" }).click();
  241 | 
  242 |   await page.getByRole("group", { name: "slide 1 of 16" }).getByLabel("BUY - New Razer Blade 18, For US$").waitFor({ state: "visible", timeout: 10000 });
  243 |   await page.getByRole("group", { name: "slide 1 of 16" }).getByLabel("BUY - New Razer Blade 18, For US$").click();
  244 | 
  245 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 18" }).waitFor({ state: "visible", timeout: 10000 });
  246 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 18" }).click();
  247 | 
  248 |   await page.getByRole("link", { name: "Store", exact: true }).waitFor({ state: "visible", timeout: 10000 });
  249 |   await page.getByRole("link", { name: "Store", exact: true }).click();
  250 | 
  251 |   await page.getByRole("button", { name: "Close" }).waitFor({ state: "visible", timeout: 10000 });
  252 |   await page.getByRole("button", { name: "Close" }).click();
  253 | 
  254 |   await page.getByRole("group", { name: "slide 1 of 16" }).getByLabel("BUY - New Razer Blade 18, For US$").waitFor({ state: "visible", timeout: 10000 });
  255 |   await page.getByRole("group", { name: "slide 1 of 16" }).getByLabel("BUY - New Razer Blade 18, For US$").click();
  256 | 
  257 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 18" }).waitFor({ state: "visible", timeout: 10000 });
  258 |   await page.getByRole("button", { name: "Add to Cart - Razer Blade 18" }).click();
  259 | });
  260 | 
  261 |   test("CT_10 - Cart Persistence (refresh)", async ({ page }) => {
  262 |     await page.goto("https://www.razer.com/store");
  263 | 
  264 |     await page
  265 |       .getByRole("button", { name: "Accept All" })
  266 |       .waitFor({ state: "visible", timeout: 10000 });
  267 |     await page.getByRole("button", { name: "Accept All" }).click();
  268 | 
  269 |     await page
  270 |       .getByRole("group", { name: "slide 1 of 16" })
  271 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  272 |       .waitFor({ state: "visible", timeout: 10000 });
```