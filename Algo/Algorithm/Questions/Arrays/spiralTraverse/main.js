function spiralTraverse(array) {
  let result = []
  let startRow = 0
  let endRow = array.length - 1
  let startCol = 0
  let endCol = array[0].length - 1

  while(startRow <= endRow && startCol <= endCol){
    for(let col = startCol; col <= endCol; col++){
      result.push(array[startRow][col])
    }

    for(let row = startRow + 1; row <= endRow; row++){
      result.push(array[row][endCol])
    }

    for(let col = endCol - 1; col >= startCol; col--){
      if(startRow === endRow) break
      result.push(array[endRow][col])
    }

    for(let row = endRow - 1; row > startRow; row--){
      if(startCol === endCol) break
      result.push(array[row][startCol])
    }

    startRow++
    startCol++
    endRow--
    endCol--
  }

  return result
}

module.exports = spiralTraverse;

