const { LoginBoxComponent } = require('../components');
const BasePage = require('./base.page');

class LoginPage extends BasePage {
    constructor() {
        super('/');
        this.loginBox = new LoginBoxComponent();
    }
}

module.exports = LoginPage;