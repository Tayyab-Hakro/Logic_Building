/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let count = 0;

    while (n > 1) {  // Continue until only 1 team is left
        if (n % 2 === 0) {  // If teams are even
            count += n / 2;  // Matches played
            n = n / 2;       // Remaining teams
        } else {  // If teams are odd
            count += (n - 1) / 2;  // Matches played
            n = (n - 1) / 2 + 1;   // Remaining teams (one gets a free pass)
        }
    }
    
    return count;  // Return total matches played
};

// Example usage:
console.log(numberOfMatches(7));  // Output: 6
console.log(numberOfMatches(14)); // Output: 13
