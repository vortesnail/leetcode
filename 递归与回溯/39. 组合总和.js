// 回溯
// 参考：https://leetcode-cn.com/problems/subsets/solution/c-zong-jie-liao-hui-su-wen-ti-lei-xing-dai-ni-gao-/
var combinationSum = function (candidates, target) {
  const res = [];

  var backtracking = function (path, start, sum) {
    if (target === sum) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (sum > target) {
        continue;
      }
      path.push(candidates[i]);
      backtracking(path, i, sum + candidates[i]);
      path.pop();
    }
  }

  backtracking([], 0, 0);
  return res;
};