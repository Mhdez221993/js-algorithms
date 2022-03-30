class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertHelper(root, value) {
    if (!root) return root

    if (value > root.value) {
      if (!root.right) {
        root.right = new BST(value)
        return
      } else {
        this.insertHelper(root.right, value)
      }
    } else if (value < root.value) {
      if (!root.left) {
        root.left = new BST(value)
        return
      } else {
        this.insertHelper(root.left, value)
      }
    } else {
      return null
    }

    return root
  }

  insert(value) {
    let root = this
    if (root.value == null) {
      root.value = value
    } else {
      this.insertHelper(root, value)
    }


    return this;
  }

  contains(value) {
    let root = this
    while (root) {
      if (value > root.value) {
        root = root.right
      } else if (value < root.value) {
        root = root.left
      } else {
        return true
      }
    }
  }

  removeHelper(root) {
    if (root.left && root.right) {

    } else if (root.left || root.right) {
      if (root.left) root.left = root
      if (root.right) root.right = root
    } else {
      root.value = null
    }
  }

  remove(value) {
    let root = this
    while (root) {
      if (value > root.value) {
        root = root.right
      } else if (value < root.value) {
        root = root.left
      } else {
        removeHelper(root)
      }
    }
    return this;
  }
}

let arr = [10, 8, 12, 6, 15]
let bst = new BST

arr.forEach(v => bst.insert(v))

console.log(bst);
