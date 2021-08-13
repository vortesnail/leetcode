// 暴力法
// 先遍历一次，找出所有 0 的下标，然后删除掉所有 0 元素，再 push 相应的 0 的个数到末尾。
var moveZeroes = function (nums) {
  let zeros = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros.push(i)
    }
  }
  for (let j = zeros.length - 1; j >= 0; j--) {
    nums.splice(zeros[j], 1)
  }
  for (let j = 0; j < zeros.length; j++) {
    nums.push(0)
  }
  return nums
}

// 双指针
// 参考：https://leetcode-cn.com/problems/move-zeroes/solution/dong-hua-yan-shi-283yi-dong-ling-by-wang_ni_ma/
var moveZeroes = function (nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
};