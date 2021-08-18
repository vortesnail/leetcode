// 回溯
// 参考：https://leetcode-cn.com/problems/palindrome-partitioning/solution/131-fen-ge-hui-wen-chuan-hui-su-sou-suo-yp2jq/
var partition = function (s) {
  const res = [];

  var backtracking = function (path, start) {
    if (start >= s.length) {
      res.push([...path]);
    }
    for (let i = start; i < s.length; i++) {
      if (!isPalindrome(s, start, i)) continue;

      const str = s.slice(start, i + 1);
      path.push(str);
      backtracking(path, i + 1);
      path.pop();
    }
  }

  backtracking([], 0);
  return res;
};

var isPalindrome = function (s, left, right) {
  for (let i = left, j = right; i < j; i++, j--) {
    if (s[i] != s[j]) {
      return false;
    }
  }
  return true;
}
