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
