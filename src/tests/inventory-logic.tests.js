const { pages } = require('../po');
const testData = require('../test-data/test.data')

describe('Inventory Page shows', () => {

    beforeEach(async () => {
        await pages('login').open();
    })
    
    it('Successfully login', async () => {
        await pages('login').loginBox.input('username').setValue(testData.testUser);
        await pages('login').loginBox.input('password').setValue(testData.testPassword);

        await pages('login').loginBox.loginBtn.click();

        await expect(browser.getUrl()).resolves.toContain(pages('inventory').url);
    })
})