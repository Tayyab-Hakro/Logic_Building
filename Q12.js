// Reverse a string in place. 

function ReverseAtr(Str){
    let ReversedString =""
for(let i = Str.length-1 ; i>=0 ;i--){
  ReversedString  =ReversedString + Str[i]
}
return ReversedString
}

console.log(ReverseAtr("String"))