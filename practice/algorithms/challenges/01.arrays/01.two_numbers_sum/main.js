// O(nLog(n)) time | O(1) space - where n is the length of the input array
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const current = array[left] + array[right];

    if (current === targetSum) {
      return [array[left], array[right]];
    } if (current > targetSum) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return [];
}
