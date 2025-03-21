function sumOfLeft(arr) {
    let leftSum = 0;
    let rightSum = arr.reduce((a, b) => a + b, 0); // total sum
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        rightSum -= arr[i]; // remove current element from right sum
        answer.push(Math.abs(leftSum - rightSum)); // absolute difference
        leftSum += arr[i]; // add current element to left sum
        console.log(leftSum)
        
    }

    return answer;
}

console.log(sumOfLeft([10, 4, 8, 3])); // Output: [15, 1, 11, 22]
