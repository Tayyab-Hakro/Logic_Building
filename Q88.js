var maximizeSum = function(nums, k) {
    let biggest = Math.max(...nums);
    let res = 0 
    while(k > 0){
        res +=biggest
        biggest +=1
        k -= 1
    }
    
    return res;
};

console.log(maximizeSum([1,2,3,4,5], 3)); // Output: 18
