// 经典递归
var fib = function (n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
};

// dp
// 参考：https://leetcode-cn.com/problems/fibonacci-number/solution/dai-ma-sui-xiang-lu-509-fei-bo-na-qi-shu-n389/
var fib = function (n) {
  if (n <= 1) return n;
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};