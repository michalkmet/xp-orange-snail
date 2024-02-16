function snail(arrWithNumbers) {
  let result = [];
  if (!arrWithNumbers[0].length) {
    return result;
  }

  if (arrWithNumbers[0].length === 1) {
    return arrWithNumbers[0];
  }

  console.log(arrWithNumbers[0].toString());

  result = arrWithNumbers[0];

  if (arrWithNumbers.length == 2) {
    result.push(...arrWithNumbers[1].reverse());
  } else {
    result.push(arrWithNumbers[1][2]);
    result.push(...arrWithNumbers[2].reverse());
    result.push(arrWithNumbers[1][0]);
    result.push(arrWithNumbers[1][1]);
  }
  console.log(result);
  return result;
}

module.exports = snail;
