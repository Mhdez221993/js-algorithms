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

// O(n^2) time | O(1)

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {

    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == targetSum) {
        return [array[i], array[j]]
      }
    }
  }
  return []
}

let array = [3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10

console.log(twoNumberSum(array, targetSum))

