// Check if a string is a valid shuffle of two distinct strings.

function isValidShuffle(str1, str2, shuffleStr) {
    let i = 0, j = 0, k = 0;
  
    // If combined length doesn't match, it's not a valid shuffle
    if (str1.length + str2.length !== shuffleStr.length) {
      return false;
    }
  
    // Traverse shuffleStr and compare with str1 and str2
    while (k < shuffleStr.length) {
      if (i < str1.length && shuffleStr[k] === str1[i]) {
        i++;
      } else if (j < str2.length && shuffleStr[k] === str2[j]) {
        j++;
      } else {
        return false; // Character doesn't match either str1 or str2
      }
      k++;
    }
  
    // If all characters of str1 and str2 are used, it's a valid shuffle
    if (i < str1.length || j < str2.length) {
      return false;
    }
  
    return true;
  }
  
  // Example usage:
  const str1 = "abc";
  const str2 = "def";
  
  console.log(isValidShuffle(str1, str2, "adbcef")); // true ✅
  console.log(isValidShuffle(str1, str2, "abdecf")); // false ❌
  