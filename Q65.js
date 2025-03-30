var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const transformations = new Set();
    
    for (let word of words) {
        let transformation = word.split('').map(ch => morse[ch.charCodeAt(0) - 97]).join('');
        transformations.add(transformation);
    }
    
    return transformations.size;
};
