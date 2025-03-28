/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    // Sort the piles in descending order
    piles.sort((a, b) => b - a);
    
    let maxCoins = 0;
    let n = piles.length / 3;

    // Pick the second largest pile in each triplet
    for (let i = 1; i < 2 * n; i += 2) {
        console.log(i)
        maxCoins += piles[i];
    }
    
    return maxCoins;
};

console.log(maxCoins([2,4,1,2,7,8]))