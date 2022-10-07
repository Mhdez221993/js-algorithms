// O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
  let current = 0;
  if (current === sequence.length) {
    return true;
  }

  array.forEach(v => {
    if (v === sequence[current]) {
      current += 1;
    }
  });

  return current === sequence.length;
}
