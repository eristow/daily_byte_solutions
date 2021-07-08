// mine (and it works :] )
// instead of in-place visited (replace cell w/ 0), can use 2D boolean array

const getMaximumGold = function (grid) {
  let max = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > 0) {
        // find max gold from cell
        const temp = recurse(grid, i, j, grid[i][j], true);
        if (temp > max) {
          max = temp;
        }
      }
    }
  }

  return max;
};

const recurse = function (grid, i, j, val, first) {
  // base case: can't visit another cell b/c already visited, or 0, or edge
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === 0
  ) {
    return val;
  }

  // recurse: get max of all potential directions
  const temp = grid[i][j];
  grid[i][j] = 0;

  // if first recurse, set don't add current cell again
  let newVal = val + temp;
  if (first) {
    newVal = val;
  }

  const max = Math.max(
    recurse(grid, i + 1, j, newVal, false),
    recurse(grid, i - 1, j, newVal, false),
    recurse(grid, i, j + 1, newVal, false),
    recurse(grid, i, j - 1, newVal, false)
  );

  grid[i][j] = temp;

  return max;
};

const mine = [
  [0, 2, 0],
  [8, 6, 3],
  [0, 9, 0],
];
// console.log(getMaximumGold(mine));

const mine2 = [
  [1, 0, 7, 0, 0, 0],
  [2, 0, 6, 0, 1, 0],
  [3, 5, 6, 7, 4, 2],
  [4, 0, 0, 0, 0, 0],
  [3, 0, 0, 20, 20, 20],
];
console.log(getMaximumGold(mine2)); // 60
