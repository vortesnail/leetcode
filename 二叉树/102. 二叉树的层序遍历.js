// 就是常规的层序遍历而已
var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    const len = queue.length;
    const curArr = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      curArr.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    res.push(curArr);
  }

  return res;
};

// 就题目的解答来说，使用 dfs 也是可以的，因为结果数组的层数和节点的曾是一致
var levelOrder = function (root) {
  if (!root) return [];
  const res = [];

  var dfs = function (node, level) {
      if (!node) return;

      if (!res[level]) {
          res[level] = [];
      }
      res[level].push(node.val);

      dfs(node.left, level + 1);
      dfs(node.right, level + 1);
  }

  dfs(root, 0)
  return res;
};