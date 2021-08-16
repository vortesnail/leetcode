// 和 全排列2 本质一样
var permutation = function (s) {
  const res = [];
  arr = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());

  var backtracking = function (used, path) {
    if (path.length === arr.length) {
      res.push([...path].join(''));
    }
    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue;
      if (i - 1 >= 0 && arr[i - 1] === arr[i] && !used[i - 1]) continue;

      path.push(arr[i]);
      used[i] = true;
      backtracking(used, path);
      path.pop();
      used[i] = false;
    }
  }

  backtracking([], []);
  return res;
};