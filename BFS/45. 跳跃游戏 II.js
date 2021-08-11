// 贪心
// 参考：https://leetcode-cn.com/problems/jump-game-ii/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-10/
var jump = function (nums) {
  let end = 0;
  let maxPos = 0;
  let steps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxPos = Math.max(maxPos, i + nums[i]);
    if (i === end) {
      if (end === maxPos) return -1; // 不可达到情况
      end = maxPos;
      steps++;
    }
  }

  return steps;
};