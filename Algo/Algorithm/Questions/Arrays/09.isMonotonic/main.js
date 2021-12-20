// O(n) time | O(1) space - where n is the length of the array
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
