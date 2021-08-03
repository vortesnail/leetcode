// 链表每位相加，记录进位。 注意的是，因为是倒序链表，所以我们要从两个链表的第一位就要开始相加。
// 如果最后一位进位是大于 0 的，要在尾部再加一个进位节点。
var addTwoNumbers = function (l1, l2) {
  const resHead = new ListNode('head');
  let temp = resHead;
  let progression = 0;
  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + progression;
    progression = Math.floor(sum / 10);
    temp.next = new ListNode(sum % 10);
    temp = temp.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (progression > 0) temp.next = new ListNode(progression);
  return resHead.next;
}
