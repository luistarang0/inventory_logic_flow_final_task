const BaseComponent = require("../common/base.component");

class SortDropdown extends BaseComponent{

    constructor() {
        super('//select[@class="product_sort_container"]');
    }

    option(sort) {
        const selectors = {
            'name (a to z)': './/option[@value="az"]',
            'name (z to a)': './/option[@value="za"]',
            'price (low to high)': './/option[@value="lohi"]',
            'price (high to low)': './/option[@value="hilo"]',
        }

        return this.rootElement.$(selectors[sort.toLowerCase()]);
    }

}

module.exports = SortDropdown;