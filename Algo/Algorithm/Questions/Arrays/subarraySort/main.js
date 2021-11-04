function subarraySort(array) {
  let lowest = Infinity
  let highest = -Infinity
  for(let i = 0; i < array.length; i++){
    let breakingPoint = array[i] > array[i + 1]

    if (breakingPoint) {
      highest =Math.max(highest, array[i])
      lowest = Math.min(array[i + 1], lowest)
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

module.exports = subarraySort;