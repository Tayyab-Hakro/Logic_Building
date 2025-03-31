/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length;
    let totalNumbers = n * n;
    let numCount = new Array(totalNumbers + 1).fill(0);  // Array to count occurrences
    
    let repeated, missing;
    
    // Count occurrences of numbers
    for (let row of grid) {
        for (let num of row) {
            numCount[num]++;
        }
    }

    // Find the repeated and missing numbers
    for (let i = 1; i <= totalNumbers; i++) {
        if (numCount[i] === 2) repeated = i;
        if (numCount[i] === 0) missing = i;
    }

    return [repeated, missing];
};

console.log(findMissingAndRepeatedValues([[1,3],[2,2]]))