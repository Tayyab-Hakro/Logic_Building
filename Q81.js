var addedInteger = function(nums1, nums2) {
nums1 = nums1.sort((a , b) => a-b)
nums2 = nums2.sort((a , b) => a-b)
let mapped = nums2.map((item,index) => item-nums1[index] )
return mapped[0]
}
console.log(addedInteger([2,6,4], [9,7,5]))