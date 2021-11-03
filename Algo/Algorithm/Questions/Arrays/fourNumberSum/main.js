// O(n^2) time and in the worst case O(n^3) time | O(n^2) space
function fourNumberSum(array, targetSum) {
  let quadruplets = []
  let hash = {}

  for (let i = 1; i < array.length - 1; i++) {
    let current = array[i]

    for (let j = i + 1; j < array.length; j++) {
      let key = targetSum - (current + array[j])
      let pairs = hash[key]
      if (pairs) {
        pairs.map(v => quadruplets.push([ ...v, current, array[j] ]) )
      }
    }

    for (let j = 0; j < i; j++) {
      let key = current + array[j]
      if (!hash[key]) {
        hash[key] = [[array[j], current]]

      } else {
        hash[key].push([current, array[j]])
      }
    }
  }
  return quadruplets
}
