// 参考：https://zhuanlan.zhihu.com/p/144219651
// 只能从左下角元素开始搜索，其他位置都不行。
// 这道题还能确定行、列边界，进行二分搜索，但是效率不高。
var searchMatrix = function (matrix, target) {
  let i = matrix.length - 1;
  let j = 0;

  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] > target) {
      i--;
    } else if (matrix[i][j] < target) {
      j++;
    } else {
      return true;
    }
  }

  return false;
};