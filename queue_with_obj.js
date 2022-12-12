class Queue {
  constructor(items = {}) {
    this.items = items;
    this.front = 0;
    this.back = 0;
  }

  enqueue(element) {
    this.items[this.back] = element;
    this.back++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.back - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.back - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(1);
queue.enqueue(10);
queue.enqueue(100);

queue.dequeue();
queue.print();
