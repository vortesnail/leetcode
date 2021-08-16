// 简单递归即可
var letterCasePermutation = function (s) {
  const res = [];
  const len = s.length;

  var recursion = function (str, i) {
    if (str.length > len || i > len) return
    if (str.length === len) {
      res.push(str);
      return;
    }
    if (/[a-z]/.test(s[i])) {
      recursion(str + s[i], i + 1)
      recursion(str + s[i].toUpperCase(), i + 1)
    } else if (/[A-Z]/.test(s[i])) {
      recursion(str + s[i], i + 1)
      recursion(str + s[i].toLowerCase(), i + 1)
    } else {
      recursion(str + s[i], i + 1)
    }
  }

  recursion('', 0);
  return res;
};

// 回溯写法
var letterCasePermutation = function (s) {
  const res = [];
  const sArr = s.split('');

  var backtracking = function (path, start) {
    if (path.length === sArr.length) {
      res.push([...path].join(''));
    }
    for (let i = start; i < sArr.length; i++) {
      if (/[0-9]/.test(sArr[i])) {
        path.push(sArr[i]);
        backtracking(path, i + 1);
        path.pop();
      } else {
        const a = sArr[i].toLowerCase();
        path.push(a);
        backtracking(path, i + 1);
        path.pop();

        const A = sArr[i].toUpperCase();
        path.push(A);
        backtracking(path, i + 1);
        path.pop();
      }

    }
  }

  backtracking([], 0);
  return res;
};