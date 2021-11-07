function minRewards(scores) {
  let biggest = 1
  let smallest = 1
  let reward = 0

  for (let i = 0; i < scores.length; i++) {
    reward++

    if (scores[i] < scores[i - 1]) {

      if(i === scores.length - 1){
        return reward
      } else {
        reward += smallest
        smallest++
        biggest = 1
      }

    } else if(scores[i] > scores[i - 1]) {
      reward += biggest
      biggest++
      smallest = 1
    }
  }
  return reward
}

let scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]
console.log(minRewards(scores));
