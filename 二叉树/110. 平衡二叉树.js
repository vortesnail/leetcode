// ssh 说的方法就蛮不错的。
// https://github.com/sl1673495/leetcode-javascript/issues/56
var isBalanced = function (root) {
  if (!root) return true;

  let isSonBalanced = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
  return isSonBalanced && isBalanced(root.left) && isBalanced(root.right);
};

var getHeight = function (node) {
  if (!node) return 0;
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}