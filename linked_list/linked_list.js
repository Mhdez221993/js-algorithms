class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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

  // O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // O(n)
  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }

    this.size++;
  }

  // O(n)
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return "Wrong index";
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    let curr = this.head;
    const node = new Node(value);
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    node.next = curr.next;
    curr.next = node;
    this.size++;
  }

  // O(n)
  remove(index) {
    if (index < 0 || index >= this.size) {
      return;
    }

    let removedVal;
    if (index === 0) {
      removedVal = this.head;
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }

      removedVal = curr.next;
      curr.next = removedVal.next;
    }

    this.size++;
    return removedVal.value;
  }

  // O(n)
  removeValue(val) {
    if (this.isEmpty()) {
      return null;
    }

    let removedVal;
    if (this.head.value === val) {
      removedVal = this.head;
      this.head = this.head.next;
      this.size--;
      return val;
    } else {
      let curr = this.head;
      while (curr.next && curr.next.value !== val) {
        curr = curr.next;
      }

      if (curr.next) {
        removedVal = curr.next;
        curr.next = removedVal.next;
        this.size--;
        return val;
      }
    }
    return null;
  }

  // O(n)
  search(val) {
    if (this.isEmpty()) {
      return -1;
    }

    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === val) {
        return i;
      }

      curr = curr.next;
      i++;
    }

    return -1;
  }

  // O(n)
  reverse() {
    if (this.isEmpty()) {
      return null;
    }

    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;

      curr = next;
    }

    this.head = prev;
  }

  // O(n)
  print() {
    if (this.isEmpty()) {
      console.log("List is empty!");
    } else {
      let nodeData = "";
      let curr = this.head;
      while (curr) {
        nodeData += curr.value + " ";
        curr = curr.next;
      }

      console.log(nodeData);
    }
  }
}

const list = new LinkedList();

// console.log(list.getZise());
// console.log(list.isEmpty());

list.append(10);
list.append(30);
list.append(40);
list.print();

list.reverse();
list.print();
