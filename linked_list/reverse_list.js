function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const reverseListStack = (head) => {
  const stack = [];
  let newList = new ListNode(0);
  let newListPtr = newList;
  let ptr = head;

  // go through list, put elements on stack
  while (ptr !== null) {
    stack.push(ptr);
    ptr = ptr.next;
  }

  // pop elements from stack and create new list
  ptr = stack.pop();

  while (ptr !== undefined) {
    newListPtr.next = new ListNode(ptr.val);
    newListPtr = newListPtr.next;
    ptr = stack.pop();
  }

  return newList.next;
};

const reverseList = (head) => {
  let prev = null;
  let ptr = head;

  while (ptr !== null) {
    let temp = ptr.next;
    ptr.next = prev;
    prev = ptr;
    ptr = temp;
  }

  return prev;
};

const node14 = new ListNode(5, null);
const node13 = new ListNode(4, node14);
const node12 = new ListNode(3, node13);
const node11 = new ListNode(2, node12);
const head = new ListNode(1, node11);

let retVal = reverseList(head);
let ptr = retVal;

while (ptr !== null) {
  console.log(ptr);
  ptr = ptr.next;
}
