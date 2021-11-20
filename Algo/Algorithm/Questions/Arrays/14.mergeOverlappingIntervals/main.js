function mergeOverlappingIntervals(array) {
  array = array.sort(([a], [b]) => a - b);
  const merge = [];
  let currentInterval = array[0];
  merge.push(currentInterval);

  for (const nextInterval of array) {
    const [_, second] = currentInterval;
    const [firstNext, secondNext] = nextInterval;

    if (second >= firstNext) {
      currentInterval[1] = Math.max(second, secondNext);
    } else {
      currentInterval = nextInterval;
      merge.push(nextInterval);
    }
  }

  return merge;
}

module.exports = mergeOverlappingIntervals;
