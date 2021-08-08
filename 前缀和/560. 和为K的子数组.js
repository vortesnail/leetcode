// 暴力法，算出所有子数组的和，满足相等的就记录
// 会超时
var subarraySum = (nums, k) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum == k) count++;
    }
  }
  return count;
};

// 前缀和
// 参考：https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/dai-ni-da-tong-qian-zhui-he-cong-zui-ben-fang-fa-y/
var subarraySum = (nums, k) => {
  let count = 0;
  let prefixSum = 0;
  const map = Object.create(null);
  map[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    if (map[prefixSum - k] > 0) {
      count += map[prefixSum - k];
    }
    if (map[prefixSum] > 0) {
      map[prefixSum]++;
    } else {
      map[prefixSum] = 1;
    }
  }

  return count;
};
