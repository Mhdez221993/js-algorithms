function subarraySort(array) {
  let lowest = Infinity
  let highest = -Infinity
  for(let i = 0; i < array.length; i++){
    let breakingPoint = array[i] > array[i + 1]

    if (breakingPoint) {
      highest = array[i] > highest ? array[i] : highest
      lowest = array[i + 1] < lowest ? array[i + 1] : lowest
    }
  }

  if (lowest == Infinity) {
    return [-1, -1]
  }

  let foundI = true
  let curr = highest
  array.forEach((element, index) => {
    if (element > lowest && foundI){
      lowest = index
      foundI = false
    }

    if (element < curr) {
      highest = index
    }
  });

  return [lowest, highest]

}

let array = [1, 2, 3, 4, 5, 6, 18, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19]
console.log(subarraySort(array));
// module.exports = subarraySort;