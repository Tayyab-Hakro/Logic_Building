var prefixCount = function(words, pref) {
    let count = 0;
    const prefLen = pref.length;
    for (let word of words) {
        if (word.length >= prefLen) {
            if (word.substring(0, prefLen) === pref) {
                count++;
            }
        }
    }
    return count;
};