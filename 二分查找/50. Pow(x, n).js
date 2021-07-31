// 迭代实现快速幂
var myPow = function (x, n) {
  let res = 1;
  for (let i = Math.abs(n); i !== 0; i = Math.floor(i / 2)) {
    if (i % 2 !== 0) {
      res *= x;
    }
    x *= x;
  }
  return n < 0 ? 1 / res : res;
};

// 递归实现快速幂
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;

  const absN = Math.abs(n);
  const isNegative = n !== absN;

  let res = absN % 2 ? x * myPow(x, absN - 1) : myPow(x * x, absN / 2)
  return isNegative ? 1 / res : res;
};