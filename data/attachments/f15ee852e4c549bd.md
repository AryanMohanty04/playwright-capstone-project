# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product_details\productDetails.spec.js >> Product Details >> PD_03 - Product image loads correctly
- Location: tests\product_details\productDetails.spec.js:23:3

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.razer.com/gaming-laptops/razer-blade-18/RZ09-05827ER3-R3U1"
Received: "https://www.razer.com/gaming-laptops/razer-blade-16/RZ09-05819EN4-R3U1"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://www.razer.com/gaming-laptops/razer-blade-16/RZ09-05819EN4-R3U1"

```

```yaml
- button "Skip to Header"
- button "Skip to Main Content"
- button "Skip to Footer"
- banner:
  - navigation "global":
    - list:
      - listitem:
        - link "Razer Homepage":
          - /url: /
          - img "Razer Homepage"
      - listitem:
        - link "Store":
          - /url: https://www.razer.com/store
        - button "Store"
      - listitem:
        - link "PC":
          - /url: https://www.razer.com/pc
        - button "PC"
      - listitem:
        - link "Console":
          - /url: https://www.razer.com/console-gaming
        - button "Console"
      - listitem:
        - link "Mobile":
          - /url: https://www.razer.com/mobile
        - button "Mobile"
      - listitem:
        - link "Furniture & Lifestyle":
          - /url: https://www.razer.com/lifestyle
        - button "Furniture & Lifestyle"
      - listitem:
        - link "Gold & Silver":
          - /url: https://gold.razer.com/us/en
        - button "Gold & Silver"
      - listitem:
        - link "Community":
          - /url: https://www.razer.com/community
        - button "Community"
      - listitem:
        - link "Razer.AI":
          - /url: https://razer.ai
      - listitem:
        - link "Support":
          - /url: https://mysupport.razer.com/
        - button "Support"
      - listitem:
        - button "Search": 
      - listitem:
        - button "0 items in cart": 
