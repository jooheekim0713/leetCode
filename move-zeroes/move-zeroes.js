/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums === null || nums.length === 0) return false;

  let zero;
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === 0) {
      zero = nums.splice(i, 1);
      nums.push(zero[0]);
    }
  }

  return nums;
};