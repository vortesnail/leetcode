// 暴力法，两层遍历
var minSubArrayLen = function (target, nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= target) {
        if (res === 0) res = j - i + 1;
        res = Math.min(res, j - i + 1);
        break;
      }
    }
  }
  return res;
};

// 滑动窗口，left 和 right 右移
var minSubArrayLen = function (target, nums) {
  const numLen = nums.length;
  let left = 0;
  let right = -1;
  let res = 0;
  let sum = 0;

  while (left < numLen && right < numLen) {
    if (sum >= target) {
      if (res === 0) res = right - left + 1;
      res = Math.min(res, right - left + 1);
      sum -= nums[left];
      left++;
    } else {
      right++;
      sum += nums[right]
    }
  }
  return res;
};