// slow solution? (leetcode thinks not)
const nextGreaterElement1 = (nums1, nums2) => {
  let nextGreaters = [];
  let ptr = 0;

  for (let i = 0; i < nums1.length; i++) {
    let newVal = -1;

    for (let j = nums2.indexOf(nums1[i]); j < nums2.length; j++) {
      if (j === -1) {
        break;
      }
      if (nums2[j] === nums1[i]) {
        continue;
      }
      if (nums2[j] > nums1[i]) {
        newVal = nums2[j];
        break;
      }
    }

    nextGreaters[ptr] = newVal;
    ptr++;
  }

  return nextGreaters;
};

// stack + hash map
const nextGreaterElement = (nums1, nums2) => {
  const map = new Map();
  const stack = [];

  // build map
  for (let num of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }

    stack.push(num);
  }

  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      nums1[i] = map.get(nums1[i]);
    } else {
      nums1[i] = -1;
    }
  }

  return nums1;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1]
