function Sub(arr){
    let pairs = []
    for(let i =0 ; i<arr.length-1 ;i++){
        pairs.push([arr[i] ,arr[i+1]])
     }
return pairs
}


console.log(Sub([1,2,3,4]))