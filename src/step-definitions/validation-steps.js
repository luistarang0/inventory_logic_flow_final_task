const { Then } = require('@wdio/cucumber-framework');
const { pages } = require('../po');
const compareText = require('./utils/compare-text');

Then('Prices should be sorted from low to high', async () => {
    const receivedPrices = await pages('inventory').getPrices();
    const sortedPrices = [...receivedPrices].sort((a, b) => a - b);
    
    return expect(receivedPrices).toEqual(sortedPrices);
});

Then('The Cart Badge should {string} {string}', async (condition, value) => {
    const cartBadgeValue = await pages('inventory').cartBadge.badgeCount();
    return compareText(value, cartBadgeValue, condition);
})
