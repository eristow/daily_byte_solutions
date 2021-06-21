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
var verticalTraversal = function (root) {
  if (!root) {
    return [];
  }
  const map = {};
  const queue = [];
  let temp;

  // track node and col/row through queue
  queue.push({ node: root, col: 0, row: 0 });

  // go through tree, keeping track of cols, populate map
  while (queue.length > 0) {
    let size = queue.length;

    while (size--) {
      temp = queue.shift();

      if (temp.col in map) {
        if (temp.row in map[temp.col]) {
          // add to existing array of nodes and sort
          const nodeArr = map[temp.col][temp.row];
          console.log(temp.node.val);
          nodeArr.push(temp.node.val);
          nodeArr.sort((a, b) => Number(a) - Number(b));
          console.log(nodeArr);
          map[temp.col][temp.row] = nodeArr;
        } else {
          // make new array for just the row in map
          map[temp.col][temp.row] = [temp.node.val];
        }
      } else {
        // make new arrays for both col and row in map
        map[temp.col] = [];
        map[temp.col][temp.row] = [temp.node.val];
      }

      if (temp.node.left) {
        queue.push({
          node: temp.node.left,
          col: temp.col - 1,
          row: temp.row + 1,
        });
      }
      if (temp.node.right) {
        queue.push({
          node: temp.node.right,
          col: temp.col + 1,
          row: temp.row + 1,
        });
      }
    }
  }

  // construct arr from sorted map
  const sortedMap = new Map(
    [...Object.entries(map)].sort((a, b) => {
      console.log(Number(a[0]) - Number(b[0]));
      return Number(a[0]) - Number(b[0]);
    })
  );

  const vals = [];
  for (let [key, nodes] of sortedMap) {
    const current = [];
    for (let val of nodes) {
      if (!val) continue;
      for (let i of val) {
        current.push(i);
      }
    }
    vals.push(current);
  }

  return vals;
};
