# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_management\cart_management.spec.js >> Homepage & Navigation Module >> CT_09 - Subtotal Validation
- Location: tests\cart_management\cart_management.spec.js:141:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/3,999/)
Expected: visible
Error: strict mode violation: getByText(/3,999/) resolved to 2 elements:
    1) <div class="value col-6 text-right"> US$3,999.99 </div> aka getByText('US$').nth(1)
    2) <div class="total-price col-7 text-right total-bolder">…</div> aka getByText('US$').nth(2)

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/3,999/)

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
          - generic [ref=e66]:
            - generic [ref=e67]:
              - generic [ref=e68]:
                - generic [ref=e69]:
                  - link "Join Razer Silver" [ref=e70] [cursor=pointer]:
                    - /url: "#"
                  - generic [ref=e71]:
                    - text: to earn up to
                    - generic [ref=e72]: 200,000 for this purchase.
                - button "Discover a whole new world of rewards" [ref=e74] [cursor=pointer]
              - group "carbon offset" [ref=e78]:
                - img "Carbon Offset Program" [ref=e80]
                - generic [ref=e81]:
                  - heading "Add US$7.04 to offset your carbon footprint" [level=2] [ref=e82]
                  - paragraph [ref=e83]:
                    - text: Powered by Restorify.
                    - button "Learn more" [ref=e84] [cursor=pointer]
                - button "Add" [ref=e86] [cursor=pointer]
              - generic [ref=e88]:
                - button "Have a promo code?" [ref=e93] [cursor=pointer]:
                  - generic [ref=e95]: Have a promo code?
                - generic [ref=e98]: Actual sales tax will be calculated later upon entry of your billing/shipping address.
              - list [ref=e99]:
                - listitem [ref=e100]:
                  - generic [ref=e102]: Subtotal
                  - generic [ref=e103]: US$3,999.99
                  - generic [ref=e104]: Excludes local taxes
                - listitem [ref=e105]:
                  - generic [ref=e107]: Shipping
                  - generic [ref=e109]: Calculated after address entry
                - listitem
                - listitem [ref=e110]:
                  - generic [ref=e111]: Your Total
                  - generic [ref=e112]: US$3,999.99
            - generic [ref=e114]:
              - generic [ref=e115]:
                - generic:
                  - generic:
                    - paragraph
              - link "checkout" [ref=e117] [cursor=pointer]
          - region "product recommendation carousel" [ref=e121]:
            - generic [ref=e122]: This is a carousel. Use Next and Previous buttons to navigate, or jump to a slide using the slide dots.
            - heading "FREQUENTLY BOUGHT TOGETHER" [level=2] [ref=e123]
            - generic [ref=e124]:
              - group "Product 1 of 4" [ref=e125]:
                - generic [ref=e127]:
                  - generic [ref=e128]:
                    - heading "Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5090 - Black" [level=3] [ref=e129]
                    - generic [ref=e130]:
                      - generic [ref=e134]:
                        - generic [ref=e135]: "Product price:"
                        - text: US$5,999.99
                      - link "View details" [ref=e137] [cursor=pointer]:
                        - /url: /gaming-laptops/razer-blade-18/RZ09-0582DER9-R3U1
                  - button "Add to Cart - Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5090 - Black. For US$5,999.99" [ref=e139] [cursor=pointer]: Add
              - group "Product 2 of 4" [ref=e140]:
                - generic [ref=e142]:
                  - generic [ref=e143]:
                    - heading "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black" [level=3] [ref=e144]
                    - generic [ref=e145]:
                      - generic [ref=e149]:
                        - generic [ref=e150]: "Product price:"
                        - text: US$5,599.99
                      - link "View details" [ref=e152] [cursor=pointer]:
                        - /url: /gaming-laptops/razer-blade-16/RZ09-05819EN9-R3U1
                  - button "Add to Cart - Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black. For US$5,599.99" [ref=e154] [cursor=pointer]: Add
              - group "Product 3 of 4" [ref=e155]:
                - generic [ref=e157]:
                  - generic [ref=e158]:
                    - heading "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black" [level=3] [ref=e159]
                    - generic [ref=e160]:
                      - generic [ref=e164]:
                        - generic [ref=e165]: "Product price:"
                        - text: US$4,899.99
                      - link "View details" [ref=e167] [cursor=pointer]:
                        - /url: /gaming-laptops/razer-blade-16/RZ09-05819EN4-R3U1
                  - button "Add to Cart - Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black. For US$4,899.99" [ref=e169] [cursor=pointer]: Add
              - group "Product 4 of 4" [ref=e170]:
                - generic [ref=e172]:
                  - generic [ref=e173]:
                    - heading "Razer Viper V4 Pro - Black" [level=3] [ref=e174]
                    - generic [ref=e175]:
                      - generic [ref=e179]:
                        - generic [ref=e180]: "Product price:"
                        - text: US$159.99
                      - link "View details" [ref=e182] [cursor=pointer]:
                        - /url: /gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1
                  - button "Add to Cart - Razer Viper V4 Pro - Black. For US$159.99" [ref=e184] [cursor=pointer]: Add
            - generic [ref=e185]:
              - button "Previous" [disabled]
              - button "Next" [ref=e186] [cursor=pointer]
      - contentinfo [ref=e187]:
        - generic [ref=e192]:
          - generic [ref=e193]:
            - generic [ref=e195]:
              - heading "Shop" [level=2] [ref=e197]
              - list [ref=e199]:
                - listitem [ref=e200]:
                  - link "RazerStores" [ref=e201] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstores
                - listitem [ref=e202]:
                  - link "RazerCafe" [ref=e203] [cursor=pointer]:
                    - /url: https://www.razer.com/razercafe
                - listitem [ref=e204]:
                  - link "Store Locator" [ref=e205] [cursor=pointer]:
                    - /url: https://www.razer.com/store-finder
                - listitem [ref=e206]:
                  - link "Purchase Programs" [ref=e207] [cursor=pointer]:
                    - /url: https://www.razer.com/store/programs
                - listitem [ref=e208]:
                  - link "Bulk Order Program" [ref=e209] [cursor=pointer]:
                    - /url: https://www.razer.com/store/bulk-purchase
                - listitem [ref=e210]:
                  - link "Education" [ref=e211] [cursor=pointer]:
                    - /url: https://www.razer.com/education
                - listitem [ref=e212]:
                  - link "Only at Razer" [ref=e213] [cursor=pointer]:
                    - /url: https://www.razer.com/only-at-razer
                - listitem [ref=e214]:
                  - link "Razer Silver" [ref=e215] [cursor=pointer]:
                    - /url: https://www.razer.com/store/rewards
                - listitem [ref=e216]:
                  - link "Affiliate" [ref=e217] [cursor=pointer]:
                    - /url: https://www.razer.com/affiliate
                - listitem [ref=e218]:
                  - link "Newsletter" [ref=e219] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter
            - generic [ref=e221]:
              - heading "Explore" [level=2] [ref=e223]
              - list [ref=e225]:
                - listitem [ref=e226]:
                  - link "Technology" [ref=e227] [cursor=pointer]:
                    - /url: https://www.razer.com/technology
                - listitem [ref=e228]:
                  - link "Chroma RGB" [ref=e229] [cursor=pointer]:
                    - /url: https://www.razer.com/chroma
                - listitem [ref=e230]:
                  - link "Concepts" [ref=e231] [cursor=pointer]:
                    - /url: https://www.razer.com/concepts
                - listitem [ref=e232]:
                  - link "Esports" [ref=e233] [cursor=pointer]:
                    - /url: https://www.razer.com/esports
                - listitem [ref=e234]:
                  - link "Collabs" [ref=e235] [cursor=pointer]:
                    - /url: https://www.razer.com/lifestyle/collabs
            - generic [ref=e237]:
              - heading "Support" [level=2] [ref=e239]
              - list [ref=e241]:
                - listitem [ref=e242]:
                  - link "Get Help" [ref=e243] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/?c=us
                - listitem [ref=e244]:
                  - link "Registration & Warranty" [ref=e245] [cursor=pointer]:
                    - /url: https://www.razer.com/product-registration
                - listitem [ref=e246]:
                  - link "RazerStore Support" [ref=e247] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstore-support
                - listitem [ref=e248]:
                  - link "RazerCare" [ref=e249] [cursor=pointer]:
                    - /url: https://www.razer.com/razercare
                - listitem [ref=e250]:
                  - link "Manage Razer ID" [ref=e251] [cursor=pointer]:
                    - /url: https://razerid.razer.com
                - listitem [ref=e252]:
                  - link "Support Videos" [ref=e253] [cursor=pointer]:
                    - /url: https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos
                - listitem [ref=e254]:
                  - link "Recycling Program" [ref=e255] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/app/answers/detail/a_id/5904
                - listitem [ref=e256]:
                  - link "Accessibility Statement" [ref=e257] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/commitment-to-accessibility
            - generic [ref=e259]:
              - heading "Company" [level=2] [ref=e261]
              - list [ref=e263]:
                - listitem [ref=e264]:
                  - link "About Us" [ref=e265] [cursor=pointer]:
                    - /url: https://www.razer.com/about-razer
                - listitem [ref=e266]:
                  - link "Careers" [ref=e267] [cursor=pointer]:
                    - /url: https://careers.razer.com
                - listitem [ref=e268]:
                  - link "Newsroom" [ref=e269] [cursor=pointer]:
                    - /url: https://www.razer.com/newsroom
                - listitem [ref=e270]:
                  - link "zVentures" [ref=e271] [cursor=pointer]:
                    - /url: https://www.zvntrs.com
                - listitem [ref=e272]:
                  - link "Contact Us" [ref=e273] [cursor=pointer]:
                    - /url: https://www.razer.com/contact-us
                - listitem [ref=e274]:
                  - link "AI Gaming Newsletter" [ref=e275] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter/ai
            - generic [ref=e277]:
              - heading "Follow Us" [level=2] [ref=e279]
              - list [ref=e281]:
                - listitem [ref=e282]:
                  - link "Visit Razer’s Facebook Page" [ref=e283] [cursor=pointer]:
                    - /url: https://www.facebook.com/razer
                    - figure [ref=e284]
                - listitem [ref=e285]:
                  - link "Visit Razer’s Instagram Page" [ref=e286] [cursor=pointer]:
                    - /url: https://www.instagram.com/razer
                    - figure [ref=e287]
                - listitem [ref=e288]:
                  - link "Visit Razer’s Threads Page" [ref=e289] [cursor=pointer]:
                    - /url: https://www.threads.net/@razer
                    - figure [ref=e290]
                - listitem [ref=e291]:
                  - link "Visit Razer’s X Page" [ref=e292] [cursor=pointer]:
                    - /url: https://www.twitter.com/Razer
                    - figure [ref=e293]
                - listitem [ref=e294]:
                  - link "Visit Razer’s YouTube Page" [ref=e295] [cursor=pointer]:
                    - /url: https://www.youtube.com/razer
                    - figure [ref=e296]
                - listitem [ref=e297]:
                  - link "Visit Razer’s TikTok Page" [ref=e298] [cursor=pointer]:
                    - /url: https://www.tiktok.com/@razer
                    - figure [ref=e299]
                - listitem [ref=e300]:
                  - link "Visit Razer’s Twitch Page" [ref=e301] [cursor=pointer]:
                    - /url: https://www.twitch.tv/razer
                    - figure [ref=e302]
                - listitem [ref=e303]:
                  - link "Visit Razer’s Discord Page" [ref=e304] [cursor=pointer]:
                    - /url: https://discord.com/invite/razer
                    - figure [ref=e305]
            - generic [ref=e309]: FOR GAMERS. BY GAMERS.™
          - generic [ref=e313]:
            - generic [ref=e314]:
              - generic [ref=e316]: Copyright © 2026 Razer Inc. All rights reserved.
              - list [ref=e318]:
                - listitem [ref=e319]:
                  - link "Site Map" [ref=e320] [cursor=pointer]:
                    - /url: https://www.razer.com/sitemap
                - listitem [ref=e321]:
                  - text: "|"
                  - link "Legal Terms" [ref=e322] [cursor=pointer]:
                    - /url: https://www.razer.com/legal
                - listitem [ref=e323]:
                  - text: "|"
                  - link "Privacy Policy" [ref=e324] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/customer-privacy-policy
                - listitem [ref=e325]:
                  - text: "|"
                  - button "Cookie Settings" [ref=e326] [cursor=pointer]
            - generic [ref=e328]:
              - text: United States |
              - link "Change Location >" [ref=e329] [cursor=pointer]:
                - /url: /choose-location
    - text: 
  - textbox [ref=e338]
  - textbox [ref=e339]
