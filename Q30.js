function hashString(s, k) {
    const n = s.length;
    let result = "";
  
    // Iterate through the string in chunks of size k
    for (let i = 0; i < n; i += k) {
      const substring = s.substring(i, i + k);
      console.log(substring)
      let total = 0;
  
      // Calculate the sum of hash values (alphabet index)
      for (let j = 0; j < substring.length; j++) {
        const char = substring[j];
        const hashValue = char.charCodeAt(0) - 'a'.charCodeAt(0);
        total += hashValue;
      }
  
      // Take modulo 26
      const hashedCharIndex = total % 26;
  
      // Convert back to character
      const hashedChar = String.fromCharCode('a'.charCodeAt(0) + hashedCharIndex);
  
      // Append to result
      result += hashedChar;
    }
  
    return result;
  }
  
  // Example 1
  let s1 = "abcd";
  let k1 = 2;
  console.log(hashString(s1, k1));  // Output: "bf"
  
  // Example 2
  let s2 = "mxz";
  let k2 = 3;
  console.log(hashString(s2, k2));  // Output: "i"
  