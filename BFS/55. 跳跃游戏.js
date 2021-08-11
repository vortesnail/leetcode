// 把每一个元素都当作第一个元素，然后起跳。能跳的距离=当前元素下标+元素值；
// 如果该距离大于或等于最后一个元素下标，说明是能跳到的。
// 不过别忘记要多一个判断，判断前面元素能不能跳到后面的元素。
var canJump = function (nums) {
  const lastIndex = nums.length - 1;
  let maxStep = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxStep) return false;
    if (maxStep >= lastIndex) return true;

    maxStep = Math.max(maxStep, i + nums[i]);
  }

  return false;
};
