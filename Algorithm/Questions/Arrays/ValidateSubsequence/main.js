function isValidSubsequence(array, sequence) {
  // Write your code here.
	let current = 0
	array.map(v => {
		if (v === sequence[current]) {
			current += 1
		}
	})

	if (current === sequence.length) {
		return true
	}

	return false
}

module.exports = isValidSubsequence;
