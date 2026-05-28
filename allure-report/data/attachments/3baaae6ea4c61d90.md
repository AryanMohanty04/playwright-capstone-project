# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_management\cart_management.spec.js >> Homepage & Navigation Module >> CT_06 - Remove Product Button Works
- Location: tests\cart_management\cart_management.spec.js:103:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Remove item from cart' })

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
                    - generic [ref=e195]: 200,000 for this purchase.
                - button "Discover a whole new world of rewards" [ref=e197] [cursor=pointer]
              - group "carbon offset" [ref=e201]:
                - img "Carbon Offset Program" [ref=e203]
                - generic [ref=e204]:
                  - heading "Add US$7.04 to offset your carbon footprint" [level=2] [ref=e205]
                  - paragraph [ref=e206]:
                    - text: Powered by Restorify.
                    - button "Learn more" [ref=e207] [cursor=pointer]
                - button "Add" [ref=e209] [cursor=pointer]
              - generic [ref=e211]:
                - button "Have a promo code?" [ref=e216] [cursor=pointer]:
                  - generic [ref=e218]: Have a promo code?
                - generic [ref=e221]: Actual sales tax will be calculated later upon entry of your billing/shipping address.
              - list [ref=e222]:
                - listitem [ref=e223]:
                  - generic [ref=e225]: Subtotal
                  - generic [ref=e226]: US$3,999.99
                  - generic [ref=e227]: Excludes local taxes
                - listitem [ref=e228]:
                  - generic [ref=e230]: Shipping
                  - generic [ref=e232]: Calculated after address entry
                - listitem
                - listitem [ref=e233]:
                  - generic [ref=e234]: Your Total
                  - generic [ref=e235]: US$3,999.99
            - generic [ref=e237]:
              - paragraph [ref=e241]:
                - text: Starting at $167/mo or 0% APR with Affirm  .
                - link "Learn more - Learn more about Affirm Financing (opens in modal)" [ref=e242] [cursor=pointer]:
                  - /url: javascript:void(0)
                  - text: Learn more
              - link "checkout" [ref=e244] [cursor=pointer]
          - region "product recommendation carousel" [ref=e248]:
            - generic [ref=e249]: This is a carousel. Use Next and Previous buttons to navigate, or jump to a slide using the slide dots.
            - heading "FREQUENTLY BOUGHT TOGETHER" [level=2] [ref=e250]
            - generic [ref=e251]:
              - group "Product 1 of 4" [ref=e252]:
                - generic [ref=e254]:
                  - generic [ref=e255]:
                    - heading "Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5090 - Black" [level=3] [ref=e256]
                    - generic [ref=e257]:
                      - generic [ref=e261]:
                        - generic [ref=e262]: "Product price:"
                        - text: US$5,999.99
                      - link "View details" [ref=e264] [cursor=pointer]:
                        - /url: /gaming-laptops/razer-blade-18/RZ09-0582DER9-R3U1
                  - button "Add to Cart - Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5090 - Black. For US$5,999.99" [ref=e266] [cursor=pointer]: Add
              - group "Product 2 of 4" [ref=e267]:
                - generic [ref=e269]:
                  - generic [ref=e270]:
                    - heading "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black" [level=3] [ref=e271]
                    - generic [ref=e272]:
                      - generic [ref=e276]:
                        - generic [ref=e277]: "Product price:"
                        - text: US$4,899.99
                      - link "View details" [ref=e279] [cursor=pointer]:
                        - /url: /gaming-laptops/razer-blade-16/RZ09-05819EN4-R3U1
                  - button "Add to Cart - Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black. For US$4,899.99" [ref=e281] [cursor=pointer]: Add
              - group "Product 3 of 4" [ref=e282]:
                - generic [ref=e284]:
                  - generic [ref=e285]:
                    - heading "Razer Viper V4 Pro - Black" [level=3] [ref=e286]
                    - generic [ref=e287]:
                      - generic [ref=e291]:
                        - generic [ref=e292]: "Product price:"
                        - text: US$159.99
                      - link "View details" [ref=e294] [cursor=pointer]:
                        - /url: /gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1
                  - button "Add to Cart - Razer Viper V4 Pro - Black. For US$159.99" [ref=e296] [cursor=pointer]: Add
              - group "Product 4 of 4" [ref=e297]:
                - generic [ref=e299]:
                  - generic [ref=e300]:
                    - heading "Razer Kraken Kitty V2 - Gengar Edition" [level=3] [ref=e301]
                    - generic [ref=e302]:
                      - generic [ref=e306]:
                        - generic [ref=e307]: "Product price:"
                        - text: US$139.99
                      - link "View details" [ref=e309] [cursor=pointer]:
                        - /url: /gaming-headsets/razer-kraken-kitty-v2/RZ04-04730300-R3M1
                  - button "Add to Cart - Razer Kraken Kitty V2 - Gengar Edition. For US$139.99" [ref=e311] [cursor=pointer]: Add
            - generic [ref=e312]:
              - button "Previous" [disabled]
              - button "Next" [ref=e313] [cursor=pointer]
      - contentinfo [ref=e314]:
        - generic [ref=e319]:
          - generic [ref=e320]:
            - generic [ref=e322]:
              - heading "Shop" [level=2] [ref=e324]
              - list [ref=e326]:
                - listitem [ref=e327]:
                  - link "RazerStores" [ref=e328] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstores
                - listitem [ref=e329]:
                  - link "RazerCafe" [ref=e330] [cursor=pointer]:
                    - /url: https://www.razer.com/razercafe
                - listitem [ref=e331]:
                  - link "Store Locator" [ref=e332] [cursor=pointer]:
                    - /url: https://www.razer.com/store-finder
                - listitem [ref=e333]:
                  - link "Purchase Programs" [ref=e334] [cursor=pointer]:
                    - /url: https://www.razer.com/store/programs
                - listitem [ref=e335]:
                  - link "Bulk Order Program" [ref=e336] [cursor=pointer]:
                    - /url: https://www.razer.com/store/bulk-purchase
                - listitem [ref=e337]:
                  - link "Education" [ref=e338] [cursor=pointer]:
                    - /url: https://www.razer.com/education
                - listitem [ref=e339]:
                  - link "Only at Razer" [ref=e340] [cursor=pointer]:
                    - /url: https://www.razer.com/only-at-razer
                - listitem [ref=e341]:
                  - link "Razer Silver" [ref=e342] [cursor=pointer]:
                    - /url: https://www.razer.com/store/rewards
                - listitem [ref=e343]:
                  - link "Affiliate" [ref=e344] [cursor=pointer]:
                    - /url: https://www.razer.com/affiliate
                - listitem [ref=e345]:
                  - link "Newsletter" [ref=e346] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter
            - generic [ref=e348]:
              - heading "Explore" [level=2] [ref=e350]
              - list [ref=e352]:
                - listitem [ref=e353]:
                  - link "Technology" [ref=e354] [cursor=pointer]:
                    - /url: https://www.razer.com/technology
                - listitem [ref=e355]:
                  - link "Chroma RGB" [ref=e356] [cursor=pointer]:
                    - /url: https://www.razer.com/chroma
                - listitem [ref=e357]:
                  - link "Concepts" [ref=e358] [cursor=pointer]:
                    - /url: https://www.razer.com/concepts
                - listitem [ref=e359]:
                  - link "Esports" [ref=e360] [cursor=pointer]:
                    - /url: https://www.razer.com/esports
                - listitem [ref=e361]:
                  - link "Collabs" [ref=e362] [cursor=pointer]:
                    - /url: https://www.razer.com/lifestyle/collabs
            - generic [ref=e364]:
              - heading "Support" [level=2] [ref=e366]
              - list [ref=e368]:
                - listitem [ref=e369]:
                  - link "Get Help" [ref=e370] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/?c=us
                - listitem [ref=e371]:
                  - link "Registration & Warranty" [ref=e372] [cursor=pointer]:
                    - /url: https://www.razer.com/product-registration
                - listitem [ref=e373]:
                  - link "RazerStore Support" [ref=e374] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstore-support
                - listitem [ref=e375]:
                  - link "RazerCare" [ref=e376] [cursor=pointer]:
                    - /url: https://www.razer.com/razercare
                - listitem [ref=e377]:
                  - link "Manage Razer ID" [ref=e378] [cursor=pointer]:
                    - /url: https://razerid.razer.com
                - listitem [ref=e379]:
                  - link "Support Videos" [ref=e380] [cursor=pointer]:
                    - /url: https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos
                - listitem [ref=e381]:
                  - link "Recycling Program" [ref=e382] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/app/answers/detail/a_id/5904
                - listitem [ref=e383]:
                  - link "Accessibility Statement" [ref=e384] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/commitment-to-accessibility
            - generic [ref=e386]:
              - heading "Company" [level=2] [ref=e388]
              - list [ref=e390]:
                - listitem [ref=e391]:
                  - link "About Us" [ref=e392] [cursor=pointer]:
                    - /url: https://www.razer.com/about-razer
                - listitem [ref=e393]:
                  - link "Careers" [ref=e394] [cursor=pointer]:
                    - /url: https://careers.razer.com
                - listitem [ref=e395]:
                  - link "Newsroom" [ref=e396] [cursor=pointer]:
                    - /url: https://www.razer.com/newsroom
                - listitem [ref=e397]:
                  - link "zVentures" [ref=e398] [cursor=pointer]:
                    - /url: https://www.zvntrs.com
                - listitem [ref=e399]:
                  - link "Contact Us" [ref=e400] [cursor=pointer]:
                    - /url: https://www.razer.com/contact-us
                - listitem [ref=e401]:
                  - link "AI Gaming Newsletter" [ref=e402] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter/ai
            - generic [ref=e404]:
              - heading "Follow Us" [level=2] [ref=e406]
              - list [ref=e408]:
                - listitem [ref=e409]:
                  - link "Visit Razer’s Facebook Page" [ref=e410] [cursor=pointer]:
                    - /url: https://www.facebook.com/razer
                    - figure [ref=e411]
                - listitem [ref=e412]:
                  - link "Visit Razer’s Instagram Page" [ref=e413] [cursor=pointer]:
                    - /url: https://www.instagram.com/razer
                    - figure [ref=e414]
                - listitem [ref=e415]:
                  - link "Visit Razer’s Threads Page" [ref=e416] [cursor=pointer]:
                    - /url: https://www.threads.net/@razer
                    - figure [ref=e417]
                - listitem [ref=e418]:
                  - link "Visit Razer’s X Page" [ref=e419] [cursor=pointer]:
                    - /url: https://www.twitter.com/Razer
                    - figure [ref=e420]
                - listitem [ref=e421]:
                  - link "Visit Razer’s YouTube Page" [ref=e422] [cursor=pointer]:
                    - /url: https://www.youtube.com/razer
                    - figure [ref=e423]
                - listitem [ref=e424]:
                  - link "Visit Razer’s TikTok Page" [ref=e425] [cursor=pointer]:
                    - /url: https://www.tiktok.com/@razer
                    - figure [ref=e426]
                - listitem [ref=e427]:
                  - link "Visit Razer’s Twitch Page" [ref=e428] [cursor=pointer]:
                    - /url: https://www.twitch.tv/razer
                    - figure [ref=e429]
                - listitem [ref=e430]:
                  - link "Visit Razer’s Discord Page" [ref=e431] [cursor=pointer]:
                    - /url: https://discord.com/invite/razer
                    - figure [ref=e432]
            - generic [ref=e436]: FOR GAMERS. BY GAMERS.™
          - generic [ref=e440]:
            - generic [ref=e441]:
              - generic [ref=e443]: Copyright © 2026 Razer Inc. All rights reserved.
              - list [ref=e445]:
                - listitem [ref=e446]:
                  - link "Site Map" [ref=e447] [cursor=pointer]:
                    - /url: https://www.razer.com/sitemap
                - listitem [ref=e448]:
                  - text: "|"
                  - link "Legal Terms" [ref=e449] [cursor=pointer]:
                    - /url: https://www.razer.com/legal
                - listitem [ref=e450]:
                  - text: "|"
                  - link "Privacy Policy" [ref=e451] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/customer-privacy-policy
                - listitem [ref=e452]:
                  - text: "|"
                  - button "Cookie Settings" [ref=e453] [cursor=pointer]
            - generic [ref=e455]:
              - text: United States |
              - link "Change Location >" [ref=e456] [cursor=pointer]:
                - /url: /choose-location
    - text: 
  - textbox [ref=e466]
  - textbox [ref=e467]
