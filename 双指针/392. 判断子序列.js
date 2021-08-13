// 分别对s，t都设立一个指针，t的指针要每次比较后加1，s的指针只有在两者相等了再加1。
// 这题和 524 一样的思路。
var isSubsequence = function (s, t) {
  if (!s) return true;
  let sLeft = 0;
  let tLeft = 0;

  while (tLeft < t.length) {
    if (t[tLeft] === s[sLeft]) {
      sLeft++;
    }
    if (sLeft === s.length) {
      return true;
    }
    tLeft++;
  }

  return false;
};
