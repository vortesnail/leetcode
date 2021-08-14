// 参考：https://leetcode-cn.com/problems/spiral-matrix/solution/ju-zhen-bian-li-wen-ti-de-si-bu-qu-by-fu-91za/
var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  const order = [];
  // 边界
  let left = 0;
  let top = 0;
  let right = n - 1;
  let bottom = m - 1;
  // 方向
  let curDire = 0; // 0:右 1:下 2:左 3:上
  let dires = [[0, 1], [1, 0], [0, -1], [-1, 0]];  //移动方向对应的数据加减
  // 当前位置
  let x = 0;
  let y = 0;

  while (order.length !== m * n) {
    order.push(matrix[x][y]);

    if (curDire === 0 && y === right) {
      curDire++;
      top++;
    } else if (curDire === 1 && x === bottom) {
      curDire++;
      right--;
    } else if (curDire === 2 && y === left) {
      curDire++;
      bottom--
    } else if (curDire === 3 && x === top) {
      curDire++;
      left++;
    }

    curDire %= 4;
    x += dires[curDire][0];
    y += dires[curDire][1];
  }

  return order;
};