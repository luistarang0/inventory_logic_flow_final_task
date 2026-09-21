const { HeaderComponent, SortDropdown, CartBadgeComponent, InventoryItem } = require('../components');
const BasePage = require('./base.page');

class InventoryPage extends BasePage {
    constructor() {
        super('/inventory.html');
        this.header = new HeaderComponent();
        this.sortDropdown = new SortDropdown();
        this.cartBadge = new CartBadgeComponent();
    }

    get getPriceItems() {
        return $$('//div[@class="inventory_item_price"]');
    }

    async getPrices() {
        const priceElements = await this.getPriceItems;
        const prices = [];

        for (const element of priceElements) {
            const text = await element.getText();
            prices.push(parseFloat(text.replace('$', '')));
        }

        return prices;
    }

    item(itemName) {
        return new InventoryItem(itemName);
    }
}

module.exports = InventoryPage;