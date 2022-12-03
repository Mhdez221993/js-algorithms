function bubble_sort(arr) {
  let hasSwapped = true;

  while (hasSwapped) {
    hasSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        arr = swap(arr, i, i + 1);
        hasSwapped = true;
      }
    }
  }

  return arr;
}

function swap(arr, i, j) {
  let curr = arr[i];
  arr[i] = arr[j];
  arr[j] = curr;

  return arr;
}

// Big O(n^2)
console.log(bubble_sort([-6, 20, 8, -2, 4]));
