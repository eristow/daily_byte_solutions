class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(e) {
    this.elements.push(e);
  }

  dequeue() {
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length == 0;
  }

  peek() {
    return !this.isEmpty() ? this.elements[0] : undefined;
  }

  length() {
    return this.elements.length;
  }
}

class QueueStack {
  constructor() {
    this.queue = new Queue();
  }

  // Add item to stack
  push(val) {
    this.queue.enqueue(val);
    let size = this.queue.length();

    while (size > 1) {
      this.queue.enqueue(this.queue.dequeue());
      size--;
    }
  }

  // Remove item from stack
  pop() {
    return this.queue.dequeue();
  }

  // Returns top value of stack without removing it
  peek() {
    return !this.queue.isEmpty() ? this.queue.peek() : undefined;
  }

  // Checks if stack is empty or not
  empty() {
    return this.queue.isEmpty();
  }
}

const qs = new QueueStack();
qs.push(1);
qs.push(2);
console.log(qs);
console.log(qs.peek());
console.log(qs.pop());
console.log(qs);
console.log(qs.empty());
