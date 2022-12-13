class CircularQuee {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.front = -1;
    this.back = -1;
    this.capacity = capacity;
    this.currLength = 0;
  }

  isFull() {
    return this.currLength === this.capacity;
  }

  isEmpty() {
    return this.currLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.back = (this.back + 1) % this.capacity;
      this.items[this.back] = element;
      this.currLength += 1;
      if (this.front === -1) {
        this.front = this.back;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currLength -= 1;

    if (this.isEmpty()) {
      this.front = -1;
      this.back = -1;
    }

    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }

  size() {
    return this.currLength;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Que is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.back; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }

      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQuee(5);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.print();

console.log(queue.dequeue());
console.log(queue.peek());

queue.enqueue(6);
queue.print();
