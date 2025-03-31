var minElement = function(nums) {
let res =  nums.map((num) =>num.toString().split("").reduce((sum , acc) => sum +=parseInt(acc) ,0))
return Math.min(...res)
}

console.log(minElement([10,12,13,14]))