// O(n) Time | O(1) Space
function breakDirection(direction, prev, curr){
  let diff = curr - prev

  if (direction > 0) {
    return diff < 0
  }

  return diff > 0
}

function isMonotonic(array) {

  if (array.length <= 2) {
    return true
  }

  let direction = array[1] - array[0]
  for(let i = 2; i < array.length; i++){

    if(direction === 0) {
      direction === array[i] - array[i-1]
      continue
    }

    if(breakDirection(direction, array[i -1], array[i])) {
      return false
    }
  }

  return true
}

let array = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11]
console.log(isMonotonic(array));

module.exports = isMonotonic;

