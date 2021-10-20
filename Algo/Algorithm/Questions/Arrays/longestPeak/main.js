function longestPeak(array) {
  let currentPeak = 0
  let previosPeak = 0
  let peak = false

  for(let i = 1; i < array.length; i++) {
    let curr = array[i]
    let prev = array[i - 1]

    if (curr > prev && currentPeak === 0) {

      currentPeak++

    } else if(curr > prev) {
      currentPeak = 2
    } else {
      currentPeak = 0
    }
  };

  return currentPeak
}
let array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
console.log(longestPeak(array));
// module.exports = spiralTraverse;
