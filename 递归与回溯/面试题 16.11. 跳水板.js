// 遍历，短的从 k 到 0，组成的长度一定是升序的。
var divingBoard = function (shorter, longer, k) {
  if (k === 0) return [];
  if (shorter === longer) return [shorter * k];

  const res = [];
  for (let i = k; i >= 0; i--) {
    const shortNum = i;
    const longNum = k - i;
    res.push(longNum * longer + shortNum * shorter);
  }

  return res;
};