function snail(arrWithNumbers) {
  console.log('arrWithNumbers: ', arrWithNumbers);

  if (checkEmptyOr1Element(arrWithNumbers)) {
    return arrWithNumbers[0];
  }

  return mainSquareProcessing(arrWithNumbers);
}

function checkEmptyOr1Element(arrWithNumbers) {
  if (!arrWithNumbers[0].length) {
    return [];
  }

  if (arrWithNumbers[0].length === 1) {
    return arrWithNumbers[0];
  }
}

function mainSquareProcessing(arrWithNumbers) {
  let result = [];
  do {
    [arrWithNumbers, result] = processFirstRow(arrWithNumbers, result);
    if (arrWithNumbers.length > 1) {
      [arrWithNumbers, result] = processSquareOperations(arrWithNumbers, result);
    } else if (arrWithNumbers.length === 1) {
      [arrWithNumbers, result] = processLastStep(arrWithNumbers, result);
    }
  } while (arrWithNumbers.length != 0);
  return result;
}

function processFirstRow(arrWithNumbers, result) {
  result.push(...arrWithNumbers[0]);
  arrWithNumbers.splice(0, 1);
  return [arrWithNumbers, result];
}

function processVerticalRightColumn(arrWithNumbers, result) {
  for (let i = 0; i < arrWithNumbers.length - 1; i++) {
    let innerArr = arrWithNumbers[i];
    result.push(innerArr[innerArr.length - 1]);
    innerArr.pop();
  }
  return [arrWithNumbers, result];
}

function processLastReversedRow(arrWithNumbers, result) {
  let howManyArrsLeft = arrWithNumbers.length;
  result.push(...arrWithNumbers[howManyArrsLeft - 1].reverse());
  arrWithNumbers.splice(howManyArrsLeft - 1);
  return [arrWithNumbers, result];
}

function processLeftVerticalColumn(arrWithNumbers, result) {
  for (let j = arrWithNumbers.length - 1; j > -1; j--) {
    let innerArr = arrWithNumbers[j];
    result.push(innerArr[0]);
    innerArr.shift();
  }
  return [arrWithNumbers, result];
}

function processSquareOperations(arrWithNumbers, result) {
  [arrWithNumbers, result] = processVerticalRightColumn(arrWithNumbers, result);
  [arrWithNumbers, result] = processLastReversedRow(arrWithNumbers, result);
  [arrWithNumbers, result] = processLeftVerticalColumn(arrWithNumbers, result);
  return [arrWithNumbers, result];
}

function processLastStep(arrWithNumbers, result) {
  result.push(...arrWithNumbers[0].reverse());
  arrWithNumbers.splice(0);
  return [arrWithNumbers, result];
}

module.exports = snail;
