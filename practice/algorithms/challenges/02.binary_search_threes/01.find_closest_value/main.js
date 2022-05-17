// Average: O(log(n)) time | O(1) space - where n is the number of nodes in the BST
// Worst: O(n) time | O(1) space - where n is the number of nodes in the BST

function findClosestValueInBst(tree, target) {

  let currNode = tree
  let closest = tree.value
  while (currNode) {

    if (Math.abs(currNode.value - target) < Math.abs(closest - target)) {
      closest = currNode.value
    }

    if (target > currNode.value) {
      currNode = currNode.right
    } else if (target < currNode.value) {
      currNode = currNode.left
    } else {
      break
    }
  }

  return closest
}


class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
