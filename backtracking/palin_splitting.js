const partition = function (s) {
  const answers = [];

  decompose(s, 0, [], answers);

  return answers;
};

const decompose = function (s, ptr, tempAnswer, answers) {
  // base case
  if (ptr == s.length) {
    answers.push([...tempAnswer]);
    return;
  }

  for (let i = ptr; i < s.length; i++) {
    const subS = s.substring(ptr, i + 1);
    console.log(`test: ${subS}`);
    if (isPalindrome(subS)) {
      console.log(`IS PALIN: ${subS}`);
      tempAnswer.push(subS);
      decompose(s, i + 1, tempAnswer, answers);
      tempAnswer.pop();
    }
  }
};

const isPalindrome = function (s) {
  const regEx = /[\W_]/g;
  const lowRegStr = s.toLowerCase().replace(regEx, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  return lowRegStr === reverseStr;
};

console.log(partition('abcba'));
