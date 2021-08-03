// 简单的链表删除，设立一个傀儡节点即可。
var removeElements = function (head, val) {
  const root = new ListNode();
  root.next = head;
  let cur = root;
  while (cur) {
    if (!cur.next) break;
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return root.next;
};