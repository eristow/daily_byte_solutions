// recursive
const searchBST = (root, val) => {
  if (root === null) {
    return null;
  }

  if (root.val === val) {
    return root;
  } else if (val > root.val && root.right) {
    return searchBST(root.right, val);
  } else if (val < root.val && root.left) {
    return searchBST(root.left, val);
  }

  return null;
};

// iterative
const searchBST = (root, val) => {
  let newRoot = root;
  while (newRoot !== null && newRoot.val !== val) {
    if (val < newRoot.val) {
      newRoot = newRoot.left;
    } else {
      newRoot = newRoot.right;
    }
  }

  return newRoot;
};
