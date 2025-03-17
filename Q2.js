//  Rotate an array by k positions.


function RotateArr(arr, k) {
    let n = arr.length;
    console.log(n + "is length")
    k = k % n; // in case k is greater than length
    console.log("k is module" ,k)
    
    // Slice and concatenate the two parts
    let rotated = arr.slice(-k).concat(arr.slice(0, n - k));
    
    return rotated;
}

console.log(RotateArr([1, 2, 3, 4, 5, 6, 7], 3));
// Output: [5, 6, 7, 1, 2, 3, 4]
