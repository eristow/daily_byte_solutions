function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const removeNthFromEnd2Pass = (head, n) => {
  let ptr = head;
  let ptrBehind = null;
  let newList = new ListNode(-1, null);
  let newListHead = newList;
  let length = 0;

  // find length of list
  while (ptr.next !== null) {
    length++;
    ptr = ptr.next;
  }

  const m = length - n + 1;

  // go to mth node, set ptrBehind.next to ptr.next, erasing mth node
  ptr = head;
  for (let i = 1; i <= m; i++) {
    newList.next = ptr;
    newList = newList.next;
    ptrBehind = ptr;
    ptr = ptr.next;
  }

  newList.next = ptr.next;

  return newListHead.next;
};

const removeNthFromEnd = (head, n) => {
  let newList = new ListNode(-1, null);
  newList.next = head;
  let first = newList;
  let second = newList;

  for (let i = 1; i <= n + 1; i++) {
    first = first.next;
  }

  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return newList.next;
};
