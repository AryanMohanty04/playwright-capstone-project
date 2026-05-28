# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search/search.spec.js >> Search Module >> S8 - Search works in mobile viewport
- Location: tests/search/search.spec.js:166:3

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
  76  |     await page.goto("https://www.razer.com/");
  77  |     await page
  78  |       .getByRole("button", {
  79  |         name: "Accept All",
  80  |       })
  81  |       .click();
  82  |     await page
  83  |       .getByRole("button", {
  84  |         name: "Search",
  85  |       })
  86  |       .click();
  87  |     const searchBox = page.getByRole("textbox", {
  88  |       name: "Search razer.com",
  89  |     });
  90  |     await searchBox.fill("YellowShark");
  91  |     await Promise.all([
  92  |       page.waitForURL(/search\/yellowshark/i),
  93  |       searchBox.press("Enter"),
  94  |     ]);
  95  |     await expect(
  96  |       page.getByRole("heading", {
  97  |         name: "Sorry! No matches were found.",
  98  |       }),
  99  |     ).toBeVisible();
  100 |   });
  101 | 
  102 |   //Empty Search Validation works
  103 |   test("S5 - Empty Search Validation works", async ({ page }) => {
  104 |     await page.goto("https://www.razer.com/");
  105 |     await page
  106 |       .getByRole("button", {
  107 |         name: "Accept All",
  108 |       })
  109 |       .click();
  110 |     await page
  111 |       .getByRole("button", {
  112 |         name: "Search",
  113 |       })
  114 |       .click();
  115 |     const searchBox = page.getByRole("textbox", {
  116 |       name: "Search razer.com",
  117 |     });
  118 |     await searchBox.press("Enter");
  119 |     await expect(page).toHaveURL("https://www.razer.com/");
  120 |     await expect(searchBox).toBeVisible();
  121 |   });
  122 | 
  123 |   test("S6 - Multiple searches work correctly", async ({ page }) => {
  124 |     await page.goto("https://www.razer.com/");
  125 |     await page
  126 |       .getByRole("button", {
  127 |         name: "Accept All",
  128 |       })
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
> 176 |       .click();
      |        ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  229 |       .click();
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