// 与 46. 全排列 思路一样，都是回溯，不过要先排序切增加判断条件
// 看下面注释
var permuteUnique = function (nums) {
  const res = [];
  const len = nums.length;
  // 先排序，目的是为了把重复的数字放到一起形成连续，便于后面判断
  nums.sort((a, b) => a - b);

  var backtracking = function (used, path) {
    if (path.length === len) {
      res.push([...path]);
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue;
      // 现在假如 第二个数字也是 1，和第一个 1 重复了：
      // 1.首先下标肯定要大于等于 0
      // 2.前后数字相等
      // 3.前面的数字必须标记为 使用过了 ，如果没有这个判断，后面的逻辑都到不了，仔细想想就知道了。
      if (i - 1 >= 0 && nums[i - 1] === nums[i] && !used[i - 1]) continue;

      path.push(nums[i]);
      used[i] = true;
      backtracking(used, path);
      path.pop();
      used[i] = false;
    }
  }

  backtracking([], []);
  return res;
};