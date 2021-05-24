// time: O(n+m) ; space: O(n+m)
const intersection1 = (arr1, arr2) => {
  const intersections = [];
  const map = new Map();

  // Add arr1 and arr2 to map
  for (let num of arr1) {
    if (!map.has(num)) {
      map.set(num, 1);
    }
  }

  for (let num of arr2) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    }
  }

  // Go through map to find nums with count > 1
  for (let num of map) {
    if (num[1] > 1) {
      intersections.push(num[0]);
    }
  }

  return intersections;
};

// time: O(n) ; space: O(1)
// arrs are sorted
const intersection = (arr1, arr2) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  const intersections = [];
  let l = 0;
  let r = 0;

  while ((arr1[l] && arr2[r]) !== undefined) {
    const left = arr1[l];
    const right = arr2[r];

    if (left === right) {
      intersections.push(left);
      while (left === arr1[l]) {
        l++;
      }
      while (right === arr2[r]) {
        r++;
      }
    } else if (right > left) {
      while (left === arr1[l]) {
        l++;
      }
    } else {
      while (right === arr2[r]) {
        r++;
      }
    }
  }

  return intersections;
};

console.log(intersection([2, 4, 4, 2], [2, 4])); // [2,4]
console.log(intersection([1, 2, 3, 3], [3, 3])); // [3]
console.log(intersection([2, 4, 6, 8], [1, 3, 5, 7])); // []
console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9,4] or [4,9]
console.log(intersection([4, 7, 9, 7, 6, 7], [5, 0, 0, 6, 1, 6, 2, 2, 4])); // [4,6]
