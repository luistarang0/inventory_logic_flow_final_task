const BaseComponent = require("../common/base.component");

class CartBadgeComponent extends BaseComponent {
    constructor() {
        super('//div[@id="shopping_cart_container"]');
    }

    async badgeCount() {
        return await this.rootElement.$('.//span').getText();
    }
}

module.exports = CartBadgeComponent;