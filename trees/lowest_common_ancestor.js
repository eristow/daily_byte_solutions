import Tree from '../modules/Tree.mjs';

// recursive
const lowestCommonAncestor = (root, p, q) => {
  if (root === null) {
    return null;
  }

  if (p.val < root.val && q.val < root.val) {
    console.log('left');
    return lowestCommonAncestor(root.left, p, q);
  }

  if (p.val > root.val && q.val > root.val) {
    console.log('right');
    return lowestCommonAncestor(root.right, p, q);
  }

  console.log('root');
  return root;
};

const tree = new Tree(7);
tree.left = new Tree(2);
tree.left.left = new Tree(1);
tree.left.right = new Tree(5);
tree.right = new Tree(9);
console.log(lowestCommonAncestor(tree, tree.left.left, tree.right));

const tree2 = new Tree(8);
tree2.left = new Tree(3);
tree2.left.left = new Tree(2);
tree2.left.right = new Tree(6);
tree2.right = new Tree(9);
console.log(lowestCommonAncestor(tree2, tree2.left.left, tree2.left.right));

const tree3 = new Tree(8);
tree3.left = new Tree(6);
tree3.right = new Tree(9);
console.log(lowestCommonAncestor(tree3, tree3.left, tree3));
