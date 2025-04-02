var isSameAfterReversals = function(num) {
    let strNum = num.toString();
    let reversed = strNum.split("").reverse().join("");
    let secondReversal = reversed.split("").reverse().join("");
    // Compare the string of the original number with the second reversal
    return secondReversal === strNum;
};

// Test cases
console.log(isSameAfterReversals(526));   // Expected output: true
console.log(isSameAfterReversals(1800));  // Expected output: false
console.log(isSameAfterReversals(0));     // Expected output: true
