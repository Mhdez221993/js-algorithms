function longestPeak(array) {
  let longestPeak = 0;
  let i = 1;

  while (i < array.length - 1) {
    const peak = array[i] > array[i - 1] && array[i] > array[i + 1];

    if (!peak) {
      i++;
      continue;
    }

    let leftIndx = i - 2;
    while (leftIndx >= 0 && array[leftIndx] < array[leftIndx + 1]) {
      leftIndx -= 1;
    }

    let rightIndx = i + 2;
    while (rightIndx < array.length && array[rightIndx] < array[rightIndx - 1]) {
      rightIndx++;
    }

    const currentPeak = rightIndx - leftIndx - 1;
    longestPeak = Math.max(currentPeak, longestPeak);
    i = rightIndx;
  }

  return longestPeak;
}

module.exports = longestPeak;
