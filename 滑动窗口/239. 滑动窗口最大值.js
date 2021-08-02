// 两次遍历，暴力解法 O(kn)
var maxSlidingWindow = function (nums, k) {
  const res = [];
  const numsLen = nums.length;
  for (let i = 0; i < numsLen; i++) {
    if (i + k > numsLen) break;

    let max = nums[i];
    for (let j = i + 1; j < i + k; j++) {
      if (max < nums[j]) {
        max = nums[j];
      }
    }

    res.push(max);
  }
  return res;
};

// 单调队列
var maxSlidingWindow = function (nums, k) {
  const res = [];
  const queue = [];
  for (let i = 0; i < nums.length; i++) {
    if (i - k >= queue[0]) {
      queue.shift();
    }
    while (nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }
    queue.push(i);

    if ((i + 1) >= k) {
      res.push(nums[queue[0]]);
    }
  }
  return res;
};

