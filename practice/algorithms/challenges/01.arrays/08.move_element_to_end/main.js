// O(n) time | O(1) space - where n is the length of the array
function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    while (left < right && array[right] === toMove) {
      right -= 1;
    }

    if (array[left] === toMove) {
      [array[left], array[right]] = [array[right], array[left]];
    }

    left += 1;
  }

  return array;
}
