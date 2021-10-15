function moveElementToEnd(array, toMove) {
  let left = 0
  let right = array.length -1

  while (left < right){

    if (array[left] === toMove && array[right] !== toMove) {
      array = swap(left, right, array)

    } else if (array[left] !== toMove) {
      left++

    } else if (array[right] === toMove) {
      right--
    }

  }

  return array
}

const swap = (left, right, array) => {
  let temp = array[left]
  array[left] = array[right]
  array[right] = temp
  return array
}

module.exports = moveElementToEnd;

