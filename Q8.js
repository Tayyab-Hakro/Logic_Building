function Sub(arr ,n){
 let result = []
 for(let i = 0 ; i<n ;i++){
    result.push(arr[i] ,arr[i+n])
 }
return result
}


console.log(Sub([1,2,3,4,5,6] ,3))