# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage\homepage.spec.js >> Homepage & Navigation Module >> HN_09 - Razer Logo returns to the HomePage
- Location: tests\homepage\homepage.spec.js:81:3

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('a').filter({ hasText: /^Shop Now$/ })

```

```
Error: browserContext.close: Protocol error (Target.disposeBrowserContext): Failed to find context with id B03650B84CFB118595291EC154645C5E
```