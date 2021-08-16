// 回溯
// 参考：https://leetcode-cn.com/problems/subsets/solution/c-zong-jie-liao-hui-su-wen-ti-lei-xing-dai-ni-gao-/
var subsets = function (nums) {
  const res = [];

  var backtracking = function (path, start) {
    res.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(path, i + 1);
      path.pop();
    }
  }

  backtracking([], 0);
  return res;
};