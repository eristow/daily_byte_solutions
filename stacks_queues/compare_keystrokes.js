// space: O(s.len + t.len) solution
const backspaceCompareBuild = (s, t) => {
  return buildStr(s) === buildStr(t);
};

// helper for above
const buildStr = (str) => {
  let newStr = '';
  let i = 0;

  // add chars from string to newStr
  // pop 1 char when # is encountered
  while (i < str.length) {
    if (str[i] === '#') {
      newStr = newStr.slice(0, -1);
    } else {
      newStr += str[i];
    }

    i++;
  }

  return newStr;
};

// space: O(1) solution
const backspaceCompare = (s, t) => {
  let i = s.length - 1;
  let j = t.length - 1;

  while (i >= 0 && j >= 0) {
    i = getNextValidChar(s, i);
    j = getNextValidChar(t, j);

    // if either string is done, break
    if (i < 0 || j < 0) {
      break;
    }

    // compare chars
    if (s[i--] != t[j--]) {
      return false;
    }
  }

  // go through rest of remaining string
  if (i >= 0) {
    i = getNextValidChar(s, i);
  }
  if (j >= 0) {
    j = getNextValidChar(t, j);
  }

  return i < 0 && j < 0;
};

// helper func for above
const getNextValidChar = (str, i) => {
  let skip = 0;

  while (i >= 0) {
    // skip next char if current char is #
    if (str[i] === '#') {
      skip++;
      i--;
    }

    // if current char not # but we need to skip chars
    else if (skip > 0) {
      skip--;
      i--;
    }

    // if can't skip current char
    else {
      break;
    }
  }

  return i;
};

console.log(backspaceCompare('ABC#', 'CD##AB')); // true
console.log(backspaceCompare('como#pur#ter', 'computer')); // true
console.log(backspaceCompare('cof#dim#ng', 'code')); // false
console.log(backspaceCompare('a#c', 'b')); // false
