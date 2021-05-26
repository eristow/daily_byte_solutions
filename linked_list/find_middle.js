function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const middleNode = (head) => {
  let fast = head;
  let slow = head;

  while ((fast && fast.next) !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
