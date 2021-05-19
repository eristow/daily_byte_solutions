const isAnagramDoublePass = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const map = new Map();

  // Fill map with str1 chars
  for (let char of str1) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      const val = map.get(char);
      map.set(char, val + 1);
    }
  }

  // Iterate through str2 chars. If one not in map, return false.
  for (let char of str2) {
    if (!map.has(char)) {
      return false;
    }
    const val = map.get(char);
    map.set(char, val - 1);
  }

  return true;
};

// console.log(isAnagramDoublePass('cat', 'tac')); // true
// console.log(isAnagramDoublePass('listen', 'silent')); // true
// console.log(isAnagramDoublePass('program', 'function')); // false
// console.log(isAnagramDoublePass('ab', 'a')); // false

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const map = new Map();

  // Fill map with str1 chars
  for (let char of str1) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  // Iterate through str2 chars. If one not in map, return false.
  for (let char of str2) {
    map.has(char) ? map.set(char, map.get(char) - 1) : map.set(char, -1);
    if (map.get(char) < 0) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram('cat', 'tac')); // true
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('program', 'function')); // false
console.log(isAnagram('ab', 'a')); // false
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('aacc', 'ccac')); // false
