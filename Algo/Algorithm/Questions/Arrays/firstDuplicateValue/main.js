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

let array = [2, 1, 5, 2, 3, 3, 4]
console.log(firstDuplicateValue(array));

module.exports = firstDuplicateValue;
