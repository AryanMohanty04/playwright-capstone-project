const { test, expect } = require("@playwright/test");

test.describe("Search Module", () => {
  //   test.beforeEach(async ({ page }) => {

  //     await page.goto("https://www.razer.com/");

  //     await page
  //       .getByRole("button", {
  //         name: "Accept All",
  //       })
  //       .click();

  //   });

  //Search Icon opens to Search Box
  test("S1 - Search Icon Opens to Search box", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.getByRole("button", { name: "Search" }).click();
  });

  //Search Textbox accepts text
  test("S2 - Search textbox accepts text", async ({ page }) => {
    await page.goto("https://www.razer.com/");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.getByRole("button", { name: "Search" }).click();
    await page.getByRole("textbox", { name: "Search razer.com" }).fill("Blade");
  });

  //Search textbox input result visible 
  test('test', async ({ page }) => {
  await page.goto('https://www.razer.com/');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByLabel('global', { exact: true }).locator('cx-page-slot').filter({ hasText: 'Search razer.comBegin typing' }).click();
  await page.getByRole('textbox', { name: 'Search razer.com' }).click();
  await page.getByRole('textbox', { name: 'Search razer.com' }).fill('BlackWidow');
  await page.getByRole('textbox', { name: 'Search razer.com' }).press('Enter');
  await page.getByRole('textbox', { name: 'Search razer.com' }).click();
});

});
