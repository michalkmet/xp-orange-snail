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
  result.push(...arrWithNumbers[1].reverse());
  console.log(result);
  return result;
}

module.exports = snail;
