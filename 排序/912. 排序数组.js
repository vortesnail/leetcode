// 1. 选择排序
// 思路：每一轮选取未排定的部分中最小的部分交换到未排定部分的最开头。
var sortArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIdx = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      const temp = nums[i];
      nums[i] = nums[minIdx];
      nums[minIdx] = temp;
    }
  }

  return nums;
};

// 2. 插入排序
// 思路：将已排序部分当成一个小数组，未排序部分将一个一个插入到小数组当中，循环插入，直至排序完成。
var sortArray = function (nums) {
  let len = nums.length;
  for (let i = 1; i < len; i++) {
    const cur = nums[i];
    let j = i - 1;
    while (j >= 0 && cur < nums[j]) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = cur;
  }

  return nums;
};

// 3. 冒泡排序
// 思路：前后两个位置比较并两两交换，将最大值冒泡到最后一位。
var sortArray = function (nums) {
  let len = nums.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j < len; j++) {
      if (nums[j] < nums[j - 1]) {
        const temp = nums[j - 1];
        nums[j - 1] = nums[j];
        nums[j] = temp;
      }
    }
  }

  return nums;
};

// 4. 快速排序
// 思路：选取每个区间第一个是 base，将其与 nums[left] 互换后，将 nums[left]设 为 base 值，进行一次快速排序。
var sortArray = function (nums) {
  function quickSort(start, end, arr) {
    if (start < end) {
      let mid = sort(start, end, arr);
      quickSort(start, mid - 1, arr);
      quickSort(mid + 1, end, arr);
    }
    return arr;
  }

  function sort(start, end, arr) {
    const base = arr[start];
    let left = start;
    let right = end;
    while (left !== right) {
      while (arr[right] >= base && right > left) {
        right--;
      }
      arr[left] = arr[right];
      while (arr[left] <= base && right > left) {
        left++;
      }
      arr[right] = arr[left];
    }
    arr[left] = base;
    return left;
  }

  quickSort(0, nums.length - 1, nums);
  return nums;
};
