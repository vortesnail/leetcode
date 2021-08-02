// 滑动窗口，还是很耗时；
// 如果当前子串重复，left 向右移；
// 如果当前子串不重复，right 向右移；
// 这过程中记录所有不重复时的子串长度。
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let res = 0,
    subStr = "";

  while (left < s.length && right <= s.length) {
    const isRepeat = hasRepeat(subStr);
    if (isRepeat) {
      subStr = s.slice(left++, right);
    } else {
      const curSubStrLen = subStr.length;
      if (curSubStrLen > res || res === 0) {
        res = curSubStrLen;
      }
      subStr += s[right++];
    }
  }

  return res;
};

var hasRepeat = function (str) {
  const obj = {};
  for (const c of str) {
    obj[c] = (obj[c] || 0) + 1;
  }
  for (const val of Object.values(obj)) {
    if (val > 1) return true;
  }
  return false;
};

// 同样是滑动窗口，但是改进了写法：
var lengthOfLongestSubstring = function (s) {
  let sLen = s.length;
  let left = 0;
  let right = -1;
  let res = 0;
  const obj = Object.create(null);

  while (left < sLen && right <= sLen) {
    const nextChar = s[right + 1];
    if (!obj[nextChar] && nextChar !== undefined) {
      obj[nextChar] = 1;
      right++;
    } else {
      obj[s[left]] = 0;
      left++;
    }
    res = Math.max(res, right - left + 1)
  }

  return res;
};
