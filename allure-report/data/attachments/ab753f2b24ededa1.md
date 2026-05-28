# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_management\cart_management.spec.js >> Cart Management Module >> CT_04 - Verify Product Details in Cart
- Location: tests\cart_management\cart_management.spec.js:80:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Add to Cart - Razer Blade 18' }) to be visible

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
              - generic [ref=e49]: 
              - text:  ❮  
            - listitem [ref=e50]:
              - generic [ref=e52]: 
              - text: 
      - main [ref=e53]:
        - generic [ref=e54]:
          - generic [ref=e55]:
            - generic [ref=e56]:
              - generic [ref=e57]:
                - generic [ref=e58]:
                  - heading "Customize your Razer Blade 18" [level=1] [ref=e59]:
                    - link "Customize your Razer Blade 18" [ref=e60] [cursor=pointer]:
                      - /url: /gaming-laptops/razer-blade-18
                  - generic [ref=e61]:
                    - text: 18-Inch Gaming & AI Development Laptop
                    - link "Learn more" [ref=e62] [cursor=pointer]:
                      - /url: /gaming-laptops/razer-blade-18
                      - text: Learn more >
                  - generic [ref=e63]:
                    - region "Product Gallery Carousel" [ref=e65]:
                      - generic [ref=e66]: This is a carousel with one large image and a track of thumbnails below. Select any of the image buttons to change the main image above.
                      - generic [ref=e67]:
                        - button "Previous" [ref=e68] [cursor=pointer]: 
                        - button "Image 1 of 6" [ref=e69] [cursor=pointer]:
                          - img "Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5070 Ti - Black -view 1" [ref=e70]
                        - button "Image 2 of 6" [ref=e71] [cursor=pointer]:
                          - img "Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5070 Ti - Black -view 2" [ref=e72]
                        - button "Image 3 of 6" [ref=e73] [cursor=pointer]:
                          - img "Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5070 Ti - Black -view 3" [ref=e74]
                        - button "Image 4 of 6" [ref=e75] [cursor=pointer]:
                          - img "Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5070 Ti - Black -view 4" [ref=e76]
                        - button "Next" [ref=e77] [cursor=pointer]: 
                      - group "slide 1 of 6" [ref=e78]:
                        - paragraph [ref=e80]: ONLY AT RAZER
                        - img "Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5070 Ti - Black -view 1" [ref=e81]
                      - button "View previous product image" [ref=e82] [cursor=pointer]:
                        - generic [ref=e84]: 
                      - button "View next product image" [ref=e85] [cursor=pointer]:
                        - generic [ref=e87]: 
                    - button "View Gallery" [ref=e90] [cursor=pointer]
                - link "Get to know Windows 11 devices" [ref=e94] [cursor=pointer]:
                  - /url: https://www.microsoft.com/en-us/windows?r=1
                  - img "Get to know Windows 11 devices" [ref=e95]
                - generic [ref=e96]:
                  - generic [ref=e97]:
                    - heading "Specifications" [level=2] [ref=e98]
                    - generic [ref=e99]:
                      - generic [ref=e100]: Current Combination
                      - list [ref=e101]:
                        - listitem [ref=e102]:
                          - generic [ref=e103]: Processor
                          - generic [ref=e104]: Intel® Core™ Ultra 9 290HX Plus
                        - listitem [ref=e105]:
                          - generic [ref=e106]: OS
                          - generic [ref=e107]: Windows 11 Home
                        - listitem [ref=e108]:
                          - generic [ref=e109]: Display
                          - generic [ref=e110]: 18" Dual UHD+ 240 Hz | FHD+ 440 Hz
                        - listitem [ref=e111]:
                          - generic [ref=e112]: Graphic
                          - generic [ref=e113]: GeForce RTX 5070 Ti
                        - listitem [ref=e114]:
                          - generic [ref=e115]: RAM & Storage
                          - generic [ref=e116]: 32 GB 6400 MHz RAM, 1 TB SSD
                    - button "View all specifications" [ref=e117] [cursor=pointer]
                  - generic "payment-icon-container" [ref=e120]:
                    - list [ref=e121]:
                      - listitem [ref=e122]:
                        - generic [ref=e123]: Next Business Day Shipping
                      - listitem [ref=e124]:
                        - generic [ref=e125]: Risk Free Return
                      - listitem [ref=e126]:
                        - generic [ref=e127]: Comprehensive Customer Support
              - dialog "View 3D Tour"
              - text: 
            - generic [ref=e128]:
              - generic [ref=e130]:
                - group "Gift With Purchase" [ref=e133]:
                  - heading "Gift With Purchase" [level=2] [ref=e134]
                  - generic [ref=e135]: Product(s) that come with the purchase of this product
                  - generic [ref=e140]:
                    - heading "007 First Light GeForce RTX 50 Series Bundle" [level=3] [ref=e141]
                    - generic [ref=e142]: worth US$69.99
                    - list [ref=e143]:
                      - listitem [ref=e144]: Redemption details will be emailed within 20 business days after your product has been received.
                  - generic [ref=e149]:
                    - 'heading "Lego Batman: Legacy of the Dark Knight" [level=3] [ref=e150]'
                    - generic [ref=e151]: worth US$69.99
                    - list [ref=e152]:
                      - listitem [ref=e153]: Redemption details will be emailed within 20 business days after your product has been received.
                  - generic [ref=e158]:
                    - heading "PC Game Pass" [level=3] [ref=e159]
                    - generic [ref=e160]: worth US$13.99
                    - list [ref=e161]:
                      - listitem [ref=e162]: 1 month subscription included in this laptop.
                      - listitem [ref=e163]: Play hundreds of PC games on your new Razer Blade with 1 month of PC Game Pass.*
                - group "Color" [ref=e164]:
                  - heading "Color" [level=2] [ref=e165]:
                    - generic [ref=e166]: Color
                  - generic [ref=e167]:
                    - link "Black"
                    - generic:
                      - generic: Black
                - group "OS" [ref=e168]:
                  - heading "OS" [level=2] [ref=e169]:
                    - button "OS" [ref=e170] [cursor=pointer]:
                      - generic [ref=e171]: 
                      - text: OS
                  - generic [ref=e173]:
                    - generic [ref=e174]: Selected Option
                    - text: Windows 11 Home
                - group "Graphics" [ref=e175]:
                  - heading "Graphics" [level=2] [ref=e176]:
                    - button "Graphics" [expanded] [ref=e177] [cursor=pointer]:
                      - generic [ref=e178]: 
                      - text: Graphics
                  - list [ref=e180]:
                    - listitem:
                      - link "GeForce RTX 5070 Ti (12 GB GDDR7 VRAM)":
                        - generic: GeForce RTX 5070 Ti (12 GB GDDR7 VRAM)
                    - listitem [ref=e181]:
                      - link "GeForce RTX 5080 (16 GB GDDR7 VRAM)" [ref=e182] [cursor=pointer]:
                        - generic [ref=e183]: GeForce RTX 5080 (16 GB GDDR7 VRAM)
                    - listitem [ref=e185]:
                      - link "GeForce RTX 5090 (24 GB GDDR7 VRAM)" [ref=e186] [cursor=pointer]:
                        - generic [ref=e187]: GeForce RTX 5090 (24 GB GDDR7 VRAM)
                - group "Display" [ref=e191]:
                  - heading "Display" [level=2] [ref=e192]:
                    - button "Display" [ref=e193] [cursor=pointer]:
                      - generic [ref=e194]: 
                      - text: Display
                  - generic [ref=e196]:
                    - generic [ref=e197]: Selected Option
                    - text: Dual UHD+ 240 Hz | FHD+ 440 Hz
                - group "Processor" [ref=e198]:
                  - heading "Processor" [level=2] [ref=e199]:
                    - button "Processor" [expanded] [ref=e200] [cursor=pointer]:
                      - generic [ref=e201]: 
                      - text: Processor
                  - list [ref=e203]:
                    - listitem:
                      - link "Intel® Core™ Ultra 9 290HX Plus":
                        - generic: Intel® Core™ Ultra 9 290HX Plus
                    - listitem [ref=e204]:
                      - link "Intel® Core™ Ultra 9 275HX" [ref=e205] [cursor=pointer]:
                        - generic [ref=e206]: Intel® Core™ Ultra 9 275HX
                - group "Storage" [ref=e208]:
                  - heading "Storage" [level=2] [ref=e209]:
                    - button "Storage" [expanded] [ref=e210] [cursor=pointer]:
                      - generic [ref=e211]: 
                      - text: Storage
                  - list [ref=e213]:
                    - listitem:
                      - link "1 TB SSD":
                        - generic: 1 TB SSD
                    - listitem [ref=e214]:
                      - link "2 TB SSD" [ref=e215] [cursor=pointer]:
                        - generic [ref=e216]: 2 TB SSD
                - group "Memory" [ref=e220]:
                  - heading "Memory" [level=2] [ref=e221]:
                    - button "Memory" [expanded] [ref=e222] [cursor=pointer]:
                      - generic [ref=e223]: 
                      - text: Memory
                  - list [ref=e225]:
                    - listitem:
                      - link "32 GB":
                        - generic: 32 GB
                    - listitem [ref=e226]:
                      - link "64 GB" [ref=e227] [cursor=pointer]:
                        - generic [ref=e228]: 64 GB
                    - listitem [ref=e232]:
                      - link "128 GB" [ref=e233] [cursor=pointer]:
                        - generic [ref=e234]: 128 GB
                - group "Keyboard Layout" [ref=e238]:
                  - heading "Keyboard Layout" [level=2] [ref=e239]:
                    - button "Keyboard Layout" [ref=e240] [cursor=pointer]:
                      - generic [ref=e241]: 
                      - text: Keyboard Layout
                  - generic [ref=e243]:
                    - generic [ref=e244]: Selected Option
                    - text: US Layout
              - group "Add RazerCare Protection" [ref=e247]:
                - heading "Add RazerCare Protection" [level=2] [ref=e248]
                - button "Check out the coverage at a glance" [ref=e249] [cursor=pointer]
                - button "RazerCare Essential For Blade + US$529.99" [ref=e251] [cursor=pointer]:
                  - generic [ref=e252]: RazerCare Essential For Blade
                  - generic [ref=e253]: + US$529.99
                - button "RazerCare Elite For Blade + US$789.99" [ref=e255] [cursor=pointer]:
                  - generic [ref=e256]: RazerCare Elite For Blade
                  - generic [ref=e257]: + US$789.99
                - button "No, Thank You" [ref=e259] [cursor=pointer]:
                  - generic [ref=e260]: No, Thank You
              - group "Top Picks with Your Purchase" [ref=e263]:
                - heading "Top Picks with Your Purchase" [level=2] [ref=e264]
                - generic [ref=e265]:
                  - group "Addon item" [ref=e266]:
                    - generic [ref=e267] [cursor=pointer]:
                      - generic [ref=e271]:
                        - heading "Razer Laptop Cooling Pad" [level=3] [ref=e272]:
                          - button "Razer Laptop Cooling Pad" [ref=e273]
                        - link "Learn more" [ref=e274]:
                          - /url: /gaming-laptops-accessories/razer-laptop-cooling-pad/RC21-02300100-R3UC
                          - text: Learn more
                      - generic [ref=e277]: US$169.99
                  - group "Addon item" [ref=e278]:
                    - generic [ref=e279] [cursor=pointer]:
                      - generic [ref=e283]:
                        - heading "Razer Thunderbolt™ 5 Dock Chroma - Black" [level=3] [ref=e284]:
                          - button "Razer Thunderbolt™ 5 Dock Chroma - Black" [ref=e285]
                        - link "Learn more" [ref=e286]:
                          - /url: /gaming-pc-accessories/razer-thunderbolt-5-dock/RC21-02290100-R3U1
                          - text: Learn more
                      - generic [ref=e289]: from US$389.99
                  - group "Addon item" [ref=e290]:
                    - generic [ref=e291] [cursor=pointer]:
                      - generic [ref=e295]:
                        - heading "Razer Core X V2" [level=3] [ref=e296]:
                          - button "Razer Core X V2" [ref=e297]
                        - link "Learn more" [ref=e298]:
                          - /url: /gaming-egpus/razer-core-x-v2/RC21-02270200-R3U1
                          - text: Learn more
                      - generic [ref=e301]: US$349.99
                  - group "Addon item" [ref=e302]:
                    - generic [ref=e303] [cursor=pointer]:
                      - generic [ref=e307]:
                        - heading "Razer Adjustable Laptop Stand - Black" [level=3] [ref=e308]:
                          - button "Razer Adjustable Laptop Stand - Black" [ref=e309]
                        - link "Learn more" [ref=e310]:
                          - /url: /gaming-laptops-accessories/razer-adjustable-laptop-stand/RC21-02330100-R3U1
                          - text: Learn more
                      - generic [ref=e313]: from US$99.99
                  - group "Addon item" [ref=e314]:
                    - generic [ref=e315] [cursor=pointer]:
                      - generic [ref=e319]:
                        - heading "Razer Power Adapter - 400W" [level=3] [ref=e320]:
                          - button "Razer Power Adapter - 400W" [ref=e321]
                        - link "Learn more" [ref=e322]:
                          - /url: /gaming-laptops-accessories/razer-400w-power-adapter/RC30-05290200-B3U1
                          - text: Learn more
                      - generic [ref=e325]: US$339.99
            - region "Add to cart" [ref=e328]:
              - generic [ref=e331]:
                - generic [ref=e332]:
                  - text: Earn up to
                  - text: 200,000
                - link "Join Now" [ref=e334] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e335]:
                - generic [ref=e337]:
                  - generic [ref=e338]:
                    - heading "Order now, delivered by:" [level=2] [ref=e340]
                    - paragraph [ref=e341]:
                      - generic [ref=e342]: Jun 02 - Jun 03 — Free
                  - button "View Delivery Options" [ref=e343] [cursor=pointer]
                - generic [ref=e345]:
                  - generic [ref=e346]:
                    - heading "Pickup at RazerStore:" [level=2] [ref=e348]
                    - paragraph [ref=e349]: Available stock(s) in 9 RazerStore(s)
                  - button "View Location(s)" [ref=e350] [cursor=pointer]
              - generic [ref=e352]:
                - generic [ref=e353]:
                  - tooltip "Our Direct-to-Gamer pricing delivers exclusive value–available only when you buy direct from us":
                    - generic [ref=e354]: Our Direct-to-Gamer pricing delivers exclusive value–available only when you buy direct from us
                  - generic [ref=e356]:
                    - generic [ref=e357]: "Product price:"
                    - text: US$3,999.99
                - generic:
                  - generic:
                    - generic:
                      - paragraph
              - generic [ref=e358]:
                - button "Add to Cart - Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5070 Ti - Black. For US$3,999.99" [ref=e360] [cursor=pointer]: Add to cart
                - generic [ref=e362]: Our Direct-to-Gamer pricing delivers exclusive value–available only when you buy direct from us
          - region "product recommendation carousel" [ref=e367]:
            - generic [ref=e368]: This is a carousel. Use Next and Previous buttons to navigate, or jump to a slide using the slide dots.
            - heading "FREQUENTLY BOUGHT TOGETHER" [level=2] [ref=e369]
            - generic [ref=e370]:
              - group "Product 1 of 5" [ref=e371]:
                - generic [ref=e373]:
                  - generic [ref=e374]:
                    - heading "Razer Huntsman V3 Tenkeyless 8KHz - US" [level=3] [ref=e375]
                    - generic [ref=e376]:
                      - generic [ref=e380]:
                        - generic [ref=e381]: "Product price:"
                        - text: US$169.99
                      - link "View details" [ref=e383] [cursor=pointer]:
                        - /url: /gaming-keyboards/razer-huntsman-v3-tenkeyless-8khz/RZ03-05750200-R3U1
                  - button "Add to Cart - Razer Huntsman V3 Tenkeyless 8KHz - US. For US$169.99" [ref=e385] [cursor=pointer]: Add
              - group "Product 2 of 5" [ref=e386]:
                - generic [ref=e388]:
                  - generic [ref=e389]:
                    - heading "Razer Atlas Pro - Black" [level=3] [ref=e390]
                    - generic [ref=e391]:
                      - generic [ref=e395]:
                        - generic [ref=e396]: "Product price:"
                        - text: US$129.99
                      - link "View details" [ref=e398] [cursor=pointer]:
                        - /url: /gaming-mouse-mats/razer-atlas-pro/RZ02-05760100-R3U1
                  - button "Add to Cart - Razer Atlas Pro - Black. For US$129.99" [ref=e400] [cursor=pointer]: Add
              - group "Product 3 of 5" [ref=e401]:
                - generic [ref=e403]:
                  - generic [ref=e404]:
                    - heading "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black" [level=3] [ref=e405]
                    - generic [ref=e406]:
                      - generic [ref=e410]:
                        - generic [ref=e411]: "Product price:"
                        - text: US$5,599.99
                      - link "View details" [ref=e413] [cursor=pointer]:
                        - /url: /gaming-laptops/razer-blade-16/RZ09-05819EN9-R3U1
                  - button "Add to Cart - Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black. For US$5,599.99" [ref=e415] [cursor=pointer]: Add
              - group "Product 4 of 5" [ref=e416]:
                - generic [ref=e418]:
                  - generic [ref=e419]:
                    - heading "Razer Viper V4 Pro - Black" [level=3] [ref=e420]
                    - generic [ref=e421]:
                      - generic [ref=e425]:
                        - generic [ref=e426]: "Product price:"
                        - text: US$159.99
                      - link "View details" [ref=e428] [cursor=pointer]:
                        - /url: /gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1
                  - button "Add to Cart - Razer Viper V4 Pro - Black. For US$159.99" [ref=e430] [cursor=pointer]: Add
              - group "Product 5 of 5" [ref=e431]:
                - generic [ref=e433]:
                  - generic [ref=e434]:
                    - heading "Razer Gigantus V2 Pro - NiKo Edition" [level=3] [ref=e435]
                    - generic [ref=e436]:
                      - generic [ref=e440]:
                        - generic [ref=e441]: "Product price:"
                        - text: US$69.99
                      - link "View details" [ref=e443] [cursor=pointer]:
                        - /url: /gaming-mouse-mats/razer-gigantus-v2-pro/RZ02-05491300-R3U1
                  - button "Add to Cart - Razer Gigantus V2 Pro - NiKo Edition. For US$69.99" [ref=e445] [cursor=pointer]: Add
            - generic [ref=e446]:
              - button "Previous" [disabled]
              - button "Next" [ref=e447] [cursor=pointer]
      - contentinfo [ref=e448]:
        - generic [ref=e453]:
          - generic [ref=e454]:
            - generic [ref=e456]:
              - heading "Shop" [level=2] [ref=e458]
              - list [ref=e460]:
                - listitem [ref=e461]:
                  - link "RazerStores" [ref=e462] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstores
                - listitem [ref=e463]:
                  - link "RazerCafe" [ref=e464] [cursor=pointer]:
                    - /url: https://www.razer.com/razercafe
                - listitem [ref=e465]:
                  - link "Store Locator" [ref=e466] [cursor=pointer]:
                    - /url: https://www.razer.com/store-finder
                - listitem [ref=e467]:
                  - link "Purchase Programs" [ref=e468] [cursor=pointer]:
                    - /url: https://www.razer.com/store/programs
                - listitem [ref=e469]:
                  - link "Bulk Order Program" [ref=e470] [cursor=pointer]:
                    - /url: https://www.razer.com/store/bulk-purchase
                - listitem [ref=e471]:
                  - link "Education" [ref=e472] [cursor=pointer]:
                    - /url: https://www.razer.com/education
                - listitem [ref=e473]:
                  - link "Only at Razer" [ref=e474] [cursor=pointer]:
                    - /url: https://www.razer.com/only-at-razer
                - listitem [ref=e475]:
                  - link "Razer Silver" [ref=e476] [cursor=pointer]:
                    - /url: https://www.razer.com/store/rewards
                - listitem [ref=e477]:
                  - link "Affiliate" [ref=e478] [cursor=pointer]:
                    - /url: https://www.razer.com/affiliate
                - listitem [ref=e479]:
                  - link "Newsletter" [ref=e480] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter
            - generic [ref=e482]:
              - heading "Explore" [level=2] [ref=e484]
              - list [ref=e486]:
                - listitem [ref=e487]:
                  - link "Technology" [ref=e488] [cursor=pointer]:
                    - /url: https://www.razer.com/technology
                - listitem [ref=e489]:
                  - link "Chroma RGB" [ref=e490] [cursor=pointer]:
                    - /url: https://www.razer.com/chroma
                - listitem [ref=e491]:
                  - link "Concepts" [ref=e492] [cursor=pointer]:
                    - /url: https://www.razer.com/concepts
                - listitem [ref=e493]:
                  - link "Esports" [ref=e494] [cursor=pointer]:
                    - /url: https://www.razer.com/esports
                - listitem [ref=e495]:
                  - link "Collabs" [ref=e496] [cursor=pointer]:
                    - /url: https://www.razer.com/lifestyle/collabs
            - generic [ref=e498]:
              - heading "Support" [level=2] [ref=e500]
              - list [ref=e502]:
                - listitem [ref=e503]:
                  - link "Get Help" [ref=e504] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/?c=us
                - listitem [ref=e505]:
                  - link "Registration & Warranty" [ref=e506] [cursor=pointer]:
                    - /url: https://www.razer.com/product-registration
                - listitem [ref=e507]:
                  - link "RazerStore Support" [ref=e508] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstore-support
                - listitem [ref=e509]:
                  - link "RazerCare" [ref=e510] [cursor=pointer]:
                    - /url: https://www.razer.com/razercare
                - listitem [ref=e511]:
                  - link "Manage Razer ID" [ref=e512] [cursor=pointer]:
                    - /url: https://razerid.razer.com
                - listitem [ref=e513]:
                  - link "Support Videos" [ref=e514] [cursor=pointer]:
                    - /url: https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos
                - listitem [ref=e515]:
                  - link "Recycling Program" [ref=e516] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/app/answers/detail/a_id/5904
                - listitem [ref=e517]:
                  - link "Accessibility Statement" [ref=e518] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/commitment-to-accessibility
            - generic [ref=e520]:
              - heading "Company" [level=2] [ref=e522]
              - list [ref=e524]:
                - listitem [ref=e525]:
                  - link "About Us" [ref=e526] [cursor=pointer]:
                    - /url: https://www.razer.com/about-razer
                - listitem [ref=e527]:
                  - link "Careers" [ref=e528] [cursor=pointer]:
                    - /url: https://careers.razer.com
                - listitem [ref=e529]:
                  - link "Newsroom" [ref=e530] [cursor=pointer]:
                    - /url: https://www.razer.com/newsroom
                - listitem [ref=e531]:
                  - link "zVentures" [ref=e532] [cursor=pointer]:
                    - /url: https://www.zvntrs.com
                - listitem [ref=e533]:
                  - link "Contact Us" [ref=e534] [cursor=pointer]:
                    - /url: https://www.razer.com/contact-us
                - listitem [ref=e535]:
                  - link "AI Gaming Newsletter" [ref=e536] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter/ai
            - generic [ref=e538]:
              - heading "Follow Us" [level=2] [ref=e540]
              - list [ref=e542]:
                - listitem [ref=e543]:
                  - link "Visit Razer’s Facebook Page" [ref=e544] [cursor=pointer]:
                    - /url: https://www.facebook.com/razer
                    - figure [ref=e545]
                - listitem [ref=e546]:
                  - link "Visit Razer’s Instagram Page" [ref=e547] [cursor=pointer]:
                    - /url: https://www.instagram.com/razer
                    - figure [ref=e548]
                - listitem [ref=e549]:
                  - link "Visit Razer’s Threads Page" [ref=e550] [cursor=pointer]:
                    - /url: https://www.threads.net/@razer
                    - figure [ref=e551]
                - listitem [ref=e552]:
                  - link "Visit Razer’s X Page" [ref=e553] [cursor=pointer]:
                    - /url: https://www.twitter.com/Razer
                    - figure [ref=e554]
                - listitem [ref=e555]:
                  - link "Visit Razer’s YouTube Page" [ref=e556] [cursor=pointer]:
                    - /url: https://www.youtube.com/razer
                    - figure [ref=e557]
                - listitem [ref=e558]:
                  - link "Visit Razer’s TikTok Page" [ref=e559] [cursor=pointer]:
                    - /url: https://www.tiktok.com/@razer
                    - figure [ref=e560]
                - listitem [ref=e561]:
                  - link "Visit Razer’s Twitch Page" [ref=e562] [cursor=pointer]:
                    - /url: https://www.twitch.tv/razer
                    - figure [ref=e563]
                - listitem [ref=e564]:
                  - link "Visit Razer’s Discord Page" [ref=e565] [cursor=pointer]:
                    - /url: https://discord.com/invite/razer
                    - figure [ref=e566]
            - generic [ref=e570]: FOR GAMERS. BY GAMERS.™
          - generic [ref=e574]:
            - generic [ref=e575]:
              - generic [ref=e577]: Copyright © 2026 Razer Inc. All rights reserved.
              - list [ref=e579]:
                - listitem [ref=e580]:
                  - link "Site Map" [ref=e581] [cursor=pointer]:
                    - /url: https://www.razer.com/sitemap
                - listitem [ref=e582]:
                  - text: "|"
                  - link "Legal Terms" [ref=e583] [cursor=pointer]:
                    - /url: https://www.razer.com/legal
                - listitem [ref=e584]:
                  - text: "|"
                  - link "Privacy Policy" [ref=e585] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/customer-privacy-policy
                - listitem [ref=e586]:
                  - text: "|"
                  - button "Cookie Settings" [ref=e587] [cursor=pointer]
            - generic [ref=e589]:
              - text: United States |
              - link "Change Location >" [ref=e590] [cursor=pointer]:
                - /url: /choose-location
    - text: 
  - textbox [ref=e599]
