// 栈的常规用法
var isValid = function (s) {
  if (!s) return true;
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;
      const cur = stack.pop();
      if (map[cur] !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};