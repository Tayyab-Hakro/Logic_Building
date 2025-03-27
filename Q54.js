var numberGame = function(nums) {
    let sorted = nums.sort((a, b) => a - b); // Sort in ascending order
    let result = [];

    for (let i = 0; i < sorted.length; i += 2) {
        if (i + 1 < sorted.length) {
            result.push(sorted[i + 1]); // Bob's pick
            result.push(sorted[i]);     // Alice's pick
        }
    }
    
    return result;
};

console.log(numberGame([5, 4, 2, 3])); // Expected output: [3,2,5,4]
