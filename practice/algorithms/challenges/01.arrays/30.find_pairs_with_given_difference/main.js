// Time: Worst O(n.log(n)) || Average O(n)
// Space: O(n)

function findPairsWithGivenDifference(arr, k) {

  if (k === 0) return []

  let map = {}
  let answer = []

  // x - y = k
  // x - k = y
  // traverse the array and map it
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i]
    // map[x - k] = y
    map[x - k] = x
  }

  for (let i = 0; i < arr.length; i++) {
    let y = arr[i]
    if (map[y]) {
      answer.push([map[y], y])
    }
  }

  return answer
}

let arr = [0, -1, -2, 2, 1]
let k = 1

console.log(findPairsWithGivenDifference(arr, k));

// outpt: [[1, 0], [0, -1], [-1, -2], [2, 1]]
