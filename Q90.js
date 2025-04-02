function isSelfDividing(num) {
    let originalNum = num;
    while (num > 0) {
        let digit = num % 10; // Get the last digit
        if (digit === 0 || originalNum % digit !== 0) {
            return false; // If digit is 0 or number is not divisible by digit, return false
        }
        num = Math.floor(num / 10); // Remove the last digit
    }
    return true; // If all digits are valid, return true
}

function selfDividingNumbers(left, right) {
    let result = [];
    for (let num = left; num <= right; num++) {
        if (isSelfDividing(num)) {
            result.push(num);
        }
    }
    return result;
}

// Example usage:
console.log(selfDividingNumbers(1, 22));  // Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
console.log(selfDividingNumbers(47, 85)); // Output: [48,55,66,77]
