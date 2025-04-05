var findMissingAndRepeatedValues = function(grid) {
    const n = grid.length;
    const nums = grid.flat(); // flatten the 2D grid into 1D
    const freq = new Array(n * n + 1).fill(0);
    console.log(freq)

    // Count frequency of each number
    for (let num of nums) {
        freq[num]++;
    }

    let repeated = -1, missing = -1;

    // Find repeated and missing based on frequency
    for (let i = 1; i <= n * n; i++) {
        if (freq[i] === 2) repeated = i;
        if (freq[i] === 0) missing = i;
    }

    return [repeated, missing];
};

console.log(findMissingAndRepeatedValues([[1,3],[2,2]]))