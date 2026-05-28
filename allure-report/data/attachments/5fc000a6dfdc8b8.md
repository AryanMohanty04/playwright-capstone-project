# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 06_storeFunctionality\store.spec.js >> Store Functionalities >> SF_14 - Verify Responsive Layout
- Location: tests\06_storeFunctionality\store.spec.js:225:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Store', exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Store', exact: true })

```

```yaml
- button "Skip to Header"
- button "Skip to Main Content"
- button "Skip to Footer"
- banner:
  - button "Search": 
  - button "Global Navigation Open Menu"
  - link "Razer Homepage":
    - /url: /
    - img "Razer Homepage"
  - button "0 items in cart": 
- main:
  - navigation "Page":
    - list:
      - listitem:
        - link "Laptops":
          - /url: /store/gaming-laptops
      - listitem:
        - link "Mice":
          - /url: /store/gaming-mice
      - listitem:
        - link "Mouse Mats":
          - /url: /store/gaming-mouse-mats
      - listitem:
        - link "Keyboards":
          - /url: /store/gaming-keyboards
      - listitem:
        - link "Controllers":
          - /url: /store/controllers
      - listitem:
        - link "Audio":
          - /url: /store/gaming-audio
      - listitem:
        - link "Chairs":
          - /url: /store/gaming-chairs
      - listitem:
        - link "Content Creation":
          - /url: /store/content-creation
      - listitem:
        - link "Licensed":
          - /url: /store/licensed
      - listitem:
        - link "Apparel & Gear":
          - /url: /store/gaming-gear
      - listitem:
        - link "Gamer Room":
          - /url: /store/gaming-desktops-and-components
      - listitem:
        - link "Gift Card":
          - /url: /gift-cards
  - heading "DISCOVER GEAR FOR GAMERS. BY GAMERS. Razer mice, keyboards, headsets, laptops & more" [level=1]
  - list:
    - listitem:
      - link "Subscribe & Get US$10 Off":
        - /url: /newsletter
    - listitem:
      - link "Find a RazerStore Near You":
        - /url: /razerstores
  - paragraph
  - text: ONLY AT RAZER
  - paragraph: Unlock up to $200 off selected gaming chairs with every order above $150
  - paragraph
  - heading "FRESH OFF THE LINE" [level=2]
  - paragraph: Check out our latest releases to secure the most up-to-date upgrades for your setup
  - region "carousel":
    - text: This is a carousel of products. Use Next and Previous buttons to navigate
    - group "slide 1 of 16":
      - text: ONLY AT RAZER
      - img "Razer Chroma RGB"
      - heading "New Razer Blade 18" [level=3]
      - list
      - button "Key Features"
      - text: "Get Lego Batman: Legacy of the Dark Knight and 007 First Light (worth $139.98) with your purchase."
      - button "View More"
      - paragraph: From US$3,999.99
      - link "BUY - New Razer Blade 18, For US$3,999.99":
        - /url: https://www.razer.com/gaming-laptops/razer-blade-18/RZ09-05827ER3-R3U1
        - text: Buy
  - button "Previous" [disabled]
  - button "Next"
  - heading "BEST SELLERS" [level=2]
  - paragraph: Join the hype train with the hottest products in our arsenal
  - region "carousel":
    - text: This is a carousel of products. Use Next and Previous buttons to navigate
    - group "slide 1 of 6":
      - text: NEW
      - heading "Razer Viper V4 Pro - Black" [level=3]
      - button "Key Features"
      - paragraph: US$159.99
      - link "BUY - Razer Viper V4 Pro - Black, For US$159.99":
        - /url: https://www.razer.com/gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1?cid=ecom_store
        - text: Buy
  - button "Previous" [disabled]
  - button "Next"
  - heading "007 FIRST LIGHT TACTICAL GEAR" [level=2]
  - paragraph: Check out immersive peripherals engineered to keep up during high-stakes missions.
  - link "Shop Gear":
    - /url: /campaigns/007-first-light
  - region "carousel":
    - text: This is a carousel of products. Use Next and Previous buttons to navigate
    - group "slide 1 of 10":
      - text: ONLY AT RAZER
      - img "Razer Chroma RGB"
      - heading "Razer Blade 16" [level=3]
      - list
      - button "Key Features"
      - text: "Get Lego Batman: Legacy of the Dark Knight and 007 First Light (worth $139.98) with your purchase."
      - button "View More"
      - paragraph: From US$4,899.99
      - link "BUY - Razer Blade 16, For US$4,899.99":
        - /url: https://www.razer.com/gaming-laptops/razer-blade-16/RZ09-05819EN4-R3U1
        - text: Buy
  - button "Previous" [disabled]
  - button "Next"
  - region "featured content carousel 1":
    - paragraph: This is a carousel with highlighted items. Use the Previous and Next buttons to browse through 4 slides.
    - group "Slide 1 of 4":
      - img "A young man in a dark jacket aims a gun with a focused expression, with the text \"FIRST LIGHT\" and glowing logos behind him."
      - heading "RAZER X 007 FIRST LIGHT" [level=4]
      - paragraph: ACTIVATE YOUR FIELD INSTINCTS
      - link "Razer Blade >":
        - /url: /campaigns/nvidia-game-bundle
      - link "Sensa HD >":
        - /url: /campaigns/007-first-light
    - group "Slide 2 of 4":
      - img "Three gaming office chairs with black mesh and faux leather, featuring adjustable armrests and headrests, against a plain background."
      - heading "RAZER GAMING CHAIR SPECIAL" [level=4]
      - paragraph: UNLOCK UP TO $200 OFF NOW
    - group "Slide 3 of 4":
      - 'img "A split image of a study desk: left with a whiteboard, calendar, and pens, and right with a gaming laptop, mouse, and RGB lighting."'
      - heading "RAZER BLADE 18" [level=4]
      - paragraph: THE EDGE OF PERFORMANCE FOR GAMERS & AI DEVS
    - group "Slide 4 of 4":
      - img "Steam Deck gaming consoles with screens, controllers, and a box displaying the Steam logo and game artwork, set against a smoky background."
      - heading "RAZER KISHI V3 LINE" [level=4]
      - paragraph: SCORE A STEAM GIFT CARD WITH SELECT MODELS
    - button "Previous slide" [disabled]
    - button "Next slide"
    - paragraph: End of carousel
  - heading "CHAIR BUNDLES" [level=2]
  - paragraph: Discover the perfect support combos that elevate your style or immersion
  - region "carousel":
    - text: This is a carousel of products. Use Next and Previous buttons to navigate
    - group "slide 1 of 5":
      - text: 13% off
      - list "Available in these colors":
        - listitem:
          - button "vvc-l2-color-black-green"
        - listitem:
          - button "vvc-l2-color-pattern-light-gray"
      - heading "Razer Immersive Iskur V2 X Bundle" [level=3]
      - button "Key Features"
      - text: Save $69 on your bundle
      - paragraph:
        - text: "From Current price: US$460.98 Original price:"
        - deletion: US$529.98
      - link "BUY - Razer Immersive Iskur V2 X Bundle, For US$460.98":
        - /url: https://www.razer.com/gaming-chairs/razer-iskur-v2-x/RZHB-260321-01
        - text: Buy
  - button "Previous" [disabled]
  - button "Next"
  - heading "ONLY AT RAZER" [level=2]
  - paragraph: Explore unique products and services only available at our official online store
  - link "View All":
    - /url: /exclusives
  - region "carousel":
    - text: This is a carousel of products. Use Next and Previous buttons to navigate
    - group "slide 1 of 9":
      - text: ONLY AT RAZER
      - img "Razer Chroma RGB"
      - heading "New Razer Blade 18" [level=3]
      - button "Key Features"
      - text: "Get Lego Batman: Legacy of the Dark Knight and 007 First Light (worth $139.98) with your purchase."
      - button "View More"
      - paragraph: From US$3,999.99
      - link "BUY - New Razer Blade 18, For US$3,999.99":
        - /url: https://www.razer.com/gaming-laptops/razer-blade-18/RZ09-05827ER3-R3U1
        - text: Buy
  - button "Previous" [disabled]
  - button "Next"
  - heading "RAZER ESPORTS LINE" [level=2]
  - paragraph: We play to win
  - link "Learn More":
    - /url: /esports-green
  - region "carousel":
    - text: This is a carousel of products. Use Next and Previous buttons to navigate
    - group "slide 1 of 9":
      - text: NEW
      - list "Available in these colors":
        - listitem:
          - button "color-black-240829"
        - listitem:
          - button "color-white-240829"
      - heading "Razer Viper V4 Pro" [level=3]
      - list
      - button "Key Features"
      - paragraph: US$159.99
      - link "BUY - Razer Viper V4 Pro, For US$159.99":
        - /url: https://www.razer.com/gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1
        - text: Buy
  - button "Previous" [disabled]
  - button "Next"
  - heading "SHOP WITH THE UNFAIR ADVANTAGE" [level=2]
  - paragraph:
    - link "Learn More >":
      - /url: /store/why-shop-with-razer
  - list:
    - listitem:
      - group "item":
        - paragraph: Direct Exclusives. Max Rewards.
    - listitem:
      - group "item":
        - paragraph: Peace of Mind Shopping. Priority Support.
    - listitem:
      - group "item":
        - paragraph: Zero Interest. Play Now, Pay Later.
    - listitem:
      - group "item":
        - paragraph: The Real Deal. No Imitations.
    - listitem:
      - group "item":
        - paragraph: RazerCare. Your Gear, Protected.
    - listitem:
      - group "item":
        - paragraph: Razer Programs. Perks & Privileges.
  - heading "GET US$10 OFF YOUR NEXT ORDER" [level=2]
  - text: Sign up for our Razer newsletter to unlock a special discount code for Razer gear and be the first to know about our latest specials and product releases.
  - textbox "Email Address":
    - /placeholder: " "
  - text: Email Address
  - button "Sign up now"
  - text: By signing up, you agree to receive emails from Razer about products, news, events and promotions (including offers and discounts). For more details see our
  - link "Privacy Policy":
    - /url: https://www.razer.com/legal/customer-privacy-policy
  - text: . A minimum spend is required to redeem the discount code.
