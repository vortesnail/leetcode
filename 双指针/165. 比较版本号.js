// 很简单，不过要注意只会忽略前导0，后导0不能忽略。
var compareVersion = function (version1, version2) {
  const v1Len = version1.length;
  const v2Len = version2.length;
  let left1 = 0;
  let left2 = 0;

  while (left1 < v1Len || left2 < v2Len) {
    let n1 = 0;
    let n2 = 0;

    while (left1 < v1Len && version1[left1] !== '.') {
      n1 = n1 * 10 + Number(version1[left1]);
      left1++;
    }
    while (left2 < v2Len && version2[left2] !== '.') {
      n2 = n2 * 10 + Number(version2[left2]);
      left2++;
    }
    if (n1 > n2) return 1;
    if (n1 < n2) return -1;
    left2++;
    left1++;
  }

  return 0;
};