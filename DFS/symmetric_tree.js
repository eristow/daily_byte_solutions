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
 * @return {boolean}
 */
const checkSymmetry = function (left, right) {
  if (left === null && right === null) {
    return true;
  }
  if (left && right && left.val === right.val) {
    console.log(`left.val: ${left.val} | right.val: ${right.val}`);
    return (
      checkSymmetry(left.left, right.right) &&
      checkSymmetry(left.right, right.left)
    );
  } else {
    console.log(`left: ${left} | right: ${right}`);
    return false;
  }
};

var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }
  if (root.left === null && root.right === null) {
    return true;
  }
  return checkSymmetry(root.left, root.right);
};
