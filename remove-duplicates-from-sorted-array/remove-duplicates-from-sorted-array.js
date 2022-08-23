/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      while (nums[i] === nums[j]) {
        nums.splice(j, 1);
        counter++;
      }
    }
  }
  return nums.length;
};
