// O(n) time | O(n) space - where n is the length of the input array
function sortedSquaredArray(array) {
  const newArr = new Array(array.length).fill(0);
  let startIdx = 0;
  let endIdx = array.length - 1;
  let curr = endIdx;

  if (array.length === 1) {
    return [Math.abs(array[0] * array[0])];
  }

  while (startIdx !== endIdx) {
    const startAbs = Math.abs(array[startIdx] * array[startIdx]);
    const endAbs = Math.abs(array[endIdx] * array[endIdx]);

    if (startIdx + 1 === endIdx && endAbs > startAbs) {
      newArr[curr] = endAbs;
      newArr[curr - 1] = startAbs;
    } else {
      newArr[curr] = startAbs;
      newArr[curr - 1] = endAbs;
    }

    if (endAbs > startAbs) {
      newArr[curr] = endAbs;
      endIdx -= 1;
    } else {
      newArr[curr] = startAbs;
      startIdx += 1;
    }

    curr -= 1;
  }

  return newArr;
}
