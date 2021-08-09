// dfs，按 root->right->left 的遍历方式，且将当前层数和结果数组大小比较来确定是否是在当前层级第一次出现。
// 参考：https://leetcode-cn.com/problems/binary-tree-right-side-view/solution/jian-dan-bfsdfs-bi-xu-miao-dong-by-sweetiee/
var rightSideView = function (root) {
  const res = [];

  var dfs = function (node, depth) {
    if (!node) return;

    if (depth === res.length) {
      res.push(node.val);
    }

    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  }

  dfs(root, 0);
  return res;
};

// bfs，取遍历到的每一层的最后一个节点的值
var rightSideView = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      if (i === len - 1) {
        res.push(node.val);
      }
    }
  }

  return res;
};
