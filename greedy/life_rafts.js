// mine, not fully working
const numRescueBoats = function (people, limit) {
  let numBoats = 0;
  let stack = [];

  for (let weight of people) {
    // Add boat if current weight >= limit
    if (weight >= limit) {
      numBoats++;
    }
    // If weights in stack,
    else if (stack.length > 0) {
      const newStack = [];

      for (let i = 0; i < stack.length; i++) {
        let stackPeek = 0;
        stackPeek += stack[0];

        if (stackPeek + weight > limit) {
          numBoats++;
          stack.splice(0, i);
          newStack.push(weight);
          stackPeek = 0;
        } else if (stackPeek + weight == limit) {
          numBoats++;
          stack.splice(0, i);
          stackPeek = 0;
        }
      }

      stack = newStack;
    }
    // Else, add weight to stack
    else {
      stack.push(weight);
    }
  }

  // Check for remaining people
  if (stack.length > 0) {
    numBoats++;
  }

  if (numBoats == 0) {
    numBoats++;
  }

  return numBoats;
};

// kevin naughton's
const numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  console.log(people);

  let numBoats = 0;
  let i = 0;
  let j = people.length - 1;

  while (i <= j) {
    console.log(`NEW | ${people[i]} | ${people[j]} | ${numBoats}`);

    if (people[i] + people[j] <= limit) {
      i++;
      j--;
    } else {
      j--;
    }

    numBoats++;
  }

  return numBoats;
};
