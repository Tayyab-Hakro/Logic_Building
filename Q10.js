// Rearrange an array such that even index elements are
// smaller and odd index elements are greater.

function Rearrange(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (i % 2 === 0) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        } else {
            if (arr[i] < arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
    return arr;
}

console.log(Rearrange([1, 2, 3, 4, 5, 6, 7, 8]));
