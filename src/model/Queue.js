export default class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(data) {
    if (this.length !== this.l) {
      this.items[this.tail] = data;
      this.tail += 1;
    }
  }

  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head += 1;
    return item;
  }

  peek() {
    return this.items[this.head];
  }

  get length() {
    return this.tail - this.head;
  }

  get isEmpty() {
    return this.length === 0;
  }
}
