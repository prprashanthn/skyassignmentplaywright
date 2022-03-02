const { test ,expect } = require("@playwright/test");

class SearchPage{

    async clickSearch(){
        await page.screenshot({ path: 'screenshot.png', fullPage: false });
        await page.locator('[data-test-id="masthead-search-toggle-button"]').click();
    }

    async enterSearchKey(searchkey){
        await page.locator('[data-test-id="input-box"]').fill(searchkey);
    }

    async clickSearchBtn(){
        await page.screenshot({ path: 'screenshot.png', fullPage: false });
        await page.locator('[data-test-id="submit-button"]').click();
    }

    async editorialSection() {
        await page.screenshot({ path: 'screenshot.png', fullPage: true });
      }
}
module.exports = { SearchPage };