```

# Test source

```ts
  13  |   //   });
  14  | 
  15  |   test("CT_01 - Add Product to cart", async ({ page }) => {
  16  |     await page.goto("https://www.razer.com/store");
  17  |     await page.getByRole("button", { name: "Accept All" }).click();
  18  |     await page
  19  |       .getByRole("group", { name: "slide 1 of 16" })
  20  |       .getByLabel("BUY - New Razer Blade 18, For US$")
  21  |       .click();
  22  |     await page
  23  |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  24  |       .click();
  25  |     await page.waitForURL("https://www.razer.com/cart", { timeout: 10000 });
  26  |   });
  27  | 
  28  |   test("CT_02 - Verifying cart items updated correctly", async ({ page }) => {
  29  |     await page.goto("https://www.razer.com/store");
  30  |     await page.getByRole("button", { name: "Accept All" }).click();
  31  |     await page
  32  |       .getByRole("group", { name: "slide 1 of 16" })
  33  |       .getByLabel("BUY - New Razer Blade 18, For US$")
  34  |       .click();
  35  |     await page
  36  |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  37  |       .click();
  38  |     await page.waitForURL(/cart/, { timeout: 10000 });
  39  |     await expect(page.getByText("Your cart total is US$")).toBeVisible({
  40  |       timeout: 10000,
  41  |     });
  42  |   });
  43  | 
  44  |   test("CT_03 - Opening cart page successfully", async ({ page }) => {
  45  |     await page.goto("https://www.razer.com/store");
  46  | 
  47  |     await page.getByRole("button", { name: "Accept All" }).click();
  48  |     await page.getByRole("button", { name: "items in cart" }).click();
  49  |     await page.getByRole("link", { name: /Cart/i }).click();
  50  |     await page.waitForURL(/cart/, { timeout: 10000 });
  51  |     await expect(page).toHaveURL(/cart/);
  52  |   });
  53  | 
  54  |   //   test("Verify Product details in cart", async ({ page }) => {
  55  |   //     await page.goto("https://www.razer.com/store");
  56  |   //     await page.getByRole("button", { name: "Accept All" }).click();
  57  |   //     await page
  58  |   //       .getByRole("group", { name: "slide 1 of 16" })
  59  |   //       .getByLabel("BUY - New Razer Blade 18, For US$")
  60  |   //       .click();
  61  |   //     await page
  62  |   //       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  63  |   //       .click();
  64  |   //     await page.getByText("Your Total").click();
  65  |   //     await page.getByText("US$3,999.99").click();
  66  |   //   });
  67  | 
  68  |   test("CT_04 - Increase Quantity Button Works", async ({ page }) => {
  69  |     await page.goto("https://www.razer.com/store");
  70  |     await page.getByRole("button", { name: "Accept All" }).click();
  71  |     await page.getByRole("button", { name: "items in cart" }).click();
  72  |     await page.getByRole("link", { name: /Cart/i }).click();
  73  | 
  74  |     await page.waitForURL(/cart/, { timeout: 10000 });
  75  |     await page
  76  |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  77  |       .click();
  78  |     const increaseBtn = page.getByRole("button", {
  79  |       name: "Increase quantity of item",
  80  |     });
  81  | 
  82  |     await expect(increaseBtn).toBeVisible({ timeout: 10000 });
  83  | 
  84  |     await increaseBtn.click();
  85  |     await increaseBtn.click();
  86  |     await expect(increaseBtn).toBeVisible();
  87  |   });
  88  | 
  89  |   test("CT_05 - Decrease Quantity Button Works", async ({ page }) => {
  90  |     await page.goto("https://www.razer.com/store");
  91  |     await page.getByRole("button", { name: "Accept All" }).click();
  92  |     await page.getByRole("button", { name: "items in cart" }).click();
  93  |     await page.getByRole("link", { name: "Cart (0 items)" }).click();
  94  |     await page
  95  |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  96  |       .click();
  97  |     await page
  98  |       .getByRole("button", { name: "Increase quantity of item" })
  99  |       .click();
  100 |     await page.getByRole("button", { name: "Reduce quantity of item" }).click();
  101 |   });
  102 | 
  103 |   test("CT_06 - Remove Product Button Works", async ({ page }) => {
  104 |     await page.goto("https://www.razer.com/store");
  105 |     await page.getByRole("button", { name: "Accept All" }).click();
  106 |     await page
  107 |       .getByRole("group", { name: "slide 1 of 16" })
  108 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  109 |       .click();
  110 |     await page
  111 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  112 |       .click();
> 113 |     await page.getByRole("button", { name: "Remove item from cart" }).click();
      |                                                                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  114 |   });
  115 | 
  116 |   test("CT_07 - Empty Cart Validation", async ({ page }) => {
  117 |     await page.goto("https://www.razer.com/store");
  118 | 
  119 |     await page.getByRole("button", { name: "Accept All" }).click();
  120 | 
  121 |     await page
  122 |       .getByRole("group", { name: "slide 1 of 16" })
  123 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  124 |       .click();
  125 | 
  126 |     await page
  127 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  128 |       .click();
  129 | 
  130 |     await page.getByRole("button", { name: "Remove item from cart" }).click();
  131 |   });
  132 | 
  133 |   test("CT_08 - Empty Cart Validation", async ({ page }) => {
  134 |     await page.goto("https://www.razer.com/store");
  135 | 
  136 |     await page.getByRole("button", { name: "Accept All" }).click();
  137 | 
  138 |     await page.getByRole("button", { name: "items in cart" }).click();
  139 |     await page.getByRole("link", { name: /Cart/i }).click();
  140 | 
  141 |     await page.waitForURL(/cart/, { timeout: 10000 });
  142 | 
  143 |     await expect(
  144 |       page.getByRole("heading", { name: /your cart is empty/i }),
  145 |     ).toBeVisible();
  146 |   });
  147 | 
  148 |   test("CT_09 - Subtotal Validation", async ({ page }) => {
  149 |     await page.goto("https://www.razer.com/store");
  150 |     await page.getByRole("button", { name: "Accept All" }).click();
  151 |     await page
  152 |       .getByRole("group", { name: "slide 1 of 16" })
  153 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  154 |       .click();
  155 |     await page
  156 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  157 |       .click();
  158 |     await page.getByRole("button", { name: "items in cart" }).click();
  159 |     await page.getByRole("link", { name: /Cart/i }).click();
  160 |     await page.waitForURL(/cart/, { timeout: 10000 });
  161 |     await expect(page.getByText(/Subtotal/i)).toBeVisible();
  162 |   });
  163 | 
  164 |   test("CT_10 - Cart Persistence (refresh)", async ({ page }) => {
  165 |     await page.goto("https://www.razer.com/store");
  166 |     await page.getByRole("button", { name: "Accept All" }).click();
  167 |     await page
  168 |       .getByRole("group", { name: "slide 1 of 16" })
  169 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  170 |       .click();
  171 |     await page
  172 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  173 |       .click();
  174 |     await page.getByRole("button", { name: "Show details" }).click();
  175 |     await page.goto("https://www.razer.com/cart");
  176 |     await page.getByRole("button", { name: "Show details" }).click();
  177 |   });
  178 | 
  179 |   test("CT_11 - Increase quantity works up to limit", async ({ page }) => {
  180 |     await page.goto("https://www.razer.com/store");
  181 | 
  182 |     await page.getByRole("button", { name: "Accept All" }).click();
  183 | 
  184 |     // add product
  185 |     await page
  186 |       .getByRole("group", { name: "slide 1 of 16" })
  187 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  188 |       .click();
  189 | 
  190 |     await page
  191 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  192 |       .click();
  193 | 
  194 |     // increase quantity once (your current approach)
  195 |     const increaseBtn = page.getByRole("button", {
  196 |       name: "Increase quantity of item",
  197 |     });
  198 | 
  199 |     await increaseBtn.click();
  200 | 
  201 |     // optional safe check (NOT visibility-based)
  202 |     const qty = page.locator('input[type="number"]').first();
  203 | 
  204 |     // if input exists, validate it increased from 1 → 2
  205 |     if (await qty.count()) {
  206 |       const value = await qty.inputValue();
  207 |       expect(Number(value)).toBeGreaterThanOrEqual(2);
  208 |     }
  209 |   });
  210 | });
  211 | 
```