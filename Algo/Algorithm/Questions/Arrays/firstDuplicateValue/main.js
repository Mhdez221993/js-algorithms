function firstDuplicateValue(array) {
  let duplicates = {}
  for (let i = 0 ; i < array.length; i++) {
    let element = array[i]

    if (duplicates[element]){
      return element

    } else {
      duplicates[element] = true
    }
  }
  return -1
}

let array = [2, 1, 5, 2, 3, 3, 4]
console.log(firstDuplicateValue(array));

// module.exports = firstDuplicateValue;
