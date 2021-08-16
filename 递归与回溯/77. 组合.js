// 回溯
// 参考：https://leetcode-cn.com/problems/combinations/solution/hui-su-suan-fa-jian-zhi-python-dai-ma-java-dai-ma-/
var combine = function (n, k) {
  const res = [];
  if (k <= 0 || n < k) {
    return res;
  }

  var backtracking = function (path, start) {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backtracking(path, i + 1);
      path.pop();
    }
  }

  backtracking([], 1);
  return res;
};