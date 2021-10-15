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

let array = [5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12]
let toMove = 5
console.log(moveElementToEnd(array, toMove));
module.exports = moveElementToEnd;

