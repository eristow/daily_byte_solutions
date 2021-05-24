function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = (l1, l2) => {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  let lPtr = l1;
  let rPtr = l2;
  let newList = new ListNode(-1, null);
  let newListHead = newList;

  // Compare/add nodes until one ptr is null
  while ((lPtr && rPtr) !== null) {
    if (lPtr.val < rPtr.val) {
      newList.next = lPtr;
      lPtr = lPtr.next;
    } else {
      newList.next = rPtr;
      rPtr = rPtr.next;
    }
    newList = newList.next;
  }

  // Add remaining of unfinished list
  if (lPtr !== null) {
    newList.next = lPtr;
  } else if (rPtr !== null) {
    newList.next = rPtr;
  }

  return newListHead.next;
};

const node1_3 = new ListNode(4, null);
const node1_2 = new ListNode(2, node1_3);
const node1_1 = new ListNode(1, node1_2);
const node2_3 = new ListNode(4, null);
const node2_2 = new ListNode(3, node2_3);
const node2_1 = new ListNode(1, node2_2);
console.log(mergeTwoLists(node1_1, node2_1)); // [1,1,2,3,4,4]
