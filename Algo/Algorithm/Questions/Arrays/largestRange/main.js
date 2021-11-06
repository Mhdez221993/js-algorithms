function largestRange(array) {
  let first = array[0]
  let second = array[0]
  let hash = {}
  array.forEach(element => {
    hash[element] = true
  });

  for (let i = 0; i < array.length; i++) {
    let j = array[i]
    if(!hash[j]) continue
    hash[j] = false
    while(hash[j - 1]){
      hash[j - 1] = false
      j--
    }

    let k = array[i]
    hash[k] = false
    while (hash[k + 1]) {
      hash[k + 1] = false
      k++
    }

    if (k - j > second - first) {
      first = j
      second = k

    }
  }
  return [first, second]
}

module.exports = largestRange;
