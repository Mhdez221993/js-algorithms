function minRewards(scores) {
  let biggest = 1
  let smallest = 1
  let reward = 0
  let accending = false

  for (let i = 0; i < scores.length; i++) {
    reward++

    if (scores[i] < scores[i - 1]) {
      if (accending) {

        accending = false
        continue
      }
      reward += smallest
      smallest++
      biggest = 1

    } else if(scores[i] > scores[i - 1]) {
      reward += biggest
      biggest++
      smallest = 1
      accending = true
    }
  }
  return reward
}

let scores = [0, 4, 2, 1, 3]
console.log(minRewards(scores));
