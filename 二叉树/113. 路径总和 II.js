// 每条路径到叶子结点后，看下和是否与 targetSum 相等，相等就保留。
var pathSum = function (root, targetSum) {
  const res = [];
  helper(root, [], 0, targetSum, res);
  return res;
};

var helper = function (node, paths, sum, targetSum, res) {
  if (!node) return;
  paths.push(node.val);
  sum += node.val;

  if (node.left) helper(node.left, paths, sum, targetSum, res);
  if (node.right) helper(node.right, paths, sum, targetSum, res);

  if (!node.left && !node.right) {
    if (sum === targetSum) {
      res.push(paths.slice());
    }
  }

  // 退出当前递归，一定要将这次递归的节点去掉，因为要回到父节点重新开启另一条路径。
  paths.pop();
  sum -= node.val;
}