/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let result = s.split(''); // Convert string to array (easier to modify)
    
    for (let i = 1; i < s.length; i += 2) { // Loop through odd indices
        let prevChar = s[i - 1]; // Get previous character
        let shiftValue = parseInt(s[i]); // Convert digit to number
        result[i] = String.fromCharCode(prevChar.charCodeAt(0) + shiftValue); // Shift character
    }
    
    return result.join(''); // Convert array back to string
};

console.log(replaceDigits("a1c1e1"))