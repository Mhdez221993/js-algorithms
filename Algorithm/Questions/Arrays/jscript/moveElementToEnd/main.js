function moveElementToEnd(array, toMove) {
  let len = array.length
  let i = 0
  while (len >= 0){
    console.log(array[i]);
    if (array[i] === toMove) {
      array.splice(i, 1)
      array.push(toMove)

    } else {
      i++
    }

    len--
  }

  return array
}

let array = [5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12]
let toMove = 5
console.log(moveElementToEnd(array, toMove));
module.exports = moveElementToEnd;

