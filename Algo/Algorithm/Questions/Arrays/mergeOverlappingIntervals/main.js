function mergeOverlappingIntervals(array) {
  array = array.sort(([a],[b]) => a - b)
  let merge = [];
  let currFirst = undefined;
  let currSecond = undefined;
  let [lastFirst, lastSecond] = array[array.length -1]
  for(let i = 0; i < array.length - 1; i++) {
    let [first, second] = array[i];
    let [firstNext, secondNext] = array[i+1];

    first = currFirst ? currFirst : first
    second = currSecond ? currSecond : second
    if (second < firstNext) {
      merge.push([first, second])
      currFirst = undefined
      currSecond = undefined
    } else if (second > secondNext) {
      currSecond = second
    } else {
      currFirst = first
    }
  }

  lastFirst = currFirst ? currFirst : lastFirst
  // lastSecond = currSecond ? currSecond : lastFirst
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
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10]
]

console.log(mergeOverlappingIntervals(array));

// module.exports = mergeOverlappingIntervals;
