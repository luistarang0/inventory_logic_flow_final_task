const { Before } = require("@wdio/cucumber-framework");
const { pages } = require("../po");
const testData = require('../test-data/test.data')

Before({name: 'login', tags: '@UC-2'}, async () => {
    await pages('login').open();
    await pages('login').loginBox.input('username').setValue(testData.testUser);
    await pages('login').loginBox.input('password').setValue(testData.testPassword);
    await pages('login').loginBox.loginBtn.click();
});