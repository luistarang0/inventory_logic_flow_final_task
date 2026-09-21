const BaseComponent = require("../common/base.component");

class InventoryItemComponent extends BaseComponent {
    constructor(itemName) {
        super(`//div[@class="inventory_item_name "][text()="${itemName}"]/../../..`)
    }

    get actionBtn() {
        return this.rootElement.$('.//button')
    }
}

module.exports = InventoryItemComponent;