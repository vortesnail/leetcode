// 做这道题前一定要先做 560. 和为K的子数组，借助 前缀和 的概念解决此题。
// 参考：https://leetcode-cn.com/problems/path-sum-iii/solution/dui-qian-zhui-he-jie-fa-de-yi-dian-jie-s-dey6/
var pathSum = function (root, targetSum) {
  const map = Object.create(null);
  map[0] = 1;
  let res = 0;

  var dfs = function (root, prefixSum) {
    if (!root) return 0;

    let sum = prefixSum + root.val;
    if (map[sum - targetSum] > 0) {
      res += map[sum - targetSum];
    }
    if (map[sum] > 0) {
      map[sum]++;
    } else {
      map[sum] = 1;
    }

    dfs(root.left, sum)
    dfs(root.right, sum)

    map[sum]--;
  }

  dfs(root, 0);
  return res
};