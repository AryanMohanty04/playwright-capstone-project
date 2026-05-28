# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_management\cart_management.spec.js >> Cart Management Module >> CT_03 - Opening cart page successfully
- Location: tests\cart_management\cart_management.spec.js:59:3

# Error details

```
Error: browserContext.close: Test ended.
Browser logs:

<launching> C:\Users\hp\AppData\Local\ms-playwright\chromium_headless_shell-1223\chrome-headless-shell-win64\chrome-headless-shell.exe --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,BoundaryEventDispatchTracksNodeRemoval,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate,RenderDocument,OptimizationHints,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=C:\Users\hp\AppData\Local\Temp\playwright_chromiumdev_profile-aSu93z --remote-debugging-pipe --no-startup-window
<launched> pid=12864
[pid=12864][err] [0528/154056.636:INFO:CONSOLE:1] "No auth data found in localStorage, returning undefined.", source: https://assets2.razerzone.com/js/pnx.assets/external/components/usp/cards-scrolling.js (1)
[pid=12864][err] [0528/154056.638:INFO:CONSOLE:1] "No cart data found in localStorage, returning null.", source: https://assets2.razerzone.com/js/pnx.assets/external/components/usp/cards-scrolling.js (1)
[pid=12864][err] [0528/154057.382:INFO:CONSOLE:0] "Access to font at 'https://assets2.razerzone.com/assets/fonts/MaterialSymbolsRounded[FILL,GRAD,opsz,wght].woff2' from origin 'https://www.razer.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.", source: https://www.razer.com/store (0)
[pid=12864][err] [0528/154059.017:INFO:CONSOLE:5] "Uncaught TypeError: Cannot read properties of null (reading 'getBoundingClientRect')", source: https://assets2.razerzone.com/js/pnx.assets/pnxssr/pnxssr_0_5f43990cc647ae064799e79df25bc752.js (5)
[pid=12864][err] [0528/154102.374:INFO:CONSOLE:1] "No auth data found in localStorage, returning undefined.", source: https://assets2.razerzone.com/js/pnx.assets/external/components/usp/cards-scrolling.js (1)
[pid=12864][err] [0528/154102.374:INFO:CONSOLE:1] "No auth found, setting anonymous user.", source: https://assets2.razerzone.com/js/pnx.assets/external/components/usp/cards-scrolling.js (1)
[pid=12864][err] [0528/154103.411:INFO:CONSOLE:436] "Created gtm_interval_timer[1779963063412_842090]", source: https://assets2.razerzone.com/js/analytics/ga360_common.js (436)
```