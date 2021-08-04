// 哈希表 + 双向链表
// 可参考：https://juejin.cn/post/6844904161545289742#heading-12
class DoublyLinkNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;

    this.pre = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(max) {
    this.max = max;
    this.map = new Map();

    this.head = null;
    this.tail = null;
  }

  get(key) {
    const node = this.map.get(key);
    if (!node) return -1;

    this.removeNode(node);
    this.appendHead(node);
    return node.val;
  }

  put(key, value) {
    let node = this.map.get(key);
    // 有这个缓存
    if (node) {
      node.val = value;
      // 被访问到的重新放到头部
      this.removeNode(node);
      this.appendHead(node);
    } else {
      // 没有这个缓存
      node = new DoublyLinkNode(key, value);
      // 如果超出容量，删除最后一个，再将新的插入到头部
      if (this.map.size >= this.max) {
        this.map.delete(this.tail.key);
        this.removeNode(this.tail);
        this.appendHead(node);
        this.map.set(key, node);
      } else {
        // 未超出容量，直接将新的插入到头部
        this.appendHead(node);
        this.map.set(key, node);
      }
    }

  }

  appendHead(node) {
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.pre = node;
      this.head = node;
    }
  }

  removeNode(node) {
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      if (this.head === node) {
        this.head = node.next;
        node.next = null;
      } else if (this.tail === node) {
        this.tail = node.pre;
        this.tail.next = null;
        node.pre = null;
      } else {
        node.pre.next = node.next;
        node.next.pre = node.pre;
        node.pre = node.next = null;
      }
    }
  }
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/