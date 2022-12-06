function insertion_sort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let value_to_insert = array[i];

    while (j >= 0 && arr[j] > value_to_insert) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = value_to_insert;
  }

  return array;
}
// Big O(n^2)

let arr = [8, 20, -2, 4, -6];
console.log(insertion_sort(arr));
