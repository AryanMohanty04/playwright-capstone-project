# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage\homepage.spec.js >> Homepage & Navigation Module >> HN_14 - Browser back button works correctly
- Location: tests\homepage\homepage.spec.js:160:3

# Error details

```
Error: locator.click: Error: strict mode violation: locator('a').filter({ hasText: /^Buy$/ }) resolved to 2 elements:
    1) <a pnxssr_13="" target="_self" href="/gaming-mice/razer-viper-v4-pro/buy" class="hhv__btn hhv__btn--secondary cta-link">Buy</a> aka getByRole('link', { name: 'Buy' }).first()
    2) <a pnxssr_34="" target="_self" href="/gaming-laptops/razer-blade-18/buy" class="hhv__btn hhv__btn--secondary cta-link">Buy</a> aka getByRole('link', { name: 'Buy' }).nth(1)

Call log:
  - waiting for locator('a').filter({ hasText: /^Buy$/ })

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
          - generic:
            - generic: 
          - generic [ref=e63]:
            - generic [ref=e68]:
              - heading "Razer" [level=1] [ref=e69]
              - group "banner" [ref=e70]:
                - generic [ref=e72]:
                  - heading "Razer Viper V4 Pro" [level=2] [ref=e73]
                  - paragraph [ref=e74]: For the Pro
                  - generic [ref=e75]:
                    - link "Learn More" [ref=e76] [cursor=pointer]:
                      - /url: /gaming-mice/razer-viper-v4-pro
                    - link "Buy" [ref=e77] [cursor=pointer]:
                      - /url: /gaming-mice/razer-viper-v4-pro/buy
                - generic [ref=e78]:
                  - generic [ref=e79]: "Video - Description not needed: The visuals in this video animation only support what is spoken; the visuals do not provide additional information."
                  - button "pause video animation" [pressed] [ref=e80] [cursor=pointer]:
                    - img [ref=e81]
              - group "banner" [ref=e83]:
                - link [ref=e84] [cursor=pointer]:
                  - /url: /gaming-laptops/razer-blade-18
                - generic [ref=e86]:
                  - generic "Only at Razer ribbon" [ref=e87]: Only at Razer
                  - heading "RAZER BLADE 18" [level=2] [ref=e88]
                  - paragraph [ref=e89]: THE EDGE OF PERFORMANCE FOR GAMERS & AI DEVS
                  - generic [ref=e90]:
                    - link "Learn More" [ref=e91] [cursor=pointer]:
                      - /url: /gaming-laptops/razer-blade-18
                    - link "Buy" [ref=e92] [cursor=pointer]:
                      - /url: /gaming-laptops/razer-blade-18/buy
              - group "banner" [ref=e93]:
                - link [ref=e94] [cursor=pointer]:
                  - /url: /campaigns/nvidia-game-bundle
                - generic [ref=e96]:
                  - heading "RAZER X 007 FIRST LIGHT" [level=2] [ref=e97]
                  - paragraph [ref=e98]: ACTIVATE YOUR FIELD INSTINCTS
                  - generic [ref=e99]:
                    - link "Razer Blade" [ref=e100] [cursor=pointer]:
                      - /url: /campaigns/nvidia-game-bundle
                    - link "Sensa HD" [ref=e101] [cursor=pointer]:
                      - /url: /campaigns/007-first-light
            - generic [ref=e106]:
              - generic [ref=e107]:
                - link [ref=e108] [cursor=pointer]:
                  - /url: /store/gaming-chairs
                - generic [ref=e111]:
                  - heading "RAZER GAMING CHAIR SPECIAL" [level=2] [ref=e112]
                  - heading "UNLOCK UP TO $200 OFF NOW" [level=3] [ref=e113]
                - link "Shop Now" [ref=e115] [cursor=pointer]:
                  - /url: /store/gaming-chairs
                  - generic [ref=e116]:
                    - text: Shop Now
                    - generic [ref=e117]: ">"
              - generic [ref=e118]:
                - link [ref=e119] [cursor=pointer]:
                  - /url: /mobile/earbuds/hammerhead-line
                - generic [ref=e122]:
                  - heading "RAZER HAMMERHEAD V3 HYPERSPEED" [level=2] [ref=e123]
                  - heading "ULTRA-LOW LATENCY. ULTIMATE IMMERSION." [level=3] [ref=e124]
                - generic [ref=e125]:
                  - link "Learn More" [ref=e126] [cursor=pointer]:
                    - /url: /mobile/earbuds/hammerhead-line
                    - generic [ref=e127]:
                      - text: Learn More
                      - generic [ref=e128]: ">"
                  - link "Buy" [ref=e129] [cursor=pointer]:
                    - /url: /mobile-earphones/razer-hammerhead-v3-hyperspeed/buy
                    - generic [ref=e130]:
                      - text: Buy
                      - generic [ref=e131]: ">"
              - generic [ref=e132]:
                - link [ref=e133] [cursor=pointer]:
                  - /url: /gaming-mice/razer-orochi-v2
                - generic [ref=e136]:
                  - heading "RAZER OROCHI V2" [level=2] [ref=e137]
                  - heading "OUTLAST AND OUTPLAY" [level=3] [ref=e138]
                - generic [ref=e139]:
                  - link "Learn More" [ref=e140] [cursor=pointer]:
                    - /url: /gaming-mice/razer-orochi-v2
                    - generic [ref=e141]:
                      - text: Learn More
                      - generic [ref=e142]: ">"
                  - link "Buy" [ref=e143] [cursor=pointer]:
                    - /url: /gaming-mice/razer-orochi-v2/buy
                    - generic [ref=e144]:
                      - text: Buy
                      - generic [ref=e145]: ">"
              - generic [ref=e146]:
                - link [ref=e147] [cursor=pointer]:
                  - /url: /collabs/blackpink
                - img "©YG. All Rights Reserved." [ref=e149]
                - generic [ref=e151]:
                  - heading "BLACKPINK X RAZER" [level=2] [ref=e152]
                  - heading "DROPPING MAY 28, 2026, 7PM PDT" [level=3] [ref=e153]
                - link "Learn More" [ref=e155] [cursor=pointer]:
                  - /url: /collabs/blackpink
                  - generic [ref=e156]:
                    - text: Learn More
                    - generic [ref=e157]: ">"
              - generic [ref=e158]:
                - link [ref=e159] [cursor=pointer]:
                  - /url: /gaming-keyboards/razer-huntsman-v3-tenkeyless-8khz
                - generic [ref=e162]:
                  - heading "RAZER HUNTSMAN V3 TENKEYLESS 8KHZ" [level=2] [ref=e163]
                  - heading "FOR THE PRO" [level=3] [ref=e164]
                - generic [ref=e165]:
                  - link "Learn More" [ref=e166] [cursor=pointer]:
                    - /url: /gaming-keyboards/razer-huntsman-v3-tenkeyless-8khz
                    - generic [ref=e167]:
                      - text: Learn More
                      - generic [ref=e168]: ">"
                  - link "Buy" [ref=e169] [cursor=pointer]:
                    - /url: /gaming-keyboards/razer-huntsman-v3-tenkeyless-8khz/buy
                    - generic [ref=e170]:
                      - text: Buy
                      - generic [ref=e171]: ">"
              - generic [ref=e172]:
                - link [ref=e173] [cursor=pointer]:
                  - /url: /collabs/wuthering-waves
                - img "© Kuro Games All Rights Reserved" [ref=e175]
                - generic [ref=e177]:
                  - heading "RAZER | WUTHERING WAVES" [level=2] [ref=e178]
                  - heading "RESONANCE IN HAND" [level=3] [ref=e179]
                - link "Learn More" [ref=e181] [cursor=pointer]:
                  - /url: /collabs/wuthering-waves
                  - generic [ref=e182]:
                    - text: Learn More
                    - generic [ref=e183]: ">"
      - contentinfo [ref=e184]:
        - generic [ref=e189]:
          - generic [ref=e190]:
            - generic [ref=e192]:
              - heading "Shop" [level=2] [ref=e194]
              - list [ref=e196]:
                - listitem [ref=e197]:
                  - link "RazerStores" [ref=e198] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstores
                - listitem [ref=e199]:
                  - link "RazerCafe" [ref=e200] [cursor=pointer]:
                    - /url: https://www.razer.com/razercafe
                - listitem [ref=e201]:
                  - link "Store Locator" [ref=e202] [cursor=pointer]:
                    - /url: https://www.razer.com/store-finder
                - listitem [ref=e203]:
                  - link "Purchase Programs" [ref=e204] [cursor=pointer]:
                    - /url: https://www.razer.com/store/programs
                - listitem [ref=e205]:
                  - link "Bulk Order Program" [ref=e206] [cursor=pointer]:
                    - /url: https://www.razer.com/store/bulk-purchase
                - listitem [ref=e207]:
                  - link "Education" [ref=e208] [cursor=pointer]:
                    - /url: https://www.razer.com/education
                - listitem [ref=e209]:
                  - link "Only at Razer" [ref=e210] [cursor=pointer]:
                    - /url: https://www.razer.com/only-at-razer
                - listitem [ref=e211]:
                  - link "Razer Silver" [ref=e212] [cursor=pointer]:
                    - /url: https://www.razer.com/store/rewards
                - listitem [ref=e213]:
                  - link "Affiliate" [ref=e214] [cursor=pointer]:
                    - /url: https://www.razer.com/affiliate
                - listitem [ref=e215]:
                  - link "Newsletter" [ref=e216] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter
            - generic [ref=e218]:
              - heading "Explore" [level=2] [ref=e220]
              - list [ref=e222]:
                - listitem [ref=e223]:
                  - link "Technology" [ref=e224] [cursor=pointer]:
                    - /url: https://www.razer.com/technology
                - listitem [ref=e225]:
                  - link "Chroma RGB" [ref=e226] [cursor=pointer]:
                    - /url: https://www.razer.com/chroma
                - listitem [ref=e227]:
                  - link "Concepts" [ref=e228] [cursor=pointer]:
                    - /url: https://www.razer.com/concepts
                - listitem [ref=e229]:
                  - link "Esports" [ref=e230] [cursor=pointer]:
                    - /url: https://www.razer.com/esports
                - listitem [ref=e231]:
                  - link "Collabs" [ref=e232] [cursor=pointer]:
                    - /url: https://www.razer.com/lifestyle/collabs
            - generic [ref=e234]:
              - heading "Support" [level=2] [ref=e236]
              - list [ref=e238]:
                - listitem [ref=e239]:
                  - link "Get Help" [ref=e240] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/?c=us
                - listitem [ref=e241]:
                  - link "Registration & Warranty" [ref=e242] [cursor=pointer]:
                    - /url: https://www.razer.com/product-registration
                - listitem [ref=e243]:
                  - link "RazerStore Support" [ref=e244] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstore-support
                - listitem [ref=e245]:
                  - link "RazerCare" [ref=e246] [cursor=pointer]:
                    - /url: https://www.razer.com/razercare
                - listitem [ref=e247]:
                  - link "Manage Razer ID" [ref=e248] [cursor=pointer]:
                    - /url: https://razerid.razer.com
                - listitem [ref=e249]:
                  - link "Support Videos" [ref=e250] [cursor=pointer]:
                    - /url: https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos
                - listitem [ref=e251]:
                  - link "Recycling Program" [ref=e252] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/app/answers/detail/a_id/5904
                - listitem [ref=e253]:
                  - link "Accessibility Statement" [ref=e254] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/commitment-to-accessibility
            - generic [ref=e256]:
              - heading "Company" [level=2] [ref=e258]
              - list [ref=e260]:
                - listitem [ref=e261]:
                  - link "About Us" [ref=e262] [cursor=pointer]:
                    - /url: https://www.razer.com/about-razer
                - listitem [ref=e263]:
                  - link "Careers" [ref=e264] [cursor=pointer]:
                    - /url: https://careers.razer.com
                - listitem [ref=e265]:
                  - link "Newsroom" [ref=e266] [cursor=pointer]:
                    - /url: https://www.razer.com/newsroom
                - listitem [ref=e267]:
                  - link "zVentures" [ref=e268] [cursor=pointer]:
                    - /url: https://www.zvntrs.com
                - listitem [ref=e269]:
                  - link "Contact Us" [ref=e270] [cursor=pointer]:
                    - /url: https://www.razer.com/contact-us
                - listitem [ref=e271]:
                  - link "AI Gaming Newsletter" [ref=e272] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter/ai
            - generic [ref=e274]:
              - heading "Follow Us" [level=2] [ref=e276]
              - list [ref=e278]:
                - listitem [ref=e279]:
                  - link "Visit Razer’s Facebook Page" [ref=e280] [cursor=pointer]:
                    - /url: https://www.facebook.com/razer
                    - figure [ref=e281]
                - listitem [ref=e282]:
                  - link "Visit Razer’s Instagram Page" [ref=e283] [cursor=pointer]:
                    - /url: https://www.instagram.com/razer
                    - figure [ref=e284]
                - listitem [ref=e285]:
                  - link "Visit Razer’s Threads Page" [ref=e286] [cursor=pointer]:
                    - /url: https://www.threads.net/@razer
                    - figure [ref=e287]
                - listitem [ref=e288]:
                  - link "Visit Razer’s X Page" [ref=e289] [cursor=pointer]:
                    - /url: https://www.twitter.com/Razer
                    - figure [ref=e290]
                - listitem [ref=e291]:
                  - link "Visit Razer’s YouTube Page" [ref=e292] [cursor=pointer]:
                    - /url: https://www.youtube.com/razer
                    - figure [ref=e293]
                - listitem [ref=e294]:
                  - link "Visit Razer’s TikTok Page" [ref=e295] [cursor=pointer]:
                    - /url: https://www.tiktok.com/@razer
                    - figure [ref=e296]
                - listitem [ref=e297]:
                  - link "Visit Razer’s Twitch Page" [ref=e298] [cursor=pointer]:
                    - /url: https://www.twitch.tv/razer
                    - figure [ref=e299]
                - listitem [ref=e300]:
                  - link "Visit Razer’s Discord Page" [ref=e301] [cursor=pointer]:
                    - /url: https://discord.com/invite/razer
                    - figure [ref=e302]
            - generic [ref=e306]: FOR GAMERS. BY GAMERS.™
          - generic [ref=e310]:
            - generic [ref=e311]:
              - generic [ref=e313]: Copyright © 2026 Razer Inc. All rights reserved.
              - list [ref=e315]:
                - listitem [ref=e316]:
                  - link "Site Map" [ref=e317] [cursor=pointer]:
                    - /url: https://www.razer.com/sitemap
                - listitem [ref=e318]:
                  - text: "|"
                  - link "Legal Terms" [ref=e319] [cursor=pointer]:
                    - /url: https://www.razer.com/legal
                - listitem [ref=e320]:
                  - text: "|"
                  - link "Privacy Policy" [ref=e321] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/customer-privacy-policy
                - listitem [ref=e322]:
                  - text: "|"
                  - button "Cookie Settings" [ref=e323] [cursor=pointer]
            - generic [ref=e325]:
              - text: United States |
              - link "Change Location >" [ref=e326] [cursor=pointer]:
                - /url: /choose-location
    - text: 
  - textbox [ref=e335]
```

