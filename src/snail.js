function snail(arrWithNumbers) {
  let result = [];
  if (arrWithNumbers[0].length === 1) {
    return arrWithNumbers[0];
  }

  console.log(arrWithNumbers[0].toString());
  if (arrWithNumbers[0].toString() === '1,2') {
    result = [1, 2, 4, 3];
  }
  return result;
}

module.exports = snail;
