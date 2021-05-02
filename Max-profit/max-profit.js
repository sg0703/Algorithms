// Write a function that takes an array of integers representing the price of a stock on different days. Return the maximum profit that can be made from buying and selling a single stock

var maxProfit = function(prices) {
    // at least one
    let atLeastOne = false;
    let profit = 0;

    // loop through numbers, then loop through all nums after it
    for(let i = 0; i < prices.length; i++) {
        // loop through remaining numbers
        for(let n = i; n < prices.length; n++) {
            if(!atLeastOne && prices[n] - prices[i] > 0) {
                profit = prices[n] - prices[i];
                atLeastOne = true;
            }
            // if there's already a profit, compare the two and reset if greater
            else if (prices[n] - prices[i] > profit) {
                profit = prices[n] - prices[i];
            }
        }
    }

    return profit;
};