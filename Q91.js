/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let n = code.length;
    let result = new Array(n).fill(0);
    
    if (k === 0) return result;
    
    let extendedCode = [...code, ...code]; // Extend array for circular access
    let start = k > 0 ? 1 : n + k; // Start position for sum calculation
    
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < Math.abs(k); j++) {
            sum += extendedCode[start + i + j];
        }
        result[i] = sum;
    }
    
    return result;
};

// Test cases
console.log(decrypt([5,7,1,4], 3));  // [12,10,16,13]
console.log(decrypt([1,2,3,4], 0));  // [0,0,0,0]
console.log(decrypt([2,4,9,3], -2)); // [12,5,6,13]