- contentinfo:
  - button "Shop":
    - heading "Shop" [level=2]
  - button "Explore":
    - heading "Explore" [level=2]
  - button "Support":
    - heading "Support" [level=2]
  - button "Company":
    - heading "Company" [level=2]
  - text: Copyright © 2026 Razer Inc. All rights reserved.
  - list:
    - listitem:
      - link "Site Map":
        - /url: https://www.razer.com/sitemap
    - listitem:
      - text: "|"
      - link "Legal Terms":
        - /url: https://www.razer.com/legal
    - listitem:
      - text: "|"
      - link "Privacy Policy":
        - /url: https://www.razer.com/legal/customer-privacy-policy
    - listitem:
      - text: "|"
      - button "Cookie Settings"
  - text: United States |
  - link "Change Location >":
    - /url: /choose-location
  - text: FOR GAMERS. BY GAMERS.™
  - list:
    - listitem:
      - link "Visit Razer’s Facebook Page":
        - /url: https://www.facebook.com/razer
        - figure
    - listitem:
      - link "Visit Razer’s Instagram Page":
        - /url: https://www.instagram.com/razer
        - figure
    - listitem:
      - link "Visit Razer’s Threads Page":
        - /url: https://www.threads.net/@razer
        - figure
    - listitem:
      - link "Visit Razer’s X Page":
        - /url: https://www.twitter.com/Razer
        - figure
    - listitem:
      - link "Visit Razer’s YouTube Page":
        - /url: https://www.youtube.com/razer
        - figure
    - listitem:
      - link "Visit Razer’s TikTok Page":
        - /url: https://www.tiktok.com/@razer
        - figure
    - listitem:
      - link "Visit Razer’s Twitch Page":
        - /url: https://www.twitch.tv/razer
        - figure
    - listitem:
      - link "Visit Razer’s Discord Page":
        - /url: https://discord.com/invite/razer
        - figure
