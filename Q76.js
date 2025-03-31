var isBalanced = function(num) {
num =  num.split("")
let sum1 = 0
let sum2 = 0
for(let i = 0 ; i<num.length ;i++){
    num[i] = parseInt(num[i])
    if(num[i] %2 === 0){
    sum1 +=num[i]
}else{
    sum2 +=num[i]
}
}
return sum1 === sum2? true : false 
};

console.log(isBalanced("1234"))