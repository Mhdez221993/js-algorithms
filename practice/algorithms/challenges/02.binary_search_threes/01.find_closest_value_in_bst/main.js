// Average: O(log(n)) time | O(1) space - where n is the number of nodes in the BST
// Worst: O(n) time | O(1) space - where n is the number of nodes in the BST

function findClosestValueInBstHelper(tree, target, closest) {
  if (!tree) {
    return closest
  }

  if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
    closest = tree.value
  }

  if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest)
  } else if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest)
  } else {
    return closest
  }
}

function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value)
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
