const addBinary = (str1, str2) => {
  let carry = 0;
  let sum = '';
  let i = str1.length - 1;
  let j = str2.length - 1;

  while (i >= 0 || j >= 0) {
    let tempSum = carry;

    // i/j out of bounds check
    if (i >= 0) {
      tempSum += Number(str1[i]);
    }
    if (j >= 0) {
      tempSum += Number(str2[j]);
    }

    // add tempSum without carry to sum
    sum = String(tempSum % 2) + sum;

    // calculate new carry
    carry = Math.floor(tempSum / 2);

    i--;
    j--;
  }

  // additional carry digit check
  if (carry > 0) {
    sum = String(1) + sum;
  }

  return sum;
};

console.log(addBinary('100', '1'));
console.log(addBinary('11', '1'));
console.log(addBinary('1', '0'));
console.log(addBinary('1010', '1011'));
