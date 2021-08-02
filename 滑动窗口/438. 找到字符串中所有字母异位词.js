// 滑动窗口，对窗口内的字符串和 p 分别建立 Map 来确定各种字母数量是否相等。
// 超时！
var findAnagrams = function (s, p) {
  const sLen = s.length;
  const pLen = p.length;
  if (pLen > sLen) return [];

  const res = [];
  for (let i = 0; i < s.length; i++) {
    if (i + pLen > sLen) break;

    const sDepart = s.slice(i, i + pLen);
    if (isAnagram(sDepart, p)) {
      res.push(i);
    }
  }

  return res;
};

var isAnagram = function (a, b) {
  const aMap = new Map();
  const bMap = new Map();
  for (const c of a) {
    aMap.set(c, (aMap.get(c) || 0) + 1);
  }
  for (const c of b) {
    bMap.set(c, (bMap.get(c) || 0) + 1);
  }
  for (const [key, value] of aMap) {
    if (value !== bMap.get(key)) return false;
  }
  return true;
};

// 改进上述方法
// 因为每次滑动我们都重新建立 s 和 p 的 Map，遍历也是从头遍历，会增加很多不必要的计算。
// 首先，p 的 Map 是死的，不需要重建；
// 其次，s 也不需要重新建立，只要每次把滑动出去的 字母 所对应的数量 -1 即可，移入的 +1。
// 注意 sMap 中 value 为 0 的情况要去除。
var findAnagrams = function (s, p) {
  const sLen = s.length;
  const pLen = p.length;
  if (pLen > sLen) return [];

  const pMap = new Map;
  for (const c of p) {
    pMap.set(c, (pMap.get(c) || 0) + 1);
  }

  const sMap = new Map;
  const ss = s.slice(0, pLen)
  for (const c of ss) {
    sMap.set(c, (sMap.get(c) || 0) + 1);
  }

  const res = [];
  for (let i = 0; i < sLen; i++) {
    if (i + pLen > sLen) break;

    if (isAnagram(sMap, pMap)) {
      res.push(i);
    }

    sMap.set(s[i], sMap.get(s[i]) - 1);
    sMap.set(s[i + pLen], (sMap.get(s[i + pLen]) || 0) + 1);
  }

  return res;
};

var isAnagram = function (sMap, pMap) {
  for (const key of sMap.keys()) {
    if (sMap.get(key) === 0) continue;
    if (sMap.get(key) !== pMap.get(key)) return false;
  }
  return true;
};
