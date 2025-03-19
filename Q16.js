//Remove duplicate characters from a string.

function duplicate(Str) {
    let FinalStr =  "";
    let seen = new Set()
    for(let char of Str){
        if(!seen.has(char)){
            seen.add(char)
            FinalStr += char
        }
    }
return FinalStr
}

console.log(duplicate("asdfademvp"))