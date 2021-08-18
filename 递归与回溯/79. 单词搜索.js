// 回溯，主要是四个方向
var exist = function (board, word) {
  // 上右下左
  const dires = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const rows = board.length;
  if (rows === 0) return false;
  const cols = board[0].length;
  const used = Array.from({ length: rows }).map(() => Array.from({ length: cols }))
  const wordLen = word.length;

  var backtracking = function (x, y, start) {
    if (start === wordLen - 1) {
      return board[x][y] === word[start];
    }
    if (board[x][y] === word[start]) {
      used[x][y] = true;
      for (const d of dires) {
        let newX = x + d[0];
        let newY = y + d[1];
        if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && !used[newX][newY]) {
          if (backtracking(newX, newY, start + 1)) {
            return true;
          }
        }
      }
      used[x][y] = false;
    }

    return false;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (backtracking(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};