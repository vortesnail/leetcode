// 二分法核递归，如果是叶子节点，不需要递归。
// 参考：https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/solution/tu-jie-er-cha-sou-suo-shu-gou-zao-di-gui-python-go/
var sortedArrayToBST = function (nums) {
  const n = nums.length;
  if (!n) return null;

  const mid = Math.floor(n / 2);
  const root = new TreeNode(nums[mid]);

  if (mid === 0) return root;

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1, n));

  return root;
};
