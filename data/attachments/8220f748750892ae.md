# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search/search.spec.js >> Search Module >> S1 - Search Icon Opens to Search box
- Location: tests/search/search.spec.js:5:3

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
        - navigation "global" [ref=e27]:
          - list [ref=e28]:
            - listitem [ref=e29]:
              - link "Razer Homepage" [ref=e31]:
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
              - link "Razer.AI" [ref=e55]:
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
          - generic:
            - generic: 
          - generic [ref=e75]:
            - generic [ref=e80]:
              - heading "Razer" [level=1] [ref=e81]
              - group "banner" [ref=e82]:
                - generic [ref=e84]:
                  - heading "Razer Viper V4 Pro" [level=2] [ref=e85]
                  - paragraph [ref=e86]: For the Pro
                  - generic [ref=e87]:
                    - link "Learn More" [ref=e88] [cursor=pointer]:
                      - /url: /gaming-mice/razer-viper-v4-pro
                    - link "Buy" [ref=e89] [cursor=pointer]:
                      - /url: /gaming-mice/razer-viper-v4-pro/buy
                - generic [ref=e90]:
                  - generic [ref=e91]: "Video - Description not needed: The visuals in this video animation only support what is spoken; the visuals do not provide additional information."
                  - button "pause video animation" [pressed] [ref=e92] [cursor=pointer]:
                    - img [ref=e93]
              - group "banner" [ref=e95]:
                - link [ref=e96]:
                  - /url: /gaming-laptops/razer-blade-18
                - generic [ref=e98]:
                  - generic "Only at Razer ribbon" [ref=e99]: Only at Razer
                  - heading "RAZER BLADE 18" [level=2] [ref=e100]
                  - paragraph [ref=e101]: THE EDGE OF PERFORMANCE FOR GAMERS & AI DEVS
                  - generic [ref=e102]:
                    - link "Learn More" [ref=e103] [cursor=pointer]:
                      - /url: /gaming-laptops/razer-blade-18
                    - link "Buy" [ref=e104] [cursor=pointer]:
                      - /url: /gaming-laptops/razer-blade-18/buy
              - group "banner" [ref=e105]:
                - link [ref=e106]:
                  - /url: /campaigns/nvidia-game-bundle
                - generic [ref=e108]:
                  - heading "RAZER X 007 FIRST LIGHT" [level=2] [ref=e109]
                  - paragraph [ref=e110]: ACTIVATE YOUR FIELD INSTINCTS
                  - generic [ref=e111]:
                    - link "Razer Blade" [ref=e112] [cursor=pointer]:
                      - /url: /campaigns/nvidia-game-bundle
                    - link "Sensa HD" [ref=e113] [cursor=pointer]:
                      - /url: /campaigns/007-first-light
            - generic [ref=e118]:
              - generic [ref=e119]:
                - link [ref=e120]:
                  - /url: /store/gaming-chairs
                - generic [ref=e123]:
                  - heading "RAZER GAMING CHAIR SPECIAL" [level=2] [ref=e124]
                  - heading "UNLOCK UP TO $200 OFF NOW" [level=3] [ref=e125]
                - link "Shop Now" [ref=e127]:
                  - /url: /store/gaming-chairs
                  - generic [ref=e128]:
                    - text: Shop Now
                    - generic [ref=e129]: ">"
              - generic [ref=e130]:
                - link [ref=e131]:
                  - /url: /mobile/earbuds/hammerhead-line
                - generic [ref=e134]:
                  - heading "RAZER HAMMERHEAD V3 HYPERSPEED" [level=2] [ref=e135]
                  - heading "ULTRA-LOW LATENCY. ULTIMATE IMMERSION." [level=3] [ref=e136]
                - generic [ref=e137]:
                  - link "Learn More" [ref=e138]:
                    - /url: /mobile/earbuds/hammerhead-line
                    - generic [ref=e139]:
                      - text: Learn More
                      - generic [ref=e140]: ">"
                  - link "Buy" [ref=e141]:
                    - /url: /mobile-earphones/razer-hammerhead-v3-hyperspeed/buy
                    - generic [ref=e142]:
                      - text: Buy
                      - generic [ref=e143]: ">"
              - generic [ref=e144]:
                - link [ref=e145]:
                  - /url: /gaming-mice/razer-orochi-v2
                - generic [ref=e148]:
                  - heading "RAZER OROCHI V2" [level=2] [ref=e149]
                  - heading "OUTLAST AND OUTPLAY" [level=3] [ref=e150]
                - generic [ref=e151]:
                  - link "Learn More" [ref=e152]:
                    - /url: /gaming-mice/razer-orochi-v2
                    - generic [ref=e153]:
                      - text: Learn More
                      - generic [ref=e154]: ">"
                  - link "Buy" [ref=e155]:
                    - /url: /gaming-mice/razer-orochi-v2/buy
                    - generic [ref=e156]:
                      - text: Buy
                      - generic [ref=e157]: ">"
              - generic [ref=e158]:
                - link [ref=e159]:
                  - /url: /collabs/blackpink
                - img "©YG. All Rights Reserved." [ref=e161]
                - generic [ref=e163]:
                  - heading "BLACKPINK X RAZER" [level=2] [ref=e164]
                  - heading "DROPPING MAY 28, 2026, 7PM PDT" [level=3] [ref=e165]
                - link "Learn More" [ref=e167]:
                  - /url: /collabs/blackpink
                  - generic [ref=e168]:
                    - text: Learn More
                    - generic [ref=e169]: ">"
              - generic [ref=e170]:
                - link [ref=e171]:
                  - /url: /gaming-keyboards/razer-huntsman-v3-tenkeyless-8khz
                - generic [ref=e174]:
                  - heading "RAZER HUNTSMAN V3 TENKEYLESS 8KHZ" [level=2] [ref=e175]
                  - heading "FOR THE PRO" [level=3] [ref=e176]
                - generic [ref=e177]:
                  - link "Learn More" [ref=e178]:
                    - /url: /gaming-keyboards/razer-huntsman-v3-tenkeyless-8khz
                    - generic [ref=e179]:
                      - text: Learn More
                      - generic [ref=e180]: ">"
                  - link "Buy" [ref=e181]:
                    - /url: /gaming-keyboards/razer-huntsman-v3-tenkeyless-8khz/buy
                    - generic [ref=e182]:
                      - text: Buy
                      - generic [ref=e183]: ">"
              - generic [ref=e184]:
                - link [ref=e185]:
                  - /url: /collabs/wuthering-waves
                - img "© Kuro Games All Rights Reserved" [ref=e187]
                - generic [ref=e189]:
                  - heading "RAZER | WUTHERING WAVES" [level=2] [ref=e190]
                  - heading "RESONANCE IN HAND" [level=3] [ref=e191]
                - link "Learn More" [ref=e193]:
                  - /url: /collabs/wuthering-waves
                  - generic [ref=e194]:
                    - text: Learn More
                    - generic [ref=e195]: ">"
      - contentinfo [ref=e196]:
        - generic [ref=e201]:
          - generic [ref=e202]:
            - generic [ref=e204]:
              - heading "Shop" [level=2] [ref=e206]
              - list [ref=e208]:
                - listitem [ref=e209]:
                  - link "RazerStores" [ref=e210]:
                    - /url: https://www.razer.com/razerstores
                - listitem [ref=e211]:
                  - link "RazerCafe" [ref=e212]:
                    - /url: https://www.razer.com/razercafe
                - listitem [ref=e213]:
                  - link "Store Locator" [ref=e214]:
                    - /url: https://www.razer.com/store-finder
                - listitem [ref=e215]:
                  - link "Purchase Programs" [ref=e216]:
                    - /url: https://www.razer.com/store/programs
                - listitem [ref=e217]:
                  - link "Bulk Order Program" [ref=e218]:
                    - /url: https://www.razer.com/store/bulk-purchase
                - listitem [ref=e219]:
                  - link "Education" [ref=e220]:
                    - /url: https://www.razer.com/education
                - listitem [ref=e221]:
                  - link "Only at Razer" [ref=e222]:
                    - /url: https://www.razer.com/only-at-razer
                - listitem [ref=e223]:
                  - link "Razer Silver" [ref=e224]:
                    - /url: https://www.razer.com/store/rewards
                - listitem [ref=e225]:
                  - link "Affiliate" [ref=e226]:
                    - /url: https://www.razer.com/affiliate
                - listitem [ref=e227]:
                  - link "Newsletter" [ref=e228]:
                    - /url: https://www.razer.com/newsletter
            - generic [ref=e230]:
              - heading "Explore" [level=2] [ref=e232]
              - list [ref=e234]:
                - listitem [ref=e235]:
                  - link "Technology" [ref=e236]:
                    - /url: https://www.razer.com/technology
                - listitem [ref=e237]:
                  - link "Chroma RGB" [ref=e238]:
                    - /url: https://www.razer.com/chroma
                - listitem [ref=e239]:
                  - link "Concepts" [ref=e240]:
                    - /url: https://www.razer.com/concepts
                - listitem [ref=e241]:
                  - link "Esports" [ref=e242]:
                    - /url: https://www.razer.com/esports
                - listitem [ref=e243]:
                  - link "Collabs" [ref=e244]:
                    - /url: https://www.razer.com/lifestyle/collabs
            - generic [ref=e246]:
              - heading "Support" [level=2] [ref=e248]
              - list [ref=e250]:
                - listitem [ref=e251]:
                  - link "Get Help" [ref=e252]:
                    - /url: https://mysupport.razer.com/?c=us
                - listitem [ref=e253]:
                  - link "Registration & Warranty" [ref=e254]:
                    - /url: https://www.razer.com/product-registration
                - listitem [ref=e255]:
                  - link "RazerStore Support" [ref=e256]:
                    - /url: https://www.razer.com/razerstore-support
                - listitem [ref=e257]:
                  - link "RazerCare" [ref=e258]:
                    - /url: https://www.razer.com/razercare
                - listitem [ref=e259]:
                  - link "Manage Razer ID" [ref=e260]:
                    - /url: https://razerid.razer.com
                - listitem [ref=e261]:
                  - link "Support Videos" [ref=e262]:
                    - /url: https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos
                - listitem [ref=e263]:
                  - link "Recycling Program" [ref=e264]:
                    - /url: https://mysupport.razer.com/app/answers/detail/a_id/5904
                - listitem [ref=e265]:
                  - link "Accessibility Statement" [ref=e266]:
                    - /url: https://www.razer.com/legal/commitment-to-accessibility
            - generic [ref=e268]:
              - heading "Company" [level=2] [ref=e270]
              - list [ref=e272]:
                - listitem [ref=e273]:
                  - link "About Us" [ref=e274]:
                    - /url: https://www.razer.com/about-razer
                - listitem [ref=e275]:
                  - link "Careers" [ref=e276]:
                    - /url: https://careers.razer.com
                - listitem [ref=e277]:
                  - link "Newsroom" [ref=e278]:
                    - /url: https://www.razer.com/newsroom
                - listitem [ref=e279]:
                  - link "zVentures" [ref=e280]:
                    - /url: https://www.zvntrs.com
                - listitem [ref=e281]:
                  - link "Contact Us" [ref=e282]:
                    - /url: https://www.razer.com/contact-us
                - listitem [ref=e283]:
                  - link "AI Gaming Newsletter" [ref=e284]:
                    - /url: https://www.razer.com/newsletter/ai
            - generic [ref=e286]:
              - heading "Follow Us" [level=2] [ref=e288]
              - list [ref=e290]:
                - listitem [ref=e291]:
                  - link "Visit Razer’s Facebook Page" [ref=e292]:
                    - /url: https://www.facebook.com/razer
                    - figure [ref=e293]
                - listitem [ref=e294]:
                  - link "Visit Razer’s Instagram Page" [ref=e295]:
                    - /url: https://www.instagram.com/razer
                    - figure [ref=e296]
                - listitem [ref=e297]:
                  - link "Visit Razer’s Threads Page" [ref=e298]:
                    - /url: https://www.threads.net/@razer
                    - figure [ref=e299]
                - listitem [ref=e300]:
                  - link "Visit Razer’s X Page" [ref=e301]:
                    - /url: https://www.twitter.com/Razer
                    - figure [ref=e302]
                - listitem [ref=e303]:
                  - link "Visit Razer’s YouTube Page" [ref=e304]:
                    - /url: https://www.youtube.com/razer
                    - figure [ref=e305]
                - listitem [ref=e306]:
                  - link "Visit Razer’s TikTok Page" [ref=e307]:
                    - /url: https://www.tiktok.com/@razer
                    - figure [ref=e308]
                - listitem [ref=e309]:
                  - link "Visit Razer’s Twitch Page" [ref=e310]:
                    - /url: https://www.twitch.tv/razer
                    - figure [ref=e311]
                - listitem [ref=e312]:
                  - link "Visit Razer’s Discord Page" [ref=e313]:
                    - /url: https://discord.com/invite/razer
                    - figure [ref=e314]
            - generic [ref=e318]: FOR GAMERS. BY GAMERS.™
          - generic [ref=e322]:
            - generic [ref=e323]:
              - generic [ref=e325]: Copyright © 2026 Razer Inc. All rights reserved.
              - list [ref=e327]:
                - listitem [ref=e328]:
                  - link "Site Map" [ref=e329]:
                    - /url: https://www.razer.com/sitemap
                - listitem [ref=e330]:
                  - text: "|"
                  - link "Legal Terms" [ref=e331]:
                    - /url: https://www.razer.com/legal
                - listitem [ref=e332]:
                  - text: "|"
                  - link "Privacy Policy" [ref=e333]:
                    - /url: https://www.razer.com/legal/customer-privacy-policy
                - listitem [ref=e334]:
                  - text: "|"
                  - button "Cookie Settings" [ref=e335] [cursor=pointer]
            - generic [ref=e337]:
              - text: United States |
              - link "Change Location >" [ref=e338]:
                - /url: /choose-location
    - text: 
