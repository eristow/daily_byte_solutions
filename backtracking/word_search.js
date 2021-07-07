// mine (cursed by edge cases)
const recurse = function (word, board, i, j, current, ptr) {
  console.log(`${i} | ${j} | ${current} | ${ptr}`);

  // TODO: figure out how to avoid out of bounds for dirs and newIJ
  // either new val, or null
  const m = board.length;
  const n = board[0].length;

  const maxI = i + 1 < m ? i + 1 : null;
  const minI = i - 1 >= 0 ? i - 1 : null;
  const maxJ = j + 1 < n ? j + 1 : null;
  const minJ = j - 1 >= 0 ? j - 1 : null;

  const newIJ = [
    [maxI, j],
    [minI, j],
    [i, maxJ],
    [i, minJ],
  ];

  const charD = maxI !== null ? board[maxI][j] : null;
  const charU = minI !== null ? board[minI][j] : null;
  const charR = maxJ !== null ? board[i][maxJ] : null;
  const charL = minJ !== null ? board[i][minJ] : null;

  const dirs = [charD, charU, charR, charL];

  for (let k in dirs) {
    const char = dirs[k];
    if (char && current + char === word.substring(0, ptr + 1)) {
      if (word === current) {
        return true;
      } else {
        recurse(word, board, newIJ[k][0], newIJ[k][1], current + char, ptr + 1);
      }
    }
  }

  return false;
};

const exist = function (board, word) {
  let ptr = 0;

  // go through board to find match for first char
  for (let i in board) {
    for (let j in board[i]) {
      if (word[ptr] === board[i][j]) {
        return recurse(word, board, i, j, board[i][j], ptr + 1);
      }
    }
  }

  return false;
};

// kevin (dfs recursive)
const exist = function (board, word) {
  for (let i in board) {
    for (let j in board[i]) {
      if (
        board[i][j] === word[0] &&
        dfs(board, Number(i), Number(j), 0, word)
      ) {
        return true;
      }
    }
  }

  return false;
};

const dfs = function (board, i, j, count, word) {
  if (count === word.length) {
    return true;
  }

  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[i].length ||
    board[i][j] !== word[count]
  ) {
    return false;
  }

  const temp = board[i][j];
  board[i][j] = ' ';
  const found =
    dfs(board, i + 1, j, count + 1, word) ||
    dfs(board, i - 1, j, count + 1, word) ||
    dfs(board, i, j + 1, count + 1, word) ||
    dfs(board, i, j - 1, count + 1, word);

  board[i][j] = temp;
  return found;
};
