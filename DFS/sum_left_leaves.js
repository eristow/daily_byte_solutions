/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const getSum = function (node, sum) {
  if (
    node &&
    node.left &&
    node.left.left === null &&
    node.left.right === null
  ) {
    sum += node.left.val;
  }

  if (node.left) {
    sum = getSum(node.left, sum);
  }
  if (node.right) {
    sum = getSum(node.right, sum);
  }

  return sum;
};

var sumOfLeftLeaves = function (root) {
  let sum = 0;

  sum = getSum(root, sum);

  return sum;
};

// succinct answer (from java, doesn't work in JS like this)
const sumOfLeftLeaves = function (root) {
  if (root === null) {
    return 0;
  } else if (
    root.left !== null &&
    root.left.left !== null &&
    root.left.right !== null
  ) {
    return root.left.val + sumOfLeftLeaves(root.right);
  } else {
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
  }
};
