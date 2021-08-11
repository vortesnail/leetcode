// 经过每个节点时判断是否为叶子结点，再做判断和递归
var hasPathSum = function (root, targetSum) {
  let resObj = {
    flag: false
  };
  helper(root, 0, targetSum, resObj);

  return resObj.flag;
};

var helper = function (root, preSum, targetSum, resObj) {
  if (!root) return;
  // 其实这里再加上这个判断，理论上来说应该是更快的，但是实际提交却更慢了，很奇怪。
  // if (resObj.flag) return;

  if (!root.left && !root.right) {
    if (preSum + root.val === targetSum) {
      resObj.flag = true;
      return;
    }
  }

  helper(root.left, preSum + root.val, targetSum, resObj);
  helper(root.right, preSum + root.val, targetSum, resObj);
}

// ssh 的简洁版
var hasPathSum = function (root, sum) {
  if (!root) {
    return false
  }
  if (!root.left && !root.right) {
    return root.val === sum
  }

  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}