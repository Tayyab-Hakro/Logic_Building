// Double and Increment
// Write a function doubleThenIncrement that:
// Doubles a number.
// Increments the result by 1.
// Use function composition to combine these steps.

const doubleThenIncrement = (x) => x*2
const Increment = (x) => x+1;

const compose = (f, g)=>(x) => f(g(x))

const check = compose( Increment ,doubleThenIncrement )

console.log(check(5))