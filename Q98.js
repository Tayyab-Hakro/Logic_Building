var minSteps = function(s, t) {
    let countS = new Array(26).fill(0);
    let countT = new Array(26).fill(0);
    
    // Count character frequencies in both strings
    for (let i = 0; i < s.length; i++) {
        countS[s.charCodeAt(i) - 97]++; // 'a' has ASCII 97
        countT[t.charCodeAt(i) - 97]++;
    }
    
    let steps = 0;
    // Find the extra characters in t
    for (let i = 0; i < 26; i++) {
        if (countT[i] > countS[i]) {
            steps += countT[i] - countS[i];
        }
    }
    
    return steps;
};

// Test Cases
console.log(minSteps("bab", "aba"));       // Output: 1
console.log(minSteps("leetcode", "practice")); // Output: 5
console.log(minSteps("anagram", "mangaar"));   // Output: 0
