import Tree from '../modules/Tree.mjs';
import ListNode from '../modules/LinkedList.mjs';

const createLinked = (root, list) => {
  if (root === null) {
    return null;
  }

  console.log('ROOT:');
  console.log(root);

  list = createLinked(root.left, list);
  list.next = new ListNode(root.value);
  list = list.next;
  createLinked(root.right, list);

  console.log('LIST:');
  console.log(list);
  return list;
};

const bstToLinked = (root) => {
  if (root === null) {
    return null;
  }

  let head = new ListNode();
  let list = head;

  console.log('ROOT:');
  console.log(root);

  list = createLinked(root.left, list);
  console.log('LIST AFTER LEFT:');
  console.log(list);
  console.log(head);
  list.next = new ListNode(root.value);
  list = list.next;
  console.log('LIST AFTER ROOT:');
  console.log(list);
  console.log(head);
  createLinked(root.right, list);
  console.log('LIST AFTER RIGHT:');
  console.log(list);
  console.log(head);

  console.log(head);
  return head.next;
};

const tree = new Tree(5);
tree.left = new Tree(1);
tree.right = new Tree(6);
// console.log(bstToLinked(tree));

const tree2 = new Tree(5);
tree2.left = new Tree(2);
tree2.left.left = new Tree(1);
tree2.left.right = new Tree(3);
tree2.right = new Tree(9);
console.log(bstToLinked(tree2));