```

# Test source

```ts
  1   | const { test, expect } = require("@playwright/test");
  2   | test.describe("Cart Management Module", () => {
  3   |   test("CT_01 - Add Product to cart", async ({ page }) => {
  4   |     await page.goto("https://www.razer.com/store");
  5   | 
  6   |     await page
  7   |       .getByRole("button", { name: "Accept All" })
  8   |       .waitFor({ state: "visible", timeout: 10000 });
  9   |     await page.getByRole("button", { name: "Accept All" }).click();
  10  | 
  11  |     await page
  12  |       .getByRole("group", { name: "slide 1 of 16" })
  13  |       .getByLabel("BUY - New Razer Blade 18, For US$")
  14  |       .waitFor({ state: "visible", timeout: 10000 });
  15  |     await page
  16  |       .getByRole("group", { name: "slide 1 of 16" })
  17  |       .getByLabel("BUY - New Razer Blade 18, For US$")
  18  |       .click();
  19  | 
  20  |     await page
  21  |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  22  |       .waitFor({ state: "visible", timeout: 10000 });
  23  |     await page
  24  |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  25  |       .click();
  26  |     await expect(page).toHaveURL(/cart/, { timeout: 10000 });
  27  |   });
  28  | 
  29  |   test("CT_02 - Verifying cart items updated correctly", async ({ page }) => {
  30  |     await page.goto("https://www.razer.com/store");
  31  | 
  32  |     await page
  33  |       .getByRole("button", { name: "Accept All" })
  34  |       .waitFor({ state: "visible", timeout: 10000 });
  35  |     await page.getByRole("button", { name: "Accept All" }).click();
  36  | 
  37  |     await page
  38  |       .getByRole("group", { name: "slide 1 of 16" })
  39  |       .getByLabel("BUY - New Razer Blade 18, For US$")
  40  |       .waitFor({ state: "visible", timeout: 10000 });
  41  |     await page
  42  |       .getByRole("group", { name: "slide 1 of 16" })
  43  |       .getByLabel("BUY - New Razer Blade 18, For US$")
  44  |       .click();
  45  | 
  46  |     await page
  47  |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  48  |       .waitFor({ state: "visible", timeout: 10000 });
  49  |     await page
  50  |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  51  |       .click();
  52  | 
  53  |     await expect(page).toHaveURL(/cart/, { timeout: 10000 });
  54  |     await expect(
  55  |       page.getByRole("heading", { name: /Your cart total is US\$/i }),
  56  |     ).toBeVisible({ timeout: 10000 });
  57  |   });
  58  | 
  59  |   test("CT_03 - Opening cart page successfully", async ({ page }) => {
  60  |     await page.goto("https://www.razer.com/store");
  61  | 
  62  |     await page
  63  |       .getByRole("button", { name: "Accept All" })
  64  |       .waitFor({ state: "visible", timeout: 10000 });
  65  |     await page.getByRole("button", { name: "Accept All" }).click();
  66  | 
  67  |     await page
  68  |       .getByRole("button", { name: "items in cart" })
  69  |       .waitFor({ state: "visible", timeout: 10000 });
  70  |     await page.getByRole("button", { name: "items in cart" }).click();
  71  | 
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
> 99  |       .waitFor({ state: "visible", timeout: 10000 });
      |        ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
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
  115 |     await page.goto("https://www.razer.com/cart");
  116 | 
  117 |     await page
  118 |       .getByRole("button", { name: "Accept All" })
  119 |       .waitFor({ state: "visible", timeout: 10000 });
  120 |     await page.getByRole("button", { name: "Accept All" }).click();
  121 | 
  122 |     await page
  123 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  124 |       .waitFor({ state: "visible", timeout: 10000 });
  125 |     await page
  126 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  127 |       .click();
  128 | 
  129 |     await page
  130 |       .getByRole("button", { name: "Remove item from cart" })
  131 |       .waitFor({ state: "visible", timeout: 10000 });
  132 |     await page.getByRole("button", { name: "Remove item from cart" }).click();
  133 | 
  134 |     await page
  135 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  136 |       .waitFor({ state: "visible", timeout: 10000 });
  137 |     await page
  138 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  139 |       .click();
  140 | 
  141 |     const increaseBtn = page.getByRole("button", {
  142 |       name: "Increase quantity of item",
  143 |     });
  144 |     await increaseBtn.waitFor({ state: "visible", timeout: 10000 });
  145 |     await increaseBtn.click();
  146 |   });
  147 | 
  148 |  test("CT_06 - Decrease Quantity Button Works", async ({ page }) => {
  149 |   await page.goto("https://www.razer.com/cart");
  150 | 
  151 |   await page.getByRole("button", { name: "Accept All" }).waitFor({ state: "visible", timeout: 10000 });
  152 |   await page.getByRole("button", { name: "Accept All" }).click();
  153 | 
  154 |   await page.getByRole("button", { name: "Add to Cart - Razer Atlas Pro" }).waitFor({ state: "visible", timeout: 10000 });
  155 |   await page.getByRole("button", { name: "Add to Cart - Razer Atlas Pro" }).click();
  156 | 
  157 |   const increaseBtn = page.getByRole("button", { name: "Increase quantity of item" });
  158 |   await increaseBtn.waitFor({ state: "visible", timeout: 10000 });
  159 |   await increaseBtn.click();
  160 | 
  161 |   const decreaseBtn = page.getByRole("button", { name: "Reduce quantity of item" });
  162 |   await decreaseBtn.waitFor({ state: "visible", timeout: 10000 });
  163 |   await decreaseBtn.click();
  164 | });
  165 | 
  166 |   test("CT_07 - Remove Product Button Works", async ({ page }) => {
  167 |     await page.goto("https://www.razer.com/cart");
  168 | 
  169 |     await page
  170 |       .getByRole("button", { name: "Accept All" })
  171 |       .waitFor({ state: "visible", timeout: 10000 });
  172 |     await page.getByRole("button", { name: "Accept All" }).click();
  173 | 
  174 |     await page
  175 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  176 |       .waitFor({ state: "visible", timeout: 10000 });
  177 |     await page
  178 |       .getByRole("button", { name: "Add to Cart - Razer Atlas Pro" })
  179 |       .click();
  180 | 
  181 |     const removeBtn = page.getByRole("button", {
  182 |       name: "Remove item from cart",
  183 |     });
  184 |     await removeBtn.waitFor({ state: "visible", timeout: 10000 });
  185 |     await removeBtn.click();
  186 |   });
  187 | 
  188 |   test("CT_08 - Empty Cart Validation", async ({ page }) => {
  189 |     await page.goto("https://www.razer.com/cart");
  190 | 
  191 |     await page
  192 |       .getByRole("button", { name: "Accept All" })
  193 |       .waitFor({ state: "visible", timeout: 10000 });
  194 |     await page.getByRole("button", { name: "Accept All" }).click();
  195 | 
  196 |     await expect(
  197 |       page.getByRole("heading", { name: /Your cart is empty/i }),
  198 |     ).toBeVisible({ timeout: 10000 });
  199 |   });
```