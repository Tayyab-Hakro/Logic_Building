function rearrangeArray(nums) {
    let positives = [];
    let negatives = [];
    
    // Separate positive and negative numbers
    for (let num of nums) {
        if (num > 0) {
            positives.push(num);
        } else {
            negatives.push(num);
        }
    }
    
    // Merge them alternately
    let result = [];
    for (let i = 0; i < positives.length; i++) {
        result.push(positives[i]); // Add positive number
        result.push(negatives[i]); // Add negative number
    }
    
    return result;
}

// Example
console.log(rearrangeArray([3, 1, -2, -5, 2, -4])); 
// Output: [3, -2, 1, -5, 2, -4]
