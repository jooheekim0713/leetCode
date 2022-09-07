/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  if (arr === null || arr.length < 2) return false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * 2 == arr[j] || arr[i] == arr[j] * 2) return true;
    }
  }
  return false;
};