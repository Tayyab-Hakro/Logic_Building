// Merge two sorted arrays.

function MergeSort(arr1 , arr2){
    let result = []
    let first = arr1.sort((a ,b) => a-b)
    let second = arr2.sort((a ,b) => a-b)
    for (let index = 0; index < first.length; index++) {
        result.push(first[index])        
    }
    for (let index = 0; index < second.length; index++) {
        result.push(second[index])        
    }
    return result
}

console.log(MergeSort([4,1,2,3] ,[5,8,9,6]))

