function fourNumberSum(array, targetSum) {
  array = array.sort((a, b) => a - b)
  let quadruplets = []
  let left = 0
  let right = array.length - 1

  while(left < right) {
    console.log(array[left], array[right]);
    let innerLeft = left + 1
    let innerRight = right - 1
    let currentQuadruplet = array[left] + array[right] + array[innerLeft] + array[innerRight]

    while(innerLeft < innerRight) {

      if (currentQuadruplet === targetSum) {
        quadruplets.push([array[right], array[innerRight], array[innerLeft], array[left]])
        innerLeft++
        innerRight--

      } else if (currentQuadruplet < targetSum) {
        innerLeft++

      } else {
        innerRight--
      }
    }

    if(currentQuadruplet <= targetSum){
      left++

    } else {
      right--

    }
  }

  return quadruplets
}

let array = [7, 6, 4, -1, 1, 2]
let targetSum = 16
let result = [
  [7, 6, 4, -1],
  [7, 6, 1, 2]
]

console.log(fourNumberSum(array, targetSum));