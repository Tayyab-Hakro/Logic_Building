/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
    let result = "";
    for (let i = 0; i < s.length; i += k) { // Step 1: Divide into substrings
        let sum = 0;
        for (let j = 0; j < k; j++) { // Step 2: Convert letters to index values
            sum += s.charCodeAt(i + j) - 97;
        }
        let hashedChar = String.fromCharCode((sum % 26) + 97); // Step 3-5: Compute result
        result += hashedChar;
    }
    return result; // Step 6: Return final hashed string
};

// **Test Cases**
console.log(stringHash("abcd", 2)); // Output: "bf"
console.log(stringHash("mxz", 3));  // Output: "i"
