// O(n) Time | O(n) Space where is the length of the array
const HOME_TEAM_WON = 1

function tournamentWinner(competitions, results) {
  let currentBestTeam = ''
  let scores = {[currentBestTeam]: 0}

  for (let i = 0; i < results.length; i++) {

    let result = results[i]
    let [homeTeam, awayTeam] = competitions[i]
    let winingTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam

    scores[winingTeam] = scores[winingTeam] + 3 || 3

    if (scores[winingTeam] > scores[currentBestTeam]) {
      currentBestTeam = winingTeam
    }
  }

  return currentBestTeam;
}

module.exports = tournamentWinner;
