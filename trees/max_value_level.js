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
 * @return {number[]}
 */
var largestValues = function (root) {
  const vals = [];

  if (!root) {
    return vals;
  }

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const size = queue.length;
    let currentMax = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < size; i++) {
      const temp = queue.shift();
      if (temp.val > currentMax) {
        currentMax = temp.val;
      }

      if (temp.left) {
        queue.push(temp.left);
      }

      if (temp.right) {
        queue.push(temp.right);
      }
    }

    vals.push(currentMax);
  }

  return vals;
};
