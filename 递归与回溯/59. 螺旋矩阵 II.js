// 边界
var generateMatrix = function (n) {
  const res = Array.from({ length: n }).map(() => Array.from({ length: n }))
  // 边界
  let left = 0;
  let top = 0;
  let right = n - 1;
  let bottom = n - 1;
  // 填入的数字大小
  let num = 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res[top][i] = num;
      num++;
    }
    for (let i = top + 1; i <= bottom; i++) {
      res[i][right] = num;
      num++;
    }
    for (let i = right - 1; i >= left; i--) {
      res[bottom][i] = num;
      num++;
    }
    for (let i = bottom - 1; i >= top + 1; i--) {
      res[i][left] = num;
      num++;
    }
    left++;
    top++;
    right--;
    bottom--;
  }

  return res;
};