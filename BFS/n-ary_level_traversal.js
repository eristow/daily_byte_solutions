var levelOrder = function (root) {
  const vals = [];
  if (!root) {
    return vals;
  }

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const size = queue.length;
    const current = [];

    for (let i = 0; i < size; i++) {
      const temp = queue.shift();
      current.push(temp.val);

      for (let child of temp.children) {
        queue.push(child);
      }
    }
    vals.push(current);
  }

  return vals;
};
