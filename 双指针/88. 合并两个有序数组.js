// 从尾部开始遍历比较，额外设置一个填值的指针 p；
// 参考：https://leetcode-cn.com/problems/merge-sorted-array/solution/hua-jie-suan-fa-88-he-bing-liang-ge-you-xu-shu-zu-/
var merge = function (nums1, m, nums2, n) {
  let right1 = m - 1;
  let right2 = n - 1;
  let p = m + n - 1;

  while (right1 >= 0 && right2 >= 0) {
    if (nums1[right1] < nums2[right2]) {
      nums1[p] = nums2[right2];
      right2--;
    } else {
      nums1[p] = nums1[right1];
      right1--;
    }
    p--;
  }

  while (right2 >= 0) {
    nums1[p] = nums2[right2];
    right2--;
    p--;
  }
};