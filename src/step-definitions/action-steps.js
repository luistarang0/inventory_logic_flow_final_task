const { When, Given } = require('@wdio/cucumber-framework');
const { pages } = require('../po');
const testData = require('../test-data/test.data');

Given('I open {string} page', function (page) {
    return pages(page).open();
});

When('I login as standard user', async () => {
    await pages('login').loginBox.input('username').setValue(testData.testUser);
    await pages('login').loginBox.input('password').setValue(testData.testPassword);
    await pages('login').loginBox.loginBtn.click();
});

When('I select {string} from the Sort Price dropdown from the header', async function(sort){
    await pages('inventory').sortDropdown.option(sort).click();
});

When('I add {string} to the cart', async function(itemName){
    await pages('inventory').item(itemName).actionBtn.click();
});

When('I remove {string} from the cart', async function(itemName) {
    await pages('inventory').item(itemName).actionBtn.click(); 
})

