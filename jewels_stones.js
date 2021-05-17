// brute force: check each jewel against each stone (O(n*m))
// hash map: insert jewels into hash map, loop over stones while checking map to find matches, return num matches (O(n+m))
const jewelsAndStones = (jewels, stones) => {
  const map = new Map();
  let numMatches = 0;

  // populate map with jewels
  for (let i = 0; i < jewels.length; i++) {
    map.set(jewels[i], i);
  }

  // find num matches b/t jewels and stones
  for (let i = 0; i < stones.length; i++) {
    if (map.has(stones[i])) {
      numMatches++;
    }
  }

  return numMatches;
};

console.log(jewelsAndStones('abc', 'ac')); // 2
console.log(jewelsAndStones('Af', 'AaaddfFf')); // 3
console.log(jewelsAndStones('AYOPD', 'ayopd')); // 0
