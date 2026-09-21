const { SortDropdown, CartBadge, InventoryItem, InventoryList } = require('../components');
const BasePage = require('./base.page');

class InventoryPage extends BasePage {
    constructor() {
        super('/inventory.html');
        this.sortDropdown = new SortDropdown();
        this.cartBadge = new CartBadge();
        this.inventoryList = new InventoryList;
    }

    item(itemName) {
        return new InventoryItem(itemName);
    }
}

module.exports = InventoryPage;