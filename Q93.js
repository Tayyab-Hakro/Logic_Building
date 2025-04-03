const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1];

let unique =  numbers.filter(num =>
     numbers.indexOf(num) === numbers.lastIndexOf(num))
console.log(unique)