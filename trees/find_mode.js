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

// USING MAP
const populate = (root, map) => {
  if (root === null) {
    return;
  }

  if (map.has(root.val)) {
    map.set(root.val, map.get(root.val) + 1);
  } else {
    map.set(root.val, 1);
  }

  populate(root.left, map);
  populate(root.right, map);
};

var findMode = function (root) {
  if (root === null) {
    return -1;
  }

  let map = new Map();

  // populate map
  populate(root, map);

  // find mode in map
  let mode = null;
  let vals = [];
  for (let [key, val] of map) {
    if (mode === null) {
      mode = key;
      vals = [mode];
    } else if (map.get(mode) < val) {
      mode = key;
      vals = [mode];
    } else if (map.get(mode) === val) {
      vals.push(key);
    }
  }

  console.log(mode);
  console.log(vals);

  return vals;
};

// NO EXTRA SPACE
var findMode = function (root) {
  let modes = [];
  let prev = null;
  let count = 1;
  let max = 0;

  const traverse = (node) => {
    if (node === null) {
      return;
    }

    traverse(node.left);

    if (node.val === prev) {
      count++;
    } else if (node.val !== prev) {
      count = 1;
    }

    prev = node.val;
    if (count > max) {
      modes = [node.val];
      max = count;
    } else if (count === max) {
      modes.push(node.val);
    }

    traverse(node.right);
  };

  traverse(root);

  return modes;
};
