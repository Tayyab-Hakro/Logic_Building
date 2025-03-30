var maxProduct = function(nums) {
    nums = nums.sort((a,b) => b-a)
    for(let i = 0 ;i<nums.length ;i++){
        let sum = nums[0]-1 
        let sum1  = nums[1] -1
        console.log(sum * sum1)
    }
  
};

console.log(maxProduct([3,4,5,2]))