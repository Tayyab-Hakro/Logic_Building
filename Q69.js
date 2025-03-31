function finalPrices(prices) {
    let result = [...prices]; // Copy the original prices array

    for (let i = 0; i < prices.length; i++) { // Loop through each price
        for (let j = i + 1; j < prices.length; j++) { // Look ahead in the array
            if (prices[j] <= prices[i]) { // Find the first smaller or equal price
                result[i] = prices[i] - prices[j]; // Apply the discount
                break; // Stop searching once we find the discount
            }
        }
    }
    return result; // Return the final discounted prices
}

// Example usage
console.log(finalPrices([8, 4, 6, 2, 3])); // Output: [4, 2, 4, 2, 3]
