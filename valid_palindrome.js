const validPalindrome = (str) => {
  if (str.length === 0) {
    return true;
  }

  const testStr = str.toLowerCase().replace(/[^a-z\d]/g, '');
  console.log(`testStr: ${testStr}`);
  let i = 0;
  let j = testStr.length - 1;

  while (i <= j) {
    console.log(
      `i: ${i} | j: ${j} | testStr[i]: ${testStr[i]} | testStr[j]: ${testStr[j]}`
    );
    if (testStr[i] !== testStr[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

const str1 = 'level';
const str2 = 'algorithm';
const str3 = 'A man, a plan, a canal: Panama.';
const str4 = '';
console.log(validPalindrome(str1));
console.log(validPalindrome(str2));
console.log(validPalindrome(str3));
console.log(validPalindrome(str4));
