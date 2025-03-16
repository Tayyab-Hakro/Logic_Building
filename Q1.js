function findMinInRotatedArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[right]) {
            // Minimum must be to the right of mid
            left = mid + 1;
        } else {
            // Minimum is at mid or to the left of mid
            right = mid;
        }
    }

    return arr[left];
}

console.log(findMinInRotatedArray([4, 5, 6, 1, 2, 3])); // Output: 1
