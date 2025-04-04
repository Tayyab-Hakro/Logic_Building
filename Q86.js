/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let stringNum = num.toString()
   return num !== 0 ? stringNum[stringNum.length - 1 ] === '0' ? false : true : true
}