function minRewards(scores) {
  let currentReward = 0
  let reward = 0

  for(let i = 0; i < scores.length; i++) {
    reward++
    if (scores[i] < scores[i - 1]) {
      let left = i - 1
      while(scores[left] > scores[left + 1]) {
        currentReward++
        left--
      }
    } else {
      currentReward++
      reward += currentReward
    }
  }
  return reward
}

let scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]
console.log(minRewards(scores));
