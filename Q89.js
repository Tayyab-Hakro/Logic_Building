/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let count = 0
   s=  s.toLowerCase()
    console.log(s)
    for(let i = 0 ; i <s.length-1 ;i++){
        if( s[i] !== s[i+1]){
            count++
        }
    }    
    return count
};

console.log(countKeyChanges("aAbBcC"))