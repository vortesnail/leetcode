// 参考
// https://leetcode-cn.com/problems/number-of-islands/solution/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/
var maxAreaOfIsland = function (grid) {
  let res = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) {
        const area = dfs(grid, r, c);
        res = Math.max(res, area);
      }
    }
  }
  return res;
};

var dfs = function (grid, r, c) {
  if (!inArea(grid, r, c)) return 0;
  if (grid[r][c] !== 1) return 0;

  grid[r][c] = 2; // 标记为已访问过
  return 1
    + dfs(grid, r + 1, c)
    + dfs(grid, r - 1, c)
    + dfs(grid, r, c + 1)
    + dfs(grid, r, c - 1);
}

var inArea = function (grid, r, c) {
  if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length) {
    return true;
  }
  return false;
}