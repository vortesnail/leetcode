// 递归最简洁写法，有点难理解。
// 参考：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/236-er-cha-shu-de-zui-jin-gong-gong-zu-xian-hou-xu/
var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left === null && right === null) return null;
  if (left === null) return right;
  if (right === null) return left;
  return root;
};

// 常规解法，先分别找到 p 和 q 的路径节点入栈，最后一次比较两个栈，最后一个相等的节点返回即可。
// 参考：https://www.bilibili.com/video/BV12Z4y15721?from=search&seid=8814694143711614664
var lowestCommonAncestor = function (root, p, q) {
  let pPath = [];
  let qPath = [];
  let stack = [];

  dfsSearch(root, p, stack, pPath);
  stack = [];
  dfsSearch(root, q, stack, qPath);

  let resNode = root;
  let i = 0;
  while (i < pPath.length && i < qPath.length) {
    if (pPath[i] === qPath[i]) {
      resNode = pPath[i];
    }
    i++;
  }
  return resNode;
};

var dfsSearch = function (node, target, stack, path) {
  if (node === null) return;
  stack.push(node);

  if (node === target) {
    // 这里注意不要直接 path = stack，这样会改变不到传入的 pPath，因为 path 指向了新的地址
    for (const el of stack) {
      path.push(el);
    }
    return;
  }

  dfsSearch(node.left, target, stack, path);
  dfsSearch(node.right, target, stack, path);
  stack.pop();
}