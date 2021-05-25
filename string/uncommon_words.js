const addToMap = (map, key) => {
  if (map.has(key)) {
    map.set(key, map.get(key) + 1);
  } else {
    map.set(key, 1);
  }
};

const uncommonFromSentences = (s1, s2) => {
  const map = new Map();
  const uncommon = [];

  // add s1 and s2 words to map
  for (let word of s1.split(' ')) {
    addToMap(map, word);
  }

  for (let word of s2.split(' ')) {
    addToMap(map, word);
  }

  // find words with count of 1 in map, add to uncommon, and return
  for (let [key, value] of map) {
    if (value === 1) {
      uncommon.push(key);
    }
  }

  return uncommon;
};

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour')); // ['sweet', 'sour']
console.log(uncommonFromSentences('apple apple', 'banana')); // ['banana']
console.log(uncommonFromSentences('the quick', 'brown fox')); // ['the', 'quick', 'brown', 'fox']
console.log(
  uncommonFromSentences(
    'the tortoise beat the haire',
    'the tortoise lost to the haire'
  )
); // ['beat', 'to', 'lost']
console.log(uncommonFromSentences('copper coffee pot', 'hot coffee pot')); // ['copper', 'hot']
