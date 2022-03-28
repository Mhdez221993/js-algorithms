class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (!this.value) {
      this.value = value
      return this
    }

    let root = this;
    while (root) {
      if (!root.value) {
        root.value = value
      }

      if (value > root.value) {
        root = root.right
      } else if (value < root.value) {
        root = root.left
      }
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
