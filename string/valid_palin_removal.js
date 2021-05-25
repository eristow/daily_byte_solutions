const isPalindrome = (str, i, j) => {
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

const palindromeCheck = (str) => {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    // If mismatch found, figure out if can remove one
    if (str[i] !== str[j]) {
      return isPalindrome(str, i + 1, j) || isPalindrome(str, i, j - 1);
    }

    i++;
    j--;
  }

  return true;
};

// console.log(palindromeCheck('abcba')); // true
// console.log(palindromeCheck('foobof')); // true (remove first 'o', second 'o', of 'b')
// console.log(palindromeCheck('abccab')); // false
console.log(palindromeCheck('cbbcc')); // true
