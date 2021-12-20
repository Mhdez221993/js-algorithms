// Average: O(n^2) time | O(n^2) space - where n is the length of the input array
// Worst: O(n^3) time | O(n^2) space - where n is the length of the input array
function fourNumberSum(array, targetSum) {
  const quadruplets = [];
  const hash = {};

  for (let i = 1; i < array.length - 1; i += 1) {
    const current = array[i];

    for (let j = i + 1; j < array.length; j += 1) {
      const key = targetSum - (current + array[j]);
      const pairs = hash[key];
      if (pairs) {
        pairs.map(v => quadruplets.push([...v, current, array[j]]));
      }
    }

    for (let j = 0; j < i; j += 1) {
      const key = current + array[j];
      if (!hash[key]) {
        hash[key] = [[array[j], current]];
      } else {
        hash[key].push([current, array[j]]);
      }
    }
  }
  return quadruplets;
}
