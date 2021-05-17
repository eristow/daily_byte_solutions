const palindromeCheck = (str) => {
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

console.log(palindromeCheck('abcba')); // true
console.log(palindromeCheck('foobof')); // true (remove first 'o', second 'o', of 'b')
console.log(palindromeCheck('abccab')); // false
