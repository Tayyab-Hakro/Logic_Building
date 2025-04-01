/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function(cost) {
    let n = cost.length;
    let answer = new Array(n).fill(Infinity);
    console.log(answer)
    // Start at position 0, cost to reach position 0 is cost[0]
    answer[0] = cost[0];

    // Iterate through each position
    for (let i = 1; i < n; i++) {
        // Minimum cost to reach position i is the minimum of:
        // 1. Paying cost[i] directly.
        // 2. Moving for free if there's a lower cost before.
        answer[i] = Math.min(answer[i - 1], cost[i]);
    }

    return answer;
};

// Example Usage
console.log(minCosts([5, 3, 4, 1, 3, 2])); // Output: [5, 3, 3, 1, 1, 1]
console.log(minCosts([1, 2, 4, 6, 7]));    // Output: [1, 1, 1, 1, 1]
