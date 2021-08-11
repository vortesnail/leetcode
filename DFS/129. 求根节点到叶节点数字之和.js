// 递归找到所有路径，添加进一个数组中，最后遍历一遍，转为数字再相加即可。
// 需要注意的是 pathArr push 的时候必须是 curPath 的浅拷贝副本，不然结果会被影响。
var sumNumbers = function (root) {
  let res = 0;
  const pathArr = [];

  var dfs = function (node, curPath) {
    if (!node) return;

    curPath.push(node.val);
    if (!node.left && !node.right) {
      pathArr.push(curPath.slice());
    }

    dfs(node.left, curPath);
    dfs(node.right, curPath);

    curPath.pop();
  }

  dfs(root, []);

  for (let i = 0; i < pathArr.length; i++) {
    res += parseInt(pathArr[i].join(''), 10);
  }

  return res;
};

// 上述代码可优化空间，不用记录在数组中，在判断到是叶节点直接加到 res 中即可。
var sumNumbers = function (root) {
  let res = 0;

  var dfs = function (node, curPath) {
    if (!node) return;

    curPath.push(node.val);
    if (!node.left && !node.right) {
      res += parseInt(curPath.slice().join(''), 10);
    }

    dfs(node.left, curPath);
    dfs(node.right, curPath);

    curPath.pop();
  }

  dfs(root, []);

  return res;
};