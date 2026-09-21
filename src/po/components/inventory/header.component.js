const BaseComponent = require("../common/base.component");

class HeaderComponent extends BaseComponent{
    constructor() {
        super('//header[@id="header_container"]');
    }

    get sortDropdown() {
        return this.rootElement.$('.//select[@class="product_sort_container"]');
    }

    get cartBadge() {
        return this.rootElement.$('.//a[@class="shopping_cart_link"]');
    }    
}

module.exports = HeaderComponent;