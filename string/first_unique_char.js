const firstUniqueMine = (str) => {
  const defaultUniqueObj = { count: 0, index: -1 };
  const uniqueArr = Array(26)
    .fill()
    .map((_) => ({ ...defaultUniqueObj }));

  // Populate uniqueArr with counts/indexes from str
  for (let i = 0; i < str.length; i++) {
    const charNum = str[i].charCodeAt(0) - 'a'.charCodeAt(0);

    uniqueArr[charNum].count += 1;
    uniqueArr[charNum].index = i;
  }

  // Find count === 1 with smallest index in uniqueArr
  let unique = { count: 0, index: str.length + 1 };
  for (let char of uniqueArr) {
    if (char.count === 1 && char.index < unique.index) {
      unique = { ...char };
    }
  }

  return unique.index === str.length + 1 ? -1 : unique.index;
};

const firstUnique = (str) => {
  const map = new Map();

  // Populate map with char and frequency
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      const val = map.get(str[i]);
      map.set(str[i], val + 1);
    } else {
      map.set(str[i], 1);
    }
  }

  // find index of first count of 1
  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) {
      return i;
    }
  }

  return -1;
};

console.log(firstUnique('abcabd')); // 2
console.log(firstUnique('thedailybyte')); // 1
console.log(firstUnique('developer')); // 0
console.log(firstUnique('leetcode')); // 0
console.log(firstUnique('loveleetcode')); // 2
console.log(firstUnique('aabb')); // -1
