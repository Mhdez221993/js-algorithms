// O(n) time | O(n) space - where n is the length of the input array
function minRewards(scores) {
  const rewards = new Array(scores.length).fill(1);

  for (let i = 1; i < scores.length; i += 1) {
    if (scores[i] > scores[i - 1]) {
      rewards[i] = rewards[i - 1] + 1;
    }
  }

  for (let i = scores.length - 2; i >= 0; i -= 1) {
    if (scores[i] > scores[i + 1]) {
      rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
    }
  }

  return rewards.reduce((acc, curr) => acc + curr);
}
