// 三指针
// 可参考这个解释：https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/yuan-lai-hui-luo-ji-qing-xi-jian-dan-yi-8t93h/
var swapPairs = function (head) {
  const resHead = new ListNode('head');
  resHead.next = head;

  let curNode = resHead;
  while (curNode !== null && curNode.next !== null && curNode.next.next !== null) {
    const fir = curNode;
    const sec = curNode.next;
    const thd = sec.next;

    sec.next = thd.next;
    fir.next = thd;
    thd.next = sec;

    curNode = curNode.next.next;
  }
  return resHead.next;
};
