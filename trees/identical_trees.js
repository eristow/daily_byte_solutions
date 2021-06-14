// recursive
const isSameTree = (p, q) => {
  if (p === null && q === null) {
    return true;
  } else if (p === null || q === null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// iterative
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  } else if (p === null || q === null) {
    return false;
  }

  const queue = [];

  queue.unshift(p);
  queue.unshift(q);

  while (queue.length > 0) {
    const first = queue.shift();
    const second = queue.shift();

    if (first === null && second === null) {
      continue;
    }
    if (first === null || second === null) {
      return false;
    }
    if (first.val !== second.val) {
      return false;
    }

    queue.unshift(first.left);
    queue.unshift(second.left);
    queue.unshift(first.right);
    queue.unshift(second.right);
  }

  return true;
};
