/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let Sumall = nums.reduce((sum , acc) => sum+=acc ,0)
    console.log("Reduce sum" ,Sumall)
    let sum  = 0;
    for(let i = 0 ; i<nums.length ;i++){
let num = nums[i].toString().split("")
sum += parseInt(num)
console.log(sum +"tola")
}
 //   return Sumall - sum
    };

    console.log(differenceOfSum([1,15,6,3]))