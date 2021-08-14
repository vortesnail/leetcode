// 参考：https://leetcode-cn.com/problems/set-matrix-zeroes/solution/o1kong-jian-by-powcai/

// 思路一：用 O(m+n) 额外空间
var setZeroes = function (matrix) {
  const rowZero = [];
  const colZero = [];
  const row = matrix.length;
  const col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        rowZero.push(i);
        colZero.push(j);
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (rowZero.includes(i) || colZero.includes(j)) {
        matrix[i][j] = 0;
      }
    }
  }
};

// 思路二：O(1) 空间
var setZeroes = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let row0 = false;
  let col0 = false;

  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) {
      col0 = true;
      break;
    }
  }

  for (let i = 0; i < col; i++) {
    if (matrix[0][i] === 0) {
      row0 = true;
      break;
    }
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < row; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 0; j < col; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < col; i++) {
    if (matrix[0][i] === 0) {
      for (let j = 0; j < row; j++) {
        matrix[j][i] = 0;
      }
    }
  }

  if (col0) {
    for (let i = 0; i < row; i++) {
      matrix[i][0] = 0;
    }
  }
  if (row0) {
    for (let i = 0; i < col; i++) {
      matrix[0][i] = 0;
    }
  }
};