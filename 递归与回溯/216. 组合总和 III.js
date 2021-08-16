// 做了前面的组合题和子集题，这题完全可以做出来
var combinationSum3 = function (k, n) {
  const res = [];
  if (k === 0 || n === 0) {
    return res;
  }

  var backtracking = function (path, start, sum) {
    if (path.length > k) return;
    if (path.length === k && sum === n) {
      res.push([...path]);
      return;
    }
    for (let i = start; i <= 9; i++) {
      if (sum > n) {
        continue;
      }
      path.push(i);
      backtracking(path, i + 1, sum + i);
      path.pop();
    }
  }

  backtracking([], 1, 0);
  return res;
};