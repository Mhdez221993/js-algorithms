class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.size++;
  }

  // O(1)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;

    return value;
  }

  removeFromBack() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.tail.value;

    if (this.size === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;
    return value;
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

  printReverse() {
    if (this.isEmpty()) {
      console.log("List is empty!");
    } else {
      let nodeData = "";
      let curr = this.tail;
      while (curr) {
        nodeData += curr.value + " ";
        curr = curr.prev;
      }

      console.log(nodeData);
    }
  }
}

const list = new DoubleLinkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);

list.print();
list.printReverse();
