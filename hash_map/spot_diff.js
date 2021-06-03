const findTheDifference = (str1, str2) => {
  const map = new Map();

  // populate map with str1 chars
  for (let char of str1) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  // iterate through str2, if str2[i] not in map, return str2[i]
  for (let char of str2) {
    if ((map.has(char) && map.get(char) === 0) || !map.has(char)) {
      return char;
    }

    map.set(char, map.get(char) - 1);
  }

  return '';
};

console.log(findTheDifference('foobar', 'barfoot')); // 't'
console.log(findTheDifference('ide', 'idea')); // 'a'
console.log(findTheDifference('coding', 'ingcod')); // ''
console.log(findTheDifference('', 'y')); // 'y'
console.log(findTheDifference('a', 'aa')); // 'a'
