/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let setA = new Set();
    let setB = new Set();
    let result = [];
    let commonCount = 0;

    for (let i = 0; i < A.length; i++) {
        setA.add(A[i]);
        setB.add(B[i]);

        if (A[i] === B[i]) {
            commonCount++;
        } else {
            if (setB.has(A[i])) commonCount++;
            if (setA.has(B[i])) commonCount++;
        }

        result.push(commonCount);
    }

    return result;
};

// Example usage:
console.log(findThePrefixCommonArray([1,3,2,4], [3,1,2,4])); // Output: [0,2,3,4]
console.log(findThePrefixCommonArray([2,3,1], [3,1,2]));     // Output: [0,1,3]
