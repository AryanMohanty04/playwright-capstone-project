# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage.spec.js >> Homepage & Navigation Module >> HN_11 - Mobile hamburger menu opens successfully
- Location: tests/homepage/homepage.spec.js:109:3

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
        - generic [ref=e21]:
          - generic:
            - generic:
              - generic:
                - button "Search" [ref=e22] [cursor=pointer]: 
                - text: ❮  
          - button "Global Navigation Open Menu" [ref=e23] [cursor=pointer]
          - link "Razer Homepage" [ref=e25] [cursor=pointer]:
            - /url: /
            - img "Razer Homepage" [ref=e26]
          - button "0 items in cart" [ref=e32] [cursor=pointer]: 
      - main [ref=e33]:
        - generic [ref=e34]:
          - generic:
            - generic: 
          - generic [ref=e37]:
            - generic [ref=e42]:
              - heading "Razer" [level=1] [ref=e43]
              - group "banner" [ref=e44]:
                - generic [ref=e46]:
                  - heading "Razer Viper V4 Pro" [level=2] [ref=e47]
                  - paragraph [ref=e48]: For the Pro
                  - generic [ref=e49]:
                    - link "Learn More" [ref=e50] [cursor=pointer]:
                      - /url: /gaming-mice/razer-viper-v4-pro
                    - link "Buy" [ref=e51] [cursor=pointer]:
                      - /url: /gaming-mice/razer-viper-v4-pro/buy
                - generic [ref=e52]:
                  - generic [ref=e53]: "Video - Description not needed: The visuals in this video animation only support what is spoken; the visuals do not provide additional information."
                  - button "pause video animation" [pressed] [ref=e54] [cursor=pointer]:
                    - img [ref=e55]
              - group "banner" [ref=e57]:
                - link [ref=e58] [cursor=pointer]:
                  - /url: /gaming-laptops/razer-blade-18
                - generic [ref=e60]:
                  - generic "Only at Razer ribbon" [ref=e61]: Only at Razer
                  - heading "RAZER BLADE 18" [level=2] [ref=e62]
                  - paragraph [ref=e63]: THE EDGE OF PERFORMANCE FOR GAMERS & AI DEVS
                  - generic [ref=e64]:
                    - link "Learn More" [ref=e65] [cursor=pointer]:
                      - /url: /gaming-laptops/razer-blade-18
                    - link "Buy" [ref=e66] [cursor=pointer]:
                      - /url: /gaming-laptops/razer-blade-18/buy
              - group "banner" [ref=e67]:
                - link [ref=e68] [cursor=pointer]:
                  - /url: /campaigns/nvidia-game-bundle
                - generic [ref=e70]:
                  - heading "RAZER X 007 FIRST LIGHT" [level=2] [ref=e71]
                  - paragraph [ref=e72]: ACTIVATE YOUR FIELD INSTINCTS
                  - generic [ref=e73]:
                    - link "Razer Blade" [ref=e74] [cursor=pointer]:
                      - /url: /campaigns/nvidia-game-bundle
                    - link "Sensa HD" [ref=e75] [cursor=pointer]:
                      - /url: /campaigns/007-first-light
            - generic [ref=e80]:
              - generic [ref=e81]:
                - link [ref=e82] [cursor=pointer]:
                  - /url: /store/gaming-chairs
                - generic [ref=e85]:
                  - heading "RAZER GAMING CHAIR SPECIAL" [level=2] [ref=e86]
                  - heading "UNLOCK UP TO $200 OFF NOW" [level=3] [ref=e87]
                - link "Shop Now" [ref=e89] [cursor=pointer]:
                  - /url: /store/gaming-chairs
                  - generic [ref=e90]:
                    - text: Shop Now
                    - generic [ref=e91]: ">"
              - generic [ref=e92]:
                - link [ref=e93] [cursor=pointer]:
                  - /url: /mobile/earbuds/hammerhead-line
                - generic [ref=e96]:
                  - heading "RAZER HAMMERHEAD V3 HYPERSPEED" [level=2] [ref=e97]
                  - heading "ULTRA-LOW LATENCY. ULTIMATE IMMERSION." [level=3] [ref=e98]
                - generic [ref=e99]:
                  - link "Learn More" [ref=e100] [cursor=pointer]:
                    - /url: /mobile/earbuds/hammerhead-line
                    - generic [ref=e101]:
                      - text: Learn More
                      - generic [ref=e102]: ">"
                  - link "Buy" [ref=e103] [cursor=pointer]:
                    - /url: /mobile-earphones/razer-hammerhead-v3-hyperspeed/buy
                    - generic [ref=e104]:
                      - text: Buy
                      - generic [ref=e105]: ">"
              - generic [ref=e106]:
                - link [ref=e107] [cursor=pointer]:
                  - /url: /gaming-mice/razer-orochi-v2
                - generic [ref=e110]:
                  - heading "RAZER OROCHI V2" [level=2] [ref=e111]
                  - heading "OUTLAST AND OUTPLAY" [level=3] [ref=e112]
                - generic [ref=e113]:
                  - link "Learn More" [ref=e114] [cursor=pointer]:
                    - /url: /gaming-mice/razer-orochi-v2
                    - generic [ref=e115]:
                      - text: Learn More
                      - generic [ref=e116]: ">"
                  - link "Buy" [ref=e117] [cursor=pointer]:
                    - /url: /gaming-mice/razer-orochi-v2/buy
                    - generic [ref=e118]:
                      - text: Buy
                      - generic [ref=e119]: ">"
              - generic [ref=e120]:
                - link [ref=e121] [cursor=pointer]:
                  - /url: /collabs/blackpink
                - img "©YG. All Rights Reserved." [ref=e123]
                - generic [ref=e125]:
                  - heading "BLACKPINK X RAZER" [level=2] [ref=e126]
                  - heading "DROPPING MAY 28, 2026, 7PM PDT" [level=3] [ref=e127]
                - link "Learn More" [ref=e129] [cursor=pointer]:
                  - /url: /collabs/blackpink
                  - generic [ref=e130]:
                    - text: Learn More
                    - generic [ref=e131]: ">"
              - generic [ref=e132]:
                - link [ref=e133] [cursor=pointer]:
                  - /url: /gaming-keyboards/razer-huntsman-v3-tenkeyless-8khz
                - generic [ref=e136]:
                  - heading "RAZER HUNTSMAN V3 TENKEYLESS 8KHZ" [level=2] [ref=e137]
                  - heading "FOR THE PRO" [level=3] [ref=e138]
                - generic [ref=e139]:
                  - link "Learn More" [ref=e140] [cursor=pointer]:
                    - /url: /gaming-keyboards/razer-huntsman-v3-tenkeyless-8khz
                    - generic [ref=e141]:
                      - text: Learn More
                      - generic [ref=e142]: ">"
                  - link "Buy" [ref=e143] [cursor=pointer]:
                    - /url: /gaming-keyboards/razer-huntsman-v3-tenkeyless-8khz/buy
                    - generic [ref=e144]:
                      - text: Buy
                      - generic [ref=e145]: ">"
              - generic [ref=e146]:
                - link [ref=e147] [cursor=pointer]:
                  - /url: /collabs/wuthering-waves
                - img "© Kuro Games All Rights Reserved" [ref=e149]
                - generic [ref=e151]:
                  - heading "RAZER | WUTHERING WAVES" [level=2] [ref=e152]
                  - heading "RESONANCE IN HAND" [level=3] [ref=e153]
                - link "Learn More" [ref=e155] [cursor=pointer]:
                  - /url: /collabs/wuthering-waves
                  - generic [ref=e156]:
                    - text: Learn More
                    - generic [ref=e157]: ">"
      - contentinfo [ref=e158]:
        - generic [ref=e163]:
          - generic [ref=e164]:
            - button "Shop" [ref=e167] [cursor=pointer]:
              - heading "Shop" [level=2] [ref=e168]
              - generic [ref=e169]: +
            - button "Explore" [ref=e172] [cursor=pointer]:
              - heading "Explore" [level=2] [ref=e173]
              - generic [ref=e174]: +
            - button "Support" [ref=e177] [cursor=pointer]:
              - heading "Support" [level=2] [ref=e178]
              - generic [ref=e179]: +
            - button "Company" [ref=e182] [cursor=pointer]:
              - heading "Company" [level=2] [ref=e183]
              - generic [ref=e184]: +
            - text: +
          - generic [ref=e185]:
            - generic [ref=e186]:
              - generic [ref=e188]: Copyright © 2026 Razer Inc. All rights reserved.
              - list [ref=e190]:
                - listitem [ref=e191]:
                  - link "Site Map" [ref=e192] [cursor=pointer]:
                    - /url: https://www.razer.com/sitemap
                - listitem [ref=e193]:
                  - text: "|"
                  - link "Legal Terms" [ref=e194] [cursor=pointer]:
                    - /url: https://www.razer.com/legal
                - listitem [ref=e195]:
                  - text: "|"
                  - link "Privacy Policy" [ref=e196] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/customer-privacy-policy
                - listitem [ref=e197]:
                  - text: "|"
                  - button "Cookie Settings" [ref=e198] [cursor=pointer]
            - generic [ref=e200]:
              - text: United States |
              - link "Change Location >" [ref=e201] [cursor=pointer]:
                - /url: /choose-location
            - generic [ref=e202]:
              - generic [ref=e203]: FOR GAMERS. BY GAMERS.™
              - list [ref=e204]:
                - listitem [ref=e205]:
                  - link "Visit Razer’s Facebook Page" [ref=e206] [cursor=pointer]:
                    - /url: https://www.facebook.com/razer
                    - figure [ref=e207]
                - listitem [ref=e208]:
                  - link "Visit Razer’s Instagram Page" [ref=e209] [cursor=pointer]:
                    - /url: https://www.instagram.com/razer
                    - figure [ref=e210]
                - listitem [ref=e211]:
                  - link "Visit Razer’s Threads Page" [ref=e212] [cursor=pointer]:
                    - /url: https://www.threads.net/@razer
                    - figure [ref=e213]
                - listitem [ref=e214]:
                  - link "Visit Razer’s X Page" [ref=e215] [cursor=pointer]:
                    - /url: https://www.twitter.com/Razer
                    - figure [ref=e216]
                - listitem [ref=e217]:
                  - link "Visit Razer’s YouTube Page" [ref=e218] [cursor=pointer]:
                    - /url: https://www.youtube.com/razer
                    - figure [ref=e219]
                - listitem [ref=e220]:
                  - link "Visit Razer’s TikTok Page" [ref=e221] [cursor=pointer]:
                    - /url: https://www.tiktok.com/@razer
                    - figure [ref=e222]
                - listitem [ref=e223]:
                  - link "Visit Razer’s Twitch Page" [ref=e224] [cursor=pointer]:
                    - /url: https://www.twitch.tv/razer
                    - figure [ref=e225]
                - listitem [ref=e226]:
                  - link "Visit Razer’s Discord Page" [ref=e227] [cursor=pointer]:
                    - /url: https://discord.com/invite/razer
                    - figure [ref=e228]
    - text: 
