// Time O(n^2) | Space O(n)
function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a,b) => a-b)

  let triples = []

  for (let i = 0; i < array.length -1; i++) {
    let left = i+1
    let right = array.length-1

    while(right > left){
      let currSum = array[i] + array[left] + array[right]

      if (currSum === targetSum) {
        triples.push([array[i], array[left], array[right]])
        left++
        right--

      } else if (currSum < targetSum) {
        left++

      } else if (currSum > targetSum) {
        right--
      }
    }

  }

  return triples
}


module.exports = threeNumberSum;
