// O(n) time | O(1) space - where n is the length of the input array
function subarraySort(array) {
  let minBreakingPoint = Infinity;
  let maxBreakingPoint = -Infinity;

  for (let i = 0; i < array.length; i += 1) {
    const breakingPoint = array[i] > array[i + 1];

    if (breakingPoint) {
      maxBreakingPoint = Math.max(maxBreakingPoint, array[i]);
      minBreakingPoint = Math.min(array[i + 1], minBreakingPoint);
    }
  }

  if (minBreakingPoint === Infinity) {
    return [-1, -1];
  }

  let leftIndex = 0;
  while (minBreakingPoint >= array[leftIndex]) {
    leftIndex += 1;
  }

  let rightIndex = array.length - 1;
  while (maxBreakingPoint < array[rightIndex]) {
    rightIndex -= 1;
  }
  return [leftIndex, rightIndex];
}