```

# Test source

```ts
  66  |   //   });
  67  | 
  68  |   test("CT_04 - Increase Quantity Button Works", async ({ page }) => {
  69  |     await page.goto("https://www.razer.com/store");
  70  |     await page.getByRole("button", { name: "Accept All" }).click();
  71  |     await page.getByRole("button", { name: "items in cart" }).click();
  72  |     await page.getByRole("link", { name: "Cart (0 items)" }).click();
  73  |     await page
  74  |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  75  |       .click();
  76  |     await page
  77  |       .getByRole("button", { name: "Increase quantity of item" })
  78  |       .click();
  79  |     await page
  80  |       .getByRole("button", { name: "Increase quantity of item" })
  81  |       .click();
  82  |   });
  83  | 
  84  |   test("CT_05 - Decrease Quantity Button Works", async ({ page }) => {
  85  |     await page.goto("https://www.razer.com/store");
  86  |     await page.getByRole("button", { name: "Accept All" }).click();
  87  |     await page.getByRole("button", { name: "items in cart" }).click();
  88  |     await page.getByRole("link", { name: "Cart (0 items)" }).click();
  89  |     await page
  90  |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  91  |       .click();
  92  |     await page
  93  |       .getByRole("button", { name: "Increase quantity of item" })
  94  |       .click();
  95  |     await page.getByRole("button", { name: "Reduce quantity of item" }).click();
  96  |   });
  97  | 
  98  |   test("CT_06 - Remove Product Button Works", async ({ page }) => {
  99  |     await page.goto("https://www.razer.com/store");
  100 |     await page.getByRole("button", { name: "Accept All" }).click();
  101 |     await page
  102 |       .getByRole("group", { name: "slide 1 of 16" })
  103 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  104 |       .click();
  105 |     await page
  106 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  107 |       .click();
  108 |     await page.getByRole("button", { name: "Remove item from cart" }).click();
  109 |     await expect(
  110 |       page.getByRole("heading", { name: "Your cart is empty" }),
  111 |     ).toBeVisible();
  112 |   });
  113 | 
  114 |   test("CT_07 - Empty Cart Validation", async ({ page }) => {
  115 |     await page.goto("https://www.razer.com/store");
  116 |     await page.getByRole("button", { name: "Accept All" }).click();
  117 |     await page
  118 |       .getByRole("group", { name: "slide 1 of 16" })
  119 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  120 |       .click();
  121 |     await page
  122 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  123 |       .click();
  124 |     await page.getByRole("button", { name: "Remove item from cart" }).click();
  125 |     await expect(
  126 |       page.getByRole("heading", { name: "Your cart is empty" }),
  127 |     ).toBeVisible();
  128 |   });
  129 | 
  130 |   test("CT_08 - Empty Cart Validation", async ({ page }) => {
  131 |     await page.goto("https://www.razer.com/store");
  132 |     await page.getByRole("button", { name: "Accept All" }).click();
  133 |     await page.getByRole("button", { name: "items in cart" }).click();
  134 |     await page.getByRole("link", { name: /Cart/i }).click();
  135 |     await page.waitForURL(/cart/, { timeout: 10000 });
  136 |     await expect(
  137 |       page.getByRole("heading", { name: /your cart is empty/i }),
  138 |     ).toBeVisible();
  139 |   });
  140 | 
  141 |   test("CT_09 - Subtotal Validation", async ({ page }) => {
  142 |     await page.goto("https://www.razer.com/store");
  143 | 
  144 |     await page.getByRole("button", { name: "Accept All" }).click();
  145 | 
  146 |     // add product
  147 |     await page
  148 |       .getByRole("group", { name: "slide 1 of 16" })
  149 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  150 |       .click();
  151 | 
  152 |     await page
  153 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  154 |       .click();
  155 | 
  156 |     // open cart (auto or manual depending on UI)
  157 |     await page.getByRole("button", { name: "items in cart" }).click();
  158 |     await page.getByRole("link", { name: /Cart/i }).click();
  159 | 
  160 |     await page.waitForURL(/cart/, { timeout: 10000 });
  161 | 
  162 |     // 🔥 validate subtotal exists
  163 |     await expect(page.getByText("Subtotal")).toBeVisible();
  164 | 
  165 |     // 🔥 validate price presence (flexible match)
> 166 |     await expect(page.getByText(/3,999/)).toBeVisible();
      |                                           ^ Error: expect(locator).toBeVisible() failed
  167 |   });
  168 | });
  169 | 
```