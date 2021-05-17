const reverseString = (str) => {
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
};

const str1 = 'Cat';
const str2 = 'The Daily Byte';
const str3 = 'civic';
const str4 = '';
console.log(reverseString(str1));
console.log(reverseString(str2));
console.log(reverseString(str3));
console.log(reverseString(str4));
