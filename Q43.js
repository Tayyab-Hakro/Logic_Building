/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        
        // Check how many times nums[i] appears
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                count++;
            }
        }
        
        // If it appears twice and not already in result, add it
        if (count === 2 && !result.includes(nums[i])) {
            result.push(nums[i]);
        }
    }
    
    return result;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]))
