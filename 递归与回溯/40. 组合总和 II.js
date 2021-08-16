// 回溯+判断去重，和 子集2 一样
var combinationSum2 = function (candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b);

  var backtracking = function (path, start, sum) {
    if (sum === target) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1] || sum > target) {
        continue;
      }
      path.push(candidates[i]);
      backtracking(path, i + 1, sum + candidates[i]);
      path.pop();
    }
  }

  backtracking([], 0, 0);
  return res;
};