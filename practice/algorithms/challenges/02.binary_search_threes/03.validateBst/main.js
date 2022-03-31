class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value > this.value) {
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

function validateBst(tree, root = tree.value) {
  if (tree.left || tree.right) {
    if (tree.left) {
      return tree.left >= tree.value && tree.left ? false : validateBst(tree.left)
    }
    return tree.right && tree.right < tree.value ? false : validateBst(tree.right)
  } else {
    return true
  }
}


let bst = new BST(10)
// bst.insert(5)
// bst.insert(15)

console.log(bst);

console.log(validateBst(bst));