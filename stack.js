class Stack {
  constructor(items = []) {
    this.items = items;
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.size());
console.log(stack.isEmpty());
