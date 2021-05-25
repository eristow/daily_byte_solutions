function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const removeElementsDummy = (head, val) => {
  let newList = new ListNode(-1, null);
  let newListPtr = newList;
  let newListBehind = null;
  let ptr = head;

  while (ptr !== null) {
    if (ptr.val !== val) {
      newListPtr.next = ptr;
      newListBehind = newListPtr;
      newListPtr = newListPtr.next;
    }
    ptr = ptr.next;
  }

  if (newListPtr.next && newListPtr.next.val === val) {
    newListPtr.next = null;
  }

  return newList.next;
};

const removeElements = (head, val) => {
  // case for head = val
  while (head !== null && head.val === val) {
    head = head.next;
  }

  let ptr = head;

  while (ptr !== null && ptr.next !== null) {
    if (ptr.next.val === val) {
      ptr.next = ptr.next.next;
    } else {
      ptr = ptr.next;
    }
  }

  return head;
};
