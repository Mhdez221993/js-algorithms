// O(n) Time | O(n) Space
function minRewards(scores) {
   let rewards = new Array(scores.length).fill(1)

   for(let i = 1; i < scores.length; i++) {
      let j = i - 1
      if (scores[i] > scores[i - 1]) {
         rewards[i] = rewards[i - 1] + 1

      } else {
         while (j >= 0 && scores[j] > scores[j + 1]) {
            rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1)
            j--
         }
      }
   }
   return rewards.reduce((acc, curr) => acc + curr)
}

let scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]
console.log(minRewards(scores));
