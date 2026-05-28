# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 06_storeFunctionality\store.spec.js >> Store Functionalities >> SF_11 - Verify Breadcrumb Navigation
- Location: tests\06_storeFunctionality\store.spec.js:176:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /Gaming Mice/i })

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
              - button "Store" [expanded] [ref=e23]
              - region "Store" [ref=e24]:
                - button "Close" [ref=e25]
                - generic [ref=e26]:
                  - generic [ref=e28]:
                    - heading "Explore" [level=2] [ref=e29]
                    - list "Explore" [ref=e30]:
                      - listitem [ref=e31]:
                        - link "Shop The Latest" [ref=e32]:
                          - /url: https://www.razer.com/store
                      - listitem [ref=e33]:
                        - button "Only at Razer" [ref=e34]
                      - listitem [ref=e35]:
                        - link "Laptops & Accessories" [ref=e36]:
                          - /url: https://www.razer.com/store/gaming-laptops
                      - listitem [ref=e37]:
                        - link "Mice" [ref=e38]:
                          - /url: https://www.razer.com/store/gaming-mice
                      - listitem [ref=e39]:
                        - link "Mats" [ref=e40]:
                          - /url: https://www.razer.com/store/gaming-mouse-mats
                      - listitem [ref=e41]:
                        - link "Keyboards" [ref=e42]:
                          - /url: https://www.razer.com/store/gaming-keyboards
                      - listitem [ref=e43]:
                        - link "Controllers" [ref=e44]:
                          - /url: https://www.razer.com/store/controllers
                      - listitem [ref=e45]:
                        - link "Audio" [ref=e46]:
                          - /url: https://www.razer.com/store/gaming-audio
                      - listitem [ref=e47]:
                        - link "Chairs" [ref=e48]:
                          - /url: https://www.razer.com/store/gaming-chairs
                      - listitem [ref=e49]:
                        - link "Content Creation" [ref=e50]:
                          - /url: https://www.razer.com/store/content-creation
                      - listitem [ref=e51]:
                        - link "Licensed" [ref=e52]:
                          - /url: https://www.razer.com/store/licensed
                      - listitem [ref=e53]:
                        - link "Apparel & Gear" [ref=e54]:
                          - /url: https://www.razer.com/store/gaming-gear
                      - listitem [ref=e55]:
                        - link "Gamer Room" [ref=e56]:
                          - /url: https://www.razer.com/store/gaming-desktops-and-components
                      - listitem [ref=e57]:
                        - link "Razer Gift Card" [ref=e58]:
                          - /url: https://www.razer.com/gift-cards
                      - listitem [ref=e59]:
                        - button "More" [ref=e60]
                  - generic [ref=e62]:
                    - heading "More About" [level=2] [ref=e63]
                    - list "More About" [ref=e64]:
                      - listitem [ref=e65]:
                        - link "RazerStores" [ref=e66]:
                          - /url: https://www.razer.com/razerstores
                      - listitem [ref=e67]:
                        - link "Help" [ref=e68]:
                          - /url: https://www.razer.com/razerstore-support
                      - listitem [ref=e69]:
                        - link "FAQ" [ref=e70]:
                          - /url: https://www.razer.com/help
                      - listitem [ref=e71]:
                        - link "Returns and Refunds" [ref=e72]:
                          - /url: https://www.razer.com/legal/returns-refunds
                      - listitem [ref=e73]:
                        - link "Shipping Guide" [ref=e74]:
                          - /url: https://www.razer.com/shipping-guide
                      - listitem [ref=e75]:
                        - link "Razer Advantage" [ref=e76]:
                          - /url: https://www.razer.com/campaigns/razer-advantage
            - listitem [ref=e78] [cursor=pointer]:
              - link "PC" [ref=e79]:
                - /url: https://www.razer.com/pc
              - button "PC" [ref=e80]
            - listitem [ref=e81] [cursor=pointer]:
              - link "Console" [ref=e82]:
                - /url: https://www.razer.com/console-gaming
              - button "Console" [ref=e83]
            - listitem [ref=e84] [cursor=pointer]:
              - link "Mobile" [ref=e85]:
                - /url: https://www.razer.com/mobile
              - button "Mobile" [ref=e86]
            - listitem [ref=e87] [cursor=pointer]:
              - link "Furniture & Lifestyle" [ref=e88]:
                - /url: https://www.razer.com/lifestyle
              - button "Furniture & Lifestyle" [ref=e89]
            - listitem [ref=e90] [cursor=pointer]:
              - link "Gold & Silver" [ref=e91]:
                - /url: https://gold.razer.com/us/en
              - button "Gold & Silver" [ref=e92]
            - listitem [ref=e93] [cursor=pointer]:
              - link "Community" [ref=e94]:
                - /url: https://www.razer.com/community
              - button "Community" [ref=e95]
            - listitem [ref=e96]:
              - link "Razer.AI" [ref=e97] [cursor=pointer]:
                - /url: https://razer.ai
            - listitem [ref=e98] [cursor=pointer]:
              - link "Support" [ref=e99]:
                - /url: https://mysupport.razer.com/
              - button "Support" [ref=e100]
            - listitem [ref=e101]:
              - generic [ref=e104]:
                - button "Search" [ref=e105] [cursor=pointer]: 
                - text: ❮  
            - listitem [ref=e106]:
              - button "0 items in cart" [ref=e112] [cursor=pointer]: 
      - main [ref=e113]:
        - region "Notification banner" [ref=e117]: Unlock $50 off our top chairs with your purchase. *T&Cs Apply
        - generic [ref=e118]:
          - generic [ref=e119]:
            - generic [ref=e120]:
              - generic [ref=e121]:
                - generic [ref=e122]:
                  - heading "Razer Viper V4 Pro" [level=1] [ref=e123]:
                    - link "Razer Viper V4 Pro" [ref=e124] [cursor=pointer]:
                      - /url: /gaming-mice/razer-viper-v4-pro
                  - generic [ref=e125]:
                    - text: Ultra-lightweight Wireless Symmetrical Esports Gaming Mouse
                    - link "Learn more" [ref=e126] [cursor=pointer]:
                      - /url: /gaming-mice/razer-viper-v4-pro
                      - text: Learn more >
                  - generic [ref=e128]:
                    - generic [ref=e129]:
                      - generic [ref=e130]: ★
                      - generic [ref=e131]: ★
                      - generic [ref=e132]: ★
                      - generic [ref=e133]: ★
                      - generic [ref=e134]: ★
                    - generic [ref=e135]:
                      - generic [ref=e136]: "User Rated:"
                      - text: 5 out of 5
                    - button "View All Reviews (3)" [ref=e138] [cursor=pointer]
                  - generic [ref=e139]:
                    - region "Product Gallery Carousel" [ref=e141]:
                      - generic [ref=e142]: This is a carousel with one large image and a track of thumbnails below. Select any of the image buttons to change the main image above.
                      - generic [ref=e143]:
                        - button "Previous" [ref=e144] [cursor=pointer]: 
                        - button "Image 1 of 6" [ref=e145] [cursor=pointer]:
                          - img "Razer Viper V4 Pro - Black -view 1" [ref=e146]
                        - button "Image 2 of 6" [ref=e147] [cursor=pointer]:
                          - img "Razer Viper V4 Pro - Black -view 2" [ref=e148]
                        - button "Image 3 of 6" [ref=e149] [cursor=pointer]:
                          - img "Razer Viper V4 Pro - Black -view 3" [ref=e150]
                        - button "Image 4 of 6" [ref=e151] [cursor=pointer]:
                          - img "Razer Viper V4 Pro - Black -view 4" [ref=e152]
                        - button "Next" [ref=e153] [cursor=pointer]: 
                      - group "slide 1 of 6" [ref=e154]:
                        - paragraph [ref=e156]: NEW
                        - img "Razer Viper V4 Pro - Black -view 1" [ref=e157]
                      - button "View previous product image" [ref=e158] [cursor=pointer]:
                        - generic [ref=e160]: 
                      - button "View next product image" [ref=e161] [cursor=pointer]:
                        - generic [ref=e163]: 
                    - button "View Gallery" [ref=e166] [cursor=pointer]
                - generic [ref=e167]:
                  - generic [ref=e168]:
                    - list [ref=e170]:
                      - listitem [ref=e171]: <49 g Ultra-Lightweight Design
                      - listitem [ref=e172]: Razer™ HyperSpeed Wireless Gen-2
                      - listitem [ref=e173]: Razer™ Optical Scroll Wheel
                    - button "View all specifications" [ref=e174] [cursor=pointer]
                  - generic "payment-icon-container" [ref=e177]:
                    - list [ref=e178]:
                      - listitem [ref=e179]:
                        - generic [ref=e180]: Next Business Day Shipping
                      - listitem [ref=e181]:
                        - generic [ref=e182]: Risk Free Return
                      - listitem [ref=e183]:
                        - generic [ref=e184]: Comprehensive Customer Support
              - dialog "View 3D Tour"
              - text: 
            - generic [ref=e185]:
              - generic [ref=e187]:
                - group [ref=e189]:
                  - generic [ref=e191]:
                    - generic [ref=e192]:
                      - heading "$50 OFF TOP CHAIR PICKS" [level=3] [ref=e193]
                      - paragraph [ref=e194]: With your purchase
                    - img "$50 Gaming Chair Reward" [ref=e195]
                - group "Color / Design" [ref=e196]:
                  - heading "Color / Design" [level=2] [ref=e197]:
                    - generic [ref=e198]: Color / Design
                  - list [ref=e200]:
                    - listitem:
                      - link "Black"
                      - generic:
                        - generic: Black
                    - listitem [ref=e201]:
                      - link "White" [ref=e202] [cursor=pointer]
                      - generic [ref=e204]: White
              - group "Add RazerCare Protection" [ref=e207]:
                - heading "Add RazerCare Protection" [level=2] [ref=e208]
                - button "Check out the coverage at a glance" [ref=e209] [cursor=pointer]
                - button "RazerCare Elite For Mice + US$29.99" [ref=e211] [cursor=pointer]:
                  - generic [ref=e212]: RazerCare Elite For Mice
                  - generic [ref=e213]: + US$29.99
                - button "No, Thank You" [ref=e215] [cursor=pointer]:
                  - generic [ref=e216]: No, Thank You
              - group "Top Picks with Your Purchase" [ref=e219]:
                - heading "Top Picks with Your Purchase" [level=2] [ref=e220]
                - generic [ref=e221]:
                  - group "Addon item" [ref=e222]:
                    - generic [ref=e223] [cursor=pointer]:
                      - generic [ref=e227]:
                        - heading "Razer Atlas Pro - Black" [level=3] [ref=e228]:
                          - button "Razer Atlas Pro - Black" [ref=e229]
                        - link "Learn more" [ref=e230]:
                          - /url: /gaming-mouse-mats/razer-atlas-pro/RZ02-05760100-R3U1
                          - text: Learn more
                      - generic [ref=e233]: from US$129.99
                  - group "Addon item" [ref=e234]:
                    - generic [ref=e235] [cursor=pointer]:
                      - generic [ref=e239]:
                        - heading "Razer Iskur V2 NewGen - Black" [level=3] [ref=e240]:
                          - button "Razer Iskur V2 NewGen - Black" [ref=e241]
                        - link "Learn more" [ref=e242]:
                          - /url: /gaming-chairs/razer-iskur-v2-newgen/RZ38-04900800-R3US
                          - text: Learn more
                      - generic [ref=e245]: from US$649.99
                  - group "Addon item" [ref=e246]:
                    - generic [ref=e247] [cursor=pointer]:
                      - generic [ref=e251]:
                        - heading "Razer Huntsman V3 Pro Tenkeyless 8KHz - US - Black" [level=3] [ref=e252]:
                          - button "Razer Huntsman V3 Pro Tenkeyless 8KHz - US - Black" [ref=e253]
                        - link "Learn more" [ref=e254]:
                          - /url: /gaming-keyboards/razer-huntsman-v3-pro-8khz/RZ03-05520200-R3U1
                          - text: Learn more
                      - generic [ref=e257]: from US$219.99
                  - group "Addon item" [ref=e258]:
                    - generic [ref=e259] [cursor=pointer]:
                      - generic [ref=e263]:
                        - heading "Razer Enki - Black / Green" [level=3] [ref=e264]:
                          - button "Razer Enki - Black / Green" [ref=e265]
                        - link "Learn more" [ref=e266]:
                          - /url: /gaming-chairs/razer-enki/RZ38-03720400-R3U1
                          - text: Learn more
                      - generic [ref=e269]: from US$499.99
                  - group "Addon item" [ref=e270]:
                    - generic [ref=e271] [cursor=pointer]:
                      - generic [ref=e275]:
                        - heading "Razer BlackShark V3 Pro - Black" [level=3] [ref=e276]:
                          - button "Razer BlackShark V3 Pro - Black" [ref=e277]
                        - link "Learn more" [ref=e278]:
                          - /url: /gaming-headsets/razer-blackshark-v3-pro/RZ04-05400100-R3U1
                          - text: Learn more
                      - generic [ref=e281]: from US$249.99
                  - group "Addon item" [ref=e282]:
                    - generic [ref=e283] [cursor=pointer]:
                      - generic [ref=e287]:
                        - heading "Razer Fujin" [level=3] [ref=e288]:
                          - button "Razer Fujin" [ref=e289]
                        - link "Learn more" [ref=e290]:
                          - /url: /gaming-chairs/razer-fujin/RZ38-04950100-R3U1
                          - text: Learn more
                      - generic [ref=e293]: US$649.99
              - generic [ref=e295]:
                - button "Buy From Retailers" [expanded] [ref=e296] [cursor=pointer]:
                  - text: Buy From Retailers
                  - generic [ref=e297]: expand_less
                - list [ref=e298]:
                  - listitem [ref=e299]:
                    - link "Best Buy" [ref=e300] [cursor=pointer]:
                      - /url: https://gethatch.com/wtbonline/merch/38986/go?sharedid=h_6a15155b4233465f99118a22&core_id=102432156&affiliate_id=52581&prod_id=1631162737&region=US
                      - img "Best Buy" [ref=e301]
                  - listitem [ref=e302]:
                    - link "Walmart" [ref=e303] [cursor=pointer]:
                      - /url: https://gethatch.com/wtbonline/merch/89105/go?sharedid=h_6a15155b4233465f99118a22&core_id=102432156&affiliate_id=52581&prod_id=1625224388&region=US
                      - img "Walmart" [ref=e304]
                  - listitem [ref=e305]:
                    - link "Microcenter" [ref=e306] [cursor=pointer]:
                      - /url: https://gethatch.com/wtbonline/merch/87327/go?utm_campaign=Razer&core_id=102432156&affiliate_id=52581&prod_id=1626808217&region=US
                      - img "Microcenter" [ref=e307]
            - region "Add to cart" [ref=e309]:
              - generic [ref=e312]:
                - generic [ref=e313]:
                  - text: Earn up to
                  - text: 8,000
                - link "Join Now" [ref=e315] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e316]:
                - generic [ref=e318]:
                  - generic [ref=e319]:
                    - heading "Order now, delivered by:" [level=2] [ref=e321]
                    - paragraph [ref=e322]:
                      - generic [ref=e323]: Jun 01 - Jun 02 — US$15.00
                    - paragraph [ref=e324]:
                      - generic [ref=e325]: Jun 04 - Jun 08 — Free
                  - button "View Delivery Options" [ref=e326] [cursor=pointer]
                - generic [ref=e328]:
                  - generic [ref=e329]:
                    - heading "Pickup at RazerStore:" [level=2] [ref=e331]
                    - paragraph [ref=e332]: Available stock(s) in 10 RazerStore(s)
                  - button "View Location(s)" [ref=e333] [cursor=pointer]
              - generic [ref=e335]:
                - generic [ref=e338]:
                  - generic [ref=e339]: "Product price:"
                  - text: US$159.99
                - paragraph [ref=e343]:
                  - text: Starting at $14/mo or 0% APR with Affirm  .
                  - link "Learn more - Learn more about Affirm Financing (opens in modal)" [ref=e344] [cursor=pointer]:
                    - /url: javascript:void(0)
                    - text: Learn more
              - button "Add to Cart - Razer Viper V4 Pro - Black. For US$159.99" [ref=e347] [cursor=pointer]: Add to cart
          - generic [ref=e349]:
            - region "product recommendation carousel" [ref=e352]:
              - generic [ref=e353]: This is a carousel. Use Next and Previous buttons to navigate, or jump to a slide using the slide dots.
              - heading "MORE GAMER GEAR YOU’LL DIG" [level=2] [ref=e354]
              - generic [ref=e355]:
                - group "Product 1 of 5" [ref=e356]:
                  - generic [ref=e358]:
                    - generic [ref=e359]:
                      - heading "Razer Atlas Pro - Black" [level=3] [ref=e360]
                      - generic [ref=e361]:
                        - generic [ref=e365]:
                          - generic [ref=e366]: "Product price:"
                          - text: US$129.99
                        - link "View details" [ref=e368] [cursor=pointer]:
                          - /url: /gaming-mouse-mats/razer-atlas-pro/RZ02-05760100-R3U1
                    - button "Add to Cart - Razer Atlas Pro - Black. For US$129.99" [ref=e370] [cursor=pointer]: Add
                - group "Product 2 of 5" [ref=e371]:
                  - generic [ref=e373]:
                    - generic [ref=e374]:
                      - heading "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black" [level=3] [ref=e375]
                      - generic [ref=e376]:
                        - generic [ref=e380]:
                          - generic [ref=e381]: "Product price:"
                          - text: US$5,599.99
                        - link "View details" [ref=e383] [cursor=pointer]:
                          - /url: /gaming-laptops/razer-blade-16/RZ09-05819EN9-R3U1
                    - button "Add to Cart - Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5090 - Black. For US$5,599.99" [ref=e385] [cursor=pointer]: Add
                - group "Product 3 of 5" [ref=e386]:
                  - generic [ref=e388]:
                    - generic [ref=e389]:
                      - heading "Razer Viper V4 Pro - Black" [level=3] [ref=e390]
                      - generic [ref=e391]:
                        - generic [ref=e395]:
                          - generic [ref=e396]: "Product price:"
                          - text: US$159.99
                        - link "View details" [ref=e398] [cursor=pointer]:
                          - /url: /gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1
                    - button "Add to Cart - Razer Viper V4 Pro - Black. For US$159.99" [ref=e400] [cursor=pointer]: Add
                - group "Product 4 of 5" [ref=e401]:
                  - generic [ref=e403]:
                    - generic [ref=e404]:
                      - heading "Razer Gigantus V2 Pro - NiKo Edition" [level=3] [ref=e405]
                      - generic [ref=e406]:
                        - generic [ref=e410]:
                          - generic [ref=e411]: "Product price:"
                          - text: US$69.99
                        - link "View details" [ref=e413] [cursor=pointer]:
                          - /url: /gaming-mouse-mats/razer-gigantus-v2-pro/RZ02-05491300-R3U1
                    - button "Add to Cart - Razer Gigantus V2 Pro - NiKo Edition. For US$69.99" [ref=e415] [cursor=pointer]: Add
                - group "Product 5 of 5" [ref=e416]:
                  - generic [ref=e418]:
                    - generic [ref=e419]:
                      - heading "Razer Iskur V2 NewGen - Black / Green" [level=3] [ref=e420]
                      - generic [ref=e421]:
                        - generic [ref=e425]:
                          - generic [ref=e426]: "Product price:"
                          - text: US$649.99
                        - link "View details" [ref=e428] [cursor=pointer]:
                          - /url: /gaming-chairs/razer-iskur-v2-newgen/RZ38-04900700-R3US
                    - button "Add to Cart - Razer Iskur V2 NewGen - Black / Green. For US$649.99" [ref=e430] [cursor=pointer]: Add
              - generic [ref=e431]:
                - button "Previous" [disabled]
                - button "Next" [ref=e432] [cursor=pointer]
            - generic [ref=e434]:
              - text: $50 OFF TOP CHAIR PICKS
              - text: "The offer is valid with the purchase of select Gaming Chairs: Razer Iskur V2 NewGen, Razer Enki, Razer Fujin."
      - contentinfo [ref=e435]:
        - generic [ref=e440]:
          - generic [ref=e441]:
            - generic [ref=e443]:
              - heading "Shop" [level=2] [ref=e445]
              - list [ref=e447]:
                - listitem [ref=e448]:
                  - link "RazerStores" [ref=e449] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstores
                - listitem [ref=e450]:
                  - link "RazerCafe" [ref=e451] [cursor=pointer]:
                    - /url: https://www.razer.com/razercafe
                - listitem [ref=e452]:
                  - link "Store Locator" [ref=e453] [cursor=pointer]:
                    - /url: https://www.razer.com/store-finder
                - listitem [ref=e454]:
                  - link "Purchase Programs" [ref=e455] [cursor=pointer]:
                    - /url: https://www.razer.com/store/programs
                - listitem [ref=e456]:
                  - link "Bulk Order Program" [ref=e457] [cursor=pointer]:
                    - /url: https://www.razer.com/store/bulk-purchase
                - listitem [ref=e458]:
                  - link "Education" [ref=e459] [cursor=pointer]:
                    - /url: https://www.razer.com/education
                - listitem [ref=e460]:
                  - link "Only at Razer" [ref=e461] [cursor=pointer]:
                    - /url: https://www.razer.com/only-at-razer
                - listitem [ref=e462]:
                  - link "Razer Silver" [ref=e463] [cursor=pointer]:
                    - /url: https://www.razer.com/store/rewards
                - listitem [ref=e464]:
                  - link "Affiliate" [ref=e465] [cursor=pointer]:
                    - /url: https://www.razer.com/affiliate
                - listitem [ref=e466]:
                  - link "Newsletter" [ref=e467] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter
            - generic [ref=e469]:
              - heading "Explore" [level=2] [ref=e471]
              - list [ref=e473]:
                - listitem [ref=e474]:
                  - link "Technology" [ref=e475] [cursor=pointer]:
                    - /url: https://www.razer.com/technology
                - listitem [ref=e476]:
                  - link "Chroma RGB" [ref=e477] [cursor=pointer]:
                    - /url: https://www.razer.com/chroma
                - listitem [ref=e478]:
                  - link "Concepts" [ref=e479] [cursor=pointer]:
                    - /url: https://www.razer.com/concepts
                - listitem [ref=e480]:
                  - link "Esports" [ref=e481] [cursor=pointer]:
                    - /url: https://www.razer.com/esports
                - listitem [ref=e482]:
                  - link "Collabs" [ref=e483] [cursor=pointer]:
                    - /url: https://www.razer.com/lifestyle/collabs
            - generic [ref=e485]:
              - heading "Support" [level=2] [ref=e487]
              - list [ref=e489]:
                - listitem [ref=e490]:
                  - link "Get Help" [ref=e491] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/?c=us
                - listitem [ref=e492]:
                  - link "Registration & Warranty" [ref=e493] [cursor=pointer]:
                    - /url: https://www.razer.com/product-registration
                - listitem [ref=e494]:
                  - link "RazerStore Support" [ref=e495] [cursor=pointer]:
                    - /url: https://www.razer.com/razerstore-support
                - listitem [ref=e496]:
                  - link "RazerCare" [ref=e497] [cursor=pointer]:
                    - /url: https://www.razer.com/razercare
                - listitem [ref=e498]:
                  - link "Manage Razer ID" [ref=e499] [cursor=pointer]:
                    - /url: https://razerid.razer.com
                - listitem [ref=e500]:
                  - link "Support Videos" [ref=e501] [cursor=pointer]:
                    - /url: https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos
                - listitem [ref=e502]:
                  - link "Recycling Program" [ref=e503] [cursor=pointer]:
                    - /url: https://mysupport.razer.com/app/answers/detail/a_id/5904
                - listitem [ref=e504]:
                  - link "Accessibility Statement" [ref=e505] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/commitment-to-accessibility
            - generic [ref=e507]:
              - heading "Company" [level=2] [ref=e509]
              - list [ref=e511]:
                - listitem [ref=e512]:
                  - link "About Us" [ref=e513] [cursor=pointer]:
                    - /url: https://www.razer.com/about-razer
                - listitem [ref=e514]:
                  - link "Careers" [ref=e515] [cursor=pointer]:
                    - /url: https://careers.razer.com
                - listitem [ref=e516]:
                  - link "Newsroom" [ref=e517] [cursor=pointer]:
                    - /url: https://www.razer.com/newsroom
                - listitem [ref=e518]:
                  - link "zVentures" [ref=e519] [cursor=pointer]:
                    - /url: https://www.zvntrs.com
                - listitem [ref=e520]:
                  - link "Contact Us" [ref=e521] [cursor=pointer]:
                    - /url: https://www.razer.com/contact-us
                - listitem [ref=e522]:
                  - link "AI Gaming Newsletter" [ref=e523] [cursor=pointer]:
                    - /url: https://www.razer.com/newsletter/ai
            - generic [ref=e525]:
              - heading "Follow Us" [level=2] [ref=e527]
              - list [ref=e529]:
                - listitem [ref=e530]:
                  - link "Visit Razer’s Facebook Page" [ref=e531] [cursor=pointer]:
                    - /url: https://www.facebook.com/razer
                    - figure [ref=e532]
                - listitem [ref=e533]:
                  - link "Visit Razer’s Instagram Page" [ref=e534] [cursor=pointer]:
                    - /url: https://www.instagram.com/razer
                    - figure [ref=e535]
                - listitem [ref=e536]:
                  - link "Visit Razer’s Threads Page" [ref=e537] [cursor=pointer]:
                    - /url: https://www.threads.net/@razer
                    - figure [ref=e538]
                - listitem [ref=e539]:
                  - link "Visit Razer’s X Page" [ref=e540] [cursor=pointer]:
                    - /url: https://www.twitter.com/Razer
                    - figure [ref=e541]
                - listitem [ref=e542]:
                  - link "Visit Razer’s YouTube Page" [ref=e543] [cursor=pointer]:
                    - /url: https://www.youtube.com/razer
                    - figure [ref=e544]
                - listitem [ref=e545]:
                  - link "Visit Razer’s TikTok Page" [ref=e546] [cursor=pointer]:
                    - /url: https://www.tiktok.com/@razer
                    - figure [ref=e547]
                - listitem [ref=e548]:
                  - link "Visit Razer’s Twitch Page" [ref=e549] [cursor=pointer]:
                    - /url: https://www.twitch.tv/razer
                    - figure [ref=e550]
                - listitem [ref=e551]:
                  - link "Visit Razer’s Discord Page" [ref=e552] [cursor=pointer]:
                    - /url: https://discord.com/invite/razer
                    - figure [ref=e553]
            - generic [ref=e557]: FOR GAMERS. BY GAMERS.™
          - generic [ref=e561]:
            - generic [ref=e562]:
              - generic [ref=e564]: Copyright © 2026 Razer Inc. All rights reserved.
              - list [ref=e566]:
                - listitem [ref=e567]:
                  - link "Site Map" [ref=e568] [cursor=pointer]:
                    - /url: https://www.razer.com/sitemap
                - listitem [ref=e569]:
                  - text: "|"
                  - link "Legal Terms" [ref=e570] [cursor=pointer]:
                    - /url: https://www.razer.com/legal
                - listitem [ref=e571]:
                  - text: "|"
                  - link "Privacy Policy" [ref=e572] [cursor=pointer]:
                    - /url: https://www.razer.com/legal/customer-privacy-policy
                - listitem [ref=e573]:
                  - text: "|"
                  - button "Cookie Settings" [ref=e574] [cursor=pointer]
            - generic [ref=e576]:
              - text: United States |
              - link "Change Location >" [ref=e577] [cursor=pointer]:
                - /url: /choose-location
    - text: 
  - dialog "Razer Gaming Chair Special":
    - generic [ref=e586]:
      - button "Close dialog" [ref=e587] [cursor=pointer]:
        - img
      - link "Razer Gaming Chair Special - Unlock up to $200 off now. Click to Shop Now" [ref=e588] [cursor=pointer]:
        - /url: https://www.razer.com/store
        - img "Razer Gaming Chair Special - Unlock up to $200 off now. Click to Shop Now" [ref=e590]
