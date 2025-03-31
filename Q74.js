/**
 * Finds the first palindromic string in the given array of words.
 * @param {string[]} words - Array of words
 * @returns {string} - First palindromic string found, or an empty string if none found
 */
const firstPalindrome = function(words) {
    // Iterate through each word in the array
    for (const word of words) {
      // Check if the current word is a palindrome
      if (isPalindromic(word)) {
        // If it is a palindrome, return it immediately
        return word;
      }
    }
    // If no palindrome found, return an empty string
    return "";
  };
  
  /**
   * Checks if the given string is a palindrome.
   * @param {string} str - The string to check
   * @returns {boolean} - True if the string is a palindrome, false otherwise
   */
  function isPalindromic(str) {
    let start = 0; // Pointer starting from the beginning of the string
    let end = str.length - 1; // Pointer starting from the end of the string
  
    // Iterate until start pointer is less than end pointer
    while (start < end) {
      // If characters at start and end pointers don't match, it's not a palindrome
      if (str[start] !== str[end]) {
        return false;
      }
      // Move start pointer forward and end pointer backward
      start++;
      end--;
    }
    // If the loop completes without returning false, the string is a palindrome
    return true;
  }