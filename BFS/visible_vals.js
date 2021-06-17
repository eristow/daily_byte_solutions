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
var rightSideView = function (root) {
  const vals = [];

  if (!root) {
    return vals;
  }

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 1; i <= size; i++) {
      const temp = queue.shift();
      if (i === size) {
        vals.push(temp.val);
      }

      if (temp.left) {
        queue.push(temp.left);
      }

      if (temp.right) {
        queue.push(temp.right);
      }
    }
  }

  return vals;
};

// left side view
var leftSideView = function (root) {
  const vals = [];

  if (!root) {
    return vals;
  }

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 1; i <= size; i++) {
      const temp = queue.shift();
      if (i === 1) {
        vals.push(temp.val);
      }

      if (temp.left) {
        queue.push(temp.left);
      }

      if (temp.right) {
        queue.push(temp.right);
      }
    }
  }

  return vals;
};
