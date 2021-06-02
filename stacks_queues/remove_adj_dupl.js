// not single pass
const removeDuplicatesLong = (str) => {
  let newStr = str;
  let prev = '';

  for (let i = 0; i < newStr.length; i++) {
    console.log(`${newStr[prev]} | ${newStr[i]}`);
    prev = i - 1;
    if (newStr[prev] === newStr[i]) {
      console.log(`hit if; ${newStr[prev]} | ${newStr[i]}`);
      newStr = newStr.slice(0, prev) + newStr.slice(i + 1);
      // TODO: figure out a way to not need to restart the entire search
      p = 0;
      i = 0;
    }
  }

  return newStr;
};

const removeDuplicates = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  // create string from stack
  let newStr = '';
  while (stack.length > 0) {
    newStr += stack.pop();
  }

  // reverse string
  return newStr.split('').reverse().join('');
};

console.log(removeDuplicates('abccba')); // ''
console.log(removeDuplicates('foobar')); // 'fbar'
console.log(removeDuplicates('abccbefggfe')); // 'a'
console.log(removeDuplicates('azxxzy')); // 'ay'
