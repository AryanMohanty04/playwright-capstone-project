class LocationPage {
  constructor(page) {
    this.page = page;

    this.locationInput = page.getByRole("textbox", {
      name: "search delivery location",
    });

    this.mumbaiOption = page.getByText("Mumbai Central", { exact: true });
  }

  async open() {
    await this.page.goto("https://blinkit.com/");
  }

  async selectMumbai() {
    await this.locationInput.click();
    await this.locationInput.fill("Mumbai");
    await this.mumbaiOption.click();
  }
}

module.exports = { LocationPage };