# Test source

```ts
  69  |   });
  70  | 
  71  |   //Cart Operations:->
  72  |   //Cart Opens Successfully
  73  |   test("HN_08 - Cart opens successfully", async ({ page }) => {
  74  |     await page.goto("https://www.razer.com/");
  75  |     await page.getByRole("button", { name: "Accept All" }).click();
  76  |     await page.getByRole("button", { name: "items in cart" }).click();
  77  |     await page.getByRole("link", { name: "Cart (0 items)" }).click();
  78  |   });
  79  | 
  80  |   //Razer Logo return to homepage
  81  |   test("HN_09 - Razer Logo returns to the HomePage", async ({ page }) => {
  82  |     await page.goto("https://www.razer.com/");
  83  |     await page.getByRole("button", { name: "Accept All" }).click();
  84  |     await page
  85  |       .locator("a")
  86  |       .filter({ hasText: /^Shop Now$/ })
  87  |       .click();
  88  |     await page.getByRole("link", { name: "Razer Homepage" }).click();
  89  |   });
  90  | 
  91  |   //Footer Link Check
  92  |   test("HN_10 - Get Help footer link opens correctly", async ({ page }) => {
  93  |     await page.goto("https://www.razer.com/");
  94  | 
  95  |     await page
  96  |       .getByRole("button", {
  97  |         name: "Accept All",
  98  |       })
  99  |       .click();
  100 | 
  101 |     await page
  102 |       .getByRole("link", {
  103 |         name: "Get Help",
  104 |       })
  105 |       .click();
  106 |   });
  107 | 
  108 |   //Check for Mobile hamburger menu
  109 |   test("HN_11 - Mobile hamburger menu opens successfully", async ({ page }) => {
  110 |     await page.setViewportSize({
  111 |       width: 375,
  112 |       height: 667,
  113 |     });
  114 | 
  115 |     await page.goto("https://www.razer.com/");
  116 |     await page
  117 |       .getByRole("button", {
  118 |         name: "Accept All",
  119 |       })
  120 |       .click();
  121 | 
  122 |     await page
  123 |       .getByRole("button", {
  124 |         name: "Menu",
  125 |       })
  126 |       .click();
  127 |   });
  128 | 
  129 |   // Sticky Navabr check
  130 |   test("HN_12 - Sticky navbar visible while scrolling", async ({ page }) => {
  131 |     await page.goto("https://www.razer.com/");
  132 | 
  133 |     await page
  134 |       .getByRole("button", {
  135 |         name: "Accept All",
  136 |       })
  137 |       .click();
  138 | 
  139 |     await page.mouse.wheel(0, 3000); //scrolls down
  140 |     await expect(page.getByRole("navigation")).toBeVisible();
  141 |   });
  142 | 
  143 |   test("HN_13 - Change location popup opens correctly", async ({ page }) => {
  144 |     await page.goto("https://www.razer.com/");
  145 | 
  146 |     await page
  147 |       .getByRole("button", {
  148 |         name: "Accept All",
  149 |       })
  150 |       .click();
  151 | 
  152 |     await page
  153 |       .getByRole("link", {
  154 |         name: "Change Location >",
  155 |       })
  156 |       .click();
  157 |   });
  158 | 
  159 |   //Browser Back Button works
  160 |   test("HN_14 - Browser back button works correctly", async ({ page }) => {
  161 |     await page.goto("https://www.razer.com/");
  162 | 
  163 |     await page
  164 |       .getByRole("button", {
  165 |         name: "Accept All",
  166 |       })
  167 |       .click();
  168 | 
> 169 |     await page.locator("a").filter({ hasText: /^Buy$/ }).click();
      |                                                          ^ Error: locator.click: Error: strict mode violation: locator('a').filter({ hasText: /^Buy$/ }) resolved to 2 elements:
  170 | 
  171 |     await page.goBack({
  172 |       waitUntil: "domcontentloaded", // browser failure in fireforx
  173 |     });
  174 | 
  175 |     await expect(page).toHaveURL("https://www.razer.com/");
  176 |   });
  177 | 
  178 |   //HomePage responsive at mobile viewport
  179 |   test("HN_15 - Homepage responsive at mobile viewport", async ({ page }) => {
  180 |     await page.setViewportSize({
  181 |       width: 375,
  182 |       height: 667,
  183 |     });
  184 | 
  185 |     await page.goto("https://www.razer.com/");
  186 | 
  187 |     await page
  188 |       .getByRole("button", {
  189 |         name: "Accept All",
  190 |       })
  191 |       .click();
  192 | 
  193 |     await expect(page.locator("body")).toBeVisible();
  194 |   });
  195 | });
  196 | 
```