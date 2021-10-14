const diff = (a, b) => {
  return (a > b) ? (a - b) : (b - a);
}

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a,b) => a-b)
  arrayTwo.sort((a,b) => a-b)

  let one = 0
  let two = 0
  let smallestDiff = Infinity
  let result = []
  let len = (arrayOne.length -1) + (arrayTwo.length)

  for(let i = 0; i < len; i++){
    let currentDifference = diff(arrayOne[one], arrayTwo[two])

    if (currentDifference < smallestDiff) {
      smallestDiff = currentDifference
      result = [arrayOne[one], arrayTwo[two]]

    }

    if (arrayOne[one] < arrayTwo[two] && one < arrayOne.length-1) {
      one++

    } else if (arrayTwo[two] < arrayOne[one] && two < arrayTwo.length-1) {
      two++
    }
  }
  return result
}

let arrayOne = [-1, 5, 10, 20, 28, 3]
let arrayTwo = [26, 134, 135, 15, 17]

console.log(smallestDifference(arrayOne, arrayTwo));

module.exports = smallestDifference;
