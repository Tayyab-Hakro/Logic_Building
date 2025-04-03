/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        let reversedAlphabetIndex = 26 - (s.charCodeAt(i) - 'a'.charCodeAt(0));
        let position = i + 1;
        total += reversedAlphabetIndex * position;
    }
    
    return total;
};

// Example test cases
console.log(reverseDegree("abc"));  // Output: 148
console.log(reverseDegree("zaza")); // Output: 160
