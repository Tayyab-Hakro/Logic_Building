//  Find the longest substring without repeating characters.
// Function to find the longest substring without repeating characters
function LonegesSubStrin(Str) {

    let start = 0;           // Start index of the current window (substring)
    let maxLength = 0;       // Length of the longest substring found so far
    let maxSubstring = "";   // The actual longest substring without repeating characters
    let seen = {};           // Object to store the last seen index of each character
  
    // Loop through each character in the string
    for (let end = 0; end < Str.length; end++) {
  
      const char = Str[end]; // Current character at the 'end' index
  
      // Check if the character is repeated inside the current window
      if (seen[char] >= start) {
        // Move the start pointer to the right of the last occurrence of the current character
        start = seen[char] + 1;
      }
  
      // Update the last seen index of the current character
      seen[char] = end;
  
      // Calculate the length of the current window (substring without repeating characters)
      const currentLength = end - start + 1;
  
      // If the current window is longer than the longest one we've seen, update it
      if (currentLength > maxLength) {
        maxLength = currentLength;                          // Update the max length
        maxSubstring = Str.slice(start, end + 1);          // Get the substring from start to end
      }
    }
  
    // Return the longest substring found
    return maxSubstring;
  }
  
  // Test the function with an example string
  console.log(LonegesSubStrin("the big boy in the gym"));
  