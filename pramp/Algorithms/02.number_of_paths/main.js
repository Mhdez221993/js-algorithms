function numOfPathsToDest(n) {
  let moves = [...Array(n)].map(v => Array(n).fill(0))
  moves[0][0] = 1

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (i - 1 >= j) {
        moves[i][j] = moves[i - 1][j]
      }

      if (j - 1 >= 0) {
        moves[i][j] += moves[i][j - 1]
      }
    }
  }

  return moves[n - 1][n - 1]
}

let n = 4

console.log(numOfPathsToDest(n))
