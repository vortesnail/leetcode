// dfs，相当于找到每一条路径的叶子结点，找到最小的树深度。
var minDepth = function (root) {
  if (!root) return 0;
  let res = Infinity;

  var dfs = function (node, depth) {
    if (!node) return;
    depth++;

    if (!node.left && !node.right) {
      res = Math.min(res, depth);
    }

    dfs(node.left, depth);
    dfs(node.right, depth);

    depth--;
  }

  dfs(root, 0);
  return res;
};

// bfs
var minDepth = function (root) {
  if (!root) return 0;

  let res = 0;
  const queue = [root];

  while (queue.length > 0) {
    let len = queue.length;
    res++;

    while (len > 0) {
      const node = queue.shift();
      const left = node.left;
      const right = node.right;

      if (!left && !right) return res;
      if (left) queue.push(left);
      if (right) queue.push(right);

      len--;
    }
  }
};