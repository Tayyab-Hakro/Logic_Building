var uniqueMorseRepresentations = function(words) {
    // Morse code representations for 'a' to 'z'
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
                   "-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-",
                   "..-","...-",".--","-..-","-.--","--.."];
    
    // Set to store unique Morse code transformations
    const transformations = new Set();
    
    // Convert each word into its Morse transformation
    for (let word of words) {
        let transformation = word.split('')
            .map(ch => morse[ch.charCodeAt(0) - 97])  // Get Morse code for each letter
            .join('');  // Join Morse codes to form full transformation
        
        transformations.add(transformation);  // Add to set (duplicates are ignored)
    }
    
    return transformations.size;  // Return number of unique transformations
};
