function snail(arrWithNumbers) {
  let result = [];
  let howManyArrs = arrWithNumbers.length;
  console.log('arrWithNumbers: ', arrWithNumbers);

  if (checkEmptyOr1Element(arrWithNumbers)) {
    return arrWithNumbers[0];
  }

  do {
    // 1. first row
    console.log('1. process first row');
    console.log('arrWithNumbers start: ', arrWithNumbers);
    result.push(...arrWithNumbers[0]);
    arrWithNumbers.splice(0, 1);
    console.log('arrWithNumbers after splice: ', arrWithNumbers);
    console.log('arrWithNumbers.length: ', arrWithNumbers.length);
    if (arrWithNumbers.length > 1) {
      // more than 1 row
      // 2. do right vertical line
      console.log('2. right vertical line');
      for (let i = 0; i < arrWithNumbers.length - 1; i++) {
        let innerArr = arrWithNumbers[i];
        console.log('Arr for right vertical: ', innerArr);
        result.push(innerArr[innerArr.length - 1]);
        innerArr.pop();
      }

      // 3. reverse row
      howManyArrs = arrWithNumbers.length;
      console.log('3. process last row, do reverse');
      console.log('howManyArrs: ', howManyArrs);
      result.push(...arrWithNumbers[howManyArrs - 1].reverse());
      arrWithNumbers.splice(howManyArrs - 1);

      // 4. process left vertical line
      console.log('4. process left vertical line');
      for (let j = arrWithNumbers.length - 1; j > -1; j--) {
        let innerArr = arrWithNumbers[j];
        console.log('innerArr step 4: ', innerArr);
        result.push(innerArr[0]);
        innerArr.shift();
        console.log('innerArr after shift: ', innerArr);
      }
    } else if (arrWithNumbers.length === 1) {
      result.push(...arrWithNumbers[0].reverse());
      arrWithNumbers.splice(0);
    }
    console.log('arrWithNumbers end of loop: ', arrWithNumbers);
    console.log('result: ', result);
  } while (arrWithNumbers.length != 0);
  return result;
}

function checkEmptyOr1Element(arrWithNumbers) {
  if (!arrWithNumbers[0].length) {
    return [];
  }

  if (arrWithNumbers[0].length === 1) {
    return arrWithNumbers[0];
  }
}

module.exports = snail;
