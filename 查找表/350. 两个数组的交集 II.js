// 同样是建立两个表，根据数量最小值来决定push多少个
var intersect = function (nums1, nums2) {
  const nums1Map = new Map();
  const nums2Map = new Map();

  for (const ele of nums1) {
    nums1Map.set(ele, (nums1Map.get(ele) || 0) + 1);
  }
  for (const ele of nums2) {
    nums2Map.set(ele, (nums2Map.get(ele) || 0) + 1);
  }

  const res = [];
  for (const [key, value] of nums1Map) {
    if (nums2Map.get(key)) {
      const pushCount = Math.min(value, nums2Map.get(key))
      for (let i = 0; i < pushCount; i++) {
        res.push(key)
      }
    }
  }

  return res;
};