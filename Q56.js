var minNumberOperations = function(target) {
    let operations = target[0]; // Start with the first number (need at least this much)

    for (let i = 1; i < target.length; i++) {
        if (target[i] > target[i - 1]) {
            operations += (target[i] - target[i - 1]); // Add the increase amount
        }
    }

    return operations;
};
console.log(minNumberOperations([1,2,3,2,1]))