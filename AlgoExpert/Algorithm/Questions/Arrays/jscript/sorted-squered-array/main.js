function sortedSquaredArray(array) {

  let newArr = new Array(array.length).fill(0)
  let startIdx = 0
  let endIdx = array.length -1
  let curr = endIdx

  if (array.length === 1) {
    return [Math.abs(array[0] * array[0])]
  }

  while (startIdx !== endIdx) {
    let startAbs = Math.abs(array[startIdx] * array[startIdx])
    let endAbs = Math.abs(array[endIdx] * array[endIdx])

    if (startIdx+1 === endIdx && endAbs > startAbs) {
      newArr[curr] = endAbs
      newArr[curr-1] = startAbs
    } else {
      newArr[curr] = startAbs
      newArr[curr-1] = endAbs
    }

    if (endAbs > startAbs) {
      newArr[curr] = endAbs
      endIdx--

    } else {
      newArr[curr] = startAbs
      startIdx++
    }

    curr--
  }

  return newArr
}

// let array = [1, 2, 3, 5, 6, 8, 9]

// console.log(sortedSquaredArray(array));

module.exports = sortedSquaredArray;
