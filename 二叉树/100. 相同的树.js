// 我个人认为这道题和 101. 对称二叉树 是一样的，只不过我们人为增加了一个 根节点，将 p q 作为左右节点即可
// dfs，和对称二叉树解法一致
var isSameTree = function (p, q) {
  return dfs(p, q);
};

var dfs = function (left, right) {
  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.val !== right.val) return false;

  return dfs(left.left, right.left) && dfs(left.right, right.right);
}

// bfs
// 迭代（队列实现）
var isSameTree = function (p, q) {
  if (!p && !q) return true;

  const queue = [];
  queue.push(p);
  queue.push(q);

  while (queue.length > 0) {
    const left = queue.shift();
    const right = queue.shift();

    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    queue.push(left.left);
    queue.push(right.left);
    queue.push(left.right);
    queue.push(right.right);
  }

  return true;
};
