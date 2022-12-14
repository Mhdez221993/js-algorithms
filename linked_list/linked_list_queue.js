const LinkedList = require("./linked_list_with_tail");

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getZise();
  }

  print() {
    return this.list.print();
  }
}

const queue = new LinkedListQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();

console.log(queue.isEmpty());
console.log(queue.getSize());
console.log(queue.dequeue());

queue.print();

console.log(queue.peek());
