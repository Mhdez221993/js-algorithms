// O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
  let current = 0;
  array.map(v => {
    if (current === sequence.length) {
      return true;
    }

    if (v === sequence[current]) {
      current += 1;
    }
  });

  return current === sequence.length;
}

module.exports = isValidSubsequence;
