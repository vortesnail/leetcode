// 先升序，在以某个基准点 i，left = i + 1， right = len - 1；
// 每次计算的差值比较，大了往左移，小了往右移。
// 参考：https://github.com/sl1673495/leetcode-javascript/issues/115
var threeSumClosest = function (nums, target) {
  const len = nums.length;
  let min = Infinity;
  let res = 0;

  nums.sort((a, b) => a - b)

  for (let i = 0; i <= len - 3; i++) {
    const basic = nums[i];
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      let sum = basic + nums[left] + nums[right];
      let absDiff = Math.abs(sum - target);
      if (absDiff < min) {
        min = absDiff;
        res = sum;
      }
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        return sum;
      }
    }
  }

  return res;
};