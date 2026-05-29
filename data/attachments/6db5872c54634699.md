# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02_search/search.spec.js >> Search Module >> S5 - Empty Search Validation works
- Location: tests/02_search/search.spec.js:103:3

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
  - img [ref=e3]
  - generic [ref=e4]: "::CLOUDFLARE_ERROR_1000S_BOX::"
```

# Test source

```ts
  9   |       .getByRole("button", {
  10  |         name: "Accept All",
  11  |       })
  12  |       .click();
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
> 109 |       .click();
      |        ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  176 |       .click();
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
```