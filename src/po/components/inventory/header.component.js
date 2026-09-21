const BaseComponent = require("../common/base.component");

class HeaderComponent extends BaseComponent{
    constructor() {
        super('//header[@id="header_container"]');
    }
}

module.exports = HeaderComponent;