- textbox
```

# Test source

```ts
  135 |       .getByRole("button", {
  136 |         name: "Close",
  137 |         exact: true,
  138 |       })
  139 |       .click();
  140 | 
  141 |     // Verify Add to Cart button is visible
  142 |     const addToCartBtn = page.getByRole("button", {
  143 |       name: /Add to Cart/i,
  144 |     });
  145 | 
  146 |     // await expect(addToCartBtn).toBeVisible();
  147 | 
  148 |     // Verify correct product URL
  149 |     await expect(page).toHaveURL(/razer-viper-v4-pro/);
  150 |   });
  151 | 
  152 |   test("SF_09 - Verify Product Details Page Navigation", async ({ page }) => {
  153 |     // Open gaming chair page directly
  154 |     await page.goto("https://www.razer.com/gaming-chairs/razer-iskur-v2-x");
  155 | 
  156 |     const closeBtn = page.getByRole("button", {
  157 |       name: "Close",
  158 |       exact: true,
  159 |     });
  160 | 
  161 |     if (await closeBtn.isVisible()) {
  162 |       await closeBtn.click();
  163 |     }
  164 |     await expect(page).toHaveURL(/razer-iskur-v2-x/);
  165 |   });
  166 | 
  167 |   test("SF_10 - Verify Product Page URL", async ({ page }) => {
  168 |     await page
  169 |       .locator(".thumbnail-holder.recommendation-link > img")
  170 |       .first()
  171 |       .click();
  172 | 
  173 |     await expect(page).toHaveURL(/razer-viper-v4-pro/);
  174 |   });
  175 | 
  176 |   test("SF_11 - Verify Breadcrumb Navigation", async ({ page }) => {
  177 |     // Open product page directly
  178 |     await page.goto(
  179 |       "https://www.razer.com/gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1",
  180 |     );
  181 | 
  182 |     // Close popup if visible
  183 |     const closeBtn = page.getByRole("button", {
  184 |       name: /close/i,
  185 |     });
  186 | 
  187 |     if (await closeBtn.isVisible().catch(() => false)) {
  188 |       await closeBtn.click();
  189 |     }
  190 | 
  191 |     // Click breadcrumb/category link
  192 |     await page.goto("https://www.razer.com/pc/gaming-mice");
  193 | 
  194 |     // Verify redirected URL
  195 |     await expect(page).toHaveURL(/gaming-mice/);
  196 |   });
  197 | 
  198 |   test("SF_12 - Verify Store Menu Links", async ({ page }) => {
  199 |     await page
  200 |       .getByRole("link", {
  201 |         name: "Laptops",
  202 |       })
  203 |       .click();
  204 | 
  205 |     await expect(page).toHaveURL(/gaming-laptops/);
  206 |     await page.goto("https://www.razer.com/store");
  207 |     await page
  208 |       .getByRole("link", {
  209 |         name: "Mice",
  210 |       })
  211 |       .click();
  212 |     await expect(page).toHaveURL(/gaming-mice/);
  213 |     await page.goto("https://www.razer.com/store");
  214 |   });
  215 | 
  216 |   test("SF_13 - Verify Footer Links on Store Page", async ({ page }) => {
  217 |     await page
  218 |       .getByRole("link", {
  219 |         name: "Get Help",
  220 |       })
  221 |       .click();
  222 |     await expect(page).toHaveURL(/support|help/);
  223 |   });
  224 | 
  225 |   test("SF_14 - Verify Responsive Layout", async ({ page }) => {
  226 |     await page.setViewportSize({
  227 |       width: 375,
  228 |       height: 812,
  229 |     });
  230 |     await expect(
  231 |       page.getByRole("link", {
  232 |         name: "Store",
  233 |         exact: true,
  234 |       }),
> 235 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  236 |     await expect(page.locator("body")).toBeVisible();
  237 |   });
  238 | 
  239 |   test("SF_15 - Verify Page Load Performance", async ({ page }) => {
  240 | 
  241 |   const startTime = Date.now();
  242 | 
  243 |   await page.goto("https://www.razer.com/store");
  244 | 
  245 |   await page.waitForLoadState("networkidle");
  246 | 
  247 |   const loadTime = Date.now() - startTime;
  248 | 
  249 |   console.log(`Store Page Load Time: ${loadTime} ms`);
  250 | 
  251 |   // Verify load time under 10 seconds
  252 |   expect(loadTime).toBeLessThan(10000);
  253 | 
  254 | });
  255 | });
  256 | 
```