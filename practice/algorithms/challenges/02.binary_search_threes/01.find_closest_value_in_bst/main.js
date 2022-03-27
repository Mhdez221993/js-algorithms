let closest = Number.MAX_SAFE_INTEGER

function findClosestValueInBst(tree, target) {
  if (tree) {
    let curr = tree.value < target ? (target - tree.value) : (tree.value - target)
    let prev = closest < target ? (target - closest) : (closest - target)
    if (curr < prev) closest = tree.value

    findClosestValueInBst(tree.left, target)
    findClosestValueInBst(tree.right, target)
  }

  return closest
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
