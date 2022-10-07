// O(n) Time | O(n) Space where is the length of the array
const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
  let currentBestTeam = '';
  const scores = { [currentBestTeam]: 0 };

  for (let i = 0; i < results.length; i += 1) {
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[i];
    const winingTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    scores[winingTeam] = scores[winingTeam] + 3 || 3;

    if (scores[winingTeam] > scores[currentBestTeam]) {
      currentBestTeam = winingTeam;
    }
  }

  return currentBestTeam;
}
