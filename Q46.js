var triangularSum = function(nums) {
    while (nums.length > 1) {
        let newNums = [];
        for (let i = 0; i < nums.length - 1; i++) {
            newNums.push((nums[i] + nums[i + 1]) % 10);
        }
        nums = newNums; // Replace old array with new array
    }
    return nums[0]; // The last remaining number
};
console.log(triangularSum([1,2,3,4,5]))