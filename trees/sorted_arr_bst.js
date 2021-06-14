/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const buildTree = (nums, left, right) => {
  if (left > right) {
    return null;
  }

  let mid = Math.floor(left + (right - left) / 2);
  console.log(`mid: ${mid}`);
  let node = new TreeNode(nums[mid]);
  node.left = buildTree(nums, left, mid - 1);
  node.right = buildTree(nums, mid + 1, right);

  return node;
};

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }

  return buildTree(nums, 0, nums.length - 1);
};
