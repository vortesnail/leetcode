// 同样是简单的递归，找到路径即可
var binaryTreePaths = function (root) {
  const res = [];

  var dfs = function (node, curPath) {
    if (!node) return;
    curPath.push(node.val);

    if (!node.left && !node.right) {
      res.push(curPath.slice().join('->'));
    }

    dfs(node.left, curPath);
    dfs(node.right, curPath);

    curPath.pop();
  }

  dfs(root, []);
  return res;
};