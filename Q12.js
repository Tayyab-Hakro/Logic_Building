function reverseInPlace(str) {
    // Convert to an array because strings are immutable
    let charArray = str.split('');
    
    let left = 0;
    let right = charArray.length - 1;
  
    while (left < right) {
      // Swap
      [charArray[left], charArray[right]] = [charArray[right], charArray[left]];
      left++;
      right--;
    }
  
    return charArray.join('');
  }
  
  console.log(reverseInPlace("String")); // Output: gnirtS
  