let arr = [1, 2, 4, 5];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
        console.log(i + 1); // Missing number
        break;
    }
}