```

# Test source

```ts
  20  |     await page.locator("a").filter({ hasText: /^Buy$/ }).click();
  21  |     //   await page.goto('https://www.razer.com/gaming-laptops/razer-blade-18/RZ09-05827ER3-R3U1');
  22  |   });
  23  | 
  24  |   //Clicking on the Learn More Button
  25  |   test("HN_04 - Hero banner Learn More button works", async ({ page }) => {
  26  |     await page.goto("https://www.razer.com/");
  27  |     await page.getByRole("button", { name: "Accept All" }).click();
  28  |     await page
  29  |       .locator("a")
  30  |       .filter({ hasText: /^Learn More$/ })
  31  |       .first()
  32  |       .click();
  33  |   });
  34  | 
  35  |   //Search Operations:->
  36  | 
  37  |   //Search icon opens search input
  38  |   test("HN_05 - Search icon opens search input", async ({ page }) => {
  39  |     await page.goto("https://www.razer.com/");
  40  |     await page.getByRole("button", { name: "Accept All" }).click();
  41  |     await page.getByRole("button", { name: "Search" }).click();
  42  |   });
  43  | 
  44  |   //Search input accepts typing
  45  |   test("HN_06 - Search input accepts typing", async ({ page }) => {
  46  |     await page.goto("https://www.razer.com/");
  47  |     await page.getByRole("button", { name: "Accept All" }).click();
  48  |     await page.getByRole("button", { name: "Search" }).click();
  49  |     await page.getByText("Search razer.com").click();
  50  |     await page
  51  |       .getByRole("textbox", { name: "Search razer.com" })
  52  |       .fill("Razer Blade");
  53  |   });
  54  | 
  55  |   //Search input accepts typing and redirects
  56  |   test("HN_07 - Search input accepts typing and redirects", async ({
  57  |     page,
  58  |   }) => {
  59  |     await page.goto("https://www.razer.com/");
  60  |     await page.getByRole("button", { name: "Accept All" }).click();
  61  |     await page.getByRole("button", { name: "Search" }).click();
  62  |     await page.getByRole("dialog", { name: "Search" }).click();
  63  |     await page
  64  |       .getByRole("textbox", { name: "Search razer.com" })
  65  |       .fill("BlackShark");
  66  |     await page
  67  |       .getByRole("textbox", { name: "Search razer.com" })
  68  |       .press("Enter");
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
> 120 |       .click();
      |        ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  169 |     await page.locator("a").filter({ hasText: /^Buy$/ }).click();
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