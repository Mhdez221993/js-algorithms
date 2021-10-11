function tournamentWinner(competitions, results) {
  // Write your code here.
  let hightest = 0
  let winner = ''
  let hash = {}

  for (let i = 0; i < results.length; i++) {
    let currIdx = results[i] === 1 ? 0 : 1
    let curr = competitions[i][currIdx]

    hash[curr] = hash[curr]+3 || 3

    winner = hash[curr] > hightest ? curr : winner
    hightest = hash[curr] > hightest ? hash[curr] : hightest
  }

  return winner;
}

module.exports = tournamentWinner;

