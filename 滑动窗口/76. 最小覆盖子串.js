// 暴力的解法，虽然也是滑动窗口，根据 t 的长度为初试窗口大小；
// 然后在窗口内对 s 进行扫描，查看是否有符合的；
// 但是这样会每次都重新建立 windowMap。
// 会超时！
var minWindow = function (s, t) {
  const tLen = t.length;
  const sLen = s.length;
  let windowLen = tLen;

  if (sLen < tLen) return "";

  const tMap = new Map();
  for (const c of t) {
    tMap.set(c, (tMap.get(c) || 0) + 1);
  }

  while (windowLen <= sLen) {
    const windowMap = new Map();
    const ss = s.slice(0, windowLen);

    for (const c of ss) {
      windowMap.set(c, (windowMap.get(c) || 0) + 1);
    }

    for (let i = 0; i < sLen; i++) {
      if (i + windowLen > sLen) break;

      if (isSubstring(windowMap, tMap)) {
        return s.slice(i, i + windowLen);
      }

      windowMap.set(s[i], windowMap.get(s[i]) - 1);
      windowMap.set(
        s[i + windowLen],
        (windowMap.get(s[i + windowLen]) || 0) + 1
      );
    }

    windowLen++;
  }

  return "";
};

var isSubstring = function (winMap, tMap) {
  for (const key of tMap.keys()) {
    if (!tMap.get(key)) continue;
    if ((winMap.get(key) || 0) < tMap.get(key)) return false;
  }
  return true;
};

// O(n) 事件复杂度的解法如下：
// 滑动窗口的left 和 right 要移动：如果 right 右移后不是子串，就右移 right 直到满足；如果 right 右移后是子串，就开始左移 left，循环往复。
var minWindow = function (s, t) {
  const tLen = t.length;
  const sLen = s.length;

  if (sLen < tLen) return "";

  const tMap = new Map();
  for (const c of t) {
    tMap.set(c, (tMap.get(c) || 0) + 1);
  }

  const sMap = new Map();
  let left = 0;
  let right = -1;
  let res = "";
  while (left <= sLen - tLen && right <= sLen) {
    let isValid = isSubstring(sMap, tMap);
    if (isValid) {
      const currentValidLength = right - left + 1;
      if (currentValidLength < res.length || res === "") {
        res = s.slice(left, right + 1);
      }
      sMap.set(s[left], sMap.get(s[left]) - 1);
      left++;
    } else {
      sMap.set(s[right + 1], (sMap.get(s[right + 1]) || 0) + 1);
      right++;
    }
  }

  return res;
};

var isSubstring = function (sMap, tMap) {
  for (const key of tMap.keys()) {
    if ((sMap.get(key) || 0) < tMap.get(key)) return false;
  }
  return true;
};
