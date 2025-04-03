/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let word = new Set(allowed)
    console.log(word)
    let count = 0
    for(let w of words){
        if([...w].every(num => word.has(num))){
            count++
        }
    }
    return count
};
console.log(countConsistentStrings("ab" ,["ad","bd","aaab","baa","badab"],  ) )