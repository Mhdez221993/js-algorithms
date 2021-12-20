// O(n) time | O(1) space - where n is the length of the array
function longestPeak(array) {
  let longestPeak = 0;
  let i = 1;

  while (i < array.length - 1) {
    const peak = array[i] > array[i - 1] && array[i] > array[i + 1];

    if (!peak) {
      i += 1;
      // eslint-disable-next-line no-continue
      continue;
    }

    let leftIndx = i - 2;
    while (leftIndx >= 0 && array[leftIndx] < array[leftIndx + 1]) {
      leftIndx -= 1;
    }

    let rightIndx = i + 2;
    while (rightIndx < array.length && array[rightIndx] < array[rightIndx - 1]) {
      rightIndx += 1;
    }

    const currentPeak = rightIndx - leftIndx - 1;
    longestPeak = Math.max(currentPeak, longestPeak);
    i = rightIndx;
  }

  return longestPeak;
}
