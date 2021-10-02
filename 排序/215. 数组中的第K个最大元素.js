// 暴力排序
var findKthLargest = function (nums, k) {
  const arr = nums.sort((a, b) => b - a);
  return arr[k - 1]
};

// 快速排序思想
var findKthLargest = function (nums, k) {
  let res = nums[0];

  function quickSort(start, end) {
    if (start <= end) {
      const mid = sort(start, end);
      if (mid > k - 1) {
        quickSort(start, mid - 1);
      } else if (mid < k - 1) {
        quickSort(mid + 1, end);
      } else {
        res = nums[mid];
      }
    }
  }

  function sort(start, end) {
    const base = nums[start];
    let left = start;
    let right = end;
    while (left !== right) {
      while (nums[right] <= base && left < right) {
        right--;
      }
      nums[left] = nums[right];
      while (nums[left] >= base && left < right) {
        left++;
      }
      nums[right] = nums[left];
    }
    nums[left] = base;
    return left;
  }

  quickSort(0, nums.length - 1);
  return res;
};