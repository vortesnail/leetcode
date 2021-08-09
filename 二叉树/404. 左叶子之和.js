// dfs 去递归的判断目标节点的左节点是否是叶子节点，如果是的话，就把全局的 res 加上目标节点的值。然后继续 DFS 目标节点的左右子节点。
var sumOfLeftLeaves = function (root) {
  let res = 0;

  var dfs = function (node) {
    if (!node) return;

    if (isLeaf(node.left)) {
      res += node.left.val;
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return res;
};

var isLeaf = function (node) {
  return !!node && !node.left && !node.right
}