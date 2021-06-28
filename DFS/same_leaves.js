/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const createLeafValSeq = function (root, arr) {
  if (root.left === null && root.right === null) {
    arr.push(root.val);
  }

  if (root.left) {
    createLeafValSeq(root.left, arr);
  }
  if (root.right) {
    createLeafValSeq(root.right, arr);
  }
};

var leafSimilar = function (root1, root2) {
  const leafValSeq1 = [];
  const leafValSeq2 = [];

  createLeafValSeq(root1, leafValSeq1);
  createLeafValSeq(root2, leafValSeq2);

  console.log(leafValSeq1);
  console.log(leafValSeq2);

  let length =
    leafValSeq1.length >= leafValSeq2.length
      ? leafValSeq1.length
      : leafValSeq2.length;

  for (let i = 0; i < length; i++) {
    if (leafValSeq1[i] !== leafValSeq2[i]) {
      return false;
    }
  }

  return true;
};
