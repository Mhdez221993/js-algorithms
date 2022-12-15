function binary_search(array, element) {
  return search(array, element, (start = 0), (end = array.length - 1));
}

function search(array, element, start, end) {
  if (start > end) return -1;

  let midle = Math.floor((start + end) / 2);

  if (array[midle] === element) {
    return midle;
  }

  if (array[midle] < element) {
    return search(array, element, (start = midle + 1), end);
  } else if (array[midle] > element) {
    return binary_search(array, element, start, (end = midle - 1));
  }
}
// Big O(logn)
console.log(binary_search([-5, 2, 4, 6, 10], 10));
