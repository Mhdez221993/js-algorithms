function waterfallStreams(array, source) {
  let prevRow = [...array[0]]
  prevRow[source] = -1

  for (let i = 1; i < array.length; i++) {
    const currRow = [...array[i]]
    for (let j = 0; j < currRow.length; j++) {

      const valueAbove = prevRow[j]
      const hasWatherAbove = valueAbove < 0
      const hasBlock = currRow[j] === 1

      if (!hasWatherAbove) {
        continue
      }

      if (!hasBlock) {
        currRow[j] += valueAbove
        continue
      }

      const splitWater = valueAbove / 2

      let leftIndx = j
      while (leftIndx - 1 >= 0) {
        leftIndx--
        if (prevRow[leftIndx] === 1) {
          break
        }

        if (currRow[leftIndx] !== 1) {
          currRow[leftIndx] += splitWater
          break
        }
      }

      let rightIndx = j
      while (rightIndx + 1 < currRow.length) {
        rightIndx++
        if (prevRow[rightIndx] === 1) {
          break
        }

        if (currRow[rightIndx] !== 1) {
          currRow[rightIndx] += splitWater
          break
        }
      }
    }
    prevRow = currRow
  }
  return prevRow.map(v => v < 0 ? v * -100 : v)
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
