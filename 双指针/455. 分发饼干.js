// 思路还是和前面的题没什么区别，不过我们要按升序排列两个数组。
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let count = 0;

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      i++;
      j++;
      count++;
    } else {
      j++;
    }
  }

  return count;
};