```

# Test source

```ts
  95  |   });
  96  | 
  97  |   test("SF_07 - Verify Store Category Navigation", async ({ page }) => {
  98  |     // Navigate to Laptops category
  99  |     await page
  100 |       .getByRole("link", {
  101 |         name: "Laptops",
  102 |       })
  103 |       .click();
  104 | 
  105 |     // Close popup if visible
  106 |     const closeBtn = page.getByRole("button", {
  107 |       name: "Close",
  108 |     });
  109 | 
  110 |     if (await closeBtn.isVisible()) {
  111 |       await closeBtn.click();
  112 |     }
  113 | 
  114 |     // Verify laptops URL
  115 |     await expect(page).toHaveURL(/gaming-laptops/);
  116 | 
  117 |     // Navigate to Mouse Mats category
  118 |     await page
  119 |       .getByRole("link", {
  120 |         name: "Mouse Mats",
  121 |       })
  122 |       .click();
  123 | 
  124 |     // Verify mouse mats URL
  125 |     await expect(page).toHaveURL(/mouse-mats/);
  126 |   });
  127 | 
  128 |   test("SF_08 - Verify Product Details Display", async ({ page }) => {
  129 |     await page
  130 |       .locator(".thumbnail-holder.recommendation-link > img")
  131 |       .first()
  132 |       .click();
  133 | 
  134 |     await page
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
  176 | test("SF_11 - Verify Breadcrumb Navigation", async ({ page }) => {
  177 | 
  178 |   // Open product page directly
  179 |   await page.goto(
  180 |     "https://www.razer.com/gaming-mice/razer-viper-v4-pro/RZ01-05630100-R3U1"
  181 |   );
  182 | 
  183 |   // Close popup if visible
  184 |   const closeBtn = page.getByRole("button", {
  185 |     name: /close/i,
  186 |   });
  187 | 
  188 |   if (await closeBtn.isVisible().catch(() => false)) {
  189 |     await closeBtn.click();
  190 |   }
  191 | 
  192 |   // Click breadcrumb/category link
  193 |   await page.getByRole("link", {
  194 |     name: /Gaming Mice/i,
> 195 |   }).click();
      |      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  196 | 
  197 |   // Verify redirected URL
  198 |   await expect(page).toHaveURL(/gaming-mice/);
  199 | 
  200 | });
  201 | });
  202 | 
```