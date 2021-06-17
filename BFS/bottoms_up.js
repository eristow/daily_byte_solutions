var levelOrderBottom = function (root) {
  const vals = [];

  if (root === null) {
    return vals;
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
    vals.push(currentLevel);
  }

  return vals.reverse();
};
