// O(n) Time | O(n) Space where n is the length of the array
const outOfBounds = (row, col, height, width) => {
  return (row < 0 || row > height) || (col < 0 || col > width)
}

function zigzagTraverse(array) {
  let result = []
  let row = 0
  let col = 0
  let height = array.length - 1
  let width = array[0].length - 1
  let goinDown = true

  while(!outOfBounds(row, col, height, width)) {
    result.push(array[row][col])

    if (goinDown) {
      if (col === 0 || row === height) {
        goinDown = false

        if (row === height) {
          col++
        } else {
          row++
        }

      } else {
        row++
        col--
      }

    } else {

      if (col === width || row === 0) {
        goinDown = true

        if (col === width) {
          row++
        } else {
          col++
        }

      } else {
        row--
        col++
      }
    }
  }

  return result
}

module.exports = zigzagTraverse
