function sortedSquaredArray(array) {

  let newArr = array.map(v => v * v)
  let sortedArr = newArr.sort((a,b) => a-b)
  return sortedArr
}

module.exports = sortedSquaredArray;
