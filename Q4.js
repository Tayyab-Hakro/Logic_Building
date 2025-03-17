function Sub(arr){
    let pairs = []
    let n = 3
    for(let i =0 ; i<arr.length-1 ;i++){
        pairs.push([arr[i] ,arr[i+n]])
     }
return pairs
}


console.log(Sub([1,2,3,4,5,6]))