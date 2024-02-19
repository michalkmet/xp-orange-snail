function snail(arrWithNumbers) {
  let result = [];
  let howManyArrs = arrWithNumbers.length;
  console.log('arrWithNumbers: ', arrWithNumbers);

  if (checkEmptyOr1Element(arrWithNumbers)) {
    return arrWithNumbers[0];
  }

  // 1. first row
  console.log('1. process first row');
  result = arrWithNumbers[0];
  const modifiedArr = arrWithNumbers.slice(1);
  console.log('modifiedArr after 1 step:', modifiedArr);

  if (howManyArrs === 2) {
    result.push(...arrWithNumbers[howManyArrs - 1].reverse());
  } else {
    // 2. process right vertical line
    console.log('2. right vertical line');
    for (let i = 0; i < modifiedArr.length - 1; i++) {
      let innerArr = modifiedArr[i];
      console.log('Arr for right vertical: ', innerArr);
      result.push(innerArr[innerArr.length - 1]);
      innerArr.pop();
    }

    howManyArrs = modifiedArr.length;

    // 3. reverse row
    console.log('3. process last row, do reverse');
    result.push(...modifiedArr[howManyArrs - 1].reverse());
    console.log('modifiedArr before splice: ', modifiedArr);
    let modifiedArrWithoutLastRow = modifiedArr.slice(0, modifiedArr.length - 1);

    console.log('modifiedArrWithoutLastRow:', modifiedArrWithoutLastRow);
    console.log('modifiedArrWithoutLastRow.length - 1:', modifiedArrWithoutLastRow.length - 1);

    // 4. process left vertical line
    console.log('4. process left vertical line');
    for (let j = modifiedArrWithoutLastRow.length - 1; j > -1; j--) {
      let innerArr = modifiedArrWithoutLastRow[j];
      console.log('innerArr step 4: ', innerArr);
      result.push(innerArr[0]);
      innerArr.shift();
      console.log('innerArr after shift: ', innerArr);
    }
    console.log('modifiedArrWithoutLastRow after 4: ', modifiedArrWithoutLastRow);
  }

  // Do the same process for 2 arrays

  console.log('result: ', result);
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
