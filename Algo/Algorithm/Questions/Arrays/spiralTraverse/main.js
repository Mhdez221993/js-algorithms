function spiralTraverse(array) {
  let spiralArray = []
  let startRow = 0
  let startCol = 0
  let endRow = array.length - 1
  let endCol = array[0].length - 1


  while(startRow <= endRow && startCol <= endCol) {

    for(let col = startCol; col <= endCol; col++){
      spiralArray.push(array[startRow][col])
    }

    for(let row = startRow + 1; row <= endRow; row++){

      spiralArray.push(array[row][endCol])
    }

    for(let col = endCol - 1; col >= startCol; col--){

      if(startCol === endRow) break
      spiralArray.push(array[endRow][col])
    }

    for(let row = endRow - 1; row > startRow; row--){

      if(startCol === endCol) break
      spiralArray.push(array[row][startCol])
    }

    startRow++
    endRow--
    startCol++
    endCol--
  }

  return spiralArray
}

let array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
]

console.log(spiralTraverse(array));


// module.exports = spiralTraverse;
