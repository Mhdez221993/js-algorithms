function firstDuplicateValue(array) {
  for (let i =  0; i < array.length; i++) {
    let curr = Math.abs(array[i]) - 1

    if (array[curr] < 0) {
      return curr + 1

    } else {
      array[curr] *= -1
    }
  }
  return -1
}

module.exports = firstDuplicateValue;
