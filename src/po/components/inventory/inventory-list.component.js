const BaseComponent = require("../common/base.component");

class InventoryListComponent extends BaseComponent {
    constructor() {
        super('//div[@class="inventory_list"]')
    }

    get getItemsPrices() {
        return $$('.//div[@class="inventory_item_price"]');
    }

    async getPrices() {
        const priceElements = await this.getItemsPrices;
        const prices = [];

        for (const element of priceElements) {
            const text = await element.getText();
            prices.push(parseFloat(text.replace('$', '')));
        }

        return prices;
    }
}

module.exports = InventoryListComponent;