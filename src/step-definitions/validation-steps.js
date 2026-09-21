const { Then } = require('@wdio/cucumber-framework');
const compareArrays = require('./utils/compare-arrays');
const { pages } = require('../po');

Then('Prices should be sorted from low to high', async () => {
    const receivedPrices = await pages('inventory').getPrices();
    const sortedPrices = [...receivedPrices].sort((a, b) => a - b);
    
    return compareArrays(sortedPrices, receivedPrices);
})
