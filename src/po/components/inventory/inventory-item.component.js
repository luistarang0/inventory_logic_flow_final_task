const BaseComponent = require("../common/base.component");

class InventoryItem extends BaseComponent {
    constructor(itemName) {
        super(`//div[@class="inventory_item_name "][text()="${itemName}"]/../../..`)
    }

    get actionBtn() {
        return this.rootElement.$('.//button')
    }

    async count() {
        return await this.rootElement.$('.//div[@class="inventory_item_name "]').getText();
    }
}

module.exports = InventoryItem;