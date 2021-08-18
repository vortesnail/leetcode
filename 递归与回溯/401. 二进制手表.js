// 回溯
var readBinaryWatch = function (turnedOn) {
  const res = [];

  var backtracking = function (num, start, h, m) {
    if (num === 0) {
      if (h > 11 || m > 59) {
        return;
      }
      let hour = h.toString();
      let minute = m.toString();
      if (minute.length === 1) {
        minute = '0' + minute;
      }
      res.push(hour + ":" + minute);
    }

    for (let i = start; i <= 9; i++) {
      if (h > 11 || m > 59) {
        continue;
      }
      const store = [h, m]; // 记录状态
      if (i <= 3) {
        h += 2 ** i;
      } else {
        m += 2 ** (i - 4);
      }
      backtracking(num - 1, i + 1, h, m);//进入下一层，注意下一层的 start 是 i+1 
      // 恢复状态
      h = store[0];
      m = store[1];
    }
  }

  backtracking(turnedOn, 0, 0, 0);
  return res;
};