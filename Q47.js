const add = (x) => x + 2;
const multiply = (x) => x * 3;

const compose = (f, g) => (x) => f(g(x));

const addThenMultiply = compose(multiply, add);
console.log(addThenMultiply(5)); // (5 + 2) * 3 = 21
