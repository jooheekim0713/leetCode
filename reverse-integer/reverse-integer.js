/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
 const reverseNum = parseInt(Math.abs(x))
    .toString()
    .split('')
    .reverse()
    .join('');
    if( reverseNum > Math.pow(2,31)) return 0;
  return x < 0 ? -reverseNum : reverseNum;
};