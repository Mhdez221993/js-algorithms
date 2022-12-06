function quick_sort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let right = [];
  let left = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quick_sort(left), pivot, ...quick_sort(right)];
}
// Worst case O(n^2)
// Average case O(nlogn)

let arr = [-6, 20, 8, -2, 4];
console.log(quick_sort(arr));
