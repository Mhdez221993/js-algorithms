function binary_search(array, element) {
  let start = 0;
  let end = array.length - 1;

  while (end >= start) {
    let midle = Math.floor((end + start) / 2);
    if (array[midle] === element) {
      return midle;
    } else if (array[midle] < element) {
      start = midle + 1;
    } else if (array[midle] > element) {
      end = midle - 1;
    }
  }
  return -1;
}
// Big O(logn)
console.log(binary_search([-5, 2, 4, 6, 10], 10));
