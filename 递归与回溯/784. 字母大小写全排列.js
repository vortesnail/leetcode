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
