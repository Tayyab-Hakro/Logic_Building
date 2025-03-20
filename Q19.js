// Find the longest common prefix.


function CommonPreFix (Str , Str2){
    let matched =""
    for (let i = 0; i < Str.length; i++) {

            if(Str[i] === Str2[i]){
                matched += Str[i]
                
            }else{
                break
            }
        }  
        return matched
    
    }


console.log(CommonPreFix("internet" ,"interview"))
// console.log(CommonPreFix("bigboy" ,"bigblack"))
// console.log(CommonPreFix("figge" ,"fight"))
