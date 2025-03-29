/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let countMap = new Map();
    
    // Count occurrences of each string
    for (let str of arr) {
        countMap.set(str, (countMap.get(str) || 0) + 1);
    }
    console.log(countMap)
    // Find the k-th distinct string
    let distinctCount = 0;
    for (let str of arr) {
        if (countMap.get(str) === 1) {
            distinctCount++;
            if (distinctCount === k) {
                return str;
            }
        }
    }
    
    return "";
};

console.log(kthDistinct(["d","b","c","b","c","a"], 2)); // Output: "a"
console.log(kthDistinct(["aaa","aa","a"], 1)); // Output: "aaa"
console.log(kthDistinct(["a","b","a"], 3)); // Output: ""
