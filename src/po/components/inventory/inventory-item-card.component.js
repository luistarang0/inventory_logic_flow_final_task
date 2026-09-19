const BaseComponent = require("../common/base.component");

class InventoryItemComponent extends BaseComponent {

    constructor(name) {
        super(`_${name}`);
    }

}

module.exports = InventoryItemComponent;