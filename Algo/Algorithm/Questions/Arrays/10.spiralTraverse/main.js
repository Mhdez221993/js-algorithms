// O(n) Time | O(n) Space
function spiralTraverse(array) {
  const result = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
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

    startRow++;
    startCol++;
    endRow -= 1;
    endCol -= 1;
  }

  return result;
}


// function spiralTraverse(array) {
//   let result = []
//   recursiveSpiral(array, 0, array.length - 1, 0, array[0].length - 1, result)
//   return result
// }

// function recursiveSpiral(array, startRow, endRow, startCol, endCol, result){

//   if(startRow > endRow || startCol > endCol){
//     return
//   }

//   for(let col = startCol; col <= endCol; col++){
//     result.push(array[startRow][col])
//   }

//   for(let row = startRow + 1; row <= endRow; row++){
//     result.push(array[row][endCol])
//   }

//   for(let col = endCol - 1; col >= startCol; col -= 1){
//     if(startRow === endRow) break
//     result.push(array[endRow][col])
//   }

//   for(let row = endRow - 1; row > startRow; row -= 1){
//     if(startCol === endCol) break
//     result.push(array[row][startCol])
//   }

//   recursiveSpiral(array, startRow+1, endRow-1, startCol+1, endCol-1, result)
// }

module.exports = spiralTraverse;
