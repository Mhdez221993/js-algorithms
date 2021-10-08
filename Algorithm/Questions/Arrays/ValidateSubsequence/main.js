function isValidSubsequence(array, sequence) {
  // Write your code here.
  let current = 0;
  array.map(v => {
    if (v === sequence[current]) {
      current += 1;
    }
  });

  return current === sequence.length;
}

// function isValidSubsequence(array, sequence) {
//  // Write your code here.
// 	let arrIdx = 0
// 	let seqIdx = 0

// 	while(arrIdx < array.length && seqIdx < sequence.length) {
// 		if (array[arrIdx] === sequence[seqIdx]) seqIdx += 1
// 		arrIdx += 1
// 	}

// 	return seqIdx === sequence.length
// }

module.exports = isValidSubsequence;