```

# Test source

```ts
  1   | const { test, expect } = require("@playwright/test");
  2   | 
  3   | test.describe("Search Module", () => {
  4   |   // Search Icon opens to Search Box
  5   |   test("S1 - Search Icon Opens to Search box", async ({ page }) => {
  6   |     await page.goto("https://www.razer.com/");
  7   | 
  8   |     await page
  9   |       .getByRole("button", {
  10  |         name: "Accept All",
  11  |       })
> 12  |       .click();
      |        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  13  | 
  14  |     await page
  15  |       .getByRole("button", {
  16  |         name: "Search",
  17  |       })
  18  |       .click();
  19  |   });
  20  | 
  21  |   // Search Textbox accepts text
  22  |   test("S2 - Search textbox accepts text", async ({ page }) => {
  23  |     await page.goto("https://www.razer.com/");
  24  | 
  25  |     await page
  26  |       .getByRole("button", {
  27  |         name: "Accept All",
  28  |       })
  29  |       .click();
  30  | 
  31  |     await page
  32  |       .getByRole("button", {
  33  |         name: "Search",
  34  |       })
  35  |       .click();
  36  | 
  37  |     await page
  38  |       .getByRole("textbox", {
  39  |         name: "Search razer.com",
  40  |       })
  41  |       .fill("Blade");
  42  |   });
  43  | 
  44  |   // Search redirects to result page
  45  |   test("S3 - Search textbox redirect to result page", async ({ page }) => {
  46  |     await page.goto("https://www.razer.com/");
  47  | 
  48  |     await page
  49  |       .getByRole("button", {
  50  |         name: "Accept All",
  51  |       })
  52  |       .click();
  53  |     await page
  54  |       .getByRole("button", {
  55  |         name: "Search",
  56  |       })
  57  |       .click();
  58  |     const searchBox = page.getByRole("textbox", {
  59  |       name: "Search razer.com",
  60  |     });
  61  |     await searchBox.fill("BlackShark");
  62  |     await Promise.all([
  63  |       page.waitForURL("**/search/blackshark?sel=products"),
  64  |       searchBox.press("Enter"),
  65  |     ]);
  66  |     await page
  67  |       .getByRole("link", {
  68  |         name: /Razer BlackShark/i,
  69  |       })
  70  |       .first()
  71  |       .click();
  72  |     await expect(page).toHaveURL(/blackshark/i);
  73  |   });
  74  | 
  75  |   test("S4 - Invalid Search Handled Correctly", async ({ page }) => {
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
```