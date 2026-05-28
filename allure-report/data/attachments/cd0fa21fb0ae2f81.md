# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_management\cart_management.spec.js >> Cart Management Module >> Decrease Quantity button Works
- Location: tests\cart_management\cart_management.spec.js:145:3

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
              - button "0 items in cart" [ref=e58] [cursor=pointer]: 
      - main [ref=e59]:
        - generic [ref=e60]:
          - generic [ref=e61]:
            - generic [ref=e62]:
              - generic [ref=e63]:
                - generic [ref=e64]:
                  - heading "Customize your Razer Blade 18" [level=1] [ref=e65]:
                    - link "Customize your Razer Blade 18" [ref=e66] [cursor=pointer]:
                      - /url: /gaming-laptops/razer-blade-18
                  - generic [ref=e67]:
                    - text: 18-Inch Gaming & AI Development Laptop
                    - link "Learn more" [ref=e68] [cursor=pointer]:
                      - /url: /gaming-laptops/razer-blade-18
                      - text: Learn more >
                  - generic [ref=e69]:
                    - region "Product Gallery Carousel" [ref=e71]:
                      - generic [ref=e72]: This is a carousel with one large image and a track of thumbnails below. Select any of the image buttons to change the main image above.
                      - generic [ref=e73]:
                        - button "Previous" [ref=e74] [cursor=pointer]: 
                        - button "Image 1 of 6" [ref=e75] [cursor=pointer]:
                          - img "Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5070 Ti - Black -view 1" [ref=e76]
                        - button "Image 2 of 6" [ref=e77] [cursor=pointer]:
                          - img "Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5070 Ti - Black -view 2" [ref=e78]
                        - button "Image 3 of 6" [ref=e79] [cursor=pointer]:
                          - img "Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5070 Ti - Black -view 3" [ref=e80]
                        - button "Image 4 of 6" [ref=e81] [cursor=pointer]:
                          - img "Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5070 Ti - Black -view 4" [ref=e82]
                        - button "Next" [ref=e83] [cursor=pointer]: 
                      - group "slide 1 of 6" [ref=e84]:
                        - paragraph [ref=e86]: ONLY AT RAZER
                        - img "Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5070 Ti - Black -view 1" [ref=e87]
                      - button "View previous product image" [ref=e88] [cursor=pointer]:
                        - generic [ref=e90]: 
                      - button "View next product image" [ref=e91] [cursor=pointer]:
                        - generic [ref=e93]: 
                    - button "View Gallery" [ref=e96] [cursor=pointer]
                - link "Get to know Windows 11 devices" [ref=e100] [cursor=pointer]:
                  - /url: https://www.microsoft.com/en-us/windows?r=1
                  - img "Get to know Windows 11 devices" [ref=e101]
                - generic [ref=e102]:
                  - generic [ref=e103]:
                    - heading "Specifications" [level=2] [ref=e104]
                    - generic [ref=e105]:
                      - generic [ref=e106]: Current Combination
                      - list [ref=e107]:
                        - listitem [ref=e108]:
                          - generic [ref=e109]: Processor
                          - generic [ref=e110]: Intel® Core™ Ultra 9 290HX Plus
                        - listitem [ref=e111]:
                          - generic [ref=e112]: OS
                          - generic [ref=e113]: Windows 11 Home
                        - listitem [ref=e114]:
                          - generic [ref=e115]: Display
                          - generic [ref=e116]: 18" Dual UHD+ 240 Hz | FHD+ 440 Hz
                        - listitem [ref=e117]:
                          - generic [ref=e118]: Graphic
                          - generic [ref=e119]: GeForce RTX 5070 Ti
                        - listitem [ref=e120]:
                          - generic [ref=e121]: RAM & Storage
                          - generic [ref=e122]: 32 GB 6400 MHz RAM, 1 TB SSD
                    - button "View all specifications" [ref=e123] [cursor=pointer]
                  - generic "payment-icon-container" [ref=e126]:
                    - list [ref=e127]:
                      - listitem [ref=e128]:
                        - generic [ref=e129]: Next Business Day Shipping
                      - listitem [ref=e130]:
                        - generic [ref=e131]: Risk Free Return
                      - listitem [ref=e132]:
                        - generic [ref=e133]: Comprehensive Customer Support
              - dialog "View 3D Tour"
              - text: 
            - generic [ref=e134]:
              - generic [ref=e136]:
                - group "Gift With Purchase" [ref=e139]:
                  - heading "Gift With Purchase" [level=2] [ref=e140]
                  - generic [ref=e141]: Product(s) that come with the purchase of this product
                  - generic [ref=e146]:
                    - heading "007 First Light GeForce RTX 50 Series Bundle" [level=3] [ref=e147]
                    - generic [ref=e148]: worth US$69.99
                    - list [ref=e149]:
                      - listitem [ref=e150]: Redemption details will be emailed within 20 business days after your product has been received.
                  - generic [ref=e155]:
                    - 'heading "Lego Batman: Legacy of the Dark Knight" [level=3] [ref=e156]'
                    - generic [ref=e157]: worth US$69.99
                    - list [ref=e158]:
                      - listitem [ref=e159]: Redemption details will be emailed within 20 business days after your product has been received.
                  - generic [ref=e164]:
                    - heading "PC Game Pass" [level=3] [ref=e165]
                    - generic [ref=e166]: worth US$13.99
                    - list [ref=e167]:
                      - listitem [ref=e168]: 1 month subscription included in this laptop.
                      - listitem [ref=e169]: Play hundreds of PC games on your new Razer Blade with 1 month of PC Game Pass.*
                - group "Color" [ref=e170]:
                  - heading "Color" [level=2] [ref=e171]:
                    - generic [ref=e172]: Color
                  - generic [ref=e173]:
                    - link "Black"
                    - generic:
                      - generic: Black
                - group "OS" [ref=e174]:
                  - heading "OS" [level=2] [ref=e175]:
                    - button "OS" [ref=e176] [cursor=pointer]:
                      - generic [ref=e177]: 
                      - text: OS
                  - generic [ref=e179]:
                    - generic [ref=e180]: Selected Option
                    - text: Windows 11 Home
                - group "Graphics" [ref=e181]:
                  - heading "Graphics" [level=2] [ref=e182]:
                    - button "Graphics" [expanded] [ref=e183] [cursor=pointer]:
                      - generic [ref=e184]: 
                      - text: Graphics
                  - list [ref=e186]:
                    - listitem:
                      - link "GeForce RTX 5070 Ti (12 GB GDDR7 VRAM)":
                        - generic: GeForce RTX 5070 Ti (12 GB GDDR7 VRAM)
                    - listitem [ref=e187]:
                      - link "GeForce RTX 5080 (16 GB GDDR7 VRAM) + US$500.00" [ref=e188] [cursor=pointer]:
                        - generic [ref=e189]: GeForce RTX 5080 (16 GB GDDR7 VRAM)
                        - generic [ref=e191]: + US$500.00
                    - listitem [ref=e192]:
                      - link "GeForce RTX 5090 (24 GB GDDR7 VRAM) + US$900.00" [ref=e193] [cursor=pointer]:
                        - generic [ref=e194]: GeForce RTX 5090 (24 GB GDDR7 VRAM)
                        - generic [ref=e198]: + US$900.00
                - group "Display" [ref=e199]:
                  - heading "Display" [level=2] [ref=e200]:
                    - button "Display" [ref=e201] [cursor=pointer]:
                      - generic [ref=e202]: 
                      - text: Display
                  - generic [ref=e204]:
                    - generic [ref=e205]: Selected Option
                    - text: Dual UHD+ 240 Hz | FHD+ 440 Hz
                - group "Processor" [ref=e206]:
                  - heading "Processor" [level=2] [ref=e207]:
                    - button "Processor" [expanded] [ref=e208] [cursor=pointer]:
                      - generic [ref=e209]: 
                      - text: Processor
                  - list [ref=e211]:
                    - listitem:
                      - link "Intel® Core™ Ultra 9 290HX Plus":
                        - generic: Intel® Core™ Ultra 9 290HX Plus
                    - listitem [ref=e212]:
                      - link "Intel® Core™ Ultra 9 275HX - US$500.00" [ref=e213] [cursor=pointer]:
                        - generic [ref=e214]: Intel® Core™ Ultra 9 275HX
                        - generic [ref=e216]: "- US$500.00"
                - group "Storage" [ref=e217]:
                  - heading "Storage" [level=2] [ref=e218]:
                    - button "Storage" [expanded] [ref=e219] [cursor=pointer]:
                      - generic [ref=e220]: 
                      - text: Storage
                  - list [ref=e222]:
                    - listitem:
                      - link "1 TB SSD":
                        - generic: 1 TB SSD
                    - listitem [ref=e223]:
                      - link "2 TB SSD + US$900.00" [ref=e224] [cursor=pointer]:
                        - generic [ref=e225]: 2 TB SSD
                        - generic [ref=e229]: + US$900.00
                - group "Memory" [ref=e230]:
                  - heading "Memory" [level=2] [ref=e231]:
                    - button "Memory" [expanded] [ref=e232] [cursor=pointer]:
                      - generic [ref=e233]: 
                      - text: Memory
                  - list [ref=e235]:
                    - listitem:
                      - link "32 GB":
                        - generic: 32 GB
                    - listitem [ref=e236]:
                      - link "64 GB + US$2,000.00" [ref=e237] [cursor=pointer]:
                        - generic [ref=e238]: 64 GB
                        - generic [ref=e242]: + US$2,000.00
                    - listitem [ref=e243]:
                      - link "128 GB + US$3,000.00" [ref=e244] [cursor=pointer]:
                        - generic [ref=e245]: 128 GB
                        - generic [ref=e249]: + US$3,000.00
                - group "Keyboard Layout" [ref=e250]:
                  - heading "Keyboard Layout" [level=2] [ref=e251]:
                    - button "Keyboard Layout" [ref=e252] [cursor=pointer]:
                      - generic [ref=e253]: 
                      - text: Keyboard Layout
                  - generic [ref=e255]:
                    - generic [ref=e256]: Selected Option
                    - text: US Layout
              - group "Add RazerCare Protection" [ref=e259]:
                - heading "Add RazerCare Protection" [level=2] [ref=e260]
                - button "Check out the coverage at a glance" [ref=e261] [cursor=pointer]
                - button "RazerCare Essential For Blade + US$529.99" [ref=e263] [cursor=pointer]:
                  - generic [ref=e264]: RazerCare Essential For Blade
                  - generic [ref=e265]: + US$529.99
                - button "RazerCare Elite For Blade + US$789.99" [ref=e267] [cursor=pointer]:
                  - generic [ref=e268]: RazerCare Elite For Blade
                  - generic [ref=e269]: + US$789.99
                - button "No, Thank You" [ref=e271] [cursor=pointer]:
                  - generic [ref=e272]: No, Thank You
              - group "Top Picks with Your Purchase" [ref=e275]:
                - heading "Top Picks with Your Purchase" [level=2] [ref=e276]
                - generic [ref=e277]:
                  - group "Addon item" [ref=e278]:
                    - generic [ref=e279] [cursor=pointer]:
                      - generic [ref=e283]:
                        - heading "Razer Laptop Cooling Pad" [level=3] [ref=e284]:
                          - button "Razer Laptop Cooling Pad" [ref=e285]
                        - link "Learn more" [ref=e286]:
                          - /url: /gaming-laptops-accessories/razer-laptop-cooling-pad/RC21-02300100-R3UC
                          - text: Learn more
                      - generic [ref=e289]: US$169.99
                  - group "Addon item" [ref=e290]:
                    - generic [ref=e291] [cursor=pointer]:
                      - generic [ref=e295]:
                        - heading "Razer Thunderbolt™ 5 Dock Chroma - Black" [level=3] [ref=e296]:
                          - button "Razer Thunderbolt™ 5 Dock Chroma - Black" [ref=e297]
                        - link "Learn more" [ref=e298]:
                          - /url: /gaming-pc-accessories/razer-thunderbolt-5-dock/RC21-02290100-R3U1
                          - text: Learn more
                      - generic [ref=e301]: from US$389.99
                  - group "Addon item" [ref=e302]:
                    - generic [ref=e303] [cursor=pointer]:
                      - generic [ref=e307]:
                        - heading "Razer Core X V2" [level=3] [ref=e308]:
                          - button "Razer Core X V2" [ref=e309]
                        - link "Learn more" [ref=e310]:
                          - /url: /gaming-egpus/razer-core-x-v2/RC21-02270200-R3U1
                          - text: Learn more
                      - generic [ref=e313]: US$349.99
                  - group "Addon item" [ref=e314]:
                    - generic [ref=e315] [cursor=pointer]:
                      - generic [ref=e319]:
                        - heading "Razer Adjustable Laptop Stand - Black" [level=3] [ref=e320]:
                          - button "Razer Adjustable Laptop Stand - Black" [ref=e321]
                        - link "Learn more" [ref=e322]:
                          - /url: /gaming-laptops-accessories/razer-adjustable-laptop-stand/RC21-02330100-R3U1
                          - text: Learn more
                      - generic [ref=e325]: from US$99.99
                  - group "Addon item" [ref=e326]:
                    - generic [ref=e327] [cursor=pointer]:
                      - generic [ref=e331]:
                        - heading "Razer Power Adapter - 400W" [level=3] [ref=e332]:
                          - button "Razer Power Adapter - 400W" [ref=e333]
                        - link "Learn more" [ref=e334]:
                          - /url: /gaming-laptops-accessories/razer-400w-power-adapter/RC30-05290200-B3U1
                          - text: Learn more
                      - generic [ref=e337]: US$339.99
            - region "Add to cart" [ref=e339]:
              - generic [ref=e342]:
                - generic [ref=e343]:
                  - text: Earn up to
                  - text: 200,000
                - link "Join Now" [ref=e345] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e346]:
                - generic [ref=e348]:
                  - generic [ref=e349]:
                    - heading "Order now, delivered by:" [level=2] [ref=e351]
                    - paragraph [ref=e352]:
                      - generic [ref=e353]: Jun 02 - Jun 03 — Free
                  - button "View Delivery Options" [ref=e354] [cursor=pointer]
                - generic [ref=e356]:
                  - generic [ref=e357]:
                    - heading "Pickup at RazerStore:" [level=2] [ref=e359]
                    - paragraph [ref=e360]: Available stock(s) in 9 RazerStore(s)
                  - button "View Location(s)" [ref=e361] [cursor=pointer]
              - generic [ref=e363]:
                - generic [ref=e364]:
                  - tooltip "Our Direct-to-Gamer pricing delivers exclusive value–available only when you buy direct from us":
                    - generic [ref=e365]: Our Direct-to-Gamer pricing delivers exclusive value–available only when you buy direct from us
                  - generic [ref=e367]:
                    - generic [ref=e368]: "Product price:"
                    - text: US$3,999.99
                - paragraph [ref=e372]:
                  - text: Starting at $167/mo or 0% APR with Affirm  .
                  - link "Learn more - Learn more about Affirm Financing (opens in modal)" [ref=e373] [cursor=pointer]:
                    - /url: javascript:void(0)
                    - text: Learn more
              - generic [ref=e374]:
                - button "Add to Cart - Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5070 Ti - Black. For US$3,999.99" [disabled] [ref=e376]: Add to cart
                - generic [ref=e378]: Our Direct-to-Gamer pricing delivers exclusive value–available only when you buy direct from us
          - region "product recommendation carousel" [ref=e383]:
            - generic [ref=e384]: This is a carousel. Use Next and Previous buttons to navigate, or jump to a slide using the slide dots.
            - heading "FREQUENTLY BOUGHT TOGETHER" [level=2] [ref=e385]
            - generic [ref=e386]:
              - group "Product 1 of 5" [ref=e387]:
                - generic [ref=e389]:
                  - generic [ref=e390]:
                    - heading "Razer Huntsman V3 Tenkeyless 8KHz - US" [level=3] [ref=e391]
                    - generic [ref=e392]:
                      - generic [ref=e396]:
                        - generic [ref=e397]: "Product price:"
                        - text: US$169.99
                      - link "View details" [ref=e399] [cursor=pointer]:
                        - /url: /gaming-keyboards/razer-huntsman-v3-tenkeyless-8khz/RZ03-05750200-R3U1
                  - button "Add to Cart - Razer Huntsman V3 Tenkeyless 8KHz - US. For US$169.99" [disabled] [ref=e401]: Add
              - group "Product 2 of 5" [ref=e402]:
                - generic [ref=e404]:
                  - generic [ref=e405]:
                    - heading "Razer Atlas Pro - Black" [level=3] [ref=e406]
                    - generic [ref=e407]:
                      - generic [ref=e411]:
                        - generic [ref=e412]: "Product price:"
                        - text: US$129.99
                      - link "View details" [ref=e414] [cursor=pointer]:
                        - /url: /gaming-mouse-mats/razer-atlas-pro/RZ02-05760100-R3U1
                  - button "Add to Cart - Razer Atlas Pro - Black. For US$129.99" [disabled] [ref=e416]: Add
              - group "Product 3 of 5" [ref=e417]:
                - generic [ref=e419]:
                  - generic [ref=e420]:
                    - heading "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black" [level=3] [ref=e421]
                    - generic [ref=e422]:
                      - generic [ref=e426]:
                        - generic [ref=e427]: "Product price:"
                        - text: US$5,599.99
                      - link "View details" [ref=e429] [cursor=pointer]:
                        - /url: /gaming-laptops/razer-blade-16/RZ09-05819EN9-R3U1
                  - button "Add to Cart - Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black. For US$5,599.99" [disabled] [ref=e431]: Add
              - group "Product 4 of 5" [ref=e432]:
                - generic [ref=e434]:
                  - generic [ref=e435]:
                    - heading "Razer Viper V4 Pro - Black" [level=3] [ref=e436]
                    - generic [ref=e437]:
                      - generic [ref=e441]:
                        - generic [ref=e442]: "Product price:"
                        - text: US$159.99
                      - link "View details" [ref=e444] [cursor=pointer]:
                        - /url: /gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1
                  - button "Add to Cart - Razer Viper V4 Pro - Black. For US$159.99" [disabled] [ref=e446]: Add
              - group "Product 5 of 5" [ref=e447]:
                - generic [ref=e449]:
                  - generic [ref=e450]:
                    - heading "Razer Gigantus V2 Pro - NiKo Edition" [level=3] [ref=e451]
                    - generic [ref=e452]:
                      - generic [ref=e456]:
                        - generic [ref=e457]: "Product price:"
                        - text: US$69.99
                      - link "View details" [ref=e459] [cursor=pointer]:
                        - /url: /gaming-mouse-mats/razer-gigantus-v2-pro/RZ02-05491300-R3U1
                  - button "Add to Cart - Razer Gigantus V2 Pro - NiKo Edition. For US$69.99" [disabled] [ref=e461]: Add
            - generic [ref=e462]:
              - button "Previous" [disabled]
              - button "Next" [ref=e463] [cursor=pointer]
      - contentinfo [ref=e464]:
        - generic [ref=e469]:
          - generic [ref=e470]:
            - generic [ref=e472]:
              - heading "Shop" [level=2] [ref=e474]
              - list [ref=e476]:
                - listitem [ref=e477]:
                  - link "RazerStores" [ref=e478] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstores
                - listitem [ref=e479]:
                  - link "RazerCafe" [ref=e480] [cursor=pointer]:
                    - /url: https://www.razer.com/razercafe
                - listitem [ref=e481]:
                  - link "Store Locator" [ref=e482] [cursor=pointer]:
                    - /url: https://www.razer.com/store-finder
                - listitem [ref=e483]:
                  - link "Purchase Programs" [ref=e484] [cursor=pointer]:
                    - /url: https://www.razer.com/store/programs
                - listitem [ref=e485]:
                  - link "Bulk Order Program" [ref=e486] [cursor=pointer]:
                    - /url: https://www.razer.com/store/bulk-purchase
                - listitem [ref=e487]:
                  - link "Education" [ref=e488] [cursor=pointer]:
                    - /url: https://www.razer.com/education
                - listitem [ref=e489]:
                  - link "Only at Razer" [ref=e490] [cursor=pointer]:
                    - /url: https://www.razer.com/only-at-razer
                - listitem [ref=e491]:
                  - link "Razer Silver" [ref=e492] [cursor=pointer]:
                    - /url: https://www.razer.com/store/rewards
                - listitem [ref=e493]:
                  - link "Affiliate" [ref=e494] [cursor=pointer]:
                    - /url: https://www.razer.com/affiliate
                - listitem [ref=e495]:
                  - link "Newsletter" [ref=e496] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter
            - generic [ref=e498]:
              - heading "Explore" [level=2] [ref=e500]
              - list [ref=e502]:
                - listitem [ref=e503]:
                  - link "Technology" [ref=e504] [cursor=pointer]:
                    - /url: https://www.razer.com/technology
                - listitem [ref=e505]:
                  - link "Chroma RGB" [ref=e506] [cursor=pointer]:
                    - /url: https://www.razer.com/chroma
                - listitem [ref=e507]:
                  - link "Concepts" [ref=e508] [cursor=pointer]:
                    - /url: https://www.razer.com/concepts
                - listitem [ref=e509]:
                  - link "Esports" [ref=e510] [cursor=pointer]:
                    - /url: https://www.razer.com/esports
                - listitem [ref=e511]:
                  - link "Collabs" [ref=e512] [cursor=pointer]:
                    - /url: https://www.razer.com/lifestyle/collabs
            - generic [ref=e514]:
              - heading "Support" [level=2] [ref=e516]
              - list [ref=e518]:
                - listitem [ref=e519]:
                  - link "Get Help" [ref=e520] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/?c=us
                - listitem [ref=e521]:
                  - link "Registration & Warranty" [ref=e522] [cursor=pointer]:
                    - /url: https://www.razer.com/product-registration
                - listitem [ref=e523]:
                  - link "RazerStore Support" [ref=e524] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstore-support
                - listitem [ref=e525]:
                  - link "RazerCare" [ref=e526] [cursor=pointer]:
                    - /url: https://www.razer.com/razercare
                - listitem [ref=e527]:
                  - link "Manage Razer ID" [ref=e528] [cursor=pointer]:
                    - /url: https://razerid.razer.com
                - listitem [ref=e529]:
                  - link "Support Videos" [ref=e530] [cursor=pointer]:
                    - /url: https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos
                - listitem [ref=e531]:
                  - link "Recycling Program" [ref=e532] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/app/answers/detail/a_id/5904
                - listitem [ref=e533]:
                  - link "Accessibility Statement" [ref=e534] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/commitment-to-accessibility
            - generic [ref=e536]:
              - heading "Company" [level=2] [ref=e538]
              - list [ref=e540]:
                - listitem [ref=e541]:
                  - link "About Us" [ref=e542] [cursor=pointer]:
                    - /url: https://www.razer.com/about-razer
                - listitem [ref=e543]:
                  - link "Careers" [ref=e544] [cursor=pointer]:
                    - /url: https://careers.razer.com
                - listitem [ref=e545]:
                  - link "Newsroom" [ref=e546] [cursor=pointer]:
                    - /url: https://www.razer.com/newsroom
                - listitem [ref=e547]:
                  - link "zVentures" [ref=e548] [cursor=pointer]:
                    - /url: https://www.zvntrs.com
                - listitem [ref=e549]:
                  - link "Contact Us" [ref=e550] [cursor=pointer]:
                    - /url: https://www.razer.com/contact-us
                - listitem [ref=e551]:
                  - link "AI Gaming Newsletter" [ref=e552] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter/ai
            - generic [ref=e554]:
              - heading "Follow Us" [level=2] [ref=e556]
              - list [ref=e558]:
                - listitem [ref=e559]:
                  - link "Visit Razer’s Facebook Page" [ref=e560] [cursor=pointer]:
                    - /url: https://www.facebook.com/razer
                    - figure [ref=e561]
                - listitem [ref=e562]:
                  - link "Visit Razer’s Instagram Page" [ref=e563] [cursor=pointer]:
                    - /url: https://www.instagram.com/razer
                    - figure [ref=e564]
                - listitem [ref=e565]:
                  - link "Visit Razer’s Threads Page" [ref=e566] [cursor=pointer]:
                    - /url: https://www.threads.net/@razer
                    - figure [ref=e567]
                - listitem [ref=e568]:
                  - link "Visit Razer’s X Page" [ref=e569] [cursor=pointer]:
                    - /url: https://www.twitter.com/Razer
                    - figure [ref=e570]
                - listitem [ref=e571]:
                  - link "Visit Razer’s YouTube Page" [ref=e572] [cursor=pointer]:
                    - /url: https://www.youtube.com/razer
                    - figure [ref=e573]
                - listitem [ref=e574]:
                  - link "Visit Razer’s TikTok Page" [ref=e575] [cursor=pointer]:
                    - /url: https://www.tiktok.com/@razer
                    - figure [ref=e576]
                - listitem [ref=e577]:
                  - link "Visit Razer’s Twitch Page" [ref=e578] [cursor=pointer]:
                    - /url: https://www.twitch.tv/razer
                    - figure [ref=e579]
                - listitem [ref=e580]:
                  - link "Visit Razer’s Discord Page" [ref=e581] [cursor=pointer]:
                    - /url: https://discord.com/invite/razer
                    - figure [ref=e582]
            - generic [ref=e586]: FOR GAMERS. BY GAMERS.™
          - generic [ref=e590]:
            - generic [ref=e591]:
              - generic [ref=e593]: Copyright © 2026 Razer Inc. All rights reserved.
              - list [ref=e595]:
                - listitem [ref=e596]:
                  - link "Site Map" [ref=e597] [cursor=pointer]:
                    - /url: https://www.razer.com/sitemap
                - listitem [ref=e598]:
                  - text: "|"
                  - link "Legal Terms" [ref=e599] [cursor=pointer]:
                    - /url: https://www.razer.com/legal
                - listitem [ref=e600]:
                  - text: "|"
                  - link "Privacy Policy" [ref=e601] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/customer-privacy-policy
                - listitem [ref=e602]:
                  - text: "|"
                  - button "Cookie Settings" [ref=e603] [cursor=pointer]
            - generic [ref=e605]:
              - text: United States |
              - link "Change Location >" [ref=e606] [cursor=pointer]:
                - /url: /choose-location
    - text: 
  - textbox [ref=e615]
