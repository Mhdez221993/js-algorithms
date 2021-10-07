// array = [3, 5, -4, 8, 11, 1, -1, 6];
// targetSum = 10;
// currentNum = x
// x + y = 10
// y = 10 - x

function twoNumberSum1(array, targetSum) {
  for (let i = 0; i < array.length - 1; i += 1) {
    const firstNum = array[i];

    for (let j = i + 1; j < array.length; j += 1) {
      const secondNum = array[j];

      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }

  return [];
}

// twoNumberSum1 is O(n^2) T | O(1) S

function twoNumberSum2(array, targetSum) {
  const obj = {};

  for (let i = 0; i < array.length; i += 1) {
    const currentNum = array[i];
    const lookUpNum = targetSum - currentNum;

    if (obj[lookUpNum] && currentNum + lookUpNum === targetSum) {
      return [lookUpNum, currentNum];
    }

    obj[currentNum] = true;
  }

  return [];
}

// twoNumberSum2 is O(n) T | O(n) S

module.exports = twoNumberSum1;
module.exports = twoNumberSum2;
