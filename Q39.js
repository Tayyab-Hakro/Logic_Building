/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    // Define sets for each keyboard row (for faster lookup)
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");
    
    let result = [];

    for (let word of words) {
        // Convert word to lowercase to make the check case-insensitive
        let lowerCaseWord = word.toLowerCase();

        // Check which row the first character belongs to
        let firstChar = lowerCaseWord[0];
        let currentRow;
        
        if (row1.has(firstChar)) {
            currentRow = row1;
        } else if (row2.has(firstChar)) {
            currentRow = row2;
        } else {
            currentRow = row3;
        }

        // Check if all characters are in the same row
        let isSameRow = true;
        for (let char of lowerCaseWord) {
            if (!currentRow.has(char)) {
                isSameRow = false;
                break;
            }
        }

        if (isSameRow) {
            result.push(word);
        }
    }

    return result;
};
console.log(findWords(["Hello","Alaska","Dad","Peace"])); // Output: ["Alaska","Dad"]
console.log(findWords(["omk"])); // Output: []
console.log(findWords(["adsdf","sfd"])); // Output: ["adsdf","sfd"]
