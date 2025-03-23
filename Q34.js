let numbers = [1, 15, 6, 3];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  // Convert each number to a string and split into digits
  let splitArr = numbers[i].toString().split("");
  
  // Loop through each digit
  for (let j = 0; j < splitArr.length; j++) {
    sum += parseInt(splitArr[j]); // Convert each digit back to a number and add to sum
  }
}

console.log(sum); // 16
