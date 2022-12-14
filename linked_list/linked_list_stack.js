const LinkedList = require("./linked_list_with_tail");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
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

const stack = new LinkedListStack();

stack.push(5);
stack.push(10);
stack.push(15);

stack.print();

stack.pop();

stack.print();

console.log(stack.peek());
