function anagrams(str1, str2) {
    // First check: if lengths are diffe
    // rent, not anagrams
    if (str1.length !== str2.length) return false;
  
    // Convert str2 to an array to manipulate letters
    let str2Arr = str2.split("");
  
    for (let i = 0; i < str1.length; i++) {
      let index = str2Arr.indexOf(str1[i]);
      if (index === -1) {
        // Letter not found, not an anagram
        return false;
      } else {
        // Remove the letter from str2Arr to avoid duplicate matches
        str2Arr.splice(index, 1);
      }
    }
  
    // If we successfully find and remove all letters, it's an anagram
    return true;
  }
  
  console.log(anagrams("listen", "silent")); // true
  console.log(anagrams("listen", "silent1")); // false
  