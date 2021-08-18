// 参考
// https://leetcode-cn.com/problems/number-of-islands/solution/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/
var numIslands = function (grid) {
  let res = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "1") {
        dfs(grid, r, c);
        res++;
      }
    }
  }
  return res;
};

var dfs = function (grid, r, c) {
  if (!inArea(grid, r, c)) return;
  if (grid[r][c] !== "1") return;

  grid[r][c] = "2"; // 标记已走过
  dfs(grid, r + 1, c);
  dfs(grid, r - 1, c);
  dfs(grid, r, c + 1);
  dfs(grid, r, c - 1);
}

var inArea = function (grid, r, c) {
  return r >= 0 && r < grid.length && c >= 0 && grid[0].length;
}