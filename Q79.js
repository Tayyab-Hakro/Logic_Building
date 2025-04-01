function Chekar (word , Str){
    // return word.charAt(0) === Str.split("") ? true : false
    let first =  word.map((str )=> str[0]).join("") 
    return first === Str

     
    }

console.log(Chekar(["alice","bob","charlie"] ,"abc"))
console.log(Chekar(["alice","bob","charlie"], "abc")); // true
console.log(Chekar(["an","apple"], "a")); // false
console.log(Chekar(["never","gonna","give","up","on","you"], "ngguoy")); // true
