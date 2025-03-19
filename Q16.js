//Remove duplicate characters from a string.

function duplicate(Str) {
    let count = {};
    let duplicates = []
    for(let char of Str ){
        count[char] = (count[char] || 0) +1
    }    
    for(let val in count){
        if(count[val] > 1){
            duplicates.push(val)
        }
    }
    return duplicates
}

console.log(duplicate("asdfademvp"))