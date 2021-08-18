// 回溯+剪枝
var restoreIpAddresses = function (s) {
  const res = [];

  var backtracking = function (path, start) {
    const len = path.length;
    if (len > 4) return;
    if (len === 4 && start === s.length) {
      res.push([...path].join('.'));
      return;
    }
    for (let i = start; i < s.length; i++) {
      const str = s.substring(start, i + 1);
      if (str.length > 3 || Number(str) > 255) break;
      if (str.length > 1 && str[0] === "0") break;
      path.push(str);
      backtracking(path, i + 1);
      path.pop()
    }
  }

  backtracking([], 0);
  return res;
};