const { When, Given } = require('@wdio/cucumber-framework');
const { pages } = require('../po');

Given('I open {string} page', function (page) {
    return pages(page).open();
});

When('I login with user {string} and password {string}', async function (username, password) {
    await pages('login').loginBox.input('username').setValue(username);
    await pages('login').loginBox.input('password').setValue(password);
    await pages('login').loginBox.loginBtn.click();
});

When('I select {string} from the Sort Price dropdown from the header', async function(sort){
    await pages('inventory').header.sortDropdown.click();
    await pages('inventory').sortDropdown.option(sort).click();
});

