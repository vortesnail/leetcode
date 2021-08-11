// 思路和 111. 二叉树的最小深度 其实是一样的
// dfs
var maxDepth = function (root) {
  if (!root) return 0;
  let res = 0;

  var dfs = function (node, depth) {
    if (!node) return;

    depth++;
    if (!node.left && !node.right) {
      res = Math.max(res, depth);
    }

    dfs(node.left, depth);
    dfs(node.right, depth);

    depth--;
  }

  dfs(root, 0);
  return res;
};

// 递归
var maxDepth = function (root) {
  return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};