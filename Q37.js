/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let set = new Set(); // Step 1: Create a set to keep unique numbers.
    
    for (let num of nums) {
        set.add(num); // Step 2: Add the number itself.
        console.log(set)
        // Reverse the number:
        let reversedNum = parseInt(num.toString().split('').reverse().join(''));
        set.add(reversedNum); // Step 3: Add the reversed number.
    }
    
    return set.size; // Step 4: Return how many unique numbers there are.
};
console.log(countDistinctIntegers([ 1,13,10,12,31]))