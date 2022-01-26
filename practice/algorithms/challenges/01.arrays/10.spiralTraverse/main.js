// O(n) time | O(n) space - where n is the total number of elements in the array
function spiralTraverse(array) {
  const result = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col += 1) {
      result.push(array[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row += 1) {
      result.push(array[row][endCol]);
    }

    for (let col = endCol - 1; col >= startCol; col -= 1) {
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }

    for (let row = endRow - 1; row > startRow; row -= 1) {
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }

    startRow += 1;
    startCol += 1;
    endRow -= 1;
    endCol -= 1;
  }

  return result;
}
