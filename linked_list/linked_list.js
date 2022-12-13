class Node {
  constructor() {
    this.value = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getZise() {
    return this.size;
  }
}

const list = new LinkedList();

console.log(list.getZise());
console.log(list.isEmpty());
