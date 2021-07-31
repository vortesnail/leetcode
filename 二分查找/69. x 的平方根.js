// 从最小数开始遍历，直到某个数的平方小与等于 x 且 这个数 +1 后再平方大于 x，即可
var mySqrt = function (x) {
  for (let i = 1; i < x; i++) {
    if (i * i <= x && (i + 1) * (i + 1) > x) {
      return i
    }
  }

  return x;
};

// 二分法
var mySqrt = function (x) {
  let left = 0;
  let right = x;
  let ans = -1;

  while (left <= right) {
    const mid = Math.round((left + right) / 2);
    const temp = mid * mid;
    if (temp <= x) {
      ans = mid;
      left = mid + 1;
    } else if (temp > x) {
      right = mid - 1;
    }
  }

  return ans;
};