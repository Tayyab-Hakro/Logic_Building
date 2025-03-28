/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
    let result = "";
    for (let i = 0; i < s.length; i += k) {
        let sum = 0;
        for (let j = 0; j < k; j++) {
            sum += s.charCodeAt(i + j) - 97; // Convert 'a' -> 0, 'b' -> 1, ..., 'z' -> 25
        }
        let hashedChar = String.fromCharCode((sum % 26) + 97); // Convert back to character
        result += hashedChar;
    }
    return result;
};

// **Test Cases**
console.log(stringHash("abcd", 2)); // Output: "bf"
console.log(stringHash("mxz", 3));  // Output: "i"
