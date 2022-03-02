const { expect } = require("@playwright/test");



class SignInPage{
    async enterUserName(userName){
        await page.waitForSelector('iframe[title=\'iFrame containing Sky Sign-In application\']');
        const elementHandle = await page.$('iframe[title=\'iFrame containing Sky Sign-In application\']');   
        const frame = await elementHandle.contentFrame();
        await frame.locator('#username').fill(userName);
    }

    async clickContButton(){
        await page.screenshot({ path: 'screenshot.png', fullPage: false });
        await page.waitForSelector('iframe[title=\'iFrame containing Sky Sign-In application\']');
        const elementHandle = await page.$('iframe[title=\'iFrame containing Sky Sign-In application\']');   
        const frame = await elementHandle.contentFrame();
        await frame.locator('[data-testid="AUTHN__SUBMIT_BTN"]').click();
    }

    async verifyCreatePasstext(expPasswordText){
        await page.screenshot({ path: 'screenshot.png', fullPage: true });
        await page.waitForSelector('iframe[title=\'iFrame containing Sky Sign-In application\']');
        const elementHandle = await page.$('iframe[title=\'iFrame containing Sky Sign-In application\']');   
        const frame = await elementHandle.contentFrame();
        expect(await frame.locator('//h1[contains(text(),"Create your My Sky")]')).toContainText(expPasswordText);

    }
}
module.exports = { SignInPage };