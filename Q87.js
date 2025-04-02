/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let n = nums.length;
    let sum = 0;
console.log(n)
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            sum += nums[i - 1] * nums[i - 1]; // Square the special element
        }
    }

    return sum;
};
console.log(sumOfSquares([1,2,3,4]))