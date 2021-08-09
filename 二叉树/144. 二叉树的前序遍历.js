// dfs，很简单
var preorderTraversal = function (root) {
  if (!root) return [];
  const res = [];

  var dfs = function (node) {
    if (!node) return;

    res.push(node.val);

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return res;
};

// 使用 栈 模拟 dfs 过程
// 参考：https://leetcode-cn.com/problems/binary-tree-preorder-traversal/solution/leetcodesuan-fa-xiu-lian-dong-hua-yan-shi-xbian-2/
var preorderTraversal = function (root) {
  if (!root) return [];
  const res = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    res.push(node.val);

    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }

  return res;
};