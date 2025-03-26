const square = (x) => x * x;
const halve = (x) => x / 2;

const squareThenHalve = (x) => halve(square(x));

console.log(squareThenHalve(4)); // Output: 8
console.log(squareThenHalve(6)); // Output: 18