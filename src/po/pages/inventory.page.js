const { HeaderComponent, InventoryItemComponent } = require('../components');
const BasePage = require('./base.page');

class InventoryPage extends BasePage {
    constructor() {
        super('/inventory.html');
        this.header = new HeaderComponent();
    }

    itemCard(name) {
        return new InventoryItemComponent(name);
    }
}

module.exports = InventoryPage;