function fourNumberSum(array, targetSum) {
  let quadruplets = []
  let hash = {}

  for (let i = 0; i < array.length; i++) {
    let current = array[i]

    for (let j = i + 1; j < array.length; j++) {
      let key = targetSum - (current + array[j])
      console.log(key, current, array[j]);
      let pairs = hash[key]
      if (pairs) {
        pairs.map(v => {
          let newValue = [...v, current, array[j]]
          quadruplets.push(newValue)
        })
      }
    }

    for (let j = 0; j < i; j++) {
      let key = current + array[j]
      if (!hash[key]) {
        hash[key] = []
        hash[key].push([array[j], current])

      } else {
        hash[key].push([current, array[j]])
      }
    }
  }
  return quadruplets
}
