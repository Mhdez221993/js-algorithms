class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value >= this.value) {
      if (!this.right) {
        this.right = new BST(value)
        return
      }
      this.right.insert(value)
    } else if (value < this.value) {
      if (!this.left) {
        this.left = new BST(value)
        return
      }
      this.left.insert(value)
    }
  }
}

function validateBstHelper(tree, root) {
  if (root > tree.value) {
    if (tree.value > root || tree.value < tree.left.value) return false
  } else {

  }
}

function validateBst(tree) {
  if (!tree) return false
  const root = tree.value

  if (tree.left) {
    validateBstHelper(tree, root)
  } else if (tree.right) {
    validateBstHelper(tree, root)
  } else {
    return true
  }

  return true
}


let bst = new BST(10)
bst.insert(5)
// bst.insert(2)
// bst.insert(6)
// // bst.left.right.value = 10
// bst.insert(20)
// bst.insert(13)

// // bst.value = 30

console.log(validateBst(bst));
// console.log(bst);
