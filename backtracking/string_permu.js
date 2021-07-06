// iterative (cleaner, faster)
const letterCasePermutation = function (s) {
  const queue = [s];
  const len = s.length;

  for (let i = len - 1; i >= 0; i--) {
    const char = s[i];
    console.log(`${i} | ${char} | ${queue}`);

    if (char.match(/[a-z]/i)) {
      let size = queue.length;

      while (size-- > 0) {
        const temp = queue.shift();
        const left = temp.substring(0, i);
        const right = temp.substring(i + 1, len);

        queue.push(left + char.toLowerCase() + right);
        queue.push(left + char.toUpperCase() + right);
      }
    }
  }

  return queue;
};

// iterative (mine)
const getNewString = function (s, j) {
  return s
    .split('')
    .map((char, index) => {
      if (index === j) {
        if (char === char.toLowerCase()) {
          return char.toUpperCase();
        } else {
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    })
    .join('');
};

const letterCasePermutation = function (s) {
  let queue = [];

  for (let j = s.length - 1; j >= 0; j--) {
    console.log(`${j} | ${s[j]} | ${queue}`);

    if (s[j].match(/[a-z]/i)) {
      console.log('hit');
      const len = queue.length;
      const newQ = [];

      for (let k = 0; k < len; k++) {
        const temp = queue[k];
        const newS = getNewString(temp, j);

        console.log(`add to q: ${temp} | ${newS}`);
        newQ.push(temp);
        newQ.push(newS);
      }

      if (queue.length == 0) {
        const newS = getNewString(s, j);

        console.log(`first add to q: ${s} | ${newS}`);
        newQ.push(s);
        newQ.push(newS);
      }

      queue = [...newQ];
    }
  }

  return queue.length > 0 ? queue : [s];
};

// recursive (TLE)
const letterCasePermutation = function (s, i = 0, answers = []) {
  console.log(`${s} | ${i} | ${answers}`);

  for (let j = i; j < s.length; j++) {
    if (s[j].match(/[a-z]/i)) {
      const newS1 = s
        .split('')
        .map((char, index) => {
          if (index === j) {
            if (char === char.toLowerCase()) {
              return char.toUpperCase();
            } else {
              return char.toLowerCase();
            }
          } else {
            return char;
          }
        })
        .join('');
      console.log(`recurse ${s} ${newS1}`);
      letterCasePermutation(newS1, j + 1, answers);
      letterCasePermutation(s, j + 1, answers);
    }
  }

  if (!answers.includes(s)) {
    answers.push(s);
  }

  return answers;
};
