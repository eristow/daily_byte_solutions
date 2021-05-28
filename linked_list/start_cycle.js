const detectCycleMap = (head) => {
  if (head === null || head.next === null) {
    return null;
  }

  const map = new Map();
  let pos = head;

  while (pos !== null) {
    if (map.has(pos)) {
      return pos;
    }

    map.set(pos, 1);
    pos = pos.next;
  }

  return null;
};

// Floyd cycle detection alg
const intersection = (head) => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return slow;
    }
  }

  return null;
};

const detectCycle = (head) => {
  if (head === null || head.next === null) {
    return null;
  }

  // Find intersection
  let intersect = intersection(head);
  if (intersect === null) {
    return null;
  }

  // Intersect is in loop, start is head.
  // If both moving by 1, they will meet at start of loop
  let start = head;
  while (intersect !== start) {
    start = start.next;
    intersect = intersect.next;
  }

  return start;
};
