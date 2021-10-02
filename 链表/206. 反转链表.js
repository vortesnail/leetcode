// 迭代法反转链表，主要设置3个指针，每次只将 nxt 节点指向 cur 节点。
// 注意不能将 nxt 放到 while 外面定义，因为 head 有可能是空，找不到 next。
var reverseList = function (head) {
  let pre = null;
  let cur = head;
  while (cur !== null) {
    let nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre;
}

// 递归
// 可参考：https://leetcode-cn.com/problems/reverse-linked-list/solution/fan-zhuan-lian-biao-shuang-zhi-zhen-di-gui-yao-mo-/
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  const ret = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return ret;
}