- main:
  - heading "Customize your Razer Blade 16" [level=1]:
    - link "Customize your Razer Blade 16":
      - /url: /gaming-laptops/razer-blade-16
  - text: Ultra-thin, ultra powerful 16-inch gaming laptop
  - link "Learn more":
    - /url: /gaming-laptops/razer-blade-16
  - region "Product Gallery Carousel":
    - text: This is a carousel with one large image and a track of thumbnails below. Select any of the image buttons to change the main image above.
    - button "Previous": 
    - button "Image 1 of 6":
      - img "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black -view 1"
    - button "Image 2 of 6":
      - img "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black -view 2"
    - button "Image 3 of 6":
      - img "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black -view 3"
    - button "Image 4 of 6":
      - img "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black -view 4"
    - button "Next": 
    - group "slide 1 of 6":
      - paragraph: ONLY AT RAZER
      - img "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black -view 1"
    - button "View previous product image"
    - button "View next product image"
  - button "View Gallery"
  - link "Get to know Copilot+ PC":
    - /url: https://www.microsoft.com/en-us/windows?r=1
    - img "Get to know Copilot+ PC"
  - heading "Specifications" [level=2]
  - text: Current Combination
  - list:
    - listitem: Processor Intel® Core™ Ultra 9 386H
    - listitem: OS Windows 11 Home
    - listitem: Display 16" QHD+ 240 Hz OLED
    - listitem: Graphic GeForce RTX 5090
    - listitem: RAM & Storage 32 GB 9600 MHz RAM, 2 TB SSD
  - button "View all specifications"
  - list:
    - listitem: Next Business Day Shipping
    - listitem: Risk Free Return
    - listitem: Comprehensive Customer Support
  - dialog "View 3D Tour"
  - group "Gift With Purchase":
    - heading "Gift With Purchase" [level=2]
    - text: Product(s) that come with the purchase of this product
    - heading "PC Game Pass" [level=3]
    - text: worth US$13.99
    - list:
      - listitem: 1 month subscription included in this laptop.
      - listitem: Play hundreds of PC games on your new Razer Blade with 1 month of PC Game Pass.*
    - 'heading "Lego Batman: Legacy of the Dark Knight" [level=3]'
    - text: worth US$69.99
    - list:
      - listitem: Redemption details will be emailed within 20 business days after your product has been received.
    - heading "007 First Light GeForce RTX 50 Series Bundle" [level=3]
    - text: worth US$69.99
    - list:
      - listitem: Redemption details will be emailed within 20 business days after your product has been received.
    - heading "Espresso Command Skin" [level=3]
    - text: worth US$0.00
    - list:
      - listitem: Redemption details will be emailed within 14 business days after your product has been received.
  - group "Color":
    - heading "Color" [level=2]
    - link "Black"
    - text: Black
  - group "OS":
    - heading "OS" [level=2]:
      - button "OS"
    - text: Selected Option Windows 11 Home
  - group "Graphics":
    - heading "Graphics" [level=2]:
      - button "Graphics" [expanded]
    - list:
      - listitem:
        - link "GeForce RTX 5060 (8 GB GDDR7 VRAM) - US$2,500.00"
      - listitem:
        - link "GeForce RTX 5080 (16 GB GDDR7 VRAM) - US$900.00"
      - listitem:
        - link "GeForce RTX 5090 (24 GB GDDR7 VRAM)"
  - group "Display":
    - heading "Display" [level=2]:
      - button "Display"
    - text: Selected Option QHD+ 240 Hz OLED
  - group "Processor":
    - heading "Processor" [level=2]:
      - button "Processor" [expanded]
    - list:
      - listitem:
        - link "Intel® Core™ Ultra 9 386H"
      - listitem:
        - link "AMD Ryzen™ AI 9 365 - US$2,500.00"
  - group "Storage":
    - heading "Storage" [level=2]:
      - button "Storage" [expanded]
    - list:
      - listitem:
        - link "1 TB SSD - US$2,500.00"
      - listitem:
        - link "2 TB SSD"
  - group "Memory":
    - heading "Memory" [level=2]:
      - button "Memory" [expanded]
    - list:
      - listitem:
        - link "16 GB - US$2,500.00"
      - listitem:
        - link "32 GB"
      - listitem:
        - link "64 GB + US$700.00"
  - group "Keyboard Layout":
    - heading "Keyboard Layout" [level=2]:
      - button "Keyboard Layout"
    - text: Selected Option US Layout
  - group "Add RazerCare Protection":
    - heading "Add RazerCare Protection" [level=2]
    - button "Check out the coverage at a glance"
    - button "RazerCare Essential For Blade + US$529.99"
    - button "RazerCare Elite For Blade + US$789.99"
    - button "No, Thank You"
  - group "Top Picks with Your Purchase":
    - heading "Top Picks with Your Purchase" [level=2]
    - group "Addon item":
      - heading "Razer Laptop Cooling Pad" [level=3]:
        - button "Razer Laptop Cooling Pad"
      - link "Learn more":
        - /url: /gaming-laptops-accessories/razer-laptop-cooling-pad/RC21-02300100-R3UC
      - text: US$169.99
    - group "Addon item":
      - heading "Razer Thunderbolt™ 5 Dock Chroma - Black" [level=3]:
        - button "Razer Thunderbolt™ 5 Dock Chroma - Black"
      - link "Learn more":
        - /url: /gaming-pc-accessories/razer-thunderbolt-5-dock/RC21-02290100-R3U1
      - text: from US$389.99
    - group "Addon item":
      - heading "Razer Core X V2" [level=3]:
        - button "Razer Core X V2"
      - link "Learn more":
        - /url: /gaming-egpus/razer-core-x-v2/RC21-02270200-R3U1
      - text: US$349.99
    - group "Addon item":
      - heading "Razer Adjustable Laptop Stand - Black" [level=3]:
        - button "Razer Adjustable Laptop Stand - Black"
      - link "Learn more":
        - /url: /gaming-laptops-accessories/razer-adjustable-laptop-stand/RC21-02330100-R3U1
      - text: from US$99.99
    - group "Addon item":
      - heading "Razer Power Adapter - 280W" [level=3]:
        - button "Razer Power Adapter - 280W"
      - link "Learn more":
        - /url: /gaming-laptops-accessories/razer-280w-power-adapter/RC30-05280200-B3U1
      - text: US$199.99
  - region "Add to cart":
    - text: Earn up to 245,000
    - link "Join Now":
      - /url: "#"
    - heading "Order now, delivered by:" [level=2]
    - paragraph: Jun 01 - Jun 02 — Free
    - button "View Delivery Options"
    - heading "Pickup at RazerStore:" [level=2]
    - paragraph: Available stock(s) in 7 RazerStore(s)
    - button "View Location(s)"
    - tooltip "Our Direct-to-Gamer pricing delivers exclusive value–available only when you buy direct from us"
    - text: "Product price: US$4,899.99"
    - paragraph:
      - text: Starting at $205/mo or 0% APR with Affirm  .
      - link "Learn more - Learn more about Affirm Financing (opens in modal)":
        - /url: javascript:void(0)
        - text: Learn more
    - button "Add to Cart - Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black. For US$4,899.99": Add to cart
    - text: Our Direct-to-Gamer pricing delivers exclusive value–available only when you buy direct from us
  - region "product recommendation carousel":
    - text: This is a carousel. Use Next and Previous buttons to navigate, or jump to a slide using the slide dots.
    - heading "FREQUENTLY BOUGHT TOGETHER" [level=2]
    - group "Product 1 of 5":
      - heading "Razer Huntsman V3 Tenkeyless 8KHz - US" [level=3]
      - text: "Product price: US$169.99"
      - link "View details":
        - /url: /gaming-keyboards/razer-huntsman-v3-tenkeyless-8khz/RZ03-05750200-R3U1
      - button "Add to Cart - Razer Huntsman V3 Tenkeyless 8KHz - US. For US$169.99": Add
    - group "Product 2 of 5":
      - heading "Razer Atlas Pro - Black" [level=3]
      - text: "Product price: US$129.99"
      - link "View details":
        - /url: /gaming-mouse-mats/razer-atlas-pro/RZ02-05760100-R3U1
      - button "Add to Cart - Razer Atlas Pro - Black. For US$129.99": Add
    - group "Product 3 of 5":
      - heading "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black" [level=3]
      - text: "Product price: US$5,599.99"
      - link "View details":
        - /url: /gaming-laptops/razer-blade-16/RZ09-05819EN9-R3U1
      - button "Add to Cart - Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black. For US$5,599.99": Add
    - group "Product 4 of 5":
      - heading "Razer Viper V4 Pro - Black" [level=3]
      - text: "Product price: US$159.99"
      - link "View details":
        - /url: /gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1
      - button "Add to Cart - Razer Viper V4 Pro - Black. For US$159.99": Add
    - group "Product 5 of 5":
      - heading "Razer Gigantus V2 Pro - NiKo Edition" [level=3]
      - text: "Product price: US$69.99"
      - link "View details":
        - /url: /gaming-mouse-mats/razer-gigantus-v2-pro/RZ02-05491300-R3U1
      - button "Add to Cart - Razer Gigantus V2 Pro - NiKo Edition. For US$69.99": Add
    - button "Previous" [disabled]
    - button "Next"
