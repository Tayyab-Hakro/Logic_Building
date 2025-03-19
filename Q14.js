// . Find all permutations of a string.

function FindPermutations(array, word) {
    let result =0
    // Sort the input word to compare
    const sortedWord = word.split('').sort().join('');
    console.log("sORTED" , sortedWord)
    for (let str of array) {
        const sortedStr = str.split('').sort().join('');
        if (sortedStr === sortedWord) {
       result++
        }
    }
    
    return result;
}

console.log(FindPermutations(["abc", "dbc", "cba", "bac"], "abc"));
