// 贪心
var maxSubArray = function (nums) {
  let res = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    res = Math.max(sum, res);
  }

  return res;
};

// dp
var maxSubArray = function (nums) {
  const len = nums.length;
  const dp = [nums[0]];
  let max = nums[0];

  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    max = Math.max(max, dp[i]);
  }

  return max;
};

// 延伸，求最大子序列，也就是输出最大子序列和的连续子数组。
var maxSubArray = function (nums) {
  let res = nums[0];
  let sum = 0;
  let left = 0;
  let right = 0;
  let finalLeft = 0;
  let finalRight = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i];
      right = i;
    } else {
      sum = nums[i];
      left = right = i;
    }
    if (sum > res) {
      finalLeft = left;
      finalRight = right;
    }
    res = Math.max(res, sum);
  }

  return nums.slice(finalLeft, finalRight + 1);
};