/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let seen = new Set();
    let count = 0;

    for (let word of words) {
        let reversed = word.split("").reverse().join("");
        if (seen.has(reversed)) {
            count++;  // Found a pair
            seen.delete(reversed); // Remove to avoid reuse
        } else {
            seen.add(word);
        }
    }

    return count;
};

 console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]))