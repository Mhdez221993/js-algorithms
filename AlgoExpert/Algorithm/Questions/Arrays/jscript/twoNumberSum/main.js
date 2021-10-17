// array =  [4, 6, 1]
// targetSum = 5
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

function twoNumberSum(array, targetSum) {
  array = array.sort((a, b) => a - b);

  let left = 0;
  let righ = array.length - 1;

  while (left < righ) {
    const currSum = array[left] + array[righ];

    if (currSum === targetSum) {
      return [array[left], array[righ]];
    } if (currSum > targetSum) {
      righ -= 1;
    } else {
      left += 1;
    }
  }

  return [];
}

// twoNumberSum2 is O(nLog(n)) T | O(1) S

module.exports = twoNumberSum;
