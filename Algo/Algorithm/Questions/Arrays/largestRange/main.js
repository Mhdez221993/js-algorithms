function largestRange(array) {
  let first = 0
  let second = 0
  let hash = {}
  array.forEach(element => {
    hash[element] = true
  });

  for (let i = 0; i < array.length; i++) {
    let j = array[i] - 1
    while(hash[j]){
      j--
    }

    let k = array[i] + 1
    while (hash[k]) {
      k++
    }

    if (k - j > second - first) {
      first = j + 1
      second = k - 1
    }
  }
  return [first, second]
}

let array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
console.log(largestRange(array));