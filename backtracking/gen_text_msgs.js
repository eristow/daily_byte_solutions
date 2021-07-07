// kevin (recursive)
const recurse = function (result, digits, current, index, mapping) {
  if (index == digits.length) {
    result.add(current);
    return;
  }

  const letters = mapping[digits[index] - '0'];
  console.log(letters);

  for (let i = 0; i < letters.length; i++) {
    recurse(result, digits, current + letters[i], index + 1, mapping);
  }
};

const letterCombinationsKevin = function (digits) {
  const result = [];

  if (digits === null || digits.length == 0) {
    return result;
  }

  const mapping = {
    0: null,
    1: null,
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  recurse(result, digits, '', 0, mapping);

  return result;
};

// mine (iterative with queue)
const mapDigitToLetters = function (digit) {
  const mapping = {
    0: null,
    1: null,
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  return mapping[digit];
};

const letterCombinations = function (digits) {
  const letters = [];

  if (digits.length == 0) {
    return letters;
  }

  // create arr of arrs of all letters
  for (let digit of digits) {
    letters.push(mapDigitToLetters(digit));
  }

  if (digits.length == 1) {
    return letters[0];
  }

  // form answer strings from letters arr of arrs
  const queue = [...letters[0]];
  console.log(queue);

  console.log(letters);

  for (let i = 1; i < letters.length; i++) {
    let size = queue.length;
    console.log(letters[i]);

    while (size-- > 0) {
      let newString = queue.shift();

      for (let letter of letters[i]) {
        queue.push(newString + letter);
      }
    }
  }

  return queue;
};

const s3 = '';
// console.log(letterCombinations(s3));

const s2 = '2';
// console.log(letterCombinations(s2));

const s = '23';
// console.log(letterCombinations(s));

const s1 = '234';
// console.log(letterCombinations(s1));
