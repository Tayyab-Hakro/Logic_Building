let array = [4,5,6,1]
for (let i= 0; i < array.length-1; i++) {
[array[i] , array[i+1]] = [array[i+1] ,array[i]]
}
console.log(array)
console.log("Working arr not")