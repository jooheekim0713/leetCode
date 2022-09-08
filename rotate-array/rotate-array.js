/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length > k) {
    nums.unshift(...nums.splice(-k));
  } else {
    while (k) {
      nums.unshift(nums.pop());
      k--;
    }
  }
  return nums;
};