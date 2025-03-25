/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1; // Get index based on value
        // If the number at that index is negative, we've seen it before
        if (nums[index] < 0) {
            result.push(Math.abs(nums[i]));
        } else {
            // Otherwise, mark it as visited by negating the number
            nums[index] = -nums[index];
        }
    }
    
    return result;
};
console.log(findDuplicates([4,3,2,7,8,2,3,1]))