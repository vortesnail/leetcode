// 参考：https://github.com/sl1673495/leetcode-javascript/issues/114
var findLength = function (A, B) {
  let [len1, len2] = [A.length, B.length];
  let ans = 0;
  for (let i = 0, dp = []; i <= len1; i++) {
    dp[i] = (new Array(len2 + 1)).fill(0); // 初始化
    for (let j = 1; j <= len2 && i > 0; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1; // dp递推
        ans = Math.max(ans, dp[i][j]); // 一边算dp一边更新最大值
      }
    }
  }
  return ans
};