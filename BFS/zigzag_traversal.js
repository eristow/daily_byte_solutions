var zigzagLevelOrder = function (root) {
  const vals = [];
  if (!root) {
    return vals;
  }

  const queue = [];
  queue.push(root);
  let level = 1;

  while (queue.length > 0) {
    const size = queue.length;
    let current = [];

    for (let i = 0; i < size; i++) {
      const temp = queue.shift();
      current.push(temp.val);

      if (temp.left) {
        queue.push(temp.left);
      }

      if (temp.right) {
        queue.push(temp.right);
      }
    }

    if (level % 2 === 0) {
      current = current.reverse();
    }
    vals.push(current);
    level++;
  }

  return vals;
};
