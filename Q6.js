// Move all zeros to the end of an array.

function MoveZero (arr , zeros){
let NotZero = arr.filter((item) => item !== zeros)

let countZero = arr.length - NotZero.length
for (let index = 0; index < countZero; index++) {
    NotZero.push(zeros)
}
return NotZero
}


console.log(MoveZero([0,1,2,0,5,7,0] ,0))