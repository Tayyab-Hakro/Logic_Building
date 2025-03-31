var countAsterisks = function(s) {
    let count = 0;       // To count the valid asterisks
    let insideBar = false; // Flag to track if inside '|...|'

    for (let char of s) {
        if (char === '|') {
            insideBar = !insideBar; // Toggle insideBar state
        } else if (char === '*' && !insideBar) {
            count++;  // Count '*' only if outside '|...|'
        }
    }

    return count;
};
