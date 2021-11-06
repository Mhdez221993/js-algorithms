function largestRange(array) {
  let first = 0
  let second = 0
  let hash = {}
  array.forEach(element => {
    hash[element] = true
  });

  for (let i = 0; i < array.length; i++) {
    let j = array[i]
    while(hash[j - 1]){
      j--
    }

    let k = array[i]
    while (hash[k + 1]) {
      k++
    }

    if (k - j > second - first) {
      first = j
      second = k
    }
  }
  return [first, second]
}

let array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
console.log(largestRange(array));