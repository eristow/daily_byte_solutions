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
const inOrder = function (node, arr) {
  if (node === null) {
    return;
  }

  inOrder(node.left, arr);
  arr.push(node.val);
  inOrder(node.right, arr);

  return arr;
};

var getMinimumDifference = function (root) {
  if (root === null) {
    return null;
  }

  // inorder traversal for bst to array
  let arr = [];

  arr = inOrder(root, arr);

  console.log(arr);

  // find min diff in array
  let diff = 999999;

  for (let i = 0; i < arr.length - 1; i++) {
    diff = Math.min(Math.abs(arr[i] - arr[i + 1]), diff);
  }

  return diff;
};