```

# Test source

```ts
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
  145 |   test('Decrease Quantity button Works', async ({ page }) => {
  146 |   await page.goto('https://www.razer.com/store');
  147 |   await page.getByRole('button', { name: 'Accept All' }).click();
  148 |   await page.getByRole('group', { name: 'slide 1 of 16' }).getByLabel('BUY - New Razer Blade 18, For US$').click();
  149 |   await page.getByRole('button', { name: 'Add to Cart - Razer Blade 18' }).click();
> 150 |   await page.getByRole('button', { name: 'Remove item from cart' }).click();
      |                                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  151 | });
  152 | 
  153 |   test("CT_07 - Remove Product Button Works", async ({ page }) => {
  154 |     await page.goto("https://www.razer.com/store");
  155 | 
  156 |     await page
  157 |       .getByRole("button", { name: "Accept All" })
  158 |       .waitFor({ state: "visible", timeout: 10000 });
  159 |     await page.getByRole("button", { name: "Accept All" }).click();
  160 | 
  161 |     await page
  162 |       .getByRole("group", { name: "slide 1 of 16" })
  163 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  164 |       .waitFor({ state: "visible", timeout: 10000 });
  165 |     await page
  166 |       .getByRole("group", { name: "slide 1 of 16" })
  167 |       .getByLabel("BUY - New Razer Blade 18, For US$")
  168 |       .click();
  169 | 
  170 |     await page
  171 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  172 |       .waitFor({ state: "visible", timeout: 10000 });
  173 |     await page
  174 |       .getByRole("button", { name: "Add to Cart - Razer Blade 18" })
  175 |       .click();
  176 | 
  177 |     const removeBtn = page.getByRole("button", {
  178 |       name: "Remove item from cart",
  179 |     });
  180 |     await removeBtn.waitFor({ state: "visible", timeout: 10000 });
  181 |     await removeBtn.click();
  182 |   });
  183 | 
  184 |   test("CT_08 - Empty Cart Validation", async ({ page }) => {
  185 |   await page.goto("https://www.razer.com/store");
  186 | 
  187 |   await page.getByRole("button", { name: "Accept All" }).waitFor({ state: "visible", timeout: 10000 });
  188 |   await page.getByRole("button", { name: "Accept All" }).click();
  189 | 
  190 |   await page.getByRole("button", { name: "items in cart" }).waitFor({ state: "visible", timeout: 10000 });
  191 |   await page.getByRole("button", { name: "items in cart" }).click();
  192 | 
  193 |   await page.getByRole("link", { name: /Cart/i }).waitFor({ state: "visible", timeout: 10000 });
  194 |   await page.getByRole("link", { name: /Cart/i }).click();
  195 | 
  196 |   await expect(page.getByRole("heading", { name: /Your cart is empty/i })).toBeVisible({ timeout: 10000 });
  197 | });
  198 | 
  199 | });
  200 | 
```