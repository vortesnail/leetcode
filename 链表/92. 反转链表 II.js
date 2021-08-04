// 将链表分为三段，记录断开地方的位置，反转后再连起来。
// 可参考：https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/die-dai-fa-zhu-bu-jie-jue-wen-ti-you-shi-pin-jie-s/
var reverseBetween = function (head, left, right) {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let startNode = dummyNode;
  let endNode = dummyNode;
  for (let i = 0; i < left - 1; i++) {
    startNode = startNode.next;
  }
  for (let i = 0; i < right + 1; i++) {
    endNode = endNode.next;
  }
  let reverseEndNode = startNode.next;
  let reverseStartNode = reverseN(reverseEndNode, right - left + 1);
  startNode.next = reverseStartNode;
  reverseEndNode.next = endNode;

  return dummyNode.next;
};

var reverseN = function (head, n) {
  let pre = null;
  let cur = head;
  for (let i = 0; i < n; i++) {
    let nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre;
}

