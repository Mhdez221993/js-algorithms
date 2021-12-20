// O(n^2) time | O(n) space - where n is the length of the input array
function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);

  const triples = [];

  for (let i = 0; i < array.length - 1; i += 1) {
    let left = i + 1;
    let right = array.length - 1;

    while (right > left) {
      const currSum = array[i] + array[left] + array[right];

      if (currSum === targetSum) {
        triples.push([array[i], array[left], array[right]]);
        left += 1;
        right -= 1;
      } else if (currSum < targetSum) {
        left += 1;
      } else if (currSum > targetSum) {
        right -= 1;
      }
    }
  }

  return triples;
}
