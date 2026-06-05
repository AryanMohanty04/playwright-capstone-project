class SearchPage {
  constructor(page) {
    this.page = page;

    this.searchLink = page.getByRole("link", {
      name: '! Search "curd" Search "rice',
    });

    this.searchBox = page.getByRole("textbox", {
      name: "Search for atta dal and more",
    });
  }

  async openSearch() {
    await this.searchLink.click();
  }

  async search(product) {
    await this.searchBox.fill(product);
  }

  async pressEnter() {
    await this.searchBox.press("Enter");
  }

  async gotoSearchURL(query) {
    await this.page.goto(`https://blinkit.com/s/?q=${query}`);
  }

  async openResultItem() {
    await this.page.locator(".list > div").first().click();
  }
}

module.exports = { SearchPage };