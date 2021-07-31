// 分别建立 sMap 和 tMap，遍历它们每一个并在 Map 中根据出现次数递增，
// 最后遍历一遍 lenght 较长的 t ，根据 value 的值的不同来确定是否是多出来的。
var findTheDifference = function (s, t) {
  const sMap = new Map();
  for (const c of s) {
    sMap.set(c, (sMap.get(c) || 0) + 1);
  }
  const tMap = new Map();
  for (const c of t) {
    tMap.set(c, (tMap.get(c) || 0) + 1);
  }
  // 遍历 tMap，根据两者数量是否一致确定
  for (const [key, value] of tMap) {
    if (sMap.get(key) !== value) {
      return key;
    }
  }
};

// 利用 ascall 码的计算，最后的差值再转为 char 就是多出的
var findTheDifference = function (s, t) {
  let sum = 0;
  for (const c of t) {
    sum += c.charCodeAt();
  }
  for (const c of s) {
    sum -= c.charCodeAt();
  }
  return String.fromCharCode(sum);
};

// 不推荐去搞位运算。。。。。。。。。。。。。。。。了解就行。
