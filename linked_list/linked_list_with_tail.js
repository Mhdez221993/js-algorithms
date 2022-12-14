class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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

    const value = this.head.value;

    if (this.size === 1) {
      this.tail = null;
      this.head = null;
    } else {
      let curr = this.head;
      while (curr.next !== this.tail) {
        curr = curr.next;
      }

      curr.next = null;
      this.tail = curr;
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
}

const list = new LinkedList();

// console.log(list.getZise());
// console.log(list.isEmpty());

list.append(10);
list.append(30);
list.append(40);

list.removeFromBack();

list.print();
