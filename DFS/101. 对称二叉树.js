// 递归
// 参考：https://leetcode-cn.com/problems/symmetric-tree/solution/dong-hua-yan-shi-101-dui-cheng-er-cha-shu-by-user7/
var isSymmetric = function (root) {
  if (!root) return true;

  return dfs(root.left, root.right);
};

var dfs = function (left, right) {
  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.val !== right.val) return false;

  return dfs(left.left, right.right) && dfs(left.right, right.left);
}

// 迭代（队列实现）
var isSymmetric = function (root) {
  if (!root || (!root.left && !root.right)) return true;

  const queue = [];
  queue.push(root.left);
  queue.push(root.right);

  while (queue.length > 0) {
    const left = queue.shift();
    const right = queue.shift();

    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    queue.push(left.left);
    queue.push(right.right);
    queue.push(left.right);
    queue.push(right.left);
  }

  return true;
};
