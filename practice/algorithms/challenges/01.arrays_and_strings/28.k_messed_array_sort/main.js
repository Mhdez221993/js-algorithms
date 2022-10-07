function sortKMessedArray(arr, k) {
  const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  for (let i = 0; i < arr.length; i++) {
    let smallesValue = Infinity;
    let indx = i + 1;
    for (let j = i + 1; j <= (k + i); j++) {
      if (arr[j] < smallesValue) {
        smallesValue = arr[j]
        indx = j
      }
    }

    if (smallesValue < arr[i]) {
      swap(arr, i, indx)
    }
  }

  return arr
}

let arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
let k = 2
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(sortKMessedArray(arr, k));
