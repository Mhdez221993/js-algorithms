function waterfallStreams(array, source) {
  let prevRow = [...array[0]]
  prevRow[source] = -1
  // let currRow = array[1]

  for (let i = 1; i < array.length; i++) {
    currRow = array[i]
    for (let j = 0; j < array[i].length; j++) {

      if (prevRow[j] < 0) {
        if (currRow[j] === 0) {
          currRow[j] = prevRow[j]

        } else {
          let l = j - 1
          let r = j + 1
          while (l >= 0 && prevRow[l] !== 1) {
            if (currRow[l] === 0) {
              currRow[l] = (prevRow[j] / 2) + currRow[l]
              break
            }
            l--
          }

          while (r < currRow.length && prevRow[r] !== 1) {
            if (currRow[r] === 0) {
              currRow[r] = (prevRow[j] / 2) + currRow[r]
              break
            }
            r++
          }
        }
      }
    }

    prevRow = currRow
  }

  return currRow.map(v => v < 0 ? v * -1 : v)
}

let test = {
  array: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  source: 8
}

console.log(waterfallStreams(test.array, test.source));
