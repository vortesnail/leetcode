// 看代码就能看懂，不过和常规的回溯模板不一样，循环是在外层进行的。
var sequentialDigits = function (low, high) {
  const res = [];

  var backtracking = function (k) {
    if (k >= low && k <= high) {
      res.push(k);
    }
    k = k * 10 + k % 10 + 1;
    if (k > high || k % 10 === 0) return;
    backtracking(k);
  }

  for (let i = 1; i <= 9; i++) {
    backtracking(i);
  }

  res.sort((a, b) => a - b);
  return res;
};