function linear_search(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }

  return -1;
}
// Big O(n)

console.log(linear_search([-5, 2, 10, 4, 6], 10));
