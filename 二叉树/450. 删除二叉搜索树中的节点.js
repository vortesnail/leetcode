// 分步骤一个个去判断。
// 参考：https://leetcode-cn.com/problems/delete-node-in-a-bst/solution/miao-dong-jiu-wan-shi-liao-by-terry2020-tc0o/
var deleteNode = function (root, key) {
  if (!root) return null;

  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    let node = root.right;
    while (node.left) {
      node = node.left;
    }
    node.left = root.left;
    root = root.right;
  }

  return root;
};
