// 关键在于，先替换为所有非数字字母为空，并转为小写，即 s.replace(/[^0-9a-zA-Z]/g, '');
// 后面就是左右指针比较就行。
var isPalindrome = function (s) {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
};