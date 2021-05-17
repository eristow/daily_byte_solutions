const twoSum = (arr, k) => {
  const map = {};

  // create map (key = arr[i], val = k-arr[i])
  for (let num of arr) {
    map[num] = k - num;
  }

  // search through arr to find matching val for sum in map
  for (let num of arr) {
    if (map[k - num] !== undefined) {
      return true;
    }
  }

  return false;
};

// console.log(twoSum([1, 3, 8, 2], 10)); // true (8+2)
// console.log(twoSum([3, 9, 13, 7], 8)); // false
// console.log(twoSum([4, 2, 6, 5, 2], 4)); // true (2+2)

const twoSumLeet = (arr, k) => {
  const map = new Map();

  // create map (key = arr[i], val = k-arr[i])
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }

  // search through arr to find matching val for sum in map
  for (let i = 0; i < arr.length; i++) {
    const searchNum = k - arr[i];
    if (map.has(searchNum) && map.get(searchNum) !== i) {
      return [i, map.get(searchNum)];
    }
  }

  return [];
};

// console.log(twoSumLeet([2, 7, 11, 15], 9)); // [0,1]
// console.log(twoSumLeet([3, 2, 4], 6)); // [1,2]
// console.log[twoSumLeet([3, 3], 6)]; // [0, 1]

const twoSumLeetSingle = (arr, k) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const searchNum = k - arr[i];
    if (map.has(searchNum)) {
      return [i, map.get(searchNum)];
    }

    map.set(arr[i], i);
  }

  return [];
};

console.log(twoSumLeetSingle([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSumLeetSingle([3, 2, 4], 6)); // [1,2]
console.log[twoSumLeetSingle([3, 3], 6)]; // [0, 1]
