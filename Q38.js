let result  =""
function  Check (Str , k){
    for(let i = 0 ;i<Str.length ;i++){
        if(Str[i] === k){
          result =  Str.slice(i-1)
        }
    }
return result
}

console.log(Check("leetcodeaoder" ,"o" ))