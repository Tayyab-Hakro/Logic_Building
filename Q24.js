var sortSentence = function(s) {
    // Step 1: Split the sentence into words
    let words = s.split(" ");
    // Step 2: Make an empty array to store sorted words
    let sortedWords = [];
    
    // Step 3: Go through each word
    for (let word of words) {
        // Get the position number (last character in the word)
        let position = word[word.length - 1]; // Example: "is2" → "2"
        console.log(position)
        // Remove the number from the word using slice (get everything except the last character)
        let actualWord = word.slice(0, word.length - 1);
        
        // Put the word in the correct position (minus 1 because arrays start at 0)
        sortedWords[position - 1] = actualWord;
    }
    
    // Step 4: Join the sorted words back into a sentence
    return sortedWords.join(" ");
};

console.log(sortSentence("we4 will5 figtht6 day3 one2 InshAllah1"))