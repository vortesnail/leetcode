// 快慢指针
var removeNthFromEnd = function (head, n) {
  const resNode = new ListNode('head');
  resNode.next = head;
  let left = right = resNode;

  while (n !== 0) {
    right = right.next;
    n--;
  }
  while (right.next !== null) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next;

  return resNode.next;
}