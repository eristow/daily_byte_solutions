const hasCorrectCapitalization = (str) => {
  let lowerCaseCount = 0;
  let upperCaseCount = 0;
  let firstUpperCaseFound = false;
  let indexOfFirstUpperCase = -1;

  // Count num of upper and lower case chars in str
  for (let i in str) {
    const char = str[i];
    if (char === char.toUpperCase()) {
      if (!firstUpperCaseFound) {
        indexOfFirstUpperCase = Number(i);
        firstUpperCaseFound = true;
      }
      upperCaseCount++;
    } else if (char === char.toLowerCase()) {
      lowerCaseCount++;
    }
  }

  // Determine which, if any, of the three cases are met
  if (upperCaseCount === str.length && lowerCaseCount === 0) {
    return true;
  } else if (lowerCaseCount === str.length && upperCaseCount === 0) {
    return true;
  } else if (
    upperCaseCount === 1 &&
    lowerCaseCount === str.length - 1 &&
    indexOfFirstUpperCase === 0
  ) {
    return true;
  }

  return false;
};

const str1 = 'USA';
const str2 = 'Calvin';
const str3 = 'compUter';
const str4 = 'coding';
const str5 = '';

console.log(
  hasCorrectCapitalization(str1),
  hasCorrectCapitalization(str2),
  hasCorrectCapitalization(str3),
  hasCorrectCapitalization(str4),
  hasCorrectCapitalization(str5)
);
