function minimumSum(num) {
    // Step 1: Extract digits and sort them
    let digits = String(num).split('').map(Number).sort((a, b) => a - b);

    // Step 2: Form two numbers optimally
    let new1 = digits[0] * 10 + digits[2];
    let new2 = digits[1] * 10 + digits[3];

    return new1 + new2;
}

// Test cases
console.log(minimumSum(2932)); // Output: 52
console.log(minimumSum(4009)); // Output: 13
