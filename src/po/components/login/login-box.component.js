const BaseComponent = require("../common/base.component");

class LoginBoxComponent extends BaseComponent {
    constructor() {
        super('//div[@id="login_button_container"]');
    }

    get loginBtn() {
        return this.rootElement.$('.//input[@id="login-button"]')
    }

    input(name) {
        const selectors = {
            username: './/input[@id="user-name"]',
            password: './/input[@id="password"]',
        }

        return this.rootElement.$(selectors[name.toLowerCase()]);
    } 
}

module.exports = LoginBoxComponent;