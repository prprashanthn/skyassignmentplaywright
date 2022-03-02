const { test, expect } = require("@playwright/test");

class DealsPage {
  async isLoaded(url) {
    const currentUrl = await page.url();
    await expect(currentUrl).toEqual(url);
    console.log(currentUrl);
  }

  async validatePrices(expPrices){
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await page.locator('//*[@id="deals-filter"]/button[1]').click();
    await expect(page.locator('(//span[@class="text__Text-sc-1u9gciq-0 iNTDeb"])[1]')).toContainText(expPrices.slice(0,2));
    await expect(page.locator('(//span[@class="text__Text-sc-1u9gciq-0 iNTDeb"])[2]')).toContainText(expPrices.slice(3,5));
    await expect(page.locator('(//span[@class="text__Text-sc-1u9gciq-0 iNTDeb"])[3]')).toContainText(expPrices.slice(6,8));
     
  }
}
module.exports = { DealsPage };