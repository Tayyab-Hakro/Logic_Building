/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {

  nums =  nums.sort((a ,b) => a-b)
    console.log(nums)
    let biggest1 = nums[nums.length-1]
    let biggest2 = nums[nums.length-2]
    let biggestResult  =  biggest1 * biggest2
    let smallest1 = nums[0]
    let smallest2 = nums[1]   
    let smallestResult = smallest1 * smallest2
    return biggestResult  - smallestResult

};
console.log(maxProductDifference([5,6,2,7,4]))