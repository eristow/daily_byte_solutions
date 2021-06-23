// mine
const dfs = (node, sum, sums) => {
  sum += node.val;
  if (!node.left && !node.right) {
    sums.push(sum);
    return;
  }

  if (node.left) {
    dfs(node.left, sum, sums);
  }
  if (node.right) {
    dfs(node.right, sum, sums);
  }
};

const hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  let sums = [];
  dfs(root, 0, sums);

  return sums.includes(targetSum);
};

// slimmer, faster
const hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  } else if (
    root.left === null &&
    root.right === null &&
    targetSum - root.val === 0
  ) {
    return true;
  } else {
    return (
      hasPathSum(root.left, targetSum - root.val) ||
      hasPathSum(root.right, targetSum - root.val)
    );
  }
};
