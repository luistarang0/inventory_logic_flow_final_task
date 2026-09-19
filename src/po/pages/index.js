const InventoryPage = require("./inventory.page")
const LoginPage = require("./login.page")


/**
 * 
 * @param { login | inventory } name 
 * @returns
 */
function pages(name) {
    const items = {
        login: new LoginPage(),
        inventory: new InventoryPage(),
    }
    return items[name.toLowerCase()];
}

module.exports = {
    LoginPage,
    InventoryPage,
    pages
}