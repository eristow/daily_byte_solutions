const vacuumReturnsToStart = (route) => {
  let xPos = 0;
  let yPos = 0;

  for (let move of route) {
    switch (move) {
      case 'L':
        xPos--;
        break;
      case 'R':
        xPos++;
        break;
      case 'U':
        yPos++;
        break;
      case 'D':
        yPos--;
        break;
    }
  }

  return xPos === 0 && yPos === 0;
};

const str1 = 'LR';
const str2 = 'URURD';
const str3 = 'RUULLDRD';

console.log(vacuumReturnsToStart(str1));
console.log(vacuumReturnsToStart(str2));
console.log(vacuumReturnsToStart(str3));
