const hasCycleMap = (head) => {
  if (head === null) {
    return false;
  }

  const map = new Map();
  let pos = head;

  // Iterate through linked list.
  // Check if current node in map
  // If yes, return true
  // If not, add to map and increment to next node
  // At end, return false

  while (pos !== null) {
    if (map.has(pos)) {
      return true;
    }

    map.set(pos, 1);
    pos = pos.next;
  }

  return false;
};

const hasCycle = (head) => {
  if (head === null) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};

const hasCycleSwappedLogic = (head) => {
  if (head === null) {
    return false;
  }
  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null && slow !== null) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};
