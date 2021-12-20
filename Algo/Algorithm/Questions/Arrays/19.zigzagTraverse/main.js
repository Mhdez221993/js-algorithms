// O(n) Time | O(n) Space where n is the length of the array
function outOfBounds(row, col, height, width) {
  return (row < 0 || row > height) || (col < 0 || col > width);
}
function zigzagTraverse(array) {
  const result = [];
  let row = 0;
  let col = 0;
  const height = array.length - 1;
  const width = array[0].length - 1;
  let goinDown = true;

  while (!outOfBounds(row, col, height, width)) {
    result.push(array[row][col]);

    if (goinDown) {
      if (col === 0 || row === height) {
        goinDown = false;

        if (row === height) {
          col += 1;
        } else {
          row += 1;
        }
      } else {
        row += 1;
        col -= 1;
      }
    } else if (col === width || row === 0) {
      goinDown = true;

      if (col === width) {
        row += 1;
      } else {
        col += 1;
      }
    } else {
      row -= 1;
      col += 1;
    }
  }

  return result;
}
