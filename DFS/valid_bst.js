// mine (doesn't work for val that should be in left subtree, but is in right)
var isValidBST = function (root) {
  console.log('---ROOT---');
  console.log(`root.val: ${root.val}`);
  let currentVal = true;

  // invalid bst
  if (
    (root.left && root.left.val >= root.val) ||
    (root.right && root.right.val <= root.val)
  ) {
    console.log('not BST');
    currentVal = false;
  }

  // is valid bst
  if (
    root.left &&
    root.left.val < root.val &&
    root.right &&
    root.right.val > root.val
  ) {
    console.log('valid BST');
    currentVal = true;
  }
  // check subtrees and ensure both are valid bst
  let leftVal = true;
  let rightVal = true;

  if (root.left !== null) {
    leftVal = isValidBST(root.left);
  }
  if (root.right !== null) {
    rightVal = isValidBST(root.right);
  }

  console.log(
    `root.val: ${root.val} | leftVal: ${leftVal} | rightVal: ${rightVal}`
  );

  return leftVal && rightVal && currentVal;
};

// answer
const validate = function (root, max, min) {
  if (root === null) {
    return true;
  } else if (
    (max !== null && root.val >= max) ||
    (min !== null && root.val <= min)
  ) {
    return false;
  } else {
    return (
      validate(root.left, root.val, min) && validate(root.right, max, root.val)
    );
  }
};

var isValidBST = function (root) {
  return validate(root, null, null);
};