- contentinfo:
  - heading "Shop" [level=2]
  - list:
    - listitem:
      - link "RazerStores":
        - /url: https://www.razer.com/razerstores
    - listitem:
      - link "RazerCafe":
        - /url: https://www.razer.com/razercafe
    - listitem:
      - link "Store Locator":
        - /url: https://www.razer.com/store-finder
    - listitem:
      - link "Purchase Programs":
        - /url: https://www.razer.com/store/programs
    - listitem:
      - link "Bulk Order Program":
        - /url: https://www.razer.com/store/bulk-purchase
    - listitem:
      - link "Education":
        - /url: https://www.razer.com/education
    - listitem:
      - link "Only at Razer":
        - /url: https://www.razer.com/only-at-razer
    - listitem:
      - link "Razer Silver":
        - /url: https://www.razer.com/store/rewards
    - listitem:
      - link "Affiliate":
        - /url: https://www.razer.com/affiliate
    - listitem:
      - link "Newsletter":
        - /url: https://www.razer.com/newsletter
  - heading "Explore" [level=2]
  - list:
    - listitem:
      - link "Technology":
        - /url: https://www.razer.com/technology
    - listitem:
      - link "Chroma RGB":
        - /url: https://www.razer.com/chroma
    - listitem:
      - link "Concepts":
        - /url: https://www.razer.com/concepts
    - listitem:
      - link "Esports":
        - /url: https://www.razer.com/esports
    - listitem:
      - link "Collabs":
        - /url: https://www.razer.com/lifestyle/collabs
  - heading "Support" [level=2]
  - list:
    - listitem:
      - link "Get Help":
        - /url: https://mysupport.razer.com/?c=us
    - listitem:
      - link "Registration & Warranty":
        - /url: https://www.razer.com/product-registration
    - listitem:
      - link "RazerStore Support":
        - /url: https://www.razer.com/razerstore-support
    - listitem:
      - link "RazerCare":
        - /url: https://www.razer.com/razercare
    - listitem:
      - link "Manage Razer ID":
        - /url: https://razerid.razer.com
    - listitem:
      - link "Support Videos":
        - /url: https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos
    - listitem:
      - link "Recycling Program":
        - /url: https://mysupport.razer.com/app/answers/detail/a_id/5904
    - listitem:
      - link "Accessibility Statement":
        - /url: https://www.razer.com/legal/commitment-to-accessibility
  - heading "Company" [level=2]
  - list:
    - listitem:
      - link "About Us":
        - /url: https://www.razer.com/about-razer
    - listitem:
      - link "Careers":
        - /url: https://careers.razer.com
    - listitem:
      - link "Newsroom":
        - /url: https://www.razer.com/newsroom
    - listitem:
      - link "zVentures":
        - /url: https://www.zvntrs.com
    - listitem:
      - link "Contact Us":
        - /url: https://www.razer.com/contact-us
    - listitem:
      - link "AI Gaming Newsletter":
        - /url: https://www.razer.com/newsletter/ai
  - heading "Follow Us" [level=2]
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
  - text: FOR GAMERS. BY GAMERS.™ Copyright © 2026 Razer Inc. All rights reserved.
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
- textbox
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | 
  3  | test.describe("Product Details", () => {
  4  |   //Product details page loads corrects
  5  |   test("PD_01 Store Page loads correctly", async ({ page }) => {
  6  |     await page.goto("https://www.razer.com/store");
  7  |     await page.getByRole("button", { name: "Accept All" }).click();
  8  |     await page.getByRole("link", { name: "Store", exact: true }).click();
  9  |     await expect(page).toHaveURL("https://www.razer.com/store");
  10 |   });
  11 | 
  12 |   //
  13 |   test("PD_02 - Store Page Shows Products Correctly",async ({page}) => {
  14 |     await page.goto('https://www.razer.com/');
  15 |   await page.getByRole('button', { name: 'Accept All' }).click();
  16 |   await page.getByRole('link', { name: 'Store', exact: true }).click();
  17 |   await page.getByRole('heading', { name: 'BEST SELLERS' }).click();
  18 |   await page.getByRole('link', { name: 'BUY - Razer Viper V4 Pro -' }).click();
  19 |   await page.getByRole('button', { name: 'Close' }).click();
  20 |   await expect(page).toHaveURL("https://www.razer.com/gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1?cid=ecom_store");
  21 |   })
  22 |  
  23 |   test('PD_03 - Product image loads correctly', async ({ page }) => {
  24 |   await page.goto('https://www.razer.com/');
  25 |   await page.getByRole('button', { name: 'Accept All' }).click();
  26 |   await page.getByRole('link', { name: 'Store', exact: true }).click();
  27 |   await page.locator('.thumbnail-holder > img').first().click();
  28 |   await page.getByRole('button', { name: 'Close' }).click();
> 29 |   await expect(page).toHaveURL("https://www.razer.com/gaming-laptops/razer-blade-18/RZ09-05827ER3-R3U1");
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  30 | });
  31 | 
  32 | }) ;
  33 | 
```