function isMonotonic(array) {

  if (!array.length || array.length === 1) {
    return true
  }

  let i = 0
  let index = 1
  while(array[i] === array[i+1]) {
    index++
    i++
  }

  const direction = array[index] > array[index-1] ? 'Increase' : 'Decrease'
  for(let i = index; i < array.length; i++){
    let currentValue = array[i]
    let previosValue = array[i-1]

    if (direction === 'Increase' && currentValue < previosValue) {
      return false

    } else if (direction === 'Decrease' && currentValue > previosValue) {
      return false
    }
  }

  return true
}

// let array = [-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11]
// console.log(isMonotonic(array));

module.exports = isMonotonic;

