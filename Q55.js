//Check is pervious Value is greater then or Not
function Pervices (arr){
let greater  = [];
    for(let i = 0 ; i<arr.length ;i++){
        if(arr[i] > arr[i+1]){
greater.push(arr[i])
        }
    }
return greater
}

console.log(Pervices([1,2,4,3,2,1,7,3]))
