// 遍历字典中每一词，设立其左指针 curLeft，给 s 也设置一个左指针 sLeft
// 同时从下标 0 开始，只有当前遍历到的单词的字母和 s[sLeft] 相同时，curLeft才前进。
// 每个单词都从头开始。
var findLongestWord = function (s, dictionary) {
  const arr = [];
  let res = '';

  for (let i = 0; i < dictionary.length; i++) {
    const curWord = dictionary[i];
    let sLeft = 0;
    let curLeft = 0;

    while (sLeft < s.length && curLeft < curWord.length) {
      if (s[sLeft] === curWord[curLeft]) {
        curLeft++;
      }

      sLeft++;
    }

    if (curLeft === curWord.length) {
      arr.push(curWord)
    }
  }

  // 找到最长和字典序最小的那个词
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > res.length) {
      res = arr[i];
    } else if (arr[i].length === res.length) {
      res = arr[i] < res ? arr[i] : res;
    }
  }

  return res;
};