// O(n) time | O(1) space - where n is the length of the array
function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i += 1) {
    const curr = Math.abs(array[i]) - 1;

    if (array[curr] < 0) {
      return curr + 1;
    }
    array[curr] *= -1;
  }
  return -1;
}
