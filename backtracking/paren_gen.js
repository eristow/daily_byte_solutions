// Nick White
const generateParenthesis = function (n) {
  const answers = [];

  backtrack(answers, '', 0, 0, n);

  return answers;
};

const backtrack = function (
  answers,
  currentString,
  numOpen,
  numClose,
  maxPairs
) {
  console.log(`${currentString.length} | ${maxPairs * 2} | ${currentString}`);
  // base case
  if (currentString.length == maxPairs * 2) {
    answers.push(currentString);
    return;
  }

  if (numOpen < maxPairs) {
    backtrack(answers, currentString + '(', numOpen + 1, numClose, maxPairs);
  }

  if (numClose < numOpen) {
    backtrack(answers, currentString + ')', numOpen, numClose + 1, maxPairs);
  }
};

// mine (half done...)
const generateParenthesisMine = function (n) {
  const answers = [];

  recurse(n, n, n, 0, 0, answers);

  return answers;
};

const recurse = function (n, open, close, altOpen, altClose, answers) {
  if (open <= 0 || close <= 0) {
    return answers;
  }

  let parenString = '';

  let tempOpen = open;
  let tempClose = close;
  let tempAltOpen = altOpen;
  let tempAltClose = altClose;

  for (let i = 0; i < n * 2; i++) {
    if (tempOpen > 0) {
      parenString += '(';
      tempOpen--;
    } else if (tempClose > 0) {
      parenString += ')';
      tempClose--;
    } else if (tempAltOpen > 0 || tempAltClose > 0) {
      parenString += '()';
      tempAltOpen--;
      tempAltClose--;
    }
    // } else if (tempAltClose > 0) {
    //   parenString += ')';
    //   tempAltClose--;
    // }
  }

  answers.push(parenString);

  return recurse(n, open - 1, close - 1, altOpen + 1, altClose + 1, answers);
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
