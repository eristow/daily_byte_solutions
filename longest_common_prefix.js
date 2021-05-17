const longestCommonPrefixMine = (words) => {
  if (words.length === 0) {
    return '';
  }
  if (words.length === 1) {
    return words[0];
  }

  // check for empty strings
  for (let word of words) {
    if (word === '') {
      return '';
    }
  }

  // iterate through words, checking for prefix, if no prefix, break and return
  let prefix = '';
  let i = 0;
  let hasPrefix = true;
  let prevChar = '';

  while (hasPrefix) {
    prevChar = words[0][i];
    for (let j = 1; j < words.length; j++) {
      // if word has char at index i, check if can extend prefix length
      const currentChar = words[j][i];
      if (currentChar !== '') {
        if (prevChar !== '') {
          if (currentChar !== prevChar) {
            hasPrefix = false;
            break;
          }
        }
      }
    }

    if (hasPrefix) {
      prefix += prevChar;
    }

    i++;
  }

  return prefix;
};

const longestCommonPrefix = (words) => {
  if (words.length === 0) {
    return '';
  }

  let prefix = words[0];

  for (let i = 1; i < words.length; i++) {
    while (words[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(['colorado', 'color', 'cold']));
console.log(longestCommonPrefix(['a', 'b', 'c']));
console.log(longestCommonPrefix(['spot', 'spotty', 'spotted']));
console.log(longestCommonPrefix(['']));
console.log(longestCommonPrefix(['a']));
console.log(longestCommonPrefix(['', '']));
