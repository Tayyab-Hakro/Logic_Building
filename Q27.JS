function minimumSum(num) {
    // Step 1: Split the number into digits
    const digits = num.toString().split('').map(Number);
  console.log(digits)
    // Step 2: Sort the digits in ascending order (smallest to biggest)
    digits.sort((a, b) => a - b);
  
    // Step 3: Make two numbers
    const num1 = digits[0] * 10 + digits[2]; // smallest + third smallest
    const num2 = digits[1] * 10 + digits[3]; // second smallest + biggest
  
    // Step 4: Return their sum
    return num1 + num2;
  }
  
  // Test Cases
  console.log(minimumSum(2932)); // Output: 52
  console.log(minimumSum(4009)); // Output: 13
  