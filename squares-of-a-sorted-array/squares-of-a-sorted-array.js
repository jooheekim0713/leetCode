/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    //numbers.sort((a, b) => a - b);
    return nums.map(item=> item * item).sort(( a, b ) => a - b );
};