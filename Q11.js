function smallestSubarrayWithSum(arr, target) {
    let n = arr.length;
    let minLength = Infinity; // start with infinity to find the minimum length
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < n; end++) {
        currentSum += arr[end];

        // Shrink the window as small as possible while the currentSum is greater than target
        while (currentSum > target) {
            // Update minimum length
            minLength = Math.min(minLength, end - start + 1);
            
            // Subtract the element at `start` from `currentSum` and move `start` forward
            currentSum -= arr[start];
            start++;
        }
    }

    // If we didn't find any subarray, return 0 or a message
    return minLength === Infinity ? 0 : minLength;
}

// Example usage
console.log(smallestSubarrayWithSum([1, 2, 3, 4, 4, 5, 6], 8)); // Output should be 2
