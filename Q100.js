var reversePrefix = function(word, ch) {
    let index = word.indexOf(ch);
    console.log(index)
    if (index === -1) return word;
    return word.slice(0, index + 1).split("").reverse().join("") + word.slice(index + 1);
};

console.log(reversePrefix("abcdefd", "d"));  // Output: "dcbaefd"
reversePrefix("xyxzxe", "z");   // Output: "zxyxxe"
reversePrefix("abcd", "z");     // Output: "abcd"
