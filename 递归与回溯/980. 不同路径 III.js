// 回溯法
// 参考：https://leetcode-cn.com/problems/unique-paths-iii/solution/dfs-hui-su-shuang-bai-by-quantum-10/
var uniquePathsIII = function (grid) {
  let startX = 0;
  let startY = 0;
  let stepNum = 1;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        startX = j;
        startY = i;
        continue;
      }
      if (grid[i][j] === 0) stepNum++;
    }
  }

  return dfs(startX, startY, stepNum, grid);
};

var dfs = function (x, y, stepNum, grid) {
  if (x < 0 || x >= grid[0].length || y < 0 || y >= grid.length || grid[y][x] == -1) return 0;
  if (grid[y][x] == 2) return stepNum === 0 ? 1 : 0;
  grid[y][x] = -1;  //已走过的标记为障碍
  let res = 0;
  res += dfs(x - 1, y, stepNum - 1, grid);
  res += dfs(x + 1, y, stepNum - 1, grid);
  res += dfs(x, y - 1, stepNum - 1, grid);
  res += dfs(x, y + 1, stepNum - 1, grid);
  grid[y][x] = 0;  //dfs遍历完该位置为起始位置的情况后，置零，以不影响后面的dfs
  return res;
}