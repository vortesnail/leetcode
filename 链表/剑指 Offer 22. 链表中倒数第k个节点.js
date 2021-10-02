// 快慢指针
var getKthFromEnd = function (head, k) {
  const tmpNode = new ListNode();
  tmpNode.next = head;
  let left = tmpNode;
  let right = tmpNode;
  while (k !== 0) {
    right = right.next;
    k--;
  }
  while (right.next !== null) {
    right = right.next;
    left = left.next;
  }
  return left.next;
};