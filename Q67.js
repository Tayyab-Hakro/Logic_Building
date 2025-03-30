var sortPeople = function(names, heights) {
    // Step 1: Create pairs of [name, height]
    let people = names.map((name, index) => [name, heights[index]]);
    console.log(people + "value is ")
    // Step 2: Sort by height in descending order (biggest to smallest)
    people.sort((a, b) => b[1] - a[1]);

    // Step 3: Extract just the names from sorted pairs
    return people.map(person => person[0]);
};

// Example usage:
console.log(sortPeople(["Mary","John","Emma"], [180,165,170])); // Output: ["Mary", "Emma", "John"]
