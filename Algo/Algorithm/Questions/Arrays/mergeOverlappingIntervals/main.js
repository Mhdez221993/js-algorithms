function mergeOverlappingIntervals(array) {
  let merge = [];
  let curr = undefined;
  let [lastFirst, lastSecond] = array[array.length -1]
  for(let i = 0; i < array.length - 1; i++) {
    let [first, second] = array[i];
    let [firstNext, secondNext] = array[i+1];

    first = curr ? curr : first
    if (second < firstNext) {
      merge.push([first, second])
      curr = undefined
    } else {
      curr = first
    }
  }

  lastFirst = curr ? curr : lastFirst
  merge.push([lastFirst, lastSecond])


  return merge;
}

let array = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10]
]

let result = [
  [1, 2],
  [3, 8],
  [9, 10]
]

console.log(mergeOverlappingIntervals(array));

// module.exports = mergeOverlappingIntervals;
