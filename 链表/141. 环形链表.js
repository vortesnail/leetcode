var hasCycle = function (head) {
  const map = new Map();

  while (head) {
    if (map.get(head)) {
      return true;
    }
    map.set(head, true);
    head = head.next;
  }

  return false;
};