class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value && this.left) {
      this.left.insert(value)
    } else if (value < this.value) {
      this.left = new BST(value)
    }

    if (value > this.value && this.right) {
      this.right.insert(value)
    } else if (value > this.value) {
      this.right = new BST(value)
    }

    return this;
  }

  contains(value) {
    if (this.value === value) return this

    if (value < this.value && this.left) {
      return this.left.contains(value)
    } else if (value > this.value && this.right) {
      return this.right.contains(value)
    } else {
      return null
    }
  }

  remove(value) {
    return this;
  }
}

let bst = new BST(10)
bst.insert(8)
bst.insert(15)
bst.insert(7)
bst.insert(9)
bst.insert(23)
bst.insert(13)

// console.log(bst);
console.log(bst.contains(9));
// bst.remove(10)
// console.log(bst);
