/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let Sorted =[]
    for(let char of s){
        if(char ==="i"){
        Sorted.reverse()
    }else{
        Sorted.push(char)
    }
 
   
    }
    return Sorted.join('')

};

console.log(finalString( "string"))