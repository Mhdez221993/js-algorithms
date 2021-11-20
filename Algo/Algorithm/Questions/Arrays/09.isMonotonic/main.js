// O(n) Time | O(1) Space
function isMonotonic(array) {
  let isNonIncreaseaing = true;
  let isNonDecreaseaing = true;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > array[i - 1]) {
      isNonDecreaseaing = false;
    }

    if (array[i] < array[i - 1]) {
      isNonIncreaseaing = false;
    }
  }

  return isNonDecreaseaing || isNonIncreaseaing;
}

module.exports = isMonotonic;
