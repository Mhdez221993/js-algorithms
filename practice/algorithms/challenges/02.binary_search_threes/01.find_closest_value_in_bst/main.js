function findClosestValueInBstHelper(tree, target, closest) {
  if (!tree) {
    return closest
  }

  if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
    return findClosestValueInBstHelper(tree.left, target, tree.value)
  }
  return findClosestValueInBstHelper(tree.right, target, closest)

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
