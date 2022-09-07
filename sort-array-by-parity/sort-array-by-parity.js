/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let i = 0;
  let temp;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] % 2 == 0) {
      temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      i++;
    }
  }

  return nums;
};