const isOpen = (char) => {
  return char === '(' || char === '{' || char === '[';
};

const isClose = (char) => {
  return char === ')' || char === '}' || char === ']';
};

const isValid = (s) => {
  const stack = [];

  // put chars on stack
  // if open, push onto stack
  // if close, pop off of stack and check if correct symbol
  for (let char of s) {
    // console.log(`char: ${char} ${isOpen(char)} ${isClose(char)}`);
    if (isOpen(char)) {
      stack.push(char);
    } else if (isClose(char)) {
      const test = stack.pop();
      // console.log(`test: ${test}`);

      switch (test) {
        case '(':
          if (char !== ')') {
            return false;
          }
          break;
        case '{':
          if (char !== '}') {
            return false;
          }
          break;
        case '[':
          if (char !== ']') {
            return false;
          }
          break;
        case undefined:
          return false;
      }
    }
  }

  // check if stacks.length !== 0
  if (stack.length !== 0) {
    return false;
  }

  return true;
};

console.log(isValid('(){}[]')); // true
console.log(isValid('(({[]}))')); // true
console.log(isValid('{(})')); // false
console.log(isValid('()')); // true
console.log(isValid('(]')); // false
console.log(isValid('{[]}')); // true
console.log(isValid(']')); // false
console.log(isValid(')(){}')); // false
