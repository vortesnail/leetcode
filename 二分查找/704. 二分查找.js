// 二分法，不断的缩小左右区间，总会找到的
var search = function (nums, target) {
  let left = 0;
  let numsLen = nums.length;
  let right = numsLen - 1;
  while (left <= right) {
    const mid = Math.round((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};