function snail(arrWithNumbers) {
  let result = [];
  let howManyArrs = arrWithNumbers.length;
  console.log('arrWithNumbers: ', arrWithNumbers);

  if (checkEmptyOr1Element(arrWithNumbers)) {
    return arrWithNumbers[0];
  }

  // first row
  result = arrWithNumbers[0];
  const modifiedArr = arrWithNumbers.slice(1);
  console.log('modifiedArr:', modifiedArr);

  if (howManyArrs === 2) {
    result.push(...arrWithNumbers[howManyArrs - 1].reverse());
  } else {
    for (let i = 0; i < modifiedArr.length - 1; i++) {
      let innerArr = modifiedArr[i];
      console.log('innerArr: ', innerArr);
      result.push(innerArr[innerArr.length - 1]);
    }

    howManyArrs = modifiedArr.length;
    // reverse row
    result.push(...modifiedArr[howManyArrs - 1].reverse());
    console.log('modifiedArr before splice: ', modifiedArr);
    const modifiedArrWithoutLastRow = modifiedArr.slice(0, modifiedArr.length - 1);

    console.log('modifiedArrWithoutLastRow:', modifiedArrWithoutLastRow);
    console.log('modifiedArr:', modifiedArr);

    for (let j = 0; j < modifiedArr.length - 1; j++) {
      let innerArr = modifiedArr[j];
      console.log('innerArr2: ', innerArr);
      result.push(innerArr[0]);
      result.push(innerArr[1]);
    }
  }
  console.log(arrWithNumbers[0].toString());
  console.log(arrWithNumbers[howManyArrs - 1].toString());

  console.log('result: ', result);

  // if (arrWithNumbers.length == 2) {
  //   result.push(...arrWithNumbers[1].reverse());
  // } else {
  //   result.push(arrWithNumbers[1][2]);
  //   result.push(...arrWithNumbers[2].reverse());
  //   result.push(arrWithNumbers[1][0]);
  //   result.push(arrWithNumbers[1][1]);
  // }
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
