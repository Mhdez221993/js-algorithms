function twoNumberSum(array, targetSum) {
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

module.exports = twoNumberSum;
