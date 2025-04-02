var canAliceWin = function(nums) {
let last = nums.pop()
let sum = 0
let Alice = 0
let Bob = 0
for(let i = 0; i<nums.length ;i++){
sum+=nums[i]
if(last > sum || sum > last){
    Alice = sum > last ? last :sum
}    else{
Bob  = sum  > last ? last :sum

}
};
return Alice <= Bob ? false : true
}
console.log(canAliceWin([1,2,3,4,5,14]))

console.log(canAliceWin([1,2,3,4,10]))
