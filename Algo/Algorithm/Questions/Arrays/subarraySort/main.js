function subarraySort(array) {
  let letfIndex = -1
  let rightIndex = -1

  for(let i = 1; i < array.length; i++){
    let breakingPoint = array[i] < array[i - 1]

    if (breakingPoint) {
      let j = i - 1
			letfIndex = i
      while(j >= 0 && array[j] >= array[i] ){
        if (array[j] >= array[i]) {
          letfIndex = j
        }
        j--
      }

      let k = i + 1
      rightIndex = i
			let currentValue = array[i]
      while(k < array.length){
        if(array[k] <= currentValue){
          rightIndex = k
        }
        k++
      }
      return [letfIndex, rightIndex]
    }
  }

  return [letfIndex, rightIndex]
}
