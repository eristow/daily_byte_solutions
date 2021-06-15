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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const levels = [];

  if (!root) {
    return levels;
  }

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const size = queue.length;
    const currentLevel = [];

    for (let i = 0; i < size; i++) {
      const temp = queue.shift();
      currentLevel.push(temp.val);

      if (temp.left) {
        queue.push(temp.left);
      }

      if (temp.right) {
        queue.push(temp.right);
      }
    }

    levels.push(currentLevel);
  }

  return levels;
};
