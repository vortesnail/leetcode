// 同样的回溯，剪枝
var subsetsWithDup = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  var backtracking = function (nums, path, start) {
    res.push([...path]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      backtracking(nums, path, i + 1);
      path.pop();
    }
  }

  backtracking(nums, [], 0)
  return res;
};