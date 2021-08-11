/**
利用 BFS 的思路，维护一个队列 queue 表示待处理的下标，先把 start 起点放入队列中，然后从起点开始根据起点对应的值分别把左右两边对应的下标放入队列中，不断循环。形象点来说就是每次跳完一格，都把这格对应的左右两边可跳的下标放入队列里，下次继续跳。

 1. 当左下标小于 0 或者右下标超出数组长度时，就不用放入队列了。
 2. 每次处理完当前的格子后，要用 visited 数组记录下来，下次对于这个处理过的下标就不再放入队列中。
 
如果这个过程中发现了某一格是 0，那么就成功，如果整个循环结束了都没发现，那么就失败。
 */
var canReach = function (arr, start) {
  const len = arr.length;
  const visited = [];
  const queue = [start];

  while (queue.length) {
    const idx = queue.shift();
    const val = arr[idx];
    if (val === 0) return true;
    const left = idx - val;
    const right = idx + val;
    if (left >= 0 && !visited[left]) {
      queue.push(left);
    }
    if (left < len && !visited[right]) {
      queue.push(right);
    }
    visited[idx] = true;
  }

  return false;
};