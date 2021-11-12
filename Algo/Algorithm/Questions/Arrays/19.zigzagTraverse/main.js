function zigzagTraverse(array) {
  let newArr = []
  let row = 0
  let col = 0
  newArr.push(array[row][col])

  while(row <= array.length - 1 || col <= array.length - 1) {

    if (row < array.length - 1) {
      row++
    } else {
      col++
    }

    while (row >= 0 && col <= array[0].length - 1) {
      newArr.push(array[row][col]);
      row--
      col++
    }
    row++
    col--

    if(col < array[0].length - 1){
      col++
    } else {
      row++
    }

    while (col >= 0 && row < array.length) {
      newArr.push(array[row][col])
      row++
      col--
    }
    row--
    col++

    console.log(row, col);
  }

  return newArr
}
