var binaryTreePaths = function (root) {
  const paths = [];
  if (!root) {
    return paths;
  }

  dfs(root, '', paths);

  return paths;
};

const dfs = (node, path, paths) => {
  path += node.val;
  if (!node.left && !node.right) {
    paths.push(path);
    return;
  }

  if (node.left) {
    dfs(node.left, path + '->', paths);
  }
  if (node.right) {
    dfs(node.right, path + '->', paths);
  }
};
