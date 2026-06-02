class HomePage {
  constructor(page) {
    this.page = page;
    this.locationInput = page.getByRole("textbox", { name: "search delivery location" });
    this.searchBox = page.getByRole("textbox", { name: "Search for atta dal and more" });
    this.footer = page.locator("footer");
    this.navbar = page.locator("header");
    this.dairyBannerImg = page.getByRole("img", { name: "- Dairy, Bread & Eggs" });
    this.fnvBanner = page.getByRole("img", { name: "fnv banner" });
    this.logoLink = page.getByRole("link").filter({ hasText: /^$/ });
    this.contactLink = page.getByRole("link", { name: "Contact" });
    this.myCartText = page.getByText("My Cart");
  }

  async goto() {
    await this.page.goto("https://blinkit.com/");
  }

  async setLocation(city = "Mumbai", area = "Mumbai Central") {
    await this.locationInput.waitFor({ state: "visible" });
    await this.locationInput.click({ delay: 100 });
    await this.locationInput.fill(city);
    await this.page.waitForTimeout(1000);
    await this.page.getByText(area, { exact: true }).waitFor({ state: "visible" });
    await this.page.getByText(area, { exact: true }).click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async clickDairyBanner() {
    await this.dairyBannerImg.waitFor({ state: "visible" });
    await this.dairyBannerImg.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async clickFnvBanner() {
    await this.fnvBanner.waitFor({ state: "visible" });
    await this.fnvBanner.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async clickLogo() {
    await this.logoLink.click();
  }

  async fillSearchBox(text) {
    await this.page.goto("https://blinkit.com/s/");
    await this.searchBox.fill(text);
  }

  async scrollToFooter() {
    await this.footer.scrollIntoViewIfNeeded();
  }

  async clickContactLink() {
    await this.scrollToFooter();
    await this.contactLink.waitFor({ state: "visible" });
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
      this.contactLink.click(),
    ]);
    await newPage.waitForLoadState("domcontentloaded");
    return newPage;
  }

  async scrollDown(amount = 3000) {
    await this.page.mouse.wheel(0, amount);
  }

  async reload() {
    await this.page.reload();
  }
}

module.exports = { HomePage };