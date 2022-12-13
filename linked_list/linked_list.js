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

console.log(list.getZise());
console.log(list.isEmpty());

list.append(10);
list.append(30);
list.append(40);

console.log(list.remove(2));

list.print();
