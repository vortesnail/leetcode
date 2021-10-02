// 排序+基准指针+双指针
var threeSum = function (nums) {
  const res = [];
  const len = nums.length;
  if (len < 3) return [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break;
    let left = i + 1;
    let right = len - 1;
    // 基准指针去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right--;
        continue;
      }
      if (sum < 0) {
        left++;
        continue;
      }
      res.push([nums[i], nums[left], nums[right]]);
      // 左右指针去重
      while (left < right && nums[left] === nums[left + 1]) {
        left++;
      }
      while (left < right && nums[right] === nums[right - 1]) {
        right--;
      }
      left++;
      right--;
    }
  }

  return res;
};