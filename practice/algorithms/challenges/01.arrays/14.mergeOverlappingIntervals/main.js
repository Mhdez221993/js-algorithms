function mergeOverlappingIntervals(array) {
  // O(nlog(n)) time | O(n) space - where n is the length of the input array
  array = array.sort(([a], [b]) => a - b);
  const merge = [];
  let currentInterval = array[0];
  merge.push(currentInterval);

  array.forEach(nextInterval => {
    const [, second] = currentInterval;
    const [firstNext, secondNext] = nextInterval;

    if (second >= firstNext) {
      currentInterval[1] = Math.max(second, secondNext);
    } else {
      currentInterval = nextInterval;
      merge.push(nextInterval);
    }
  });

  return merge